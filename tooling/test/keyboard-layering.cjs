'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require(process.env.PW || 'playwright-core');
const base = process.argv[2] || 'http://localhost:8766';
const out = process.env.E2E_OUT || '/tmp/typingease-keyboard-layering';
(async () => {
  fs.mkdirSync(out, {recursive:true});
  const browser = await chromium.launch({executablePath:process.env.CHROME, headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  try {
    for (const width of [1440,1024,390]) {
      const context = await browser.newContext({viewport:{width,height:1000}});
      const page = await context.newPage();
      page.setDefaultTimeout(15000);
      const errors=[]; page.on('pageerror',e=>errors.push(e.message));
      await page.goto(`${base}/learn/#en-01-001/2`);
      await page.locator('.key.is-active').waitFor();
      const checkLayers = async () => {
        const result = await page.evaluate(() => {
          const board=document.querySelector('#board .keyboard');
          const hands=board.querySelector('.hands');
          const hz=Number(getComputedStyle(hands).zIndex);
          const caps=[...board.querySelectorAll('.key')];
          const rows=[...board.querySelectorAll('.keyboard-row')];
          return {hz, above:caps.every(e=>(Number(getComputedStyle(e).zIndex)||0)<hz) && rows.every(e=>(Number(getComputedStyle(e).zIndex)||0)<hz), active:board.querySelector('.key.is-active')?.dataset.values, hidden:board.classList.contains('nt-player-hands-hidden')};
        });
        assert.ok(result.above, JSON.stringify(result));
        return result;
      };
      const initial=await checkLayers();
      if (!initial.hidden) await page.waitForFunction(()=>{const c=document.querySelector('.hands canvas');return c && c.width>0 && getComputedStyle(c).visibility==='visible';});
      await page.screenshot({path:`${out}/${width}-before.png`,fullPage:true});
      await page.locator('#player-input').press('x');
      assert.equal((await checkLayers()).active,initial.active,'wrong input preserves target');
      await page.locator('#player-input').press('Backspace');
      await page.locator('#player-input').pressSequentially('jjjj');
      assert.notEqual((await checkLayers()).active,initial.active,'correct input advances target to Space');
      await page.locator('#player-input').press('Space');
      assert.equal((await checkLayers()).active,initial.active,'Space advances target back to J');
      await page.screenshot({path:`${out}/${width}-typed.png`,fullPage:true});
      // Exercise the separate falling-screen stacking context with the same live board.
      await page.evaluate(()=>document.querySelector('#board .keyboard').classList.add('is-falling'));
      await checkLayers();
      assert.deepEqual(errors,[]);
      console.log(`PASS ${width}px: active/wrong/typed/falling layers; WebGL ${initial.hidden?'hidden by responsive preference':'visible'}; no JS errors`);
      await context.close();
    }
  } finally {await browser.close();}
})().catch(e=>{console.error(e.message);process.exitCode=1;});
