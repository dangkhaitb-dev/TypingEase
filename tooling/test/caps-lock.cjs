// Run after npm run build with a preview server. PW/CHROME match the existing e2e runner.
// Caps Lock warning (11ty/client/caps-lock.js): an uppercase letter typed without Shift where the
// target wants that lowercase letter opens the card; CapsLock, a lowercase letter, the close button
// or 2 s close it. The key still scores as one ordinary error and the typing input keeps focus.
const {chromium}=require(process.env.PW || 'playwright-core');
const assert=require('node:assert/strict');
const base=(process.argv[2] || 'http://127.0.0.1:8765').replace(/\/$/,'');
const firstLower=text=>{const i=[...text].findIndex(c=>/^[a-z]$/.test(c));assert.ok(i>=0,'needs a lowercase letter');return i;};
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
 try{
  for(const width of [1440,390]){
   const context=await browser.newContext({viewport:{width,height:900}});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
   const card=page.locator('[data-capslock-warning]');
   const isOpen=()=>card.evaluate(n=>n.classList.contains('is-open'));
   const inside=async()=>{const b=await card.locator('.capslock-card').boundingBox();assert.ok(b&&b.x>=0&&b.y>=0&&b.x+b.width<=width+1,'card inside viewport');};
   const pages=[
    {route:'/hoc/#vi-01-001/1',input:'#player-input',ready:()=>page.waitForFunction(()=>window.TypingEasePlayer?.getState().state==='typing'),text:()=>page.evaluate(()=>window.TypingEasePlayer.getRun().target),errors:()=>page.evaluate(()=>window.TypingEasePlayer.getRun().errors)},
    {route:'/practice/',input:'#free-input',ready:async()=>{await page.locator('#random-text').click();},text:()=>page.locator('#custom-text').inputValue()},
    {route:'/typing-test/',input:'#typing-input',ready:async()=>{},text:()=>page.locator('#test-prompt').textContent()}
   ];
   for(const p of pages){
    await page.goto(base+p.route,{waitUntil:'networkidle',timeout:20000});
    await p.ready();
    await assert.equal(await card.count(),1,p.route+' one warning');assert.equal(await isOpen(),false);
    const text=await p.text();const i=firstLower(text);
    await page.locator(p.input).focus();
    if(i)await page.keyboard.type(text.slice(0,i));
    assert.equal(await isOpen(),false,p.route+' quiet while typing correctly');
    await page.keyboard.press(text[i].toUpperCase());
    assert.equal(await isOpen(),true,p.route+' opens on Caps Lock typo');
    assert.match(await card.locator('.capslock-body').textContent(),/Caps Lock/,p.route);
    if(p.errors)assert.equal(await p.errors(),1,p.route+' one ordinary error');
    assert.equal(await page.evaluate(sel=>document.activeElement===document.querySelector(sel),p.input),true,p.route+' focus stays');
    await inside();
    await page.keyboard.press('CapsLock');
    assert.equal(await isOpen(),false,p.route+' CapsLock closes');
    await page.keyboard.press('Backspace');await page.keyboard.press(text[i].toUpperCase());
    assert.equal(await isOpen(),true);
    await page.keyboard.press('Backspace');await page.keyboard.press(text[i]);
    assert.equal(await isOpen(),false,p.route+' lowercase closes');
    await page.keyboard.press('Backspace');await page.keyboard.press(text[i].toUpperCase());
    await card.locator('.capslock-close').click();
    assert.equal(await isOpen(),false,p.route+' close button');
    assert.equal(await page.evaluate(sel=>document.activeElement===document.querySelector(sel),p.input),true,p.route+' close keeps focus');
    await page.keyboard.press('Backspace');await page.keyboard.press(text[i].toUpperCase());
    await page.waitForFunction(()=>!document.querySelector('[data-capslock-warning]').classList.contains('is-open'),null,{timeout:4000});
    await page.keyboard.press('Backspace');await page.keyboard.press('Shift+'+text[i].toUpperCase());
    assert.equal(await isOpen(),false,p.route+' Shift+letter is not a Caps Lock typo');
    if(process.env.UI_OUT){await page.keyboard.press('Backspace');await page.keyboard.press(text[i].toUpperCase());await page.waitForTimeout(400);await page.screenshot({path:process.env.UI_OUT+'/caps-'+p.route.replace(/[^a-z]/g,'')+'-'+width+'.png'});}
    console.log('PASS Caps Lock warning:',p.route,width);
   }
   assert.deepEqual(errors,[]);await context.close();
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
