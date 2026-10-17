// Build and start preview, then set PW/CHROME as in ui-shell.cjs.
const {chromium}=require(process.env.PW || 'playwright-core');
const assert=require('node:assert/strict');
const base=(process.argv[2] || 'http://127.0.0.1:8765').replace(/\/$/,'');
const out=process.env.UI_OUT;
if(out)require('node:fs').mkdirSync(out,{recursive:true});
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});try{
 for(const width of [1440,390]){
  const c=await b.newContext({viewport:{width,height:1000},reducedMotion:'reduce'});const p=await c.newPage();p.setDefaultTimeout(15000);const errors=[];p.on('pageerror',e=>errors.push(e.message));
  for(const [route,destination] of [['/vi/','/bai-hoc/'],['/','/lessons/']]){
   const res=await p.goto(base+route,{waitUntil:'networkidle',timeout:25000});assert.equal(res.status(),200);
   assert.equal(await p.locator('[data-site-header]').count(),1);
   assert.equal(await p.locator('.hero #kb-preview,.hero #demo-input,#unit-rail').count(),0);
   assert.equal(await p.locator('.product-start-form').count(),1);
   assert.equal(await p.locator('.product-arc-card').count(),7);
   assert.equal(await p.locator('.product-arc-card.has-lifestyle img').count(),7);
   assert.equal(await p.locator('.product-step').count(),4);
   assert.equal(await p.locator('.product-person').count(),6);
   assert.equal(await p.locator('.hero .home-portraits').count(),0);
   assert.equal(await p.locator('.product-arc-controls,[data-arc-pause],[data-arc-next],[data-arc-prev]').count(),0);
   await p.locator('.product-arc-card[aria-current]').focus();await p.keyboard.press('ArrowRight');assert.equal(await p.locator('.product-arc-card[aria-current]').getAttribute('data-arc-index'),'1');
   await p.keyboard.press('ArrowLeft');assert.equal(await p.locator('.product-arc-card[aria-current]').getAttribute('data-arc-index'),'0');
   await p.locator('[data-people-next]').click();assert.ok(await p.locator('.product-people').evaluate(el=>el.scrollLeft)>0);
   await p.locator('[data-people-prev]').click();
   await p.locator('[data-step-next]').click();assert.ok(await p.locator('.product-steps').evaluate(el=>el.scrollLeft)>0);
   await p.locator('[data-step-prev]').click();

   assert.equal(await p.locator('.hero .home-mark,.hero select').count(),0);
   assert.equal(await p.locator('.product-start-form a').getAttribute('href'),destination);
   assert.equal(await p.evaluate(()=>getComputedStyle(document.documentElement).getPropertyValue('--primary-600').trim()),'#157a55');
   for(const button of await p.locator('[data-product-view]').all()){
    await button.click();assert.equal(await button.getAttribute('aria-pressed'),'true');
    assert.equal(await p.locator('.product-preview-link').getAttribute('href'),await button.getAttribute('data-route'));
    await p.waitForFunction(()=>{const i=document.querySelector('.product-preview-image');return i.complete&&i.naturalWidth===1280});
   }
   await p.locator('[data-product-view]').first().click();
   await p.locator('.product-questions summary').first().click();assert.equal(await p.locator('.product-questions details').first().getAttribute('open'),'');
   for(const img of await p.locator('main img:not(.product-arc-card img)').all())await img.scrollIntoViewIfNeeded();
   await p.waitForFunction(()=>[...document.querySelectorAll('main img')].every(i=>i.complete&&i.naturalWidth>0));
   assert.equal(await p.locator('.product-arc-card img').evaluateAll(imgs=>new Set(imgs.map(i=>i.src)).size),7);

   assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,route+' overflow');
   await p.locator('.product-steps').evaluate(el=>el.scrollTo({left:0,behavior:'instant'}));
   await p.locator('.product-people').evaluate(el=>el.scrollTo({left:2*(el.querySelector('.product-person').offsetWidth+18),behavior:'instant'}));
   await p.evaluate(()=>scrollTo({top:0,left:0,behavior:'instant'}));
   const formBox=await p.locator('.product-start-form').boundingBox();assert.ok(formBox.x>=0&&formBox.x+formBox.width<=width+1,'hero form stays inside viewport after scrolling');
   if(out){await p.screenshot({path:out+'/product-'+(route==='/'?'en':'vi')+'-'+width+'.png',fullPage:true});await p.screenshot({path:out+'/hero-'+(route==='/'?'en':'vi')+'-'+width+'.png'});}
   await p.locator('.product-start-form a').click();await p.waitForURL(base+destination);
  }
  assert.deepEqual(errors,[]);console.log('PASS',width,'px: EN/VI shared header, green accent, no hero keyboard, single Get started course navigation, 7 arc cards/4 steps/6 people, carousel controls/reduced motion, four real previews, FAQ, loaded images, no overflow or browser errors');await c.close();
 }
}finally{await b.close()}})().catch(e=>{console.error(e);process.exitCode=1});
