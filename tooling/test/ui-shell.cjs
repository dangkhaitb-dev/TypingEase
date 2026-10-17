// Run after npm run build with a preview server. PW/CHROME match the existing e2e runner.
// Optional UI_OUT saves screenshots; each navigation has a 20-second deadline.
const {chromium}=require(process.env.PW || 'playwright-core');
const assert=require('node:assert/strict');
const fs=require('node:fs');const path=require('node:path');
const base=(process.argv[2] || 'http://127.0.0.1:8765').replace(/\/$/,'');
const out=process.env.UI_OUT;
if(out)fs.mkdirSync(out,{recursive:true});
(async()=>{
 const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
 let count=0;
 for(const file of walk('dist').filter(x=>x.endsWith('.html'))){
  const html=fs.readFileSync(file,'utf8');if(/http-equiv="refresh"/i.test(html))continue;
  if(!/<header/.test(html))continue;
  assert.equal((html.match(/data-site-header/g)||[]).length,1,file+' shared header');
  assert.ok(html.includes('/menu.js'),file+' mobile menu');count++;
 }
 console.log('Static shared-header coverage:',count,'pages');
 const browser=await chromium.launch({executablePath:process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
 try{
  for(const width of [1440,1024,390]){
   const context=await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce'});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
   for(const route of ['/','/vi/','/bai-hoc/','/tien-do/','/hoc/','/kiem-tra-toc-do-go/','/luyen-tu-do/','/luyen-phim-yeu/','/tro-choi/','/privacy/','/fr/','/ar/','/dvorak/learn/']){
    const response=await page.goto(base+route,{waitUntil:'networkidle',timeout:20000});assert.equal(response.status(),200,route);
    const info=await page.evaluate(()=>{const h=document.querySelector('[data-site-header]');return {height:h.getBoundingClientRect().height,overflow:document.documentElement.scrollWidth>innerWidth+1,green:getComputedStyle(document.documentElement).getPropertyValue('--primary-600').trim(),headers:document.querySelectorAll('header.topbar,header.player-topbar').length};});
    assert.equal(info.height,width>900?64:60,route);assert.equal(info.headers,1,route);assert.equal(info.overflow,false,route+' overflow');assert.equal(info.green,'#157a55');
    if(width===390){await page.locator('.menu-toggle').click();assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'true');await page.keyboard.press('Escape');assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');if(route==='/hoc/')assert.equal(await page.evaluate(()=>window.TypingEasePlayer.getState().state),'typing','Escape closes navigation without pausing');}
    if(out&&width!==1024&&['/vi/','/hoc/','/'].includes(route))await page.screenshot({path:out+'/final-'+(route.replaceAll('/','')||'home')+'-'+width+'.png',fullPage:true});
   }
   assert.deepEqual(errors,[]);console.log('PASS header, navigation, green accent, overflow:',width,'px / 13 routes');
   await page.goto(base+'/hoc/#vi-01-001/1',{waitUntil:'networkidle'});
   await page.waitForFunction(()=>window.TypingEasePlayer?.getState().state==='typing');
   const target=await page.evaluate(()=>window.TypingEasePlayer.getRun().target);
   await page.locator('#player-input').focus();await page.keyboard.type(target.slice(0,4));
   const run=await page.evaluate(()=>window.TypingEasePlayer.getRun());assert.equal(run.typed,4);assert.equal(run.errors,0);
   await page.locator('#pt-sound').click();assert.equal(await page.locator('#pt-sound').getAttribute('aria-pressed'),'true');
   await page.locator('#pt-hands').click();assert.equal(await page.locator('#pt-hands').getAttribute('aria-pressed'),'false');
   console.log('PASS current lesson typing and toolbar controls:',width);await context.close();
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
