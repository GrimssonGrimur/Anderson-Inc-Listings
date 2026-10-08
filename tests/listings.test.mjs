import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { normalize, filterListings, fetchAirtable } from '../src/lib/listings.mjs';
const raw=JSON.parse(readFileSync(new URL('../src/data/listings.json',import.meta.url)));
const listings=raw.map(normalize);
test('15 unique, valid listings',()=>{assert.equal(listings.length,15);assert.equal(new Set(listings.map(p=>p.id)).size,15)});
test('search and filters combine; boundaries inclusive',()=>{
 assert.equal(filterListings(listings,{query:'  COASTAL san diego ',location:'San Diego',min:895000,max:895000}).length,1);
 assert.equal(filterListings(listings,{query:'no such home'}).length,0);
 assert.equal(filterListings(listings,{min:900000,max:800000}).length,0);
 assert.equal(filterListings(listings,{location:'Pasadena'}).length,3);
});
test('malformed data fails instead of showing invented prices',()=>assert.throws(()=>normalize({...raw[0],Price:undefined})));
test('unsafe image URL rejected',()=>assert.equal(normalize({...raw[0],'Image URL':'javascript:alert(1)'}).image,''));
test('Airtable pagination and credentials stay in server request',async()=>{
 let count=0;
 const result=await fetchAirtable({AIRTABLE_TOKEN:'fake-test-token',AIRTABLE_BASE_ID:'appTest',AIRTABLE_TABLE_NAME:'Listings'},async(url,options)=>{
  assert.equal(options.headers.Authorization,'Bearer fake-test-token');
  if(count++)assert.equal(url.searchParams.get('offset'),'page2');
  return Response.json({records:[{id:`rec${count}`,fields:raw[count-1]}],...(count===1?{offset:'page2'}:{})});
 });assert.equal(result.length,2);assert.equal(count,2);
});
test('Airtable failures propagate, with no mock fallback',async()=>{
 await assert.rejects(fetchAirtable({AIRTABLE_TOKEN:'fake',AIRTABLE_BASE_ID:'appTest',AIRTABLE_TABLE_NAME:'Listings'},async()=>new Response('',{status:429})));
 await assert.rejects(fetchAirtable({}));
});
