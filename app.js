let D;const app=document.getElementById('app');const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const enc=encodeURIComponent,img=e=>e.artwork?`${D.artwork_dir}/${e.artwork}`:'';
function home(){const ks=Object.keys(D.groups);const f=ks.filter(k=>/Fusion/.test(k)),t=ks.filter(k=>!/Fusion/.test(k));const c=k=>`<a class="card" href="#/g/${enc(k)}"><b>${esc(k)}</b><br>${D.groups[k].length} elements</a>`;app.innerHTML=`<h2>Fusions</h2><div class="grid">${f.map(c).join('')}</div><h2>Tiers</h2><div class="grid">${t.map(c).join('')}</div>`}
function group(k){const L=D.groups[k]||[];app.innerHTML=`<a class="back" href="#/">← Home</a><h2>${esc(k)}</h2><div class="grid">${L.map((e,i)=>`<a class="card" href="#/e/${enc(k)}/${i}"><img loading="lazy" src="${img(e)}" alt=""><br>${esc(e.name)}</a>`).join('')}</div>`}
function el(k,i){const e=(D.groups[k]||[])[i];if(!e)return home();const chips=e.tags.map(t=>`<span class="chip">${esc(t)}${t==='Has Weapon'&&e.weapon?` (${esc(e.weapon)})`:''}</span>`).join('');
const ab=e.abilities&&e.abilities.length?`<h3>Abilities</h3><ol>${e.abilities.map(a=>`<li value="${a.n}"><b>${esc(a.name)}</b> — ${esc(a.description)}</li>`).join('')}</ol>`:'';
const th=e.themes?`<h3>Themes</h3><p>${esc(Array.isArray(e.themes)?e.themes.join(', '):e.themes)}</p>`:'';
app.innerHTML=`<a class="back" href="#/g/${enc(k)}">← ${esc(k)}</a><h2>${esc(e.name)}</h2><img class="art" src="${img(e)}" alt="${esc(e.name)}"><p>${chips}</p>${th}${ab}`;scrollTo(0,0)}
function route(){const p=location.hash.replace(/^#\/?/,'').split('/').map(decodeURIComponent);if(p[0]==='g')group(p[1]);else if(p[0]==='e')el(p[1],+p[2]);else home()}
fetch('grimoire_data.json').then(r=>r.json()).then(j=>{D=j;addEventListener('hashchange',route);route()});
