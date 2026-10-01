import { filterListings } from './listings.mjs';
const $ = id => document.getElementById(id);
const app = $('listings-app');
let listings = [], loaded = false, pending = false, timer, source;
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const node = (tag, text, cls) => { const el=document.createElement(tag); if(text) el.textContent=text; if(cls) el.className=cls; return el; };
function render() {
 const min=$('min').value, max=$('max').value;
 const invalid = (min!=='' && Number(min)<0) || (max!=='' && Number(max)<0) || (min!=='' && max!=='' && Number(min)>Number(max));
 $('range-error').hidden=!invalid;
 if (invalid) $('range-error').textContent='Enter a valid price range: prices cannot be negative, and minimum cannot exceed maximum.';
 const matches=invalid?[]:filterListings(listings,{query:$('query').value,location:$('location').value,min,max});
 $('count').textContent=loaded ? `${matches.length} ${matches.length===1?'home':'homes'} found` : 'Listings unavailable';
 $('empty').hidden=!loaded || matches.length>0 || invalid;
 const frag=document.createDocumentFragment();
 for (const p of matches) {
  const card=node('article'), photo=node('div','Photo unavailable','photo');
  if(p.image){const img=node('img');img.src=p.image;img.alt=`${p.title} — property exterior`;img.loading='lazy';img.addEventListener('error',()=>img.remove(),{once:true});photo.append(img);}
  photo.append(node('span','For sale','badge'));card.append(photo);
  const details=node('div',null,'details');details.append(node('p',money.format(p.price),'price'),node('h2',p.title),node('p',`${p.address}, ${p.location}, ${p.state}`,'address'));
  const facts=node('div',null,'facts');for(const s of [`${p.bedrooms} beds`,`${p.bathrooms} baths`,`${p.sqft.toLocaleString('en-US')} sq ft`])facts.append(node('span',s));details.append(facts);card.append(details);frag.append(card);
 }
 $('cards').replaceChildren(frag);
}
function locations() {
 const previous=$('location').value, names=[...new Set(listings.map(p=>p.location))].sort();
 if(previous&&!names.includes(previous))names.push(previous);
 $('location').replaceChildren(new Option('All locations',''),...names.map(n=>new Option(n,n)));
 $('location').value=previous;
}
async function refresh() {
 clearTimeout(timer);if(pending || document.hidden)return;pending=true;
 try {
  const res=await fetch(app.dataset.endpoint,{cache:'no-store',signal:AbortSignal.timeout(15000)});
  if(!res.ok)throw new Error();const data=await res.json();if(!Array.isArray(data.listings))throw new Error();
  const changed=!loaded || JSON.stringify(listings)!==JSON.stringify(data.listings);
  listings=data.listings;source=data.source;loaded=true;$('error').hidden=true;
  $('sync').textContent=source==='mock'?'Sample listings · demo photos':'Updates automatically every 30 seconds';
  if(changed || $('cards').getAttribute('aria-busy')==='true'){locations();render();}
 }catch{
  $('error').hidden=false;$('error-text').textContent=loaded?'We couldn’t refresh listings. Showing the last available results.':'We couldn’t load listings. Please try again.';
  $('sync').textContent='Connection interrupted';if(!loaded)render();
 }finally{pending=false;$('cards').setAttribute('aria-busy','false');timer=setTimeout(refresh,30000);}
}
$('filters').addEventListener('submit',e=>e.preventDefault());
$('filters').addEventListener('input',render);
$('filters').addEventListener('reset',()=>setTimeout(render,0));
$('clear-empty').addEventListener('click',()=>$('filters').reset());
$('retry').addEventListener('click',refresh);
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearTimeout(timer);else refresh();});
refresh();
