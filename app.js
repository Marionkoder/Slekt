'use strict';
const LOCAL_MODE = true;
const EXAMPLE_DATA = [{"id": "ex01", "given": "Anders", "family": "Haugen", "sex": "m", "birthYear": 1838, "deathYear": 1909, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Voss", "lat": 60.6871, "lon": 6.4694}, "deathPlace": {"name": "Bergen", "lat": 60.391, "lon": 5.3245}, "moves": [{"year": 1865, "place": {"name": "Bergen", "lat": 60.391, "lon": 5.3245}}], "fatherId": null, "motherId": null, "partners": [{"id": "ex02", "year": 1864}], "notes": "Eksempelperson. Snekker, flyttet fra gården på Voss til Bergen.", "created": 1760000000000, "ex": true}, {"id": "ex02", "given": "Marit", "family": "Vangen", "sex": "f", "birthYear": 1842, "deathYear": 1921, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Ulvik", "lat": 60.6098, "lon": 7.1825}, "deathPlace": {"name": "Bergen", "lat": 60.391, "lon": 5.3245}, "moves": [{"year": 1864, "place": {"name": "Voss", "lat": 60.6871, "lon": 6.4694}}, {"year": 1865, "place": {"name": "Bergen", "lat": 60.391, "lon": 5.3245}}], "fatherId": null, "motherId": null, "partners": [], "notes": "", "created": 1760000000001, "ex": true}, {"id": "ex03", "given": "Johan", "family": "Haugen", "sex": "m", "birthYear": 1866, "deathYear": 1944, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Voss", "lat": 60.6871, "lon": 6.4694}, "deathPlace": {"name": "Minneapolis", "lat": 44.98, "lon": -93.252}, "moves": [{"year": 1885, "place": {"name": "Bergen", "lat": 60.391, "lon": 5.3245}}, {"year": 1892, "place": {"name": "Minneapolis", "lat": 44.98, "lon": -93.252}}], "fatherId": "ex01", "motherId": "ex02", "partners": [{"id": "ex05", "year": 1895}], "notes": "Reiste til Amerika i 1892 og arbeidet i møllene i Minneapolis.", "created": 1760000000002, "ex": true}, {"id": "ex04", "given": "Ingeborg", "family": "Haugen", "sex": "f", "birthYear": 1870, "deathYear": 1955, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Voss", "lat": 60.6871, "lon": 6.4694}, "deathPlace": {"name": "Oslo", "lat": 59.9167, "lon": 10.75}, "moves": [{"year": 1889, "place": {"name": "Bergen", "lat": 60.391, "lon": 5.3245}}, {"year": 1896, "place": {"name": "Oslo", "lat": 59.9167, "lon": 10.75}}], "fatherId": "ex01", "motherId": "ex02", "partners": [{"id": "ex06", "year": 1896}], "notes": "", "created": 1760000000003, "ex": true}, {"id": "ex05", "given": "Karen", "family": "Berg", "sex": "f", "birthYear": 1872, "deathYear": 1950, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Hamar", "lat": 60.82, "lon": 11.069}, "deathPlace": {"name": "Minneapolis", "lat": 44.98, "lon": -93.252}, "moves": [{"year": 1891, "place": {"name": "Minneapolis", "lat": 44.98, "lon": -93.252}}], "fatherId": null, "motherId": null, "partners": [], "notes": "", "created": 1760000000004, "ex": true}, {"id": "ex06", "given": "Ole", "family": "Moen", "sex": "m", "birthYear": 1868, "deathYear": 1938, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Lom", "lat": 61.7138, "lon": 8.4791}, "deathPlace": {"name": "Oslo", "lat": 59.9167, "lon": 10.75}, "moves": [{"year": 1890, "place": {"name": "Oslo", "lat": 59.9167, "lon": 10.75}}], "fatherId": null, "motherId": null, "partners": [], "notes": "", "created": 1760000000005, "ex": true}, {"id": "ex07", "given": "Olav", "family": "Haugen", "sex": "m", "birthYear": 1874, "deathYear": 1961, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Bergen", "lat": 60.391, "lon": 5.3245}, "deathPlace": {"name": "Stavanger", "lat": 58.97, "lon": 5.68}, "moves": [{"year": 1899, "place": {"name": "Stavanger", "lat": 58.97, "lon": 5.68}}], "fatherId": "ex01", "motherId": "ex02", "partners": [], "notes": "", "created": 1760000000006, "ex": true}, {"id": "ex08", "given": "Harald", "family": "Haugen", "sex": "m", "birthYear": 1896, "deathYear": 1974, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Minneapolis", "lat": 44.98, "lon": -93.252}, "deathPlace": {"name": "Seattle", "lat": 47.57, "lon": -122.34}, "moves": [{"year": 1920, "place": {"name": "Seattle", "lat": 47.57, "lon": -122.34}}], "fatherId": "ex03", "motherId": "ex05", "partners": [], "notes": "", "created": 1760000000007, "ex": true}, {"id": "ex09", "given": "Alma", "family": "Haugen", "sex": "f", "birthYear": 1899, "deathYear": 1988, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Minneapolis", "lat": 44.98, "lon": -93.252}, "deathPlace": {"name": "Chicago", "lat": 41.83, "lon": -87.75}, "moves": [{"year": 1925, "place": {"name": "Chicago", "lat": 41.83, "lon": -87.75}}], "fatherId": "ex03", "motherId": "ex05", "partners": [], "notes": "", "created": 1760000000008, "ex": true}, {"id": "ex10", "given": "Sigrid", "family": "Moen", "sex": "f", "birthYear": 1898, "deathYear": 1992, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Oslo", "lat": 59.9167, "lon": 10.75}, "deathPlace": {"name": "Trondheim", "lat": 63.417, "lon": 10.417}, "moves": [{"year": 1923, "place": {"name": "Trondheim", "lat": 63.417, "lon": 10.417}}], "fatherId": "ex06", "motherId": "ex04", "partners": [{"id": "ex12", "year": 1922}], "notes": "", "created": 1760000000009, "ex": true}, {"id": "ex11", "given": "Einar", "family": "Moen", "sex": "m", "birthYear": 1902, "deathYear": 1969, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Oslo", "lat": 59.9167, "lon": 10.75}, "deathPlace": {"name": "Tromsø", "lat": 69.6351, "lon": 18.992}, "moves": [{"year": 1928, "place": {"name": "Tromsø", "lat": 69.6351, "lon": 18.992}}], "fatherId": "ex06", "motherId": "ex04", "partners": [], "notes": "", "created": 1760000000010, "ex": true}, {"id": "ex12", "given": "Leif", "family": "Dahl", "sex": "m", "birthYear": 1894, "deathYear": 1960, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Trondheim", "lat": 63.417, "lon": 10.417}, "deathPlace": {"name": "Trondheim", "lat": 63.417, "lon": 10.417}, "moves": [], "fatherId": null, "motherId": null, "partners": [], "notes": "", "created": 1760000000011, "ex": true}, {"id": "ex13", "given": "Tor", "family": "Dahl", "sex": "m", "birthYear": 1925, "deathYear": 2010, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Trondheim", "lat": 63.417, "lon": 10.417}, "deathPlace": {"name": "Oslo", "lat": 59.9167, "lon": 10.75}, "moves": [{"year": 1950, "place": {"name": "Oslo", "lat": 59.9167, "lon": 10.75}}], "fatherId": "ex12", "motherId": "ex10", "partners": [], "notes": "", "created": 1760000000012, "ex": true}, {"id": "ex14", "given": "Mari", "family": "Dahl", "sex": "f", "birthYear": 1958, "deathYear": null, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Oslo", "lat": 59.9167, "lon": 10.75}, "deathPlace": null, "moves": [{"year": 1982, "place": {"name": "Bergen", "lat": 60.391, "lon": 5.3245}}, {"year": 2003, "place": {"name": "Tromsø", "lat": 69.6351, "lon": 18.992}}], "fatherId": "ex13", "motherId": null, "partners": [], "notes": "", "created": 1760000000013, "ex": true}, {"id": "ex15", "given": "Nora", "family": "Dahl", "sex": "f", "birthYear": 1990, "deathYear": null, "birthDate": "", "deathDate": "", "birthPlace": {"name": "Bergen", "lat": 60.391, "lon": 5.3245}, "deathPlace": null, "moves": [{"year": 2012, "place": {"name": "Oslo", "lat": 59.9167, "lon": 10.75}}, {"year": 2018, "place": {"name": "Berlin", "lat": 52.522, "lon": 13.402}}], "fatherId": null, "motherId": "ex14", "partners": [], "notes": "", "created": 1760000000014, "ex": true}];
/* ====== Hjelpere ====== */
const NOW_YEAR = new Date().getFullYear();
const SVGNS = 'http://www.w3.org/2000/svg';
const SVGT = new Set(['svg','g','path','circle','rect','line','polyline','polygon','text','tspan','defs','clipPath','image','foreignObject','use']);

function addKids(e, kids){
  for (const k of kids){
    if (k == null || k === false) continue;
    if (Array.isArray(k)) addKids(e, k);
    else if (k instanceof Node) e.appendChild(k);
    else e.appendChild(document.createTextNode(String(k)));
  }
}
function h(tag, attrs, ...kids){
  const svg = SVGT.has(tag);
  const e = svg ? document.createElementNS(SVGNS, tag) : document.createElement(tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)){
    if (v == null || v === false) continue;
    if (k.startsWith('on') && typeof v === 'function') e.addEventListener(k.slice(2), v);
    else if (k === 'class') e.setAttribute('class', v);
    else if (k === 'style' && typeof v === 'object') { for (const [sk, sv] of Object.entries(v)) { if (sk.startsWith('--')) e.style.setProperty(sk, sv); else e.style[sk] = sv; } }
    else if (!svg && k in e && k !== 'list' && k !== 'form') { try { e[k] = v; } catch (_) { e.setAttribute(k, v); } }
    else e.setAttribute(k, v === true ? '' : v);
  }
  addKids(e, kids);
  return e;
}
const $ = (s, r = document) => r.querySelector(s);
const clear = el => { while (el.firstChild) el.removeChild(el.firstChild); return el; };

const ICONS = {
  users:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9" r="2.4"/><path d="M17 14.2c2.4.3 4 2.2 4 5"/>',
  tree:'<rect x="9" y="3" width="6" height="4.5" rx="1"/><rect x="3" y="16.5" width="6" height="4.5" rx="1"/><rect x="15" y="16.5" width="6" height="4.5" rx="1"/><path d="M12 7.5V12M6 16.5V12h12v4.5"/>',
  pin:'<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="m3 17 5-4.5 4 3.5 3-2.5 6 5"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>', plus:'<path d="M12 5v14M5 12h14"/>', minus:'<path d="M5 12h14"/>',
  play:'<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>',
  pause:'<path d="M8.5 5v14M15.5 5v14" stroke-width="3"/>',
  replay:'<path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5M4.5 4v4.8h4.8"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  pencil:'<path d="M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19z"/>',
  back:'<path d="M15 5l-7 7 7 7"/>', next:'<path d="M9 5l7 7-7 7"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  book:'<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3M9 7h6"/>',
  rotr:'<path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5"/>',
  rotl:'<path d="M4 12a8 8 0 1 0 2.6-5.9M4 4v5h5"/>',
  crop:'<path d="M6 2v14a2 2 0 0 0 2 2h14M2 6h14a2 2 0 0 1 2 2v14"/>',
  fit:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.3"/>',
  trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  upload:'<path d="M12 16V4M7 9l5-5 5 5M4 17v3h16v-3"/>',
  crosshair:'<circle cx="12" cy="12" r="7"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>',
  eye:'<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/>'
};
function ico(name, s = 20){
  const w = document.createElement('span');
  w.className = 'ico';
  w.innerHTML = '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + '</svg>';
  return w;
}

const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/æ/g, 'ae').replace(/ø/g, 'o').replace(/å/g, 'a').replace(/aa/g, 'a').trim();
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const clone = o => JSON.parse(JSON.stringify(o));
const intOrNull = v => { const n = parseInt(v, 10); return Number.isFinite(n) ? n : null; };
const fullName = p => [p.given, p.patronym, p.family].filter(Boolean).join(' ') || 'Uten navn';
const initials = p => ((p.given || '?')[0] + (p.family ? p.family[0] : '')).toUpperCase();
const nameCmp = (a, b) => (a.family || '').localeCompare(b.family || '', 'nb') || (a.given || '').localeCompare(b.given || '', 'nb');
const isDead = p => p.deathYear != null || !!p.deceased || !!(p.deathDate && p.deathDate.trim());
function lifeSpan(p){
  const b = p.birthYear, d = p.deathYear;
  if (d == null && isDead(p)) return b != null ? b + ' – død' : 'død, årstall ukjent';
  if (b == null && d == null) return 'årstall ukjent';
  if (d == null) return (b != null ? b : '?') + (NOW_YEAR - (b || 0) > 105 ? ' –' : ' –');
  return (b != null ? b : '?') + ' – ' + d;
}
function ageText(p){
  if (p.birthYear != null && p.deathYear != null) return (p.deathYear - p.birthYear) + ' år';
  if (p.birthYear != null && p.deathYear == null && !isDead(p) && NOW_YEAR - p.birthYear <= 105) return NOW_YEAR - p.birthYear + ' år';
  return '';
}
const plural = (n, one, many) => n + ' ' + (n === 1 ? one : many);

function toast(msg){
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const t = h('div', { class: 'toast', role: 'status' }, msg);
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3800);
}

/* ====== Modal ====== */
const modalStack = [];
function openModal(title, body, opts = {}){
  const back = h('div', { class: 'modal-back' });
  const closeBtn = h('button', { class: 'icon-btn', 'aria-label': 'Lukk', onclick: () => close() }, ico('x'));
  const dlg = h('div', { class: 'modal ' + (opts.cls || ''), role: 'dialog', 'aria-modal': 'true', 'aria-label': title },
    h('div', { class: 'modal-h' }, h('h2', null, title), closeBtn),
    body);
  back.appendChild(dlg);
  const prevFocus = document.activeElement;
  const onKey = e => { if (e.key === 'Escape' && modalStack[modalStack.length - 1] === api) { e.stopPropagation(); close(); } };
  let closed = false;
  function close(){
    if (closed) return; closed = true;
    document.removeEventListener('keydown', onKey, true);
    back.remove();
    const i = modalStack.indexOf(api); if (i >= 0) modalStack.splice(i, 1);
    if (!modalStack.length) document.documentElement.style.overflow = '';
    if (opts.onClose) opts.onClose();
    try { prevFocus && prevFocus.focus && prevFocus.focus(); } catch (_) {}
  }
  back.addEventListener('mousedown', e => { if (e.target === back) close(); });
  document.addEventListener('keydown', onKey, true);
  const api = { close, el: dlg, back };
  modalStack.push(api);
  document.documentElement.style.overflow = 'hidden';
  document.body.appendChild(back);
  const f = dlg.querySelector('[autofocus]'); if (f) setTimeout(() => f.focus(), 30);
  return api;
}

/* ====== Autocomplete ====== */
function autocomplete(input, getItems, onPick){
  const list = h('ul', { class: 'ac', role: 'listbox', hidden: true });
  input.parentElement.appendChild(list);
  let items = [], sel = -1;
  const hide = () => { list.hidden = true; sel = -1; };
  function show(){
    items = getItems(input.value) || [];
    clear(list);
    if (!items.length) return hide();
    items.forEach((it, i) => {
      const li = h('li', { role: 'option', 'aria-selected': i === sel ? 'true' : 'false' }, h('span', null, it.label), it.sub ? h('small', null, it.sub) : null);
      li.addEventListener('mousedown', e => { e.preventDefault(); pick(i); });
      list.appendChild(li);
    });
    list.hidden = false;
  }
  function pick(i){ const it = items[i]; hide(); if (it) onPick(it); }
  input.addEventListener('input', show);
  input.addEventListener('focus', () => { if (input.value) show(); });
  input.addEventListener('blur', () => setTimeout(hide, 120));
  input.addEventListener('keydown', e => {
    if (list.hidden) return;
    if (e.key === 'ArrowDown'){ e.preventDefault(); sel = Math.min(items.length - 1, sel + 1); }
    else if (e.key === 'ArrowUp'){ e.preventDefault(); sel = Math.max(0, sel - 1); }
    else if (e.key === 'Enter' && sel >= 0){ e.preventDefault(); pick(sel); return; }
    else if (e.key === 'Escape'){ hide(); return; }
    else return;
    [...list.children].forEach((li, i) => li.setAttribute('aria-selected', i === sel ? 'true' : 'false'));
  });
}

/* ====== Stedsregister ====== */
const GAZ = (() => {
  let arr = null;
  return () => {
    if (arr) return arr;
    arr = window.__D.gaz.map(r => ({ name: r[0], sub: r[1], lat: r[2], lon: r[3], kom: r[4] === 1, hist: r[4] === 2, now: r[5] || '', n: norm(r[0]) }));
    return arr;
  };
})();
/* Steder som allerede er brukt på personer (for gjenbruk, inkl. gårder). */
function usedPlaces(){
  const used = new Map();
  Store.persons.forEach(p => {
    [p.birthPlace, p.deathPlace, p.emigratedTo, ...(p.moves || []).map(m => m.place)].forEach(x => {
      if (x && x.lat != null && x.name) used.set(x.name + '|' + x.lat.toFixed(3) + '|' + x.lon.toFixed(3), x);
    });
  });
  return [...used.values()];
}
/* Årstall på bilder: «1950» eller «1950-tallet» (tiår lagres som year=1950 + decade:true). */
const yearLabel = ph => ph && ph.year != null ? (ph.decade ? ph.year + '-tallet' : String(ph.year)) : '';
function parsePhotoYear(str){
  const t = String(str || '').trim().toLowerCase().replace(/^ca\.?\s*/, '');
  if (!t) return { year: null, decade: false };
  const m = t.match(/^(\d{3})0\s*(?:-?\s*(?:tallet|årene|åra|s|-tallet))$/) || t.match(/^(\d{3})0'?s$/);
  if (m) return { year: +(m[1] + '0'), decade: true };
  const n = parseInt(t, 10);
  return { year: isNaN(n) ? null : n, decade: false };
}
const placeLabel = pl => pl ? [pl.farm, pl.kom != null ? pl.kom : (pl.farm ? '' : pl.name), pl.region].filter(Boolean).join(', ') || pl.name || '' : '';
function searchPlaces(q, limit = 8, o = {}){
  const nq = norm(q);
  if (nq.length < 2) return [];
  const out = [], seen = new Set();
  if (!o.onlyGaz) usedPlaces().forEach(x => { if (norm(x.name).includes(nq) && !seen.has(norm(x.name))){ out.push({ label: x.name, sub: 'brukt før', place: clone(x) }); seen.add(norm(x.name)); } });
  const g = GAZ();
  const starts = [], inc = [];
  for (const r of g){
    if (r.n.startsWith(nq)) starts.push(r);
    else if (starts.length < 40 && r.n.includes(nq)) inc.push(r);
    if (starts.length > 80) break;
  }
  starts.sort((a, b) => ((b.kom || b.hist) - (a.kom || a.hist)) || 0);
  for (const r of [...starts, ...inc]){
    if (out.length >= limit) break;
    out.push({ label: r.name, sub: r.sub + (r.kom ? ' · kommune' : ''), place: { name: r.name, lat: r.lat, lon: r.lon, kom: r.name, now: r.now || undefined, approx: r.hist ? 1 : undefined } });
  }
  return out.slice(0, limit);
}

/* Døde før fylte 16 år (kjent fødsels- og dødsår). */
const diedYoung = p => p.birthYear != null && p.deathYear != null && p.deathYear - p.birthYear < 16 && p.deathYear >= p.birthYear;
/* Biologiske foreldre: far, mor og donor. Medforelder (juridisk, ikke biologisk) og steforeldre er ikke med. */
const bioParentsOf = p => (p.adopted ? [p.bioFatherId, p.bioMotherId] : [p.fatherId, p.motherId, p.donorId]).filter((x, i, a) => x && a.indexOf(x) === i);
/* Alle i biologisk slekt med person id: forfedre, og alle etterkommere av forfedrene (søsken, onkler, tanter, søskenbarn …), inkludert personen selv. */
function bioRelatives(id){
  const kidsOf = new Map();
  Store.persons.forEach(p => bioParentsOf(p).forEach(pid => { if (!kidsOf.has(pid)) kidsOf.set(pid, []); kidsOf.get(pid).push(p.id); }));
  const anc = new Set();
  (function up(i){ if (anc.has(i)) return; const p = Store.persons.get(i); if (!p) return; anc.add(i); bioParentsOf(p).forEach(up); })(id);
  const out = new Set();
  (function down(i){ if (out.has(i)) return; out.add(i); (kidsOf.get(i) || []).forEach(down); })(id);
  anc.forEach(a => (function d(i){ if (out.has(i)) return; out.add(i); (kidsOf.get(i) || []).forEach(d); })(a));
  return out;
}

/* Rett linje: personen selv, alle biologiske forfedre og alle biologiske etterkommere (ikke søsken, onkler osv.). */
function bioLine(id){
  const kidsOf = new Map();
  Store.persons.forEach(p => bioParentsOf(p).forEach(pid => { if (!kidsOf.has(pid)) kidsOf.set(pid, []); kidsOf.get(pid).push(p.id); }));
  const out = new Set();
  (function up(i){ if (out.has(i)) return; const p = Store.persons.get(i); if (!p) return; out.add(i); bioParentsOf(p).forEach(up); })(id);
  (function down(i){ (kidsOf.get(i) || []).forEach(k => { if (!out.has(k)){ out.add(k); down(k); } }); })(id);
  return out;
}

/* ====== Foreldre og forhold ====== */
/* Alle juridiske foreldre: far, mor og eventuell medforelder (f.eks. medmor eller medfar). Donor er ikke med her. */
const parentsOf = p => [p.fatherId, p.motherId, p.coParentId].filter((x, i, a) => x && a.indexOf(x) === i);
/* De to plassene som brukes i slektstre og anetavle (første og andre forelder). */
function parentPair(p){
  const a = p.fatherId || null, b = p.motherId || null, c = p.coParentId || null;
  if (c && c !== a && c !== b){
    if (a && !b) return [a, c];
    if (b && !a) return [b, c];
    if (!a && !b) return [c, null];
  }
  return [a, b];
}
/* Hva slags forhold er det? 'gift' bare når det er registrert (eller et gammelt giftermålsår). */
function relKind(x){
  if (x.kind === 'gift' || x.kind === 'samboer' || x.kind === 'partner' || x.kind === 'foreldre') return x.kind;
  return x.year != null ? 'gift' : 'partner';
}
const REL_WITH = { gift: 'gift med', samboer: 'samboer med', partner: 'partner med', foreldre: 'har barn med' };
const REL_NOUN = { gift: 'gift', samboer: 'samboer', partner: 'partner', foreldre: 'har barn sammen' };
/* Årstall for forholdet: start (year), slutt (endYear) og skilsmisse (divorced, bare for gift). */
function relDates(x){
  const k = relKind(x), a = x.year, e = x.endYear;
  if (k === 'gift') return [a != null ? String(a) : '', x.divorced ? 'skilt' + (e != null ? ' ' + e : '') : (e != null ? 'til ' + e : '')].filter(Boolean).join(', ');
  return a != null && e != null ? a + '–' + e : a != null ? String(a) : e != null ? 'til ' + e : '';
}
const relShort = x => { const k = relKind(x); if (k === 'foreldre') return ''; const d = relDates(x); return REL_NOUN[k] + (d ? (k === 'gift' && x.year == null ? ', ' : ' ') + d : ''); };

/* ====== Datalag ====== */
const Idx = {
  kids: new Map(), donorKids: new Map(), adoptOutKids: new Map(), partners: new Map(), photosOf: new Map(),
  rebuild(){
    this.kids.clear(); this.donorKids.clear(); this.adoptOutKids.clear(); this.partners.clear(); this.photosOf.clear();
    const addP = (a, b, year, kind, ex) => {
      if (!Store.persons.has(a) || !Store.persons.has(b) || a === b) return;
      if (!this.partners.has(a)) this.partners.set(a, new Map());
      const m = this.partners.get(a);
      if (!m.has(b) || (year != null && m.get(b).year == null) || (kind && kind !== 'foreldre' && m.get(b).kind === 'foreldre')) m.set(b, { year: year == null ? null : year, kind: kind || null });
      if (ex){ const c = m.get(b); if (ex.endYear != null && c.endYear == null) c.endYear = ex.endYear; if (ex.divorced) c.divorced = true; }
    };
    Store.persons.forEach(p => {
      parentsOf(p).forEach(pid => { if (Store.persons.has(pid)){ if (!this.kids.has(pid)) this.kids.set(pid, []); this.kids.get(pid).push(p.id); } });
      if (p.donorId && Store.persons.has(p.donorId)){ if (!this.donorKids.has(p.donorId)) this.donorKids.set(p.donorId, []); this.donorKids.get(p.donorId).push(p.id); }
      if (p.adopted) [p.bioFatherId, p.bioMotherId].forEach(bid => { if (bid && Store.persons.has(bid)){ if (!this.adoptOutKids.has(bid)) this.adoptOutKids.set(bid, []); this.adoptOutKids.get(bid).push(p.id); } });
      const pp = parentPair(p);
      if (pp[0] && pp[1]){ addP(pp[0], pp[1], null, 'foreldre'); addP(pp[1], pp[0], null, 'foreldre'); }
      (p.partners || []).forEach(pt => { addP(p.id, pt.id, pt.year, relKind(pt), pt); addP(pt.id, p.id, pt.year, relKind(pt), pt); });
    });
    Store.photos.forEach(ph => (ph.tags || []).forEach(t => {
      if (!this.photosOf.has(t.pid)) this.photosOf.set(t.pid, []);
      this.photosOf.get(t.pid).push({ photo: ph, tag: t });
    }));
    this.photosOf.forEach(a => a.sort((x, y) => (x.photo.year || 9999) - (y.photo.year || 9999)));
  },
  kidsOf(id){ return (this.kids.get(id) || []).map(i => Store.persons.get(i)).filter(Boolean).sort((a, b) => (a.birthYear || 9999) - (b.birthYear || 9999)); },
  partnersOf(id){ const m = this.partners.get(id); return m ? [...m.entries()].map(([i, v]) => ({ p: Store.persons.get(i), year: v.year, kind: v.kind || null, endYear: v.endYear, divorced: v.divorced })).filter(x => x.p) : []; },
  siblingsOf(p){
    const s = new Map();
    parentsOf(p).forEach(pid => { if (pid) (this.kids.get(pid) || []).forEach(k => { if (k !== p.id) s.set(k, Store.persons.get(k)); }); });
    if (p.donorId) (this.donorKids.get(p.donorId) || []).forEach(k => { if (k !== p.id) s.set(k, Store.persons.get(k)); });
    return [...s.values()].filter(Boolean).sort((a, b) => (a.birthYear || 9999) - (b.birthYear || 9999));
  },
  /* 'hel', 'halv' eller '' (usikkert). Donor: samme mor = helsøsken, ulik mor = halvsøsken. */
  siblingKind(p, s){
    const A = parentsOf(p), B = parentsOf(s);
    const shared = A.filter(x => B.includes(x));
    const sameDonor = !!p.donorId && p.donorId === s.donorId;
    if (!shared.length) return sameDonor ? 'halv' : '';
    if (shared.length >= 2) return 'hel';
    if (A.length === 1 && B.length === 1) return sameDonor ? 'hel' : '';
    if (A.length >= 2 && B.length >= 2) return 'halv';
    return sameDonor ? 'hel' : '';
  },
  /* Steforeldre: partnerne til foreldrene som ikke selv er foreldre. Stebarn: partnerens barn som ikke er egne. */
  /* Er «x» (partner til a) steforelder til et barn født cb? Ikke hvis forholdet var slutt før barnet ble født (død eller skilt/sluttet). */
  _stepOk(a, x, cb){
    const A = Store.persons.get(a);
    const ends = [A && A.deathYear, x.p.deathYear, x.endYear].filter(v => v != null);
    if (!ends.length || cb == null) return true;
    return cb <= Math.min(...ends);
  },
  stepParentsOf(p){
    const out = new Map(), mine = parentsOf(p);
    mine.forEach(q => this.partnersOf(q).forEach(x => { if (relKind(x) === 'foreldre') return; if (x.p.id === p.id || mine.includes(x.p.id) || x.p.id === p.donorId || !this._stepOk(q, x, p.birthYear)) return; if (!out.has(x.p.id)) out.set(x.p.id, { p: x.p, via: Store.persons.get(q) }); }));
    return [...out.values()];
  },
  stepKidsOf(p){
    const out = new Map();
    this.partnersOf(p.id).forEach(x => { if (relKind(x) === 'foreldre') return; this.kidsOf(x.p.id).forEach(c => { if (c.id !== p.id && !parentsOf(c).includes(p.id) && this._stepOk(p.id, x, c.birthYear) && !out.has(c.id)) out.set(c.id, { p: c, via: x.p }); }); });
    return [...out.values()].sort((a, b) => (a.p.birthYear || 9999) - (b.p.birthYear || 9999));
  }
};

const Store = {
  persons: new Map(), photos: new Map(), db: null, assets: null, canWrite: true, mode: 'loading',
  listeners: new Set(), _raf: 0,
  onChange(fn){ this.listeners.add(fn); return () => this.listeners.delete(fn); },
  emit(){
    if (this._raf) return;
    this._raf = requestAnimationFrame(() => { this._raf = 0; Idx.rebuild(); this._cleanFlags(); this.listeners.forEach(f => { try { f(); } catch (e) { console.error(e); } }); });
  },
  /* «Ingen kjente barn/søsken» fjernes automatisk når slike er registrert. */
  _cleanFlags(){
    if (!this.canWrite) return;
    this.persons.forEach(p => {
      const kids = Idx.kidsOf(p.id).length, sibs = Idx.siblingsOf(p).length, prts = Idx.partnersOf(p.id).length;
      const young = diedYoung(p);
      if (!p.noKids && !p.noSiblings && !p.noPartners && !(young && (!kids || !prts))) return;
      const q = clone(p); let ch = false;
      if (q.noKids && kids){ delete q.noKids; ch = true; }
      if (q.noSiblings && sibs){ delete q.noSiblings; ch = true; }
      if (q.noPartners && prts){ delete q.noPartners; ch = true; }
      if (young && !kids && !q.noKids){ q.noKids = true; ch = true; }
      if (young && !prts && !q.noPartners){ q.noPartners = true; ch = true; }
      if (ch){ this.persons.set(q.id, q); this._write('persons', q); }
    });
  },
  async init(){
    if (LOCAL_MODE) return this.initLocal();
    const c = window.claude;
    const get = async n => { try { return c && c.use ? await c.use(n) : null; } catch (_) { return null; } };
    const [db, assets, user] = await Promise.all([get('db'), get('assets'), get('user')]);
    this.assets = assets;
    try { if (user && user.can) { const r = user.can('data.write'); if (r === false) this.canWrite = false; } } catch (_) {}
    if (!db){ this.mode = 'memory'; this.emit(); return; }
    this.db = db; this.mode = 'db';
    const fail = e => { console.error(e); toast('Lagringen svarte ikke. Last siden på nytt hvis endringer ikke vises.'); };
    db.collection('persons').onSnapshot(snap => {
      snap.docChanges().forEach(ch => { if (ch.type === 'removed') this.persons.delete(ch.doc.id); else this.persons.set(ch.doc.id, Object.assign({}, ch.doc.data(), { id: ch.doc.id })); });
      this.ready = true; this.emit();
    }, fail);
    db.collection('photos').onSnapshot(snap => {
      snap.docChanges().forEach(ch => { if (ch.type === 'removed') this.photos.delete(ch.doc.id); else this.photos.set(ch.doc.id, Object.assign({}, ch.doc.data(), { id: ch.doc.id })); });
      this.emit();
    }, fail);
  },
  async _write(coll, obj){
    if (LOCAL_MODE){
      try { await LocalDB.put(coll, obj.id, clone(obj)); noteChange(); }
      catch (e){ console.error(e); toast('Kunne ikke lagre på enheten. Er lagringsplassen full?'); }
      return;
    }
    if (!this.db) return;
    try { await this.db.collection(coll).doc(obj.id).set(clone(obj)); }
    catch (e){ console.error(e); toast(e && e.code === 'quota_exceeded' ? 'Lagringsgrensen er nådd.' : 'Kunne ikke lagre endringen.'); }
  },
  async _del(coll, id){
    if (LOCAL_MODE){ try { await LocalDB.del(coll, id); noteChange(); } catch (e){ console.error(e); toast('Kunne ikke slette.'); } return; }
    if (!this.db) return;
    try { await this.db.collection(coll).doc(id).delete(); } catch (e){ console.error(e); toast('Kunne ikke slette.'); }
  },
  async savePerson(p){ p = clone(p); this.persons.set(p.id, p); this.emit(); await this._write('persons', p); return p; },
  async savePhoto(ph){ ph = clone(ph); this.photos.set(ph.id, ph); this.emit(); await this._write('photos', ph); return ph; },
  async deletePerson(id){
    this.persons.delete(id);
    const touched = [];
    this.persons.forEach(p => {
      let ch = false;
      if (p.fatherId === id){ p.fatherId = null; ch = true; }
      if (p.motherId === id){ p.motherId = null; ch = true; }
      if (p.coParentId === id){ p.coParentId = null; ch = true; }
      if (p.donorId === id){ p.donorId = null; ch = true; }
      if ((p.partners || []).some(x => x.id === id)){ p.partners = p.partners.filter(x => x.id !== id); ch = true; }
      if (ch) touched.push(p);
    });
    this.photos.forEach(ph => {
      if ((ph.tags || []).some(t => t.pid === id)){ ph.tags = ph.tags.filter(t => t.pid !== id); touched.push(ph); }
    });
    this.emit();
    await this._del('persons', id);
    for (const o of touched) await this._write(o.assetId !== undefined ? 'photos' : 'persons', o);
  },
  async deletePhoto(id){
    const ph = this.photos.get(id);
    this.photos.delete(id); this.emit();
    await this._del('photos', id);
    if (ph && this.assets){ for (const pg of pagesOf(ph)){ if (pg.assetId){ try { await this.assets.delete(pg.assetId); } catch (_) {} } } }
  },
  /* Originalen lastes opp uten omkoding når den er JPEG, PNG eller WebP under 19 MB.
     Andre formater eller større filer kodes om i full oppløsning (opptil 6000 piksler, høy kvalitet). */
  async uploadImage(file){
    if (!this.assets) throw new Error('no-assets');
    let bmp;
    try { bmp = await createImageBitmap(file); } catch (e){ throw new Error('unreadable'); }
    const LIMIT = 19 * 1024 * 1024;
    const w0 = bmp.width, h0 = bmp.height;
    try {
      if (/^image\/(jpeg|png|webp)$/.test(file.type) && file.size <= LIMIT){
        const r = await this.assets.upload(file);
        return { assetId: r.id, w: w0, h: h0 };
      }
      let scale = Math.min(1, 6000 / Math.max(w0, h0)), q = 0.95, blob = null, w = w0, hh = h0;
      for (let i = 0; i < 5; i++){
        w = Math.round(w0 * scale); hh = Math.round(h0 * scale);
        const cv = document.createElement('canvas'); cv.width = w; cv.height = hh;
        cv.getContext('2d').drawImage(bmp, 0, 0, w, hh);
        blob = await new Promise(r => cv.toBlob(r, 'image/jpeg', q));
        if (blob && blob.size <= LIMIT) break;
        scale *= 0.8; q = 0.9;
      }
      if (!blob) throw new Error('unreadable');
      const r = await this.assets.upload(blob);
      return { assetId: r.id, w, h: hh };
    } finally { if (bmp.close) bmp.close(); }
  }
};
const photoUrl = ph => LOCAL_MODE ? (URLS.get(ph.assetId) || '') : (ph.assetId ? '/_blob/' + ph.assetId : '');
const isSource = ph => !!ph && ph.kind === 'source';
/* Kilder kan ha flere sider: første side ligger i assetId/w/h, resten i more. */
const pagesOf = ph => [{ assetId: ph.assetId, w: ph.w, h: ph.h }].concat(ph.more || []);
const SOURCE_TYPES = ['Kirkebok', 'Bygdebok', 'Dåpsattest', 'Dødsannonse', 'Folketelling', 'Avisutklipp', 'Brev', 'Annet'];

/* ====== Personhjelp ====== */
function endYear(p){
  if (p.deathYear != null) return p.deathYear;
  if (p.birthYear == null) return null;
  if (isDead(p)) return Math.min(NOW_YEAR, p.birthYear + 80);
  return (NOW_YEAR - p.birthYear > 100) ? p.birthYear + 80 : NOW_YEAR;
}
function timelineOf(p){
  const a = [];
  const ok = pl => pl && pl.lat != null && pl.lon != null;
  if (p.birthYear != null && ok(p.birthPlace)) a.push({ year: p.birthYear, place: p.birthPlace, kind: 'birth' });
  (p.moves || []).forEach(m => { if (m.year != null && ok(m.place)) a.push({ year: m.year, place: m.place, kind: 'move' }); });
  if (p.emigratedYear != null && ok(p.emigratedTo)) a.push({ year: p.emigratedYear, place: p.emigratedTo, kind: 'move' });
  if (p.deathYear != null && ok(p.deathPlace)) a.push({ year: p.deathYear, place: p.deathPlace, kind: 'death' });
  a.sort((x, y) => x.year - y.year);
  return a;
}
function presence(p, tl){
  if (!tl.length) return null;
  const start = p.birthYear != null ? p.birthYear : tl[0].year;
  let end = endYear(p);
  if (end == null) end = start + 60;
  return { start, end };
}
function locAt(tl, y){
  let r = null;
  for (const e of tl){ if (e.year <= y) r = e; else break; }
  return r;
}
const FAM_COLORS = ['var(--f1)', 'var(--f2)', 'var(--f3)', 'var(--f4)', 'var(--f5)', 'var(--f6)'];

/* ====== Avatar ====== */
/* Utsnitt: senter (cx,cy) som andel av bildet, z = forstørrelse (1 = hele korteste side). Returnerer prosent for img i en kvadratisk boks. */
function cropGeom(photo, c){
  const w = photo.w, hh = photo.h, side = Math.min(w, hh) / Math.max(1, c.z || 1);
  const hx = side / 2 / w, hy = side / 2 / hh;
  const cx = Math.min(1 - hx, Math.max(hx, c.cx == null ? 0.5 : c.cx)), cy = Math.min(1 - hy, Math.max(hy, c.cy == null ? 0.5 : c.cy));
  return { w: w / side * 100, l: (0.5 - cx * w / side) * 100, t: (0.5 - cy * hh / side) * 100, cx, cy, side };
}
/* Ekstra profilbilder for ulike aldersperioder (vises bare på personsiden). */
const AGE_SLOTS = [['0-1', '0–1 år', 0, 1], ['2-5', '2–5 år', 2, 5], ['6-12', '6–12 år', 6, 12], ['13-19', '13–19 år', 13, 19], ['20-40', '20–40 år', 20, 40], ['40-60', '40–60 år', 40, 60], ['60-100', '60–100 år', 60, 100]];
function slotPortrait(p, key){
  const c = p.portraits && p.portraits[key]; const ph = c && Store.photos.get(c.photoId);
  return ph && ph.assetId && ph.w && ph.h && !isSource(ph) ? { c, ph } : null;
}
function avatar(p, size = 40){
  const box = h('span', { class: 'av ' + (p.sex === 'm' ? 'm' : p.sex === 'f' ? 'f' : ''), style: { '--s': size + 'px' } });
  const list = Idx.photosOf.get(p.id);
  const pr = p.portrait && Store.photos.get(p.portrait.photoId);
  if (pr && pr.assetId && pr.w && pr.h && !isSource(pr)){
    const g = cropGeom(pr, p.portrait);
    const img = h('img', { src: photoUrl(pr), alt: '', loading: 'lazy', 'data-asset': pr.assetId, 'data-max': 1200, style: { width: g.w + '%', left: g.l + '%', top: g.t + '%' } });
    img.addEventListener('error', () => { img.remove(); box.textContent = initials(p); });
    box.appendChild(img);
    return box;
  }
  const hit = list && list.find(x => !isSource(x.photo) && x.tag.x != null && x.photo.w && x.photo.h && x.photo.assetId);
  if (hit){
    const { photo, tag } = hit, r = photo.h / photo.w;
    const Z = Math.max(2.4, 1.2 / Math.min(1, r) , 1 / r + 0.2);
    // bilde skalert til Z * boksbredde; sentrer på merket
    let left = (0.5 - tag.x * Z) * 100, top = (0.5 - tag.y * Z * r) * 100;
    left = Math.min(0, Math.max((1 - Z) * 100, left));
    top = Math.min(0, Math.max((1 - Z * r) * 100, top));
    const img = h('img', { src: photoUrl(photo), alt: '', loading: 'lazy', 'data-asset': photo.assetId, 'data-max': 1200, style: { width: (Z * 100) + '%', left: left + '%', top: top + '%' } });
    img.addEventListener('error', () => { img.remove(); box.textContent = initials(p); });
    box.appendChild(img);
  } else box.textContent = initials(p);
  return box;
}
function personChip(p, extra){
  return h('a', { class: 'chip', href: '#', onclick: e => { e.preventDefault(); App.go('person', p.id); } },
    avatar(p, 28), h('span', { class: 't' }, fullName(p), extra ? h('span', { class: 'faint' }, ' ' + extra) : null));
}

function siblingText(p){
  const s = Idx.siblingsOf(p);
  if (!s.length) return '';
  const names = s.slice(0, 3).map(x => x.given || fullName(x));
  return 'Søsken: ' + names.join(', ') + (s.length > 3 ? ' +' + (s.length - 3) : '');
}

const DEATH_CATS = ['Alderdom','Infeksjonssykdom','Hjerte- og karsykdom','Kreft','Luftveissykdom (ikke infeksiøs)','Nevrologisk sykdom og demens','Annen sykdom','Ulykke','Drukning','Barsel og fødsel','Spedbarns- og barnedød','Krig, vold og drap','Selvmord','Annet','Ukjent'];
const deathCatOf = p => { if (p.deathCat) return p.deathCat; const t = (p.deathCause || '').trim().toLowerCase(); return DEATH_CATS.find(x => x.toLowerCase() === t) || ''; };
const deathSpecOf = p => { const t = (p.deathCause || '').trim(); return t && t.toLowerCase() !== (deathCatOf(p) || '').toLowerCase() ? t : ''; };

const NO_NAMES = {"Afghanistan": "Afghanistan", "Albania": "Albania", "Algeria": "Algerie", "American Samoa": "Amerikansk Samoa", "Andorra": "Andorra", "Angola": "Angola", "Anguilla": "Anguilla", "Antigua and Barbuda": "Antigua og Barbuda", "Antigua and Barb.": "Antigua og Barbuda", "Argentina": "Argentina", "Armenia": "Armenia", "Aruba": "Aruba", "Australia": "Australia", "Austria": "Østerrike", "Azerbaijan": "Aserbajdsjan", "Bahamas": "Bahamas", "The Bahamas": "Bahamas", "Bahrain": "Bahrain", "Bangladesh": "Bangladesh", "Barbados": "Barbados", "Belarus": "Hviterussland", "Belgium": "Belgia", "Belize": "Belize", "Benin": "Benin", "Bermuda": "Bermuda", "Bhutan": "Bhutan", "Bolivia": "Bolivia", "Bosnia and Herzegovina": "Bosnia-Hercegovina", "Bosnia and Herz.": "Bosnia-Hercegovina", "Botswana": "Botswana", "Brazil": "Brasil", "Brunei": "Brunei", "Bulgaria": "Bulgaria", "Burkina Faso": "Burkina Faso", "Burundi": "Burundi", "Cabo Verde": "Kapp Verde", "Cape Verde": "Kapp Verde", "Cambodia": "Kambodsja", "Cameroon": "Kamerun", "Canada": "Canada", "Cayman Islands": "Caymanøyene", "Central African Republic": "Den sentralafrikanske republikk", "Central African Rep.": "Den sentralafrikanske republikk", "Chad": "Tsjad", "Chile": "Chile", "China": "Kina", "Colombia": "Colombia", "Comoros": "Komorene", "Congo": "Kongo-Brazzaville", "Republic of the Congo": "Kongo-Brazzaville", "Democratic Republic of the Congo": "Kongo-Kinshasa", "Dem. Rep. Congo": "Kongo-Kinshasa", "Cook Islands": "Cookøyene", "Costa Rica": "Costa Rica", "Croatia": "Kroatia", "Cuba": "Cuba", "Curaçao": "Curaçao", "Cyprus": "Kypros", "Czechia": "Tsjekkia", "Czech Republic": "Tsjekkia", "Côte d'Ivoire": "Elfenbenskysten", "Ivory Coast": "Elfenbenskysten", "Denmark": "Danmark", "Djibouti": "Djibouti", "Dominica": "Dominica", "Dominican Republic": "Den dominikanske republikk", "Dominican Rep.": "Den dominikanske republikk", "Ecuador": "Ecuador", "Egypt": "Egypt", "El Salvador": "El Salvador", "Equatorial Guinea": "Ekvatorial-Guinea", "Eq. Guinea": "Ekvatorial-Guinea", "Eritrea": "Eritrea", "Estonia": "Estland", "Ethiopia": "Etiopia", "Faroe Islands": "Færøyene", "Faeroe Is.": "Færøyene", "Falkland Islands": "Falklandsøyene", "Fiji": "Fiji", "Finland": "Finland", "French Polynesia": "Fransk Polynesia", "France": "Frankrike", "Gabon": "Gabon", "Gambia": "Gambia", "The Gambia": "Gambia", "Georgia": "Georgia", "Germany": "Tyskland", "Ghana": "Ghana", "Greece": "Hellas", "Greenland": "Grønland", "Grenada": "Grenada", "Guam": "Guam", "Guatemala": "Guatemala", "Guernsey": "Guernsey", "Guinea": "Guinea", "Guinea-Bissau": "Guinea-Bissau", "Guyana": "Guyana", "Haiti": "Haiti", "Honduras": "Honduras", "Hong Kong": "Hongkong", "Hungary": "Ungarn", "Iceland": "Island", "India": "India", "Indonesia": "Indonesia", "Iran": "Iran", "Iraq": "Irak", "Ireland": "Irland", "Isle of Man": "Man", "Israel": "Israel", "Italy": "Italia", "Jamaica": "Jamaica", "Japan": "Japan", "Jersey": "Jersey", "Jordan": "Jordan", "Kazakhstan": "Kasakhstan", "Kenya": "Kenya", "Kiribati": "Kiribati", "Kosovo": "Kosovo", "Kuwait": "Kuwait", "Kyrgyzstan": "Kirgisistan", "Laos": "Laos", "Latvia": "Latvia", "Lebanon": "Libanon", "Lesotho": "Lesotho", "Liberia": "Liberia", "Libya": "Libya", "Liechtenstein": "Liechtenstein", "Lithuania": "Litauen", "Luxembourg": "Luxembourg", "Macao": "Macao", "Macau": "Macao", "North Macedonia": "Nord-Makedonia", "Macedonia": "Nord-Makedonia", "Madagascar": "Madagaskar", "Malawi": "Malawi", "Malaysia": "Malaysia", "Maldives": "Maldivene", "Mali": "Mali", "Malta": "Malta", "Marshall Islands": "Marshalløyene", "Mauritania": "Mauritania", "Mauritius": "Mauritius", "Mexico": "Mexico", "Micronesia": "Mikronesia", "Moldova": "Moldova", "Monaco": "Monaco", "Mongolia": "Mongolia", "Montenegro": "Montenegro", "Montserrat": "Montserrat", "Morocco": "Marokko", "Mozambique": "Mosambik", "Myanmar": "Myanmar", "Burma": "Myanmar", "Namibia": "Namibia", "Nauru": "Nauru", "Nepal": "Nepal", "Netherlands": "Nederland", "The Netherlands": "Nederland", "Holland": "Nederland", "New Caledonia": "Ny-Caledonia", "New Zealand": "New Zealand", "Nicaragua": "Nicaragua", "Niger": "Niger", "Nigeria": "Nigeria", "Niue": "Niue", "North Korea": "Nord-Korea", "Norway": "Norge", "Oman": "Oman", "Pakistan": "Pakistan", "Palau": "Palau", "Palestine": "Palestina", "Panama": "Panama", "Papua New Guinea": "Papua Ny-Guinea", "Paraguay": "Paraguay", "Peru": "Peru", "Philippines": "Filippinene", "Pitcairn Islands": "Pitcairnøyene", "Poland": "Polen", "Portugal": "Portugal", "Puerto Rico": "Puerto Rico", "Qatar": "Qatar", "Romania": "Romania", "Russia": "Russland", "Rwanda": "Rwanda", "Saint Helena": "St. Helena", "Saint Lucia": "St. Lucia", "Saint Kitts and Nevis": "St. Kitts og Nevis", "Saint Vincent and the Grenadines": "St. Vincent og Grenadinene", "Samoa": "Samoa", "San Marino": "San Marino", "Saudi Arabia": "Saudi-Arabia", "Senegal": "Senegal", "Serbia": "Serbia", "Seychelles": "Seychellene", "Sierra Leone": "Sierra Leone", "Singapore": "Singapore", "Sint Maarten": "Sint Maarten", "Slovakia": "Slovakia", "Slovenia": "Slovenia", "Solomon Islands": "Salomonøyene", "Somalia": "Somalia", "South Africa": "Sør-Afrika", "South Korea": "Sør-Korea", "South Sudan": "Sør-Sudan", "Spain": "Spania", "Sri Lanka": "Sri Lanka", "Sudan": "Sudan", "Suriname": "Surinam", "Sweden": "Sverige", "Switzerland": "Sveits", "Syria": "Syria", "São Tomé and Príncipe": "São Tomé og Príncipe", "Sao Tome and Principe": "São Tomé og Príncipe", "Taiwan": "Taiwan", "Tajikistan": "Tadsjikistan", "Tanzania": "Tanzania", "Thailand": "Thailand", "Timor-Leste": "Øst-Timor", "East Timor": "Øst-Timor", "Togo": "Togo", "Tonga": "Tonga", "Trinidad and Tobago": "Trinidad og Tobago", "Tunisia": "Tunisia", "Turkey": "Tyrkia", "Türkiye": "Tyrkia", "Turkmenistan": "Turkmenistan", "Tuvalu": "Tuvalu", "Uganda": "Uganda", "Ukraine": "Ukraina", "United Arab Emirates": "De forente arabiske emirater", "United Kingdom": "Storbritannia", "UK": "Storbritannia", "Great Britain": "Storbritannia", "England": "England", "Scotland": "Skottland", "Wales": "Wales", "Northern Ireland": "Nord-Irland", "United States": "USA", "United States of America": "USA", "Uruguay": "Uruguay", "Uzbekistan": "Usbekistan", "Vanuatu": "Vanuatu", "Vatican": "Vatikanstaten", "Vatican City": "Vatikanstaten", "Venezuela": "Venezuela", "Vietnam": "Vietnam", "Western Sahara": "Vest-Sahara", "Yemen": "Jemen", "Zambia": "Zambia", "Zimbabwe": "Zimbabwe", "Eswatini": "Eswatini", "Swaziland": "Eswatini", "Åland": "Åland", "Åland Islands": "Åland", "Gibraltar": "Gibraltar", "Svalbard": "Svalbard", "Yugoslavia": "Jugoslavia", "Soviet Union": "Sovjetunionen", "USSR": "Sovjetunionen", "Prussia": "Preussen", "Copenhagen": "København", "Gothenburg": "Göteborg", "Rome": "Roma", "Venice": "Venezia", "Florence": "Firenze", "Naples": "Napoli", "Milan": "Milano", "Athens": "Aten", "Moscow": "Moskva", "Warsaw": "Warszawa", "Prague": "Praha", "Vienna": "Wien", "Lisbon": "Lisboa", "Brussels": "Brussel", "Cologne": "Köln", "Munich": "München", "Geneva": "Genève", "Helsinki": "Helsingfors", "Saint Petersburg": "St. Petersburg", "Edinburgh": "Edinburgh", "New York City": "New York", "Turin": "Torino", "Seville": "Sevilla", "Antwerp": "Antwerpen", "The Hague": "Haag", "Zurich": "Zürich", "Belgrade": "Beograd", "Bucharest": "București", "Kyiv": "Kyiv", "Kiev": "Kyiv", "Peking": "Beijing", "Cairo": "Kairo", "Jerusalem": "Jerusalem", "Constantinople": "Konstantinopel", "Istanbul": "Istanbul", "Danzig": "Danzig"};
const _noMap = new Map(Object.entries(NO_NAMES).map(([k, v]) => [k.toLowerCase(), v]));
// Oversetter engelske land- og stedsnavn til norsk, del for del (komma/skråstrek)
const noPlace = s => (s == null ? s : String(s).split(/(\s*[,/]\s*)/).map(t => { const k = t.trim().toLowerCase(); const v = _noMap.get(k); return v ? t.replace(t.trim(), v) : t; }).join(''));

// «på» for sykehus, institusjoner og gårder, ellers «i»
const iPaa = pl => (pl && (pl.farm || /(syke|sjuke)(hus|heim|hjem)|hospital|lasarett|klinikk|fødestue|fødeavdeling|fødehjem|fødeklinikk|institusjon|omsorgssenter|aldershjem|barnehjem/i.test(pl.name || ''))) ? 'på' : 'i';

// Fornavn med store bokstaver, resten (mellomnavn, patronym, etternavn) med vanlig skrift
const nameFirstCaps = x => { const g = (x.given || '').trim().split(/\s+/).filter(Boolean); const first = g.shift() || ''; const rest = [g.join(' '), x.patronym, x.family].filter(Boolean).join(' '); if (!first) return fullName(x); const pat = (x.patronym && (x.birthYear == null || x.birthYear < 1900)); return h('span', null, h('b', { class: 'gn' }, first.toUpperCase()), rest ? ' ' + (pat ? rest : [g.join(' '), x.family].filter(Boolean).join(' ')) : ''); };

/* ====== Lokal lagring (GitHub-versjonen), sikkerhetskopi og gjenoppretting ====== */
const URLS = new Map();   // assetId -> blob-adresse (kun lokal modus)

const LocalDB = {
  db: null,
  open(){
    return new Promise((res, rej) => {
      const r = indexedDB.open('slektsboka', 1);
      r.onupgradeneeded = () => { ['persons', 'photos', 'blobs', 'meta'].forEach(n => { if (!r.result.objectStoreNames.contains(n)) r.result.createObjectStore(n); }); };
      r.onsuccess = () => { this.db = r.result; res(); };
      r.onerror = () => rej(r.error);
      r.onblocked = () => rej(new Error('blocked'));
    });
  },
  run(store, mode, fn){
    return new Promise((res, rej) => {
      const t = this.db.transaction(store, mode);
      const r = fn(t.objectStore(store));
      t.oncomplete = () => res(r ? r.result : undefined);
      t.onerror = () => rej(t.error);
      t.onabort = () => rej(t.error);
    });
  },
  put(store, key, val){ return this.run(store, 'readwrite', s => s.put(val, key)); },
  get(store, key){ return this.run(store, 'readonly', s => s.get(key)); },
  del(store, key){ return this.run(store, 'readwrite', s => s.delete(key)); },
  clear(store){ return this.run(store, 'readwrite', s => s.clear()); },
  all(store){
    return new Promise((res, rej) => {
      const out = [];
      const r = this.db.transaction(store, 'readonly').objectStore(store).openCursor();
      r.onsuccess = () => { const c = r.result; if (c){ out.push([c.key, c.value]); c.continue(); } else res(out); };
      r.onerror = () => rej(r.error);
    });
  }
};

function noteChange(){ try { localStorage.setItem('slekt.changes', String((+localStorage.getItem('slekt.changes') || 0) + 1)); } catch (_) {} }
function lsGet(k){ try { return localStorage.getItem(k); } catch (_) { return null; } }

Store.initLocal = async function(){
  this.canWrite = true;
  try { await LocalDB.open(); } catch (e){ console.error(e); this.mode = 'memory'; this.emit(); return; }
  this.mode = 'local';
  this.assets = {
    upload: async blob => { const id = uid(); await LocalDB.put('blobs', id, blob); URLS.set(id, URL.createObjectURL(blob)); noteChange(); return { id, url: URLS.get(id), sizeBytes: blob.size, contentType: blob.type }; },
    delete: async id => { await LocalDB.del('blobs', id); const u = URLS.get(id); if (u) URL.revokeObjectURL(u); URLS.delete(id); }
  };
  const [ps, phs, blobs] = await Promise.all([LocalDB.all('persons'), LocalDB.all('photos'), LocalDB.all('blobs')]);
  ps.forEach(([k, v]) => this.persons.set(k, Object.assign({}, v, { id: k })));
  phs.forEach(([k, v]) => this.photos.set(k, Object.assign({}, v, { id: k })));
  blobs.forEach(([k, b]) => URLS.set(k, URL.createObjectURL(b)));
  this.ready = true;
  this.emit();
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (_) {}
};

Store.loadExample = async function(){
  for (const d of EXAMPLE_DATA) await this.savePerson(d);
  toast('Eksempelfamilien er lagt inn');
};

/* ====== ZIP (uten komprimering) ====== */
const CRC_T = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++){ let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(u8){ let c = 0xFFFFFFFF; for (let i = 0; i < u8.length; i++) c = CRC_T[(c ^ u8[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }

async function zipBuild(items, onProgress){
  const enc = new TextEncoder(), parts = [], cd = [];
  let offset = 0;
  for (let i = 0; i < items.length; i++){
    const it = items[i];
    const nameB = enc.encode(it.name), size = it.blob.size;
    const crc = crc32(new Uint8Array(await it.blob.arrayBuffer()));
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true);
    lh.setUint16(10, 0, true); lh.setUint16(12, 0x21, true); lh.setUint32(14, crc, true); lh.setUint32(18, size, true); lh.setUint32(22, size, true);
    lh.setUint16(26, nameB.length, true); lh.setUint16(28, 0, true);
    parts.push(lh.buffer, nameB, it.blob);
    cd.push({ nameB, crc, size, offset });
    offset += 30 + nameB.length + size;
    if (onProgress) onProgress(i + 1, items.length);
  }
  const cdStart = offset; let cdSize = 0;
  cd.forEach(e => {
    const v = new DataView(new ArrayBuffer(46));
    v.setUint32(0, 0x02014b50, true); v.setUint16(4, 20, true); v.setUint16(6, 20, true); v.setUint16(8, 0x0800, true); v.setUint16(10, 0, true);
    v.setUint16(12, 0, true); v.setUint16(14, 0x21, true); v.setUint32(16, e.crc, true); v.setUint32(20, e.size, true); v.setUint32(24, e.size, true);
    v.setUint16(28, e.nameB.length, true); v.setUint32(42, e.offset, true);
    parts.push(v.buffer, e.nameB); cdSize += 46 + e.nameB.length;
  });
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true); end.setUint16(8, cd.length, true); end.setUint16(10, cd.length, true); end.setUint32(12, cdSize, true); end.setUint32(16, cdStart, true);
  parts.push(end.buffer);
  return new Blob(parts, { type: 'application/zip' });
}

async function zipRead(file){
  const size = file.size, tailLen = Math.min(size, 65557);
  const tail = new DataView(await file.slice(size - tailLen, size).arrayBuffer());
  let p = -1;
  for (let i = tailLen - 22; i >= 0; i--){ if (tail.getUint32(i, true) === 0x06054b50){ p = i; break; } }
  if (p < 0) throw new Error('bad-zip');
  const count = tail.getUint16(p + 10, true), cdSize = tail.getUint32(p + 12, true), cdOff = tail.getUint32(p + 16, true);
  const cdv = new DataView(await file.slice(cdOff, cdOff + cdSize).arrayBuffer());
  const dec = new TextDecoder(), map = new Map();
  let o = 0;
  for (let i = 0; i < count; i++){
    if (cdv.getUint32(o, true) !== 0x02014b50) throw new Error('bad-zip');
    const method = cdv.getUint16(o + 10, true), csize = cdv.getUint32(o + 20, true), nlen = cdv.getUint16(o + 28, true), elen = cdv.getUint16(o + 30, true), clen = cdv.getUint16(o + 32, true), lo = cdv.getUint32(o + 42, true);
    map.set(dec.decode(new Uint8Array(cdv.buffer, o + 46, nlen)), { method, csize, lo });
    o += 46 + nlen + elen + clen;
  }
  return {
    has: n => map.has(n),
    async get(name){
      const e = map.get(name); if (!e) return null;
      const lh = new DataView(await file.slice(e.lo, e.lo + 30).arrayBuffer());
      const start = e.lo + 30 + lh.getUint16(26, true) + lh.getUint16(28, true);
      const b = file.slice(start, start + e.csize);
      if (e.method === 0) return b;
      if (e.method === 8 && typeof DecompressionStream !== 'undefined') return await new Response(b.stream().pipeThrough(new DecompressionStream('deflate-raw'))).blob();
      throw new Error('zip-method');
    }
  };
}

/* ====== Lagre fil ====== */
async function saveFile(blob, filename){
  if (!LOCAL_MODE){
    let d = null;
    try { d = await window.claude.use('downloads'); } catch (_) {}
    if (!d){ toast('Nedlasting er ikke tilgjengelig i denne visningen.'); return false; }
    try { await d.save({ filename, data: blob }); return true; }
    catch (e){ if (!(e && e.code === 'declined')) toast('Kunne ikke lagre filen.'); return false; }
  }
  const file = new File([blob], filename, { type: blob.type || 'application/zip' });
  try {
    if (navigator.canShare && navigator.canShare({ files: [file] })){ await navigator.share({ files: [file], title: filename }); return true; }
  } catch (e){ if (e && e.name === 'AbortError') return false; }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 60000);
  return true;
}

/* ====== Sikkerhetskopi ====== */
const extOf = t => ({ 'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp' }[t] || '.bin');
async function assetBlob(id){
  if (LOCAL_MODE) return await LocalDB.get('blobs', id);
  const r = await fetch('/_blob/' + id);
  if (!r.ok) throw new Error('fetch');
  return await r.blob();
}
async function makeBackup(onProgress){
  const docs = { app: 'slektsboka', version: 1, exported: new Date().toISOString(), persons: [...Store.persons.values()], photos: [] };
  const items = [], missing = [], photos = [...Store.photos.values()];
  for (let i = 0; i < photos.length; i++){
    const ph = photos[i];
    if (onProgress) onProgress(i + 1, photos.length);
    let blob = null;
    try { blob = ph.assetId ? await assetBlob(ph.assetId) : null; } catch (_) {}
    const d = clone(ph);
    if (blob){ d.file = 'bilder/' + ph.assetId + extOf(blob.type); items.push({ name: d.file, blob }); } else missing.push(ph.id);
    for (const m of (d.more || [])){
      let mb = null;
      try { mb = m.assetId ? await assetBlob(m.assetId) : null; } catch (_) {}
      if (mb){ m.file = 'bilder/' + m.assetId + extOf(mb.type); items.push({ name: m.file, blob: mb }); } else missing.push(ph.id);
    }
    docs.photos.push(d);
  }
  items.unshift({ name: 'data.json', blob: new Blob([JSON.stringify(docs, null, 1)], { type: 'application/json' }) });
  const zip = await zipBuild(items);
  return { zip, missing, nPersons: docs.persons.length, nPhotos: docs.photos.length };
}
const todayStr = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const fmtMB = n => (n / 1048576 < 10 ? (n / 1048576).toFixed(1) : Math.round(n / 1048576)) + ' MB';
function markBackedUp(){ try { localStorage.setItem('slekt.lastBackup', String(Date.now())); localStorage.setItem('slekt.changes', '0'); } catch (_) {} App.refresh(); }

async function startBackup(btn){
  const label = btn.lastChild.textContent;
  btn.disabled = true;
  try {
    const res = await makeBackup((i, n) => { btn.lastChild.textContent = 'Pakker bilde ' + i + ' av ' + n + ' …'; });
    const name = 'slektsboka-' + todayStr() + '.zip';
    const save = h('button', { class: 'btn primary', onclick: async () => { if (await saveFile(res.zip, name)){ markBackedUp(); modal.close(); toast('Sikkerhetskopien er lagret'); } } }, ico('upload', 16), 'Lagre filen');
    const modal = openModal('Sikkerhetskopien er klar', h('div', { class: 'modal-b' },
      h('p', null, plural(res.nPersons, 'person', 'personer') + ' og ' + plural(res.nPhotos, 'bilde eller kilde', 'bilder og kilder') + ' er pakket i én fil på ' + fmtMB(res.zip.size) + '.'),
      res.missing.length ? h('p', { class: 'muted' }, res.missing.length + ' av bildene kunne ikke hentes og er ikke med i kopien. Personene og taggene er med.') : null,
      h('p', { class: 'muted' }, LOCAL_MODE ? 'Trykk på knappen og velg Filer, iCloud Drive eller Google Drive.' : 'Trykk på knappen for å lagre filen.'),
      h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } }, save, h('button', { class: 'btn ghost', onclick: () => modal.close() }, 'Avbryt'))));
  } catch (e){ console.error(e); toast('Kunne ikke lage sikkerhetskopien.'); }
  btn.disabled = false; btn.lastChild.textContent = label;
}

async function importBackup(file, mode, onProgress){
  const z = await zipRead(file);
  const dj = await z.get('data.json');
  if (!dj) throw new Error('no-data');
  const data = JSON.parse(await dj.text());
  if (data.app !== 'slektsboka') throw new Error('not-ours');
  if (mode === 'replace'){
    Store.persons.clear(); Store.photos.clear();
    await LocalDB.clear('persons'); await LocalDB.clear('photos'); await LocalDB.clear('blobs');
    URLS.forEach(u => URL.revokeObjectURL(u)); URLS.clear();
  }
  for (const p of data.persons || []){ Store.persons.set(p.id, p); await LocalDB.put('persons', p.id, p); }
  const phs = data.photos || [];
  for (let i = 0; i < phs.length; i++){
    const ph = clone(phs[i]);
    if (onProgress) onProgress(i + 1, phs.length);
    const restore = async (assetId, file) => {
      if (file && z.has(file) && !URLS.has(assetId)){
        const b = await z.get(file);
        const typed = new Blob([b], { type: { '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' }[file.slice(file.lastIndexOf('.'))] || 'application/octet-stream' });
        await LocalDB.put('blobs', assetId, typed);
        URLS.set(assetId, URL.createObjectURL(typed));
      }
    };
    await restore(ph.assetId, ph.file);
    delete ph.file;
    for (const m of (ph.more || [])){ await restore(m.assetId, m.file); delete m.file; }
    Store.photos.set(ph.id, ph); await LocalDB.put('photos', ph.id, ph);
  }
  Store.emit();
  return { nPersons: (data.persons || []).length, nPhotos: phs.length };
}

async function startRestore(file){
  let data = null;
  try {
    const z = await zipRead(file);
    const dj = await z.get('data.json');
    data = dj ? JSON.parse(await dj.text()) : null;
  } catch (e){ console.error(e); }
  if (!data || data.app !== 'slektsboka'){ toast('Dette ser ikke ut som en sikkerhetskopi fra Slektsboka.'); return; }
  const when = data.exported ? new Date(data.exported).toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' }) : 'ukjent dato';
  let armed = false;
  const busy = on => modal.el.querySelectorAll('button').forEach(b => b.disabled = on);
  const run = async mode => {
    busy(true);
    try {
      const r = await importBackup(file, mode, (i, n) => toast('Henter bilde ' + i + ' av ' + n + ' …'));
      modal.close(); toast(plural(r.nPersons, 'person', 'personer') + ' og ' + plural(r.nPhotos, 'bilde', 'bilder') + ' er lest inn');
    } catch (e){ console.error(e); busy(false); toast('Kunne ikke lese inn sikkerhetskopien.'); }
  };
  const replaceBtn = h('button', { class: 'btn danger', onclick: () => {
    if (!armed){ armed = true; replaceBtn.classList.add('sure'); replaceBtn.textContent = 'Trykk igjen for å erstatte alt'; setTimeout(() => { armed = false; replaceBtn.classList.remove('sure'); replaceBtn.textContent = 'Erstatt alt'; }, 4000); return; }
    run('replace');
  } }, 'Erstatt alt');
  const modal = openModal('Last inn sikkerhetskopi', h('div', { class: 'modal-b' },
    h('p', null, 'Kopien fra ' + when + ' inneholder ' + plural((data.persons || []).length, 'person', 'personer') + ' og ' + plural((data.photos || []).length, 'bilde eller kilde', 'bilder og kilder') + '.'),
    h('div', { class: 'fs' }, h('h3', null, 'Slå sammen'), h('p', { class: 'muted' }, 'Legger kopien til det som allerede finnes. Hvis en person eller et bilde finnes begge steder, vinner kopien.'), h('div', null, h('button', { class: 'btn primary', onclick: () => run('merge') }, 'Slå sammen'))),
    h('div', { class: 'fs' }, h('h3', null, 'Erstatt'), h('p', { class: 'muted' }, 'Sletter alt som ligger i appen nå og legger inn kopien. Bruk dette på en ny enhet eller for å gå tilbake til en tidligere kopi.'), h('div', null, replaceBtn))));
}

function backupCard(){
  const last = +lsGet('slekt.lastBackup') || 0;
  const changes = +lsGet('slekt.changes') || 0;
  const fileIn = h('input', { type: 'file', accept: '.zip,application/zip', hidden: true, onchange: e => { const f = e.target.files[0]; e.target.value = ''; if (f) startRestore(f); } });
  const saveBtn = h('button', { class: 'btn primary', onclick: e => startBackup(e.currentTarget) }, ico('upload', 16), 'Lagre sikkerhetskopi');
  const lastTxt = last ? 'Siste sikkerhetskopi: ' + new Date(last).toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' }) + (changes ? ' · ' + plural(changes, 'endring', 'endringer') + ' siden da' : '') : 'Ingen sikkerhetskopi er lagret ennå.';
  return h('section', { class: 'card', style: { marginTop: '24px' } }, h('h2', null, 'Sikkerhetskopi'),
    h('p', { class: 'muted', style: { marginBottom: '12px', maxWidth: '62ch' } }, LOCAL_MODE
      ? 'Dataene ligger bare i nettleseren på denne enheten. Lagre en kopi jevnlig i Filer, iCloud eller Google Drive. Filen inneholder alle personer, kilder og bilder i full oppløsning, og kan leses inn igjen her eller på en ny telefon.'
      : 'Lagre alt som én fil: personer, kilder og bilder i full oppløsning. Filen kan leses inn i GitHub-versjonen av appen, eller brukes som reservekopi.'),
    h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' } }, saveBtn,
      LOCAL_MODE ? h('button', { class: 'btn', onclick: () => fileIn.click() }, 'Last inn sikkerhetskopi') : null, fileIn),
    LOCAL_MODE ? h('p', { class: 'fnote' }, lastTxt) : null);
}

/* ====== Kartgrunnlag (verden + norske kommuner) ====== */
const GEO = { ready: false };
function initGeo(){
  if (GEO.ready) return GEO;
  const world = window.__D.world;
  const kom = window.__D.kom;
  GEO.proj = d3.geoMercator().scale(250).translate([0, 0]);
  const gp = d3.geoPath(GEO.proj);
  if (gp.digits) gp.digits(3);
  const cObj = world.objects.countries, kObj = kom.objects.Kommuner;
  GEO.dLand = gp(topojson.feature(world, cObj));
  GEO.dBorders = gp(topojson.mesh(world, cObj, (a, b) => a !== b));
  const kf = topojson.feature(kom, kObj);
  GEO.kFeatures = kf.features;
  GEO.dKland = gp(kf);
  GEO.dKcoast = gp(topojson.mesh(kom, kObj, (a, b) => a === b));
  GEO.dKom = gp(topojson.mesh(kom, kObj, (a, b) => a !== b && a.properties.f === b.properties.f));
  GEO.dCounty = gp(topojson.mesh(kom, kObj, (a, b) => a !== b && a.properties.f !== b.properties.f));
  GEO.ready = true;
  return GEO;
}
function kommuneAt(lon, lat){
  initGeo();
  for (const f of GEO.kFeatures){ try { if (d3.geoContains(f, [lon, lat])) return f.properties.n; } catch (_) {} }
  return null;
}

/* host: element med position:relative. Returnerer API for projeksjon, zoom og tilpasning. */
function createBaseMap(host, opts = {}){
  initGeo();
  const zoomable = opts.zoom !== false;
  const svg = h('svg', { class: 'basemap', role: 'img', 'aria-label': 'Kart' });
  const g = h('g');
  const pLand = h('path', { class: 'p-land', d: GEO.dLand });
  const pBorder = h('path', { class: 'p-border', d: GEO.dBorders });
  const pCoast = h('path', { class: 'p-coast', d: GEO.dKcoast });
  const pK = h('path', { class: 'p-kland', d: GEO.dKland });
  const pKom = h('path', { class: 'p-kom', d: GEO.dKom });
  const pCounty = h('path', { class: 'p-county', d: GEO.dCounty });
  const routeG = h('g');
  g.append(pLand, pBorder, pK, pKom, pCounty, pCoast, routeG);
  svg.appendChild(g);
  host.appendChild(svg);

  let W = 0, H = 0, T = d3.zoomIdentity, pendingFit = null;
  const subs = new Set();
  const kMax = opts.kMax || 1800;
  let zb = null;

  function layers(){
    const k = T.k;
    pKom.setAttribute('opacity', String(Math.max(0, Math.min(1, (k - 2.5) / 5))));
    pCounty.setAttribute('opacity', k > 1.5 ? '1' : String(Math.max(0, (k - 0.8) / 0.7)));
    pBorder.setAttribute('opacity', k > 0.6 ? '1' : '0.5');
  }
  function apply(t){
    T = t;
    g.setAttribute('transform', 'translate(' + T.x + ',' + T.y + ') scale(' + T.k + ')');
    layers();
    subs.forEach(f => f(T));
  }
  if (zoomable){
    zb = d3.zoom().scaleExtent([0.12, kMax]).on('zoom', e => apply(e.transform));
    d3.select(svg).call(zb).on('dblclick.zoom', null);
  }
  const api = {
    svg, host, routeG,
    get T(){ return T; },
    get size(){ return [W, H]; },
    onTransform(f){ subs.add(f); return () => subs.delete(f); },
    toScreen(lon, lat){ const p = GEO.proj([lon, lat]); return [T.applyX(p[0]), T.applyY(p[1])]; },
    fromScreen(x, y){ return GEO.proj.invert([T.invertX(x), T.invertY(y)]); },
    project(lon, lat){ return GEO.proj([lon, lat]); },
    zoomBy(f){ if (zb) d3.select(svg).transition().duration(260).call(zb.scaleBy, f); },
    fit(points, o = {}){
      if (!W || !H){ pendingFit = [points, o]; return; }
      pendingFit = null;
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      points.forEach(([lo, la]) => { const p = GEO.proj([lo, la]); if (!p || !isFinite(p[0]) || !isFinite(p[1])) return; x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); y0 = Math.min(y0, p[1]); y1 = Math.max(y1, p[1]); });
      if (!isFinite(x0)){ return api.fit([[4, 57.5], [30, 71]], o); /* Skandinavia */ }
      const minSpan = o.minSpan || 14;
      let dx = Math.max(x1 - x0, minSpan), dy = Math.max(y1 - y0, minSpan * H / W);
      const pad = o.pad == null ? 0.2 : o.pad;
      const k = Math.max(0.12, Math.min(o.maxK || kMax, Math.min(W / (dx * (1 + 2 * pad)), H / (dy * (1 + 2 * pad)))));
      const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
      const t = d3.zoomIdentity.translate(W / 2 - k * cx, H / 2 - k * cy).scale(k);
      if (zb){
        if (o.animate) d3.select(svg).transition().duration(600).call(zb.transform, t);
        else d3.select(svg).call(zb.transform, t);
      } else apply(t);
    }
  };
  const ro = new ResizeObserver(() => {
    const r = host.getBoundingClientRect();
    const nw = Math.round(r.width), nh = Math.round(r.height);
    if (nw === W && nh === H) return;
    const first = !W;
    W = nw; H = nh;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    if (pendingFit && W && H) api.fit(pendingFit[0], pendingFit[1]);
    else if (!first) subs.forEach(f => f(T));
  });
  ro.observe(host);
  api.destroy = () => { ro.disconnect(); subs.clear(); };
  layers();
  return api;
}

/* ====== Stedsfelt og kartvelger ====== */
function openPlacePicker(cur, cb, o = {}){
  const host = h('div', { class: 'pick' });
  const search = h('input', { class: 'inp', type: 'search', placeholder: 'Søk etter sted for å flytte kartet dit…', autocomplete: 'off', 'aria-label': 'Søk etter sted' });
  const sw = h('div', { class: 'pf' }, search);
  const status = h('div', { class: 'faint', style: { fontSize: '13px' } }, 'Trykk i kartet for å sette punktet. Dra og zoom for å finne riktig sted.');
  const useBtn = h('button', { class: 'btn primary', type: 'button', disabled: true }, 'Bruk dette punktet');
  const sugBox = h('div', { class: 'sugbox' });
  const sugQ = h('input', { class: 'inp', type: 'text', placeholder: 'Stedsnavn å søke etter på nett', value: o.query || '', 'aria-label': 'Søk på nett' });
  const sugWhere = h('select', { class: 'inp', 'aria-label': 'Hvor' }, h('option', { value: 'no' }, 'Norge (Kartverket)'), h('option', { value: 'world' }, 'Utlandet (OpenStreetMap)'));
  if (cur && cur.lat != null && (cur.lat < 57 || cur.lat > 72 || cur.lon < 4 || cur.lon > 32)) sugWhere.value = 'world';
  const sugBtn = h('button', { class: 'btn ghost sm', type: 'button' }, 'Foreslå sted');
  const sugList = h('div', { class: 'suglist' });
  sugBox.append(h('div', { class: 'faint', style: { fontSize: '13px' } }, 'Forslag fra nett. Ingenting settes før du trykker på et forslag og så «Bruk dette punktet».'), h('div', { class: 'sugrow' }, sugQ, sugWhere, sugBtn), sugList);
  const body = h('div', { class: 'modal-b' }, sw, host, status, sugBox, h('div', { class: 'form-actions', style: { position: 'static', borderTop: '0', padding: '0', margin: '0' } }, h('span'), useBtn));
  const modal = openModal('Velg sted på kartet', body, { cls: 'wide' });
  const base = createBaseMap(host, {});
  let pt = cur && cur.lat != null ? { lat: cur.lat, lon: cur.lon } : null;
  let pickedName = null, sugName = null;
  const pin = h('div', { class: 'pin' });
  pin.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 22s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12z" fill="#8A5A3C" stroke="#fff" stroke-width="1.6"/><circle cx="12" cy="10" r="2.6" fill="#fff"/></svg>';
  pin.style.display = 'none';
  host.appendChild(pin);
  host.appendChild(h('div', { class: 'hint' }, h('span', null, 'Dra for å flytte · klyp eller rull for å zoome')));
  function place(){
    if (!pt){ pin.style.display = 'none'; return; }
    const [x, y] = base.toScreen(pt.lon, pt.lat);
    pin.style.display = ''; pin.style.left = x + 'px'; pin.style.top = y + 'px';
  }
  base.onTransform(place);
  base.fit(pt ? [[pt.lon, pt.lat]] : [[4, 57.5], [30, 71]], { minSpan: pt ? 8 : 14 });
  function setPt(p){
    pt = p; place(); useBtn.disabled = false;
    status.textContent = 'Valgt punkt: ' + p.lat.toFixed(4) + ', ' + p.lon.toFixed(4) + (kommuneAt(p.lon, p.lat) ? ' · ' + kommuneAt(p.lon, p.lat) + ' kommune' : '');
  }
  if (pt) setPt(pt);
  base.svg.addEventListener('click', e => {
    const r = host.getBoundingClientRect();
    const [lon, lat] = base.fromScreen(e.clientX - r.left, e.clientY - r.top);
    pickedName = null; sugName = null;
    setPt({ lat: +lat.toFixed(4), lon: +lon.toFixed(4) });
  });
  async function suggest(){
    const q = sugQ.value.trim(); if (q.length < 2) return;
    clear(sugList); sugList.append(h('div', { class: 'faint' }, 'Søker…')); sugBtn.disabled = true;
    let items = [];
    try {
      if (sugWhere.value === 'no'){
        const r = await fetch('https://ws.geonorge.no/stedsnavn/v1/navn?sok=' + encodeURIComponent(q) + '&fuzzy=true&treffPerSide=12&utkoordsys=4258');
        const j = await r.json();
        items = (j.navn || []).map(n => ({ name: n.skrivemåte || (n.stedsnavn && n.stedsnavn[0] && n.stedsnavn[0].skrivemåte), type: n.navneobjekttype, where: [(n.kommuner || []).map(k => k.kommunenavn).join('/'), (n.fylker || []).map(k => k.fylkesnavn).join('/')].filter(Boolean).join(', '), lat: n.representasjonspunkt && n.representasjonspunkt.nord, lon: n.representasjonspunkt && n.representasjonspunkt.øst })).filter(x => x.name && x.lat != null);
      } else {
        const r = await fetch('https://nominatim.openstreetmap.org/search?format=jsonv2&limit=10&addressdetails=1&accept-language=nb&q=' + encodeURIComponent(q));
        const j = await r.json();
        items = j.map(n => ({ name: noPlace(n.name || n.display_name.split(',')[0]), type: n.type, where: noPlace(n.display_name.split(',').slice(1, 4).join(',').trim()), lat: +n.lat, lon: +n.lon }));
      }
    } catch (e){ console.error(e); clear(sugList); sugList.append(h('div', { class: 'faint' }, 'Fikk ikke kontakt med søketjenesten. Du kan fortsatt trykke i kartet.')); sugBtn.disabled = false; return; }
    sugBtn.disabled = false; clear(sugList);
    if (!items.length){ sugList.append(h('div', { class: 'faint' }, 'Ingen forslag. Prøv en annen stavemåte, eller trykk i kartet.')); return; }
    items.forEach(it => sugList.append(h('button', { type: 'button', class: 'sugit', onclick: () => {
      pickedName = null; sugName = it.name;
      base.fit([[it.lon, it.lat]], { minSpan: 0.6, animate: true });
      setPt({ lat: +(+it.lat).toFixed(4), lon: +(+it.lon).toFixed(4) });
      status.textContent = 'Forslag: ' + it.name + (it.where ? ' (' + it.where + ')' : '') + '. Sjekk at punktet stemmer, og trykk «Bruk dette punktet».';
    } }, h('b', null, it.name), h('span', { class: 'faint' }, [it.type, it.where].filter(Boolean).join(' · ')))));
  }
  sugBtn.addEventListener('click', suggest);
  sugQ.addEventListener('keydown', e => { if (e.key === 'Enter'){ e.preventDefault(); suggest(); } });
  autocomplete(search, q => searchPlaces(q), it => {
    pickedName = it.place.name;
    base.fit([[it.place.lon, it.place.lat]], { minSpan: 5, animate: true });
    setPt({ lat: it.place.lat, lon: it.place.lon });
    search.value = '';
  });
  useBtn.addEventListener('click', () => {
    if (!pt) return;
    const out = { lat: pt.lat, lon: pt.lon };
    out.name = pickedName || kommuneAt(pt.lon, pt.lat) || null;
    out.sugName = sugName;
    base.destroy(); modal.close(); cb(out);
  });
}

const pn = pl => noPlace(pl.name) + (pl.now ? ' (nå ' + pl.now + ')' : '');
function placeField(initial, onChange, o = {}){
  let v = initial ? clone(initial) : { name: '', lat: null, lon: null };
  if (v.kom === undefined && v.name && v.farm === undefined) v._kom0 = v.name;
  const wrap = h('div', { class: 'pfs' });
  const W = el => h('div', { class: 'pf' }, el);
  const komInp = h('input', { class: 'inp', type: 'text', placeholder: o.placeholder || 'Kommune eller sted, f.eks. Hosanger, Voss eller Chicago', value: v.kom != null ? v.kom : (v.name || ''), autocomplete: 'off', 'aria-label': (o.label || 'Sted') + ' – kommune' });
  const farmInp = h('input', { class: 'inp', type: 'text', placeholder: 'Gård eller sted i kommunen (valgfritt)', value: v.farm || '', autocomplete: 'off', 'aria-label': (o.label || 'Sted') + ' – gård/sted' });
  const regInp = h('input', { class: 'inp', type: 'text', placeholder: 'Region/land, f.eks. Minnesota, USA (valgfritt)', value: v.region || '', autocomplete: 'off', 'aria-label': (o.label || 'Sted') + ' – region/land' });
  const st = h('div', { class: 'st' });
  const nowEl = h('div', { class: 'faint pf-now' });
  wrap.append(W(komInp), nowEl, W(farmInp), W(regInp), st);
  const compose = () => {
    v.kom = noPlace(komInp.value.trim()); v.farm = farmInp.value.trim(); v.region = noPlace(regInp.value.trim());
    v.name = [v.farm, v.kom, v.region].filter(Boolean).join(', ');
    ['kom', 'farm', 'region', 'now'].forEach(k => { if (!v[k]) delete v[k]; });
    delete v._kom0;
  };
  const out = () => { const c = clone(v); delete c._kom0; return (c.name || c.lat != null) ? { ...c, name: c.name || '', lat: c.lat != null ? c.lat : null, lon: c.lon != null ? c.lon : null } : null; };
  function status(){
    clear(st); clear(nowEl);
    if (v.now) nowEl.textContent = 'Nå en del av ' + v.now + (v.approx && v.pos !== 'manual' ? ' · punktet er omtrentlig (midt i dagens kommune)' : '');
    const btn = h('button', { type: 'button', class: 'btn ghost sm', onclick: () => openPlacePicker(v, pt => {
      v.lat = pt.lat; v.lon = pt.lon; v.pos = 'manual'; delete v.approx;
      if (pt.sugName && !farmInp.value.trim() && (komInp.value.trim() || '').toLowerCase() !== pt.sugName.toLowerCase()) farmInp.value = pt.sugName;
      if (!komInp.value.trim() && pt.name) komInp.value = pt.name;
      compose(); onChange(out()); status();
    }, { query: farmInp.value.trim() || komInp.value.trim() }) }, ico('pin', 15), v.lat != null ? 'Flytt på kartet' : 'Velg på kartet');
    if (v.lat != null){ st.className = 'st ok'; st.append(h('span', null, '✓ På kartet' + (v.approx && v.pos !== 'manual' ? ' (omtrentlig)' : '')), btn); }
    else { st.className = 'st'; st.append(h('span', null, 'Ikke plassert på kartet ennå'), btn); }
  }
  const upd = () => { compose(); onChange(out()); };
  komInp.addEventListener('input', () => { v.now = ''; upd(); });
  farmInp.addEventListener('input', upd); regInp.addEventListener('input', upd);
  [komInp, regInp].forEach(i => i.addEventListener('blur', () => { const t = noPlace(i.value); if (t !== i.value){ i.value = t; upd(); } }));
  autocomplete(komInp, q => searchPlaces(q, 8), it => {
    const pl = it.place;
    komInp.value = pl.kom || pl.name;
    if (pl.farm){ farmInp.value = pl.farm; }
    if (pl.region !== undefined && pl.region) regInp.value = pl.region;
    v.now = pl.now || ''; v.approx = pl.approx; v.lat = pl.lat; v.lon = pl.lon; v.pos = pl.farm ? 'manual' : 'kom';
    compose(); onChange(out()); status();
  });
  // gjenbruk gårder som er brukt før i samme kommune
  autocomplete(farmInp, q => {
    const k = komInp.value.trim().toLowerCase(), nq = norm(q);
    if (!k || nq.length < 1) return [];
    return usedPlaces().filter(x => x.farm && x.kom && x.kom.toLowerCase() === k && norm(x.farm).includes(nq)).slice(0, 6).map(x => ({ label: x.farm, sub: 'brukt før · ' + x.kom, place: x }));
  }, it => {
    farmInp.value = it.place.farm; v.lat = it.place.lat; v.lon = it.place.lon; v.pos = 'manual'; delete v.approx;
    compose(); onChange(out()); status();
  });
  status();
  return wrap;
}

/* ====== Velg person fra registeret (med aldersvurdering) ====== */
const ROLE_LABEL = { father: 'far', mother: 'mor', coparent: 'medforelder', donor: 'donor', partner: 'partner', child: 'barn', sibling: 'søsken' };
function relatedSets(id){
  const anc = new Set(), desc = new Set();
  (function up(i){ const p = Store.persons.get(i); if (!p) return; [p.fatherId, p.motherId].forEach(x => { if (x && !anc.has(x)){ anc.add(x); up(x); } }); })(id);
  (function down(i){ Idx.kidsOf(i).forEach(c => { if (!desc.has(c.id)){ desc.add(c.id); down(c.id); } }); })(id);
  return { anc, desc };
}
/* Vurderer om kandidaten c passer i alder som <role> til ref. Returnerer { lvl: 0 god, 1 ukjent, 2 uvanlig, 3 passer ikke, gap, ideal } */
function ageFit(role, ref, c){
  const rb = ref.birthYear, cb = c.birthYear;
  const r = { lvl: 1, gap: null };
  // dødsår gir også informasjon
  if (role === 'father' || role === 'mother' || role === 'coparent' || role === 'donor'){
    if (rb != null && c.deathYear != null && c.deathYear < rb - (role === 'mother' || c.sex === 'f' ? 0 : 1)){ r.lvl = 3; return r; }
  }
  if (role === 'child'){
    if (cb != null && ref.deathYear != null && ref.deathYear < cb - (ref.sex === 'f' ? 0 : 1)){ r.lvl = 3; return r; }
  }
  if (rb == null || cb == null) return r;
  const parentRange = (sex, gap) => {
    const [g0, g1, m0, m1] = sex === 'f' ? [16, 48, 12, 54] : [16, 62, 12, 78];
    return gap >= g0 && gap <= g1 ? 0 : gap >= m0 && gap <= m1 ? 2 : 3;
  };
  if (role === 'father' || role === 'mother' || role === 'coparent' || role === 'donor'){ r.gap = rb - cb; r.lvl = parentRange(role === 'mother' || (role !== 'father' && c.sex === 'f') ? 'f' : 'm', r.gap); r.ideal = 29; }
  else if (role === 'child'){ r.gap = cb - rb; r.lvl = parentRange(ref.sex === 'f' ? 'f' : 'm', r.gap); r.ideal = 29; }
  else if (role === 'partner'){ r.gap = Math.abs(cb - rb); r.lvl = r.gap <= 30 ? 0 : r.gap <= 40 ? 2 : 3; r.ideal = 0; }
  else { r.gap = Math.abs(cb - rb); r.lvl = r.gap <= 30 ? 0 : r.gap <= 40 ? 2 : 3; r.ideal = 0; }
  return r;
}
function relAge(role, ref, c){
  if (ref.birthYear == null || c.birthYear == null) return '';
  const d = c.birthYear - ref.birthYear;
  if (d === 0) return 'jevnaldrende';
  return Math.abs(d) + ' år ' + (d < 0 ? 'eldre' : 'yngre');
}
/* opts: { role, ref:{id,birthYear,deathYear,sex}, exclude:Set, title, onPick(p, extra), onNew(), withYear } */
function pickPerson(opts){
  const { role, ref } = opts;
  const ex = new Set(opts.exclude || []);
  ex.add(ref.id);
  const rel = ref.id && Store.persons.has(ref.id) ? relatedSets(ref.id) : { anc: new Set(), desc: new Set() };
  if (role === 'father' || role === 'mother' || role === 'coparent' || role === 'donor') rel.desc.forEach(i => ex.add(i));
  if ((role === 'father' || role === 'mother' || role === 'coparent') && ref.parents){
    // den andre forelderen kan ikke være nær slekt av en forelder som allerede er kjent
    const par = q => q ? [q.fatherId, q.motherId, q.coParentId, q.donorId].filter(Boolean) : [];
    const slot = { father: 0, mother: 1, coparent: 2 }[role];
    ref.parents().filter((x, i) => x && i !== slot).forEach(kid => {
      const K = Store.persons.get(kid); if (!K) return;
      const ps = par(K); ps.forEach(i => ex.add(i));
      ps.forEach(pid => { const P = Store.persons.get(pid); if (!P) return; par(P).forEach(i => ex.add(i)); Idx.siblingsOf(P).forEach(x => ex.add(x.id)); });
      Idx.siblingsOf(K).forEach(x => ex.add(x.id));
    });
  }
  if (role === 'child') rel.anc.forEach(i => ex.add(i));
  if (role === 'partner'){ rel.anc.forEach(i => ex.add(i)); rel.desc.forEach(i => ex.add(i)); const me = Store.persons.get(ref.id); if (me) Idx.siblingsOf(me).forEach(x => ex.add(x.id)); }
  if (role === 'sibling'){ rel.anc.forEach(i => ex.add(i)); rel.desc.forEach(i => ex.add(i)); }
  const cands = [...Store.persons.values()].filter(p => !ex.has(p.id) && !(role === 'father' && p.sex === 'f') && !(role === 'mother' && p.sex === 'm')).map(p => ({ p, fit: ageFit(role, ref, p) }));
  const groups = [[0, 'Passer i alder'], [1, 'Alder ukjent'], [2, 'Mulig, men uvanlig aldersforskjell'], [3, 'Passer ikke i alder']];
  cands.sort((a, b) => a.fit.lvl - b.fit.lvl || (a.fit.gap == null ? 0 : Math.abs(a.fit.gap - a.fit.ideal)) - (b.fit.gap == null ? 0 : Math.abs(b.fit.gap - b.fit.ideal)) || nameCmp(a.p, b.p));
  const search = h('input', { class: 'inp', type: 'search', placeholder: 'Søk i registeret …', autocomplete: 'off', autofocus: true, 'aria-label': 'Søk i registeret', oninput: () => draw() });
  const yearInp = opts.withYear ? h('input', { class: 'inp', type: 'number', inputmode: 'numeric', placeholder: 'Fra år (valgfritt)', 'aria-label': 'Forholdet startet, år' }) : null;
  const kindSel = opts.withYear ? h('select', { class: 'inp', 'aria-label': 'Type forhold' }, [['partner', 'Partner'], ['samboer', 'Samboer'], ['gift', 'Gift']].map(([v, t]) => h('option', { value: v }, t))) : null;
  const list = h('div', { class: 'pk-list' });
  let showBad = false;
  const done = (p) => { modal.close(); opts.onPick(p, { year: yearInp ? intOrNull(yearInp.value) : null, kind: kindSel ? kindSel.value : null }); };
  function draw(){
    const q = norm(search.value);
    clear(list);
    const match = c => !q || norm(fullName(c.p)).includes(q) || norm(c.p.birthName || '').includes(q) || norm((c.p.birthPlace && c.p.birthPlace.name) || '').includes(q) || String(c.p.birthYear || '').includes(q);
    let any = false;
    groups.forEach(([lvl, title]) => {
      const rows = cands.filter(c => c.fit.lvl === lvl && match(c));
      if (!rows.length) return;
      if (lvl === 3 && !q && !showBad){
        list.appendChild(h('button', { type: 'button', class: 'btn sm ghost', onclick: () => { showBad = true; draw(); } }, 'Vis også ' + rows.length + ' som ikke passer i alder'));
        return;
      }
      any = true;
      list.appendChild(h('h3', { class: 'pk-h' }, title));
      rows.forEach(c => {
        const p = c.p;
        list.appendChild(h('button', { type: 'button', class: 'pk-row', onclick: () => done(p) }, avatar(p, 34),
          h('span', { class: 'pk-t' }, h('b', null, fullName(p)), p.birthName ? h('span', { class: 'faint' }, ' (født ' + p.birthName + ')') : null,
            h('span', { class: 'faint pk-s' }, [lifeSpan(p), p.birthPlace && p.birthPlace.name, relAge(role, ref, p)].filter(Boolean).join(' · ')))));
      });
    });
    if (!any && !list.children.length) list.appendChild(h('p', { class: 'muted' }, cands.length ? 'Ingen treff. Prøv et annet søk, eller lag en ny person.' : 'Ingen andre personer i registeret ennå. Lag en ny person.'));
  }
  const refTxt = ref.birthYear != null ? 'Valgt person er født ' + ref.birthYear + '. Forslagene er sortert etter hva som er rimelig aldersforskjell.' : 'Fødselsår er ikke lagt inn for personen, så forslagene er sortert etter navn. Legg inn fødselsår for å få forslag etter alder.';
  const body = h('div', { class: 'modal-b' },
    h('button', { type: 'button', class: 'btn primary', onclick: () => { modal.close(); opts.onNew(); } }, ico('plus', 18), 'Opprett ny person'),
    h('p', { class: 'fnote', style: { margin: 0 } }, refTxt),
    kindSel ? h('div', { class: 'rowline2' }, kindSel, yearInp) : null, search, list);
  const modal = openModal(opts.title || ('Velg ' + ROLE_LABEL[role]), body, {});
  draw();
  return modal;
}
/* Felt i skjema: viser valgt person, åpner velgeren ved trykk */
function personField(opts){
  let value = opts.value || null;
  const box = h('div', { class: 'pfield' });
  const open = () => pickPerson({
    role: opts.role, ref: opts.ref(), exclude: opts.exclude ? opts.exclude() : [], title: opts.title,
    onPick: p => { value = p.id; opts.onChange(p.id); draw(); },
    onNew: () => openPersonForm({ title: 'Ny ' + ROLE_LABEL[opts.role], preset: opts.preset ? opts.preset() : {}, onSaved: np => { value = np.id; opts.onChange(np.id); draw(); } })
  });
  function draw(){
    clear(box);
    const p = value ? Store.persons.get(value) : null;
    box.appendChild(h('button', { type: 'button', class: 'inp pf-btn', 'aria-label': opts.label, onclick: open },
      p ? [avatar(p, 26), h('span', { class: 'pf-n' }, fullName(p), h('span', { class: 'faint' }, ' ' + lifeSpan(p)))] : h('span', { class: 'faint' }, opts.empty || 'Velg eller opprett …')));
    if (p) box.appendChild(h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Fjern', onclick: () => { value = null; opts.onChange(null); draw(); } }, ico('x', 18)));
  }
  draw();
  return box;
}

/* ====== Personskjema ====== */
function openPersonForm(opts = {}){
  const editing = !!opts.person;
  const f = editing ? clone(opts.person) : Object.assign({ id: uid(), given: '', family: '', sex: 'u', birthYear: null, birthDate: '', birthPlace: null, deathYear: null, deathDate: '', deathPlace: null, fatherId: null, motherId: null, coParentId: null, donorId: null, deceased: false, partners: [], moves: [], notes: '', created: Date.now() }, clone(opts.preset || {}));
  f.partners = f.partners || []; f.moves = f.moves || [];
  if (f.donorId) f.donorConceived = true;
  const incoming = [];
  if (editing){
    Store.persons.forEach(o => (o.partners || []).forEach(pt => { if (pt.id === f.id){ incoming.push(o.id); if (!f.partners.some(x => x.id === o.id)) f.partners.push({ id: o.id, year: pt.year == null ? null : pt.year, kind: pt.kind, endYear: pt.endYear, divorced: pt.divorced }); } }));
  }
  const all = [...Store.persons.values()].filter(p => p.id !== f.id).sort(nameCmp);
  const optLabel = p => fullName(p) + (p.birthYear != null ? ' (f. ' + p.birthYear + ')' : '');
  const personSelect = (cur, filter, onch, none) => h('select', { class: 'inp', onchange: e => onch(e.target.value || null), 'aria-label': none },
    h('option', { value: '' }, none), all.filter(filter).map(p => h('option', { value: p.id, selected: p.id === cur }, optLabel(p))));
  const fld = (label, el, cls) => h('div', { class: cls || '' }, h('label', { class: 'lbl' }, label), el);

  const given = h('input', { class: 'inp', value: f.given || '', autocomplete: 'off', autofocus: true, oninput: e => f.given = e.target.value });
  const family = h('input', { class: 'inp', value: f.family || '', autocomplete: 'off', oninput: e => f.family = e.target.value });
  const patInp = h('input', { class: 'inp', value: f.patronym || '', autocomplete: 'off', placeholder: 'f.eks. Olsen eller Olsdatter', oninput: e => f.patronym = e.target.value });
  const birthName = h('input', { class: 'inp', value: f.birthName || '', autocomplete: 'off', placeholder: 'Hvis annet enn etternavnet, f.eks. pikenavn', oninput: e => f.birthName = e.target.value });
  const sexBtns = {};
  const sexSeg = h('div', { class: 'seg', role: 'group', 'aria-label': 'Kjønn' }, [['m', 'Mann'], ['f', 'Kvinne'], ['u', 'Ukjent']].map(([k, t]) => sexBtns[k] = h('button', { type: 'button', 'aria-pressed': String(f.sex === k), onclick: () => { f.sex = k; Object.entries(sexBtns).forEach(([kk, b]) => b.setAttribute('aria-pressed', String(kk === k))); } }, t)));
  const yearInp = (key, ph) => h('input', { class: 'inp', type: 'number', inputmode: 'numeric', min: 0, max: 2100, placeholder: ph || 'År', value: f[key] != null ? f[key] : '', oninput: e => f[key] = intOrNull(e.target.value) });
  const textInp = (key, ph) => h('input', { class: 'inp', type: 'text', placeholder: ph, value: f[key] || '', oninput: e => f[key] = e.target.value });

  const selfRef = () => ({ id: f.id, birthYear: f.birthYear, deathYear: f.deathYear, sex: f.sex, parents: () => [f.fatherId, f.motherId, f.coParentId, f.donorId] });
  const PF = { father: ['Far', 'fatherId'], mother: ['Mor', 'motherId'], coparent: ['Medforelder', 'coParentId'], donor: ['Donor', 'donorId'] };
  const parentField = role => personField({ role, label: PF[role][0], ref: selfRef, value: f[PF[role][1]], empty: 'Ukjent. Velg eller opprett …',
    onChange: v => { f[PF[role][1]] = v; },
    exclude: () => [...f.partners.map(x => x.id), f.fatherId, f.motherId, f.coParentId, f.donorId].filter(Boolean),
    preset: () => (role === 'father' ? { sex: 'm' } : role === 'mother' ? { sex: 'f' } : {}) });
  const partnersBox = h('div', { style: { display: 'grid', gap: '10px' } });
  function drawPartners(){
    clear(partnersBox);
    f.partners.forEach((pt, i) => {
      if (!pt.kind) pt.kind = pt.year != null ? 'gift' : 'partner';
      partnersBox.appendChild(h('div', { class: 'partner-item' },
        personField({ role: 'partner', label: 'Partner', ref: selfRef, value: pt.id, onChange: v => pt.id = v,
          exclude: () => f.partners.filter(x => x !== pt).map(x => x.id).filter(Boolean),
          preset: () => ({}) }),
        h('div', { class: 'rowline2' },
          h('select', { class: 'inp', 'aria-label': 'Type forhold', onchange: e => { pt.kind = e.target.value; drawPartners(); } }, [['partner', 'Partner'], ['samboer', 'Samboer'], ['gift', 'Gift']].map(([v, t]) => h('option', { value: v, selected: pt.kind === v }, t))),
          h('input', { class: 'inp', type: 'number', inputmode: 'numeric', placeholder: 'Fra år (valgfritt)', value: pt.year != null ? pt.year : '', 'aria-label': 'Forholdet startet, år', oninput: e => pt.year = intOrNull(e.target.value) }),
          h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Fjern partner', onclick: () => { f.partners.splice(i, 1); drawPartners(); } }, ico('x', 18))),
        pt.kind === 'gift'
          ? h('div', { class: 'rowline2 endrow' },
              h('label', { class: 'bk-chk' }, h('input', { type: 'checkbox', checked: !!pt.divorced, onchange: e => { pt.divorced = e.target.checked; if (!pt.divorced) pt.endYear = null; drawPartners(); } }), h('span', null, 'Skilt')),
              pt.divorced ? h('input', { class: 'inp', type: 'number', inputmode: 'numeric', placeholder: 'Skilt år (valgfritt)', value: pt.endYear != null ? pt.endYear : '', 'aria-label': 'Skilt, år', oninput: e => pt.endYear = intOrNull(e.target.value) }) : h('span'))
          : h('div', { class: 'rowline2 endrow' },
              h('span', { class: 'faint', style: { fontSize: '13px', alignSelf: 'center' } }, 'Forholdet sluttet'),
              h('input', { class: 'inp', type: 'number', inputmode: 'numeric', placeholder: 'Til år (valgfritt)', value: pt.endYear != null ? pt.endYear : '', 'aria-label': 'Forholdet sluttet, år', oninput: e => pt.endYear = intOrNull(e.target.value) }))));
    });
    partnersBox.appendChild(h('div', null, h('button', { type: 'button', class: 'btn sm', onclick: () => { f.partners.push({ id: null, year: null, kind: 'partner' }); drawPartners(); } }, ico('plus', 16), 'Legg til partner')));
  }
  drawPartners();

  const movesBox = h('div', { style: { display: 'grid', gap: '10px' } });
  function drawMoves(){
    clear(movesBox);
    f.moves.forEach((m, i) => {
      movesBox.appendChild(h('div', { class: 'rowline' },
        placeField(m.place, pl => m.place = pl, { label: 'Bosted', placeholder: 'Bosted, f.eks. Bergen' }),
        h('input', { class: 'inp', type: 'number', inputmode: 'numeric', placeholder: 'Fra år', value: m.year != null ? m.year : '', 'aria-label': 'Bosatt fra år', oninput: e => m.year = intOrNull(e.target.value) }),
        h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Fjern bosted', onclick: () => { f.moves.splice(i, 1); drawMoves(); } }, ico('x', 18))));
    });
    movesBox.appendChild(h('div', null, h('button', { type: 'button', class: 'btn sm', onclick: () => { f.moves.push({ year: null, place: null }); drawMoves(); } }, ico('plus', 16), 'Legg til bosted')));
  }
  drawMoves();

  const notes = h('textarea', { class: 'inp', placeholder: 'Yrke, historier, kilder, kirkebokopplysninger …', oninput: e => f.notes = e.target.value }, f.notes || '');
  notes.value = f.notes || '';

  const delBtn = editing ? h('button', { type: 'button', class: 'btn danger' }, ico('trash', 16), 'Slett person') : h('span');
  let armed = false;
  if (editing) delBtn.addEventListener('click', async () => {
    if (!armed){ armed = true; delBtn.classList.add('sure'); delBtn.lastChild.textContent = 'Trykk igjen for å slette'; setTimeout(() => { armed = false; delBtn.classList.remove('sure'); delBtn.lastChild.textContent = 'Slett person'; }, 4000); return; }
    modal.close(); await Store.deletePerson(f.id); toast('Personen er slettet'); App.go('register');
  });
  const saveBtn = h('button', { type: 'submit', class: 'btn primary' }, 'Lagre');
  const donorWrap = fld('Donor', parentField('donor'), 'half-m');
  const bioField = (role, slot, label) => personField({ role, label, ref: selfRef, value: f[slot], empty: 'Ukjent. Velg eller opprett …', onChange: v => { f[slot] = v; },
    exclude: () => [f.fatherId, f.motherId, f.coParentId, f.bioFatherId, f.bioMotherId].filter(Boolean), preset: () => (role === 'father' ? { sex: 'm' } : { sex: 'f' }) });
  const adoptYear = h('input', { class: 'inp', type: 'number', inputmode: 'numeric', placeholder: 'Adopsjonsår (valgfritt)', value: f.adoptYear != null ? f.adoptYear : '', 'aria-label': 'Adopsjonsår', oninput: e => f.adoptYear = intOrNull(e.target.value) });
  const adoptWrap = h('div', { class: 'fgrid adopt-wrap' }, fld('Adopsjonsår', adoptYear, 'full'), fld('Biologisk far', bioField('father', 'bioFatherId', 'Biologisk far'), 'half-m'), fld('Biologisk mor', bioField('mother', 'bioMotherId', 'Biologisk mor'), 'half-m'),
    h('p', { class: 'faint full', style: { fontSize: '13px', margin: '0' } }, 'Når personen er adoptert, er Far, Mor og Medforelder over de juridiske (adoptive) foreldrene. Her kan du legge inn de biologiske foreldrene hvis de er kjent.'));
  const donorChk = h('label', { class: 'bk-chk', for: 'f-donorchild' }, h('input', { type: 'checkbox', id: 'f-donorchild', checked: !!f.donorConceived, onchange: e => { f.donorConceived = e.target.checked; donorUpd(); } }), h('span', null, 'Donorbarn', h('small', null, 'Vis feltet for donor.')));
  const adoptChk = h('label', { class: 'bk-chk', for: 'f-adopted' }, h('input', { type: 'checkbox', id: 'f-adopted', checked: !!f.adopted, onchange: e => { f.adopted = e.target.checked; donorUpd(); } }), h('span', null, 'Adoptert', h('small', null, 'Vis felt for adopsjon og biologiske foreldre.')));
  const patWrap = fld('Patronym (valgfritt)', patInp, 'full');
  const patUpd = () => { patWrap.style.display = ((f.birthYear != null && f.birthYear < 1900) || (f.patronym || '').trim()) ? '' : 'none'; };
  const youngUpd = () => {
    if (!diedYoung(f)) return;
    const set = (id, key) => { const el = document.getElementById(id); if (el && !f[key]){ f[key] = true; el.checked = true; } };
    if (!f.partners.some(x => x.id)) set('f-nopart', 'noPartners');
    if (!Idx.kidsOf(f.id).length) set('f-nokids', 'noKids');
  };
  const donorUpd = () => { donorChk.style.display = ((f.birthYear != null && f.birthYear < 1970) && !f.donorConceived) ? 'none' : ''; donorWrap.style.display = f.donorConceived ? '' : 'none'; adoptWrap.style.display = f.adopted ? '' : 'none'; };
  patUpd(); donorUpd();
  const form = h('form', { class: 'modal-b', novalidate: true, oninput: () => { patUpd(); donorUpd(); youngUpd(); }, onsubmit: async e => {
    e.preventDefault();
    if (!(f.given || '').trim() && !(f.family || '').trim()){ given.focus(); toast('Skriv inn et navn først.'); return; }
    saveBtn.disabled = true;
    const o = clone(f);
    o.given = (o.given || '').trim(); o.family = (o.family || '').trim(); o.birthName = (o.birthName || '').trim(); o.patronym = (o.patronym || '').trim(); if (!o.patronym) delete o.patronym;
    o.birthPlace = o.birthPlace && (o.birthPlace.name || o.birthPlace.lat != null) ? o.birthPlace : null;
    o.emigratedTo = o.emigratedTo && (o.emigratedTo.name || o.emigratedTo.lat != null) ? o.emigratedTo : null; if (!o.emigratedTo) delete o.emigratedTo; if (o.emigratedYear == null || !o.emigratedTo) delete o.emigratedYear;
    o.deathPlace = o.deathPlace && (o.deathPlace.name || o.deathPlace.lat != null) ? o.deathPlace : null;
    o.moves = (o.moves || []).filter(m => m.place && (m.place.name || m.place.lat != null)).sort((a, b) => (a.year == null) - (b.year == null) || (a.year || 0) - (b.year || 0));
    const seen = new Set();
    o.partners = (o.partners || []).filter(pt => pt.id && !seen.has(pt.id) && seen.add(pt.id)).map(pt => { const q = Object.assign({}, pt); if (q.kind !== 'gift') delete q.divorced; if (!q.divorced) { if (q.kind === 'gift') delete q.endYear; } if (q.endYear == null) delete q.endYear; return q; });
    if (o.fatherId === o.id) o.fatherId = null;
    if (o.motherId === o.id) o.motherId = null;
    if (o.coParentId === o.id) o.coParentId = null;
    if (o.donorId === o.id) o.donorId = null;
    if (!o.donorConceived){ delete o.donorId; delete o.donorConceived; } else if (!o.donorId) o.donorConceived = true;
    if (!o.adopted){ delete o.adopted; delete o.adoptYear; delete o.bioFatherId; delete o.bioMotherId; }
    else { if (o.adoptYear == null) delete o.adoptYear; if (!o.bioFatherId || o.bioFatherId === o.id) delete o.bioFatherId; if (!o.bioMotherId || o.bioMotherId === o.id) delete o.bioMotherId; }
    if (!o.coParentId) delete o.coParentId; if (!o.donorId) delete o.donorId;
    if (!o.deceased || o.deathYear != null) delete o.deceased;
    o.deathCause = (o.deathCause || '').trim(); if (!o.deathCat) delete o.deathCat; if (!(o.deceased || o.deathYear != null || (o.deathDate || '').trim() || o.deathPlace)) delete o.deathCat; if (!o.deathCause || !(o.deceased || o.deathYear != null || (o.deathDate || '').trim() || o.deathPlace)) delete o.deathCause;
    if (!o.noKids) delete o.noKids; if (!o.noSiblings) delete o.noSiblings; if (!o.noPartners) delete o.noPartners;
    const saved = await Store.savePerson(o);
    // fjern gjensidige partnerlenker som er tatt bort i skjemaet
    for (const oid of incoming){
      if (!seen.has(oid)){
        const other = Store.persons.get(oid);
        if (other){ other.partners = (other.partners || []).filter(x => x.id !== o.id); await Store.savePerson(other); }
      }
    }
    modal.close();
    if (opts.onSaved) opts.onSaved(saved);
    toast(editing ? 'Endringene er lagret' : 'Personen er lagt til');
  } },
    h('div', { class: 'fgrid' }, fld('Fornavn', given, 'half-m'), fld('Etternavn', family, 'half-m'), fld('Fødenavn', birthName, 'full'), patWrap, fld('Kjønn', sexSeg, 'full')),
    h('div', { class: 'fs' }, h('h3', null, 'Født'),
      h('div', { class: 'fgrid' }, fld('År', yearInp('birthYear', 'f.eks. 1872'), 'half-m'), fld('Dato eller detaljer', textInp('birthDate', 'f.eks. 12. mars'), 'half-m'),
        fld('Fødested', placeField(f.birthPlace, pl => f.birthPlace = pl, { label: 'Fødested' }), 'full'))),
    h('div', { class: 'fs' }, h('h3', null, 'Utvandret'),
      h('div', { class: 'fgrid' }, fld('Utvandret til', placeField(f.emigratedTo, pl => f.emigratedTo = pl, { label: 'Utvandret til', placeholder: 'Land, sted eller kommune, f.eks. Minnesota, USA' }), 'full'), fld('År (valgfritt)', yearInp('emigratedYear', 'f.eks. 1882'), 'half-m'))),
    h('div', { class: 'fs' }, h('h3', null, 'Død'),
      h('div', { class: 'fgrid' }, fld('År', yearInp('deathYear', 'f.eks. 1941'), 'half-m'), fld('Dato eller detaljer', textInp('deathDate', 'f.eks. 3. januar'), 'half-m'),
        fld('Dødssted', placeField(f.deathPlace, pl => f.deathPlace = pl, { label: 'Dødssted' }), 'full'),
        h('div', { class: 'full' }, h('label', { class: 'lbl' }, 'Dødsårsak, gruppe (vises ikke på personsiden)'), h('select', { class: 'inp', onchange: e => f.deathCat = e.target.value }, h('option', { value: '' }, 'Ikke bekreftet'), ...DEATH_CATS.map(v => h('option', { value: v, selected: deathCatOf(f) === v }, v)))),
        h('div', { class: 'full' }, h('label', { class: 'lbl' }, 'Dødsårsak, spesifisering (valgfri)'), h('input', { class: 'inp', type: 'text', value: deathSpecOf(f), placeholder: 'f.eks. lungebetennelse, falt fra tak', autocomplete: 'off', oninput: e => f.deathCause = e.target.value })),
        h('label', { class: 'bk-chk full', for: 'f-deceased' }, h('input', { type: 'checkbox', id: 'f-deceased', checked: !!f.deceased, onchange: e => f.deceased = e.target.checked }), h('span', null, 'Personen er død', h('small', null, 'Kryss av hvis tidspunktet er ukjent. Er dødsåret fylt ut, regnes personen som død uansett.'))))),
    h('div', { class: 'fs' }, h('h3', null, 'Foreldre'),
      h('div', { class: 'fgrid' }, fld('Far', parentField('father'), 'half-m'), fld('Mor', parentField('mother'), 'half-m'),
        fld('Medforelder', parentField('coparent'), 'half-m'), donorWrap),
      h('div', { class: 'chkrow' }, donorChk, adoptChk), adoptWrap,
      h('p', { class: 'faint', style: { fontSize: '13px', margin: '6px 0 0' } }, 'Medforelder er den andre juridiske forelderen når foreldrene har samme kjønn, for eksempel medmor eller medfar. Donor er den biologiske forelderen som ikke er juridisk forelder, for eksempel sæddonor, eggdonor eller surrogat.')),
    h('div', { class: 'fs' }, h('h3', null, 'Partnere'), partnersBox,
      h('label', { class: 'bk-chk', for: 'f-nopart' }, h('input', { type: 'checkbox', id: 'f-nopart', checked: !!f.noPartners, onchange: e => f.noPartners = e.target.checked }), h('span', null, 'Ingen kjente partnere', h('small', null, 'Gjelder når det ikke er registrert noen partnere.')))),
    h('div', { class: 'fs' }, h('h3', null, 'Barn og søsken'),
      h('label', { class: 'bk-chk', for: 'f-nokids' }, h('input', { type: 'checkbox', id: 'f-nokids', checked: !!f.noKids, onchange: e => f.noKids = e.target.checked }), h('span', null, 'Ingen kjente barn', h('small', null, 'Gjelder når det ikke er registrert noen barn.'))),
      h('label', { class: 'bk-chk', for: 'f-nosibs' }, h('input', { type: 'checkbox', id: 'f-nosibs', checked: !!f.noSiblings, onchange: e => f.noSiblings = e.target.checked }), h('span', null, 'Ingen kjente søsken', h('small', null, 'Gjelder når det ikke er registrert noen søsken.')))),
    h('div', { class: 'fs' }, h('h3', null, 'Bosteder gjennom livet'),
      h('p', { class: 'faint', style: { fontSize: '13px' } }, 'Fødestedet brukes som første bosted. Legg til hvert sted personen flyttet til, med årstallet flyttingen skjedde. Stedene med kartposisjon vises i kartanimasjonen.'), movesBox),
    h('div', null, h('label', { class: 'lbl' }, 'Notater'), notes),
    h('div', { class: 'form-actions' }, delBtn, h('div', { style: { display: 'flex', gap: '8px' } }, h('button', { type: 'button', class: 'btn ghost', onclick: () => modal.close() }, 'Avbryt'), saveBtn)));
  const modal = openModal(editing ? 'Rediger ' + fullName(opts.person) : (opts.title || 'Ny person'), form, { cls: 'wide' });
  return modal;
}

/* ====== Profilbilde: velg bilde og juster utsnittet ====== */
/* Liste over profilbilder for ulike aldre (vises bare på personsiden). */
function openAgePortraits(pid){
  const host = h('div', { class: 'modal-b' });
  const modal = openModal('Profilbilder gjennom livet', host, {});
  const p = Store.persons.get(pid); if (!p) return modal;
  host.appendChild(h('p', { class: 'faint', style: { fontSize: '13.5px', margin: '0 0 8px' } }, 'Disse vises bare inne på personsiden til ' + (p.given || 'personen') + '. Hovedprofilbildet brukes ellers overalt.'));
  AGE_SLOTS.forEach(([k, label]) => {
    const sp = slotPortrait(p, k);
    host.appendChild(h('div', { class: 'age-row' }, sp ? avatar(Object.assign({}, p, { portrait: sp.c }), 52) : h('span', { class: 'av empty', style: { '--s': '52px' } }),
      h('div', { class: 'age-l' }, h('b', null, label), h('span', { class: 'faint' }, sp ? (sp.ph.caption || 'Valgt') : 'Ikke valgt')),
      h('button', { type: 'button', class: 'btn sm', onclick: () => { modal.close(); openPortraitEditor(Store.persons.get(pid), k, () => openAgePortraits(pid)); } }, sp ? 'Endre' : 'Velg bilde')));
  });
  return modal;
}
function openPortraitEditor(p, slot, cb){
  const phs = (Idx.photosOf.get(p.id) || []).map(x => x.photo).filter(ph => !isSource(ph) && ph.assetId && ph.w && ph.h);
  const uniq = [...new Map(phs.map(ph => [ph.id, ph])).values()];
  if (!uniq.length){ toast('Legg først inn et bilde og tagg ' + (p.given || 'personen') + ' i det.'); return; }
  const slotDef = slot ? AGE_SLOTS.find(x => x[0] === slot) : null;
  const src0 = slot ? (p.portraits || {})[slot] : p.portrait;
  const ageOf = x => (x.year != null && p.birthYear != null) ? x.year - p.birthYear : null;
  const fits = x => slotDef && ageOf(x) != null && ageOf(x) >= slotDef[2] && ageOf(x) <= slotDef[3];
  if (slotDef) uniq.sort((a, b) => (fits(b) ? 1 : 0) - (fits(a) ? 1 : 0));
  const cur = src0 && uniq.find(ph => ph.id === src0.photoId);
  let ph = cur || uniq[0];
  const tagOf = x => { const t = (Idx.photosOf.get(p.id) || []).find(y => y.photo.id === x.id); return t && t.tag.x != null ? t.tag : null; };
  const st = { cx: 0.5, cy: 0.5, z: 1 };
  const init = () => {
    if (cur && ph.id === src0.photoId){ st.cx = src0.cx; st.cy = src0.cy; st.z = src0.z || 1; }
    else { const t = tagOf(ph); st.cx = t ? t.x : 0.5; st.cy = t ? t.y : 0.5; st.z = t ? 2.5 : 1; }
  };
  init();
  const stage = h('div', { class: 'crop-stage' });
  const img = h('img', { alt: '' });
  stage.append(img, h('div', { class: 'crop-grid' }));
  const zoom = h('input', { type: 'range', min: 1, max: 8, step: 0.01, 'aria-label': 'Forstørrelse' });
  const prev = h('div', { class: 'av-slot' });
  const thumbs = h('div', { class: 'crop-thumbs' });
  const apply = () => {
    const g = cropGeom(ph, st); st.cx = g.cx; st.cy = g.cy;
    img.src = photoUrl(ph);
    Object.assign(img.style, { width: g.w + '%', left: g.l + '%', top: g.t + '%' });
    zoom.value = st.z;
    clear(prev).appendChild(avatarPreview(ph, st, 56));
  };
  const avatarPreview = (photo, c, size) => {
    const box = h('span', { class: 'av', style: { '--s': size + 'px' } });
    const g = cropGeom(photo, c);
    box.appendChild(h('img', { src: photoUrl(photo), alt: '', style: { width: g.w + '%', left: g.l + '%', top: g.t + '%' } }));
    return box;
  };
  zoom.addEventListener('input', () => { st.z = +zoom.value; apply(); });
  stage.addEventListener('wheel', e => { e.preventDefault(); st.z = Math.min(8, Math.max(1, st.z * (e.deltaY < 0 ? 1.08 : 1 / 1.08))); apply(); }, { passive: false });
  let drag = null;
  stage.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY, cx: st.cx, cy: st.cy }; try { stage.setPointerCapture(e.pointerId); } catch (_) {} });
  stage.addEventListener('pointermove', e => {
    if (!drag) return;
    const r = stage.getBoundingClientRect(), g = cropGeom(ph, st);
    // ett bildepunkt per boksbredde: boksen viser 'side' kildepiksler
    st.cx = drag.cx - (e.clientX - drag.x) / r.width * g.side / ph.w;
    st.cy = drag.cy - (e.clientY - drag.y) / r.height * g.side / ph.h;
    apply();
  });
  const end = () => { drag = null; };
  stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', end);
  const drawThumbs = () => {
    clear(thumbs);
    uniq.forEach(x => thumbs.appendChild(h('button', { type: 'button', 'aria-pressed': String(x.id === ph.id), 'aria-label': x.caption || 'Bilde', onclick: () => { ph = x; init(); drawThumbs(); apply(); } }, h('img', { src: photoUrl(x), alt: '', loading: 'lazy' }))));
  };
  const save = async () => {
    const q = clone(Store.persons.get(p.id));
    const val = { photoId: ph.id, cx: +st.cx.toFixed(4), cy: +st.cy.toFixed(4), z: +st.z.toFixed(3) };
    if (slot){ q.portraits = Object.assign({}, q.portraits || {}); q.portraits[slot] = val; } else q.portrait = val;
    await Store.savePerson(q); modal.close(); toast('Profilbildet er lagret'); if (cb) cb();
  };
  const reset = async () => { const q = clone(Store.persons.get(p.id)); if (slot){ if (q.portraits){ delete q.portraits[slot]; if (!Object.keys(q.portraits).length) delete q.portraits; } } else delete q.portrait; await Store.savePerson(q); modal.close(); toast(slot ? 'Profilbildet er fjernet' : 'Profilbildet velges automatisk igjen'); if (cb) cb(); };
  const body = h('div', { class: 'modal-b' }, h('div', { class: 'crop' },
    uniq.length > 1 ? thumbs : null,
    stage,
    h('div', { class: 'crop-row' }, h('span', { class: 'faint', style: { fontSize: '13px' } }, 'Zoom'), zoom, prev),
    h('p', { class: 'fnote', style: { margin: 0, textAlign: 'center' } }, 'Dra i bildet for å flytte utsnittet. Bruk glidebryteren for å zoome.')),
    h('div', { class: 'form-actions' }, src0 ? h('button', { type: 'button', class: 'btn ghost', onclick: reset }, slot ? 'Fjern' : 'Velg automatisk') : h('span'),
      h('div', { style: { display: 'flex', gap: '8px' } }, h('button', { type: 'button', class: 'btn ghost', onclick: () => modal.close() }, 'Avbryt'), h('button', { type: 'button', class: 'btn primary', onclick: save }, 'Lagre'))));
  const modal = openModal(slotDef ? 'Profilbilde ' + slotDef[1] + ' – ' + fullName(p) : 'Profilbilde for ' + fullName(p), body, {});
  drawThumbs(); apply();
}

/* ====== Register ====== */
const RegisterView = {
  q: '', sort: 'name',
  mount(root){
    this.root = root;
    this.head = h('div');
    this.search = h('input', { class: 'inp', type: 'search', placeholder: 'Søk etter navn eller sted …', 'aria-label': 'Søk i registeret', oninput: e => { this.q = e.target.value; this.list(); } });
    this.search.value = this.q;
    this.sortSel = h('select', { class: 'inp', style: { width: 'auto' }, 'aria-label': 'Sortering', onchange: e => { this.sort = e.target.value; this.list(); } },
      [['name', 'Sorter: etternavn'], ['given', 'Sorter: fornavn'], ['birth', 'Sorter: fødselsår'], ['gen', 'Sorter: generasjon'], ['recent', 'Sorter: nylig lagt til']].map(([v, t]) => h('option', { value: v, selected: v === this.sort }, t)));
    this.ul = h('ul', { class: 'people' });
    this.tools = h('div', { class: 'tools' }, h('div', { class: 'grow' }, ico('search', 18), this.search), this.sortSel);
    this.body = h('div');
    this.backupHost = h('div');
    root.append(this.head, this.tools, this.body, this.backupHost);
    this.update();
  },
  update(){
    const n = Store.persons.size;
    const ys = [...Store.persons.values()].map(p => p.birthYear).filter(y => y != null);
    clear(this.head).appendChild(h('div', { class: 'page-h' },
      h('div', null, h('h1', null, 'Personregister'),
        h('p', null, n ? plural(n, 'person', 'personer') + (ys.length ? ' · eldste kjente fødselsår ' + Math.min(...ys) : '') : 'Ingen personer ennå')),
      h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } }, n > 1 ? h('button', { class: 'btn', onclick: () => App.go('kinship') }, ico('users', 16), 'Slektskap') : null,
        n ? h('button', { class: 'btn', onclick: () => App.go('places') }, ico('pin', 16), 'Steder') : null, n ? h('button', { class: 'btn', onclick: () => App.go('quality') }, ico('check', 16), 'Kvalitetssjekk') : null,
        Store.canWrite ? h('button', { class: 'btn primary', onclick: () => openPersonForm({ onSaved: p => App.go('person', p.id) }) }, ico('plus', 18), 'Ny person') : null)));
    this.tools.style.display = n ? '' : 'none';
    this.list();
    clear(this.backupHost);
    if (LOCAL_MODE ? Store.mode === 'local' : n > 0) this.backupHost.appendChild(backupCard());
  },
  list(){
    clear(this.body);
    const all = [...Store.persons.values()];
    if (!all.length && !Store.ready && Store.mode !== 'memory'){ this.body.appendChild(h('p', { class: 'muted' }, 'Laster …')); return; }
    if (!all.length){
      this.body.appendChild(h('div', { class: 'empty' }, h('h2', null, 'Registeret er tomt'),
        h('p', null, 'Begynn med deg selv eller den eldste du kjenner til, og bygg bakover og fremover. Fødested og bosteder med kartposisjon gjør at personen dukker opp i kartanimasjonen.'),
        Store.canWrite ? h('button', { class: 'btn primary', onclick: () => openPersonForm({ onSaved: p => App.go('person', p.id) }) }, ico('plus', 18), 'Legg til første person') : null,
        (Store.canWrite && EXAMPLE_DATA.length) ? h('button', { class: 'btn ghost', onclick: () => Store.loadExample() }, 'Prøv med en eksempelfamilie') : null));
      return;
    }
    const q = norm(this.q);
    let rows = all.filter(p => !q || norm(fullName(p)).includes(q) || norm(p.birthName || '').includes(q) || norm((p.birthPlace && p.birthPlace.name) || '').includes(q) || (p.moves || []).some(m => m.place && norm(m.place.name).includes(q)));
    if (this.sort === 'birth') rows.sort((a, b) => (a.birthYear == null) - (b.birthYear == null) || a.birthYear - b.birthYear || nameCmp(a, b));
    else if (this.sort === 'recent') rows.sort((a, b) => (b.created || 0) - (a.created || 0));
    else if (this.sort === 'given') rows.sort((a, b) => (a.given || '').localeCompare(b.given || '', 'nb') || (a.family || '').localeCompare(b.family || '', 'nb') || (a.birthYear || 9999) - (b.birthYear || 9999));
    else if (this.sort === 'gen'){ const gm = genMap(); rows.sort((a, b) => (gm.get(a.id) || 0) - (gm.get(b.id) || 0) || (a.birthYear == null) - (b.birthYear == null) || a.birthYear - b.birthYear || nameCmp(a, b)); this.gm = gm; }
    else rows.sort(nameCmp);
    if (!rows.length){ this.body.appendChild(h('div', { class: 'empty' }, h('p', null, 'Ingen treff på «' + this.q + '».'))); return; }
    let ul = h('ul', { class: 'people' });
    let lastGen = null;
    rows.forEach(p => {
      if (this.sort === 'gen'){ const g = this.gm.get(p.id) || 0; if (g !== lastGen){ lastGen = g; if (ul.children.length){ this.body.appendChild(ul); ul = h('ul', { class: 'people' }); } this.body.appendChild(h('h3', { class: 'gen-h' }, 'Generasjon ' + (g + 1))); } }
      const parts = [];
      if (p.birthPlace && p.birthPlace.name) parts.push('Født ' + iPaa(p.birthPlace) + ' ' + noPlace(p.birthPlace.name));
      const last = (p.moves || []).filter(m => m.place && m.place.name).slice(-1)[0];
      if (last && !isDead(p)) parts.push('bor ' + iPaa(last.place) + ' ' + noPlace(last.place.name));
      ul.appendChild(h('li', null, h('button', { class: 'prow', onclick: () => App.go('person', p.id) },
        avatar(p, 46),
        h('div', { class: 'b' }, h('div', { class: 'n' }, fullName(p)), h('div', { class: 's' }, parts.join(' · ') || ' '), siblingText(p) ? h('div', { class: 's' }, siblingText(p)) : null),
        h('div', { class: 'y' }, lifeSpan(p)))));
    });
    this.body.appendChild(ul);
    this.body.appendChild(h('p', { class: 'fnote' }, 'Viser ' + rows.length + ' av ' + all.length + '.'));
  },
  unmount(){}
};

/* ====== Personside ====== */
function lifeEvents(p, o = {}){
  const ev = [];
  const pn = pl => pl && pl.name ? pl.name : null;
  if (p.birthYear != null || p.birthPlace) ev.push({ y: p.birthYear, k: 'b', t: 'Født' + (pn(p.birthPlace) ? ' i ' + pn(p.birthPlace) : ''), s: p.birthDate });
  (p.moves || []).forEach(m => ev.push({ y: m.year, k: 'm', t: 'Bosatt i ' + (pn(m.place) || 'ukjent sted'), s: m.place && m.place.lat == null ? 'ikke på kartet' : '' }));
  Idx.partnersOf(p.id).forEach(x => {
    const k = relKind(x); if (k === 'foreldre') return;
    if (x.year != null) ev.push({ y: x.year, k: 'u', t: (k === 'gift' ? 'Giftet seg med ' : k === 'samboer' ? 'Ble samboer med ' : 'Ble partner med ') + fullName(x.p) });
    if (x.endYear != null) ev.push({ y: x.endYear, k: 'u', t: (k === 'gift' ? 'Ble skilt fra ' : k === 'samboer' ? 'Samboerskapet med ' + fullName(x.p) + ' tok slutt' : 'Forholdet til ' + fullName(x.p) + ' tok slutt') + (k === 'gift' ? fullName(x.p) : '') });
  });
  Idx.kidsOf(p.id).forEach(c => { if (c.birthYear != null) ev.push({ y: c.birthYear, k: 'k', t: 'Barn født: ' + fullName(c) }); });
  if (p.emigratedTo) ev.push({ y: p.emigratedYear == null ? null : p.emigratedYear, k: 'u', t: 'Utvandret til ' + pn(p.emigratedTo) });
  if (p.deathYear != null || p.deathPlace || isDead(p)) ev.push({ y: p.deathYear, k: 'd', t: (p.deathYear == null && !p.deathPlace && !(p.deathDate || '').trim() ? 'Død, tidspunkt ukjent' : 'Døde') + (pn(p.deathPlace) ? ' i ' + pn(p.deathPlace) : ''), s: p.deathDate });
  // dødsfall i rett linje oppover og nedover i personens levetid
  { const lo = p.birthYear != null ? p.birthYear : -Infinity, hi = p.deathYear != null ? p.deathYear : (p.birthYear != null && !isDead(p) ? Infinity : null);
    if (hi != null && (lo !== -Infinity || hi !== Infinity)){
      const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
      const add = (q, word) => { if (q.deathYear != null && q.deathYear >= lo && q.deathYear <= hi) ev.push({ y: q.deathYear, k: 'r', t: cap(word) + ' døde: ' + fullName(q), s: q.deathDate, pid: q.id }); };
      const seen = new Set([p.id]);
      (function up(id, path){ const x = Store.persons.get(id); if (!x) return; [x.fatherId, x.motherId, x.coParentId].filter(Boolean).forEach(pid => { const q = Store.persons.get(pid); if (!q || seen.has(pid)) return; seen.add(pid); const pp = [...path, pid]; add(q, kinWord(pp.length, 0, q.sex, 1, [p.id, ...pp])); up(pid, pp); }); })(p.id, []);
      (function down(id, d){ Idx.kidsOf(id).forEach(c => { if (seen.has(c.id)) return; seen.add(c.id); add(c, kinWord(0, d + 1, c.sex, 1, [])); down(c.id, d + 1); }); })(p.id, 0);
    } }
  if (o.marks && p.birthYear != null){
    const end = p.deathYear != null ? p.deathYear : (isDead(p) ? Math.max(...ev.filter(e => e.y != null).map(e => e.y), p.birthYear) : NOW_YEAR);
    for (let a = 10; p.birthYear + a <= end; a += 10) ev.push({ y: p.birthYear + a, k: 'a', t: '', age: a });
  }
  return ev.map((e, i) => Object.assign(e, { i: e.k === 'a' ? -1 : i })).sort((a, b) => (a.y == null) - (b.y == null) || (a.y || 0) - (b.y || 0) || a.i - b.i);
}

const PersonView = {
  mount(root, id){ this.root = root; this.id = id; this.mm = null; this.render(); },
  update(){ this.render(); },
  unmount(){ if (this.mm){ this.mm.destroy(); this.mm = null; } },
  render(){
    if (this.mm){ this.mm.destroy(); this.mm = null; }
    const root = clear(this.root);
    const p = Store.persons.get(this.id);
    const back = h('button', { class: 'back', onclick: () => App.go('register') }, ico('back', 18), 'Personregister');
    if (!p){
      root.append(back, h('div', { class: 'empty' }, h('h2', null, (Store.mode === 'db' && !Store.ready) || Store.mode === 'loading' ? 'Henter personen …' : 'Fant ikke personen'), h('p', null, 'Personen er kanskje slettet.')));
      return;
    }
    const edit = Store.canWrite;
    const hero = h('div', { class: 'hero' }, avatar(p, 104),
      h('div', { class: 'id' }, h('h1', null, fullName(p)),
        h('div', { class: 'life' }, lifeSpan(p) + (ageText(p) ? ' · ' + ageText(p) : '')),
        h('div', { class: 'acts' },
          edit ? h('button', { class: 'btn', onclick: () => openPersonForm({ person: p }) }, ico('pencil', 16), 'Rediger') : null,
          edit ? h('button', { class: 'btn', onclick: () => openPortraitEditor(p) }, ico('image', 16), 'Profilbilde') : null,
          edit ? h('button', { class: 'btn', onclick: () => openAgePortraits(p.id) }, ico('image', 16), 'Bilder etter alder') : null,
          h('button', { class: 'btn', onclick: () => App.go('ancestors', p.id) }, ico('users', 16), 'Aner'),
          h('button', { class: 'btn', onclick: () => App.go('descendants', p.id) }, ico('users', 16), 'Etterkommere'),
          h('button', { class: 'btn', onclick: () => App.go('kinship', p.id) }, ico('users', 16), 'Slektskap'),
          h('button', { class: 'btn', onclick: () => App.go('tree', p.id) }, ico('tree', 16), 'Vis i slektstreet'),
          h('button', { class: 'btn', onclick: () => App.go('map', p.id) }, ico('pin', 16), 'Vis på kartet'))));

    // fakta
    const facts = h('dl', { class: 'facts' });
    const row = (k, v) => { if (v) facts.append(h('dt', null, k), h('dd', null, v)); };
    row('Født som', p.birthName || '');
    row('Patronym', p.patronym || '');
    if (p.adopted) row('Adoptert', p.adoptYear != null ? 'Ja, ' + p.adoptYear : 'Ja');
    const jn = parts => parts.filter(x => x != null && x !== '').reduce((a, x, i) => a.concat(i ? [' · ', x] : [x]), []);
    const plk = pl => pl ? (placeLinkEl(pl, pn(pl))) : null;
    row('Født', jn([p.birthYear != null ? String(p.birthYear) : null, p.birthDate, plk(p.birthPlace)]));
    row('Utvandret til', p.emigratedTo ? jn([p.emigratedYear != null ? String(p.emigratedYear) : null, plk(p.emigratedTo)]) : '');
    { const dj = jn([p.deathYear != null ? String(p.deathYear) : null, p.deathDate, plk(p.deathPlace)]); row('Død', dj.length ? dj : (isDead(p) ? 'Ja, tidspunkt ukjent' : '')); }
    row('Kjønn', p.sex === 'm' ? 'Mann' : p.sex === 'f' ? 'Kvinne' : '');
    const lastMove = (p.moves || []).filter(m => m.place && m.place.name).slice(-1)[0];
    row(isDead(p) ? 'Siste bosted' : 'Bosted', lastMove ? [plk(lastMove.place), lastMove.year != null ? ' (fra ' + lastMove.year + ')' : ''] : '');
    const factsCard = h('section', { class: 'card' }, h('h2', null, 'Fakta'), facts.children.length ? facts : h('p', { class: 'muted' }, 'Ingen opplysninger er lagt inn ennå.'));
    const vCard = verifyCard(p, edit);

    // familie
    const parents = parentsOf(p).map(i => Store.persons.get(i)).filter(Boolean);
    const stepPar = Idx.stepParentsOf(p), stepKids = Idx.stepKidsOf(p);
    const donor = p.donorId && Store.persons.get(p.donorId);
    const donorOk = !!(p.donorConceived || p.donorId);
    const bioPar = p.adopted ? [p.bioFatherId, p.bioMotherId].map(i => i && Store.persons.get(i)).filter(Boolean) : [];
    const adoptOut = (Idx.adoptOutKids.get(p.id) || []).map(i => Store.persons.get(i)).filter(Boolean);
    const donorKids = (Idx.donorKids.get(p.id) || []).map(i => Store.persons.get(i)).filter(Boolean);
    const partners = Idx.partnersOf(p.id), kids = Idx.kidsOf(p.id), sibs = Idx.siblingsOf(p);
    const grp = (title, nodes, adds, none) => h('div', null, h('h3', null, title), h('div', { class: 'chips' }, nodes, edit ? adds : null), none || null);
    const noneBox = (field, label, count) => {
      if (count) return null;
      const on = !!p[field];
      if (!edit) return on ? h('p', { class: 'faint none-note' }, label) : null;
      return h('label', { class: 'bk-chk none-note', for: 'no-' + field }, h('input', { type: 'checkbox', id: 'no-' + field, checked: on, onchange: e => relink(q => { if (e.target.checked) q[field] = true; else delete q[field]; }) }), h('span', null, label));
    };
    const addBtn = (label, fn) => h('button', { class: 'btn sm ghost', onclick: fn }, ico('plus', 14), label);
    const relink = async fn => { const q = clone(Store.persons.get(p.id)); fn(q); await Store.savePerson(q); };
    const setParent = async (child, field, pid) => { const q = clone(Store.persons.get(child)); q[field] = pid; await Store.savePerson(q); };
    const refOf = { id: p.id, birthYear: p.birthYear, deathYear: p.deathYear, sex: p.sex, parents: () => [p.fatherId, p.motherId, p.coParentId, p.donorId] };
    const SLOT = { father: 'fatherId', mother: 'motherId', coparent: 'coParentId', donor: 'donorId' };
    const addParent = role => pickPerson({ role, ref: refOf, exclude: [p.fatherId, p.motherId, p.coParentId, p.donorId, ...partners.map(x => x.p.id)].filter(Boolean),
      onPick: np => relink(q => { q[SLOT[role]] = np.id; }).then(() => toast(fullName(np) + ' er lagt til som ' + ROLE_LABEL[role])),
      onNew: () => openPersonForm({ title: 'Ny ' + ROLE_LABEL[role], preset: role === 'father' ? { sex: 'm' } : role === 'mother' ? { sex: 'f' } : {}, onSaved: np => relink(q => { q[SLOT[role]] = np.id; }) }) });
    const addPartner = () => pickPerson({ role: 'partner', withYear: true, ref: refOf, exclude: partners.map(x => x.p.id),
      onPick: (np, ex) => relink(q => { q.partners = (q.partners || []).concat([{ id: np.id, year: ex.year, kind: ex.kind || 'partner' }]); }).then(() => toast(fullName(np) + ' er lagt til')),
      onNew: () => openPersonForm({ title: 'Ny partner', preset: { partners: [{ id: p.id, year: null, kind: 'partner' }] } }) });
    const addChild = () => {
      const op = partners.length === 1 ? partners[0].p : null, other = op ? op.id : null;
      const sameSex = !!(op && op.sex !== 'u' && p.sex !== 'u' && op.sex === p.sex);
      const field = p.sex === 'f' ? 'motherId' : 'fatherId';
      pickPerson({ role: 'child', ref: refOf, exclude: kids.map(x => x.id),
        onPick: async np => {
          if (np.fatherId === p.id || np.motherId === p.id || np.coParentId === p.id) return;
          if (!np[field]) await setParent(np.id, field, p.id);
          else if (!np.coParentId) await setParent(np.id, 'coParentId', p.id);
          else { toast(fullName(np) + ' har allerede alle foreldrene registrert.'); return; }
          toast(fullName(np) + ' er lagt til som barn');
        },
        onNew: () => {
          const preset = { family: (p.sex === 'f' ? '' : p.family) || '' };
          if (p.sex === 'f'){ preset.motherId = p.id; if (sameSex) preset.coParentId = other; else preset.fatherId = other; } else { preset.fatherId = p.id; if (sameSex) preset.coParentId = other; else preset.motherId = other; }
          openPersonForm({ title: 'Nytt barn', preset });
        } });
    };
    const addSibling = () => {
      if (!parentsOf(p).length){ toast('Legg først inn minst én forelder, så kan søsken kobles til dem.'); return; }
      pickPerson({ role: 'sibling', ref: refOf, exclude: sibs.map(x => x.id),
        onPick: async np => {
          const q = clone(Store.persons.get(np.id));
          if ((p.fatherId && q.fatherId && q.fatherId !== p.fatherId) || (p.motherId && q.motherId && q.motherId !== p.motherId) || (p.coParentId && q.coParentId && q.coParentId !== p.coParentId)){ toast(fullName(np) + ' har andre foreldre registrert. Rediger personen hvis de skal være søsken.'); return; }
          if (p.fatherId && !q.fatherId) q.fatherId = p.fatherId;
          if (p.motherId && !q.motherId) q.motherId = p.motherId;
          if (p.coParentId && !q.coParentId) q.coParentId = p.coParentId;
          if (p.donorId && !q.donorId) q.donorId = p.donorId;
          await Store.savePerson(q); toast(fullName(np) + ' er lagt til som søsken');
        },
        onNew: () => openPersonForm({ title: 'Nytt søsken', preset: { fatherId: p.fatherId || null, motherId: p.motherId || null, coParentId: p.coParentId || null, donorId: p.donorId || null, family: p.family || '' } }) });
    };
    const fam = h('section', { class: 'card' }, h('h2', null, 'Familie'), h('div', { class: 'fam' },
      grp('Foreldre', [parents.map(x => personChip(x, p.adopted ? (x.id === p.fatherId ? 'adoptivfar' : x.id === p.motherId ? 'adoptivmor' : 'adoptivforelder') : (x.id === p.fatherId ? 'far' : x.id === p.motherId ? 'mor' : 'medforelder'))), bioPar.map(x => personChip(x, x.id === p.bioFatherId ? 'biologisk far' : 'biologisk mor')), donor ? personChip(donor, 'donor') : null],
        parents.length >= 2 ? [!p.donorId && donorOk ? addBtn('Donor', () => addParent('donor')) : null]
          : [!p.fatherId ? addBtn('Far', () => addParent('father')) : null, !p.motherId ? addBtn('Mor', () => addParent('mother')) : null, addBtn('Medforelder', () => addParent('coparent')), !p.donorId && donorOk ? addBtn('Donor', () => addParent('donor')) : null]),
      grp('Partner', partners.map(x => personChip(x.p, relShort(x))), addBtn('Partner', addPartner), noneBox('noPartners', 'Ingen kjente partnere', partners.length)),
      grp('Barn', kids.map(x => personChip(x, x.birthYear != null ? 'f. ' + x.birthYear : '')), addBtn('Barn', addChild), noneBox('noKids', 'Ingen kjente barn', kids.length)),
      adoptOut.length ? grp('Bortadopterte barn', adoptOut.map(x => personChip(x, x.birthYear != null ? 'f. ' + x.birthYear : '')), null) : null,
      donorKids.length ? grp('Donorbarn', donorKids.map(x => personChip(x, x.birthYear != null ? 'f. ' + x.birthYear : '')), null) : null,
      grp('Søsken', sibs.map(x => { const k = Idx.siblingKind(p, x); const donorShared = !!p.donorId && p.donorId === x.donorId; return personChip(x, [x.birthYear != null ? 'f. ' + x.birthYear : '', k === 'hel' && (donorShared || p.donorId || x.donorId) ? 'helsøsken' : k === 'halv' ? 'halvsøsken' : '', donorShared ? 'samme donor' : ''].filter(Boolean).join(' · ')); }), addBtn('Søsken', addSibling), noneBox('noSiblings', 'Ingen kjente søsken', sibs.length)),
      stepPar.length ? grp('Steforeldre', stepPar.map(x => personChip(x.p, 'partner til ' + (x.via.given || fullName(x.via)))), null) : null,
      stepKids.length ? grp('Stebarn', stepKids.map(x => personChip(x.p, [x.p.birthYear != null ? 'f. ' + x.p.birthYear : '', 'barn av ' + (x.via.given || fullName(x.via))].filter(Boolean).join(' · '))), null) : null));

    // livsløp
    const evs = lifeEvents(p, { marks: true });
    const lifeCard = h('section', { class: 'card' }, h('h2', null, 'Livsløp'),
      evs.length ? h('ul', { class: 'life-list' }, evs.map(e => e.k === 'a' ? h('li', { class: 'age-mark', 'aria-label': e.age + ' år' }, h('div', { class: 'yr' }, e.age + ' år'), h('div', { class: 'dot tick' }), h('div', null)) : h('li', null, h('div', { class: 'yr' }, e.y != null ? e.y : '–'), h('div', { class: 'dot ' + (e.k === 'k' ? 'kid' : e.k === 'm' ? 'sm' : e.k === 'r' ? 'rel' : '') }), h('div', null, h('div', null, e.t), e.s ? h('div', { class: 'k' }, e.s) : null))))
        : h('p', { class: 'muted' }, 'Legg inn fødsel, bosteder og død for å se livsløpet.'));

    // kart
    const tl = timelineOf(p);
    let mapCard = null;
    if (tl.length){
      const host = h('div', { class: 'mini' });
      const stops = [];
      tl.forEach(e => { const last = stops[stops.length - 1]; if (!last || last.place.lat !== e.place.lat || last.place.lon !== e.place.lon) stops.push(e); });
      mapCard = h('section', { class: 'card' }, h('h2', null, 'Reisen på kartet'), host,
        h('p', { class: 'fnote' }, stops.map((s, i) => (i + 1) + ' ' + (s.place.name || 'ukjent') + ' (' + s.year + ')').join('  →  ')));
      this.pendingMap = () => {
        const base = createBaseMap(host, { zoom: false });
        this.mm = base;
        const pts = stops.map(s => [s.place.lon, s.place.lat]);
        if (pts.length > 1){
          const d = d3.line()(pts.map(([lo, la]) => base.project(lo, la)));
          base.routeG.appendChild(h('path', { class: 'p-route', d }));
        }
        const pins = stops.map((s, i) => { const el = h('div', { class: 'mmpin' }, String(i + 1)); host.appendChild(el); return el; });
        const place = () => stops.forEach((s, i) => { const [x, y] = base.toScreen(s.place.lon, s.place.lat); pins[i].style.left = x + 'px'; pins[i].style.top = y + 'px'; });
        base.onTransform(place);
        base.fit(pts, { minSpan: 8, pad: 0.3, maxK: 400 });
      };
    }

    // bilder
    const photos = (Idx.photosOf.get(p.id) || []).filter(x => !isSource(x.photo)).sort((a, b) => (b.photo.year == null ? -1 : 0) - (a.photo.year == null ? -1 : 0) || (b.photo.year || 0) - (a.photo.year || 0) || (b.photo.created || 0) - (a.photo.created || 0));
    const sources = (Idx.photosOf.get(p.id) || []).filter(x => isSource(x.photo));
    const fileIn = h('input', { type: 'file', accept: 'image/*', multiple: true, hidden: true, onchange: e => { Photos.uploadFiles([...e.target.files], { tagPerson: p.id }); e.target.value = ''; } });
    const photoCard = h('section', { class: 'card' }, h('h2', null, 'Bilder', (edit && Store.assets) ? h('button', { class: 'btn sm', onclick: () => fileIn.click() }, ico('upload', 15), 'Legg til bilde') : null), fileIn,
      photos.length ? h('div', { class: 'thumbs' }, photos.map(x => h('button', { class: 'thumb', 'aria-label': x.photo.caption || 'Bilde', onclick: () => Photos.open(x.photo.id, { list: photos.map(y => y.photo.id) }) }, h('img', { src: photoUrl(x.photo), alt: x.photo.caption || '', loading: 'lazy', style: x.photo.w && x.photo.h ? { aspectRatio: x.photo.w + '/' + x.photo.h } : {} }), x.photo.year || x.photo.caption ? h('span', { class: 'cap' }, [yearLabel(x.photo), x.photo.caption].filter(Boolean).join(' · ')) : null)))
        : h('p', { class: 'muted' }, Store.assets ? 'Ingen bilder av ' + (p.given || 'personen') + ' ennå. Last opp et bilde og trykk på ansiktet for å tagge.' : 'Bilder kan ikke lastes opp i denne visningen.'));

    const srcIn = h('input', { type: 'file', accept: 'image/*', multiple: true, hidden: true, onchange: e => { Photos.uploadFiles([...e.target.files], { tagPerson: p.id, kind: 'source' }); e.target.value = ''; } });
    const srcCard = h('section', { class: 'card' }, h('h2', null, 'Kilder', (edit && Store.assets) ? h('button', { class: 'btn sm', onclick: () => srcIn.click() }, ico('upload', 15), 'Legg til kilde') : null), srcIn,
      sources.length ? h('ul', { class: 'srclist' }, sources.map(x => h('li', null, h('button', { class: 'srcrow', onclick: () => Photos.open(x.photo.id, { list: sources.map(y => y.photo.id) }) },
        h('img', { src: photoUrl(x.photo), alt: '', loading: 'lazy' }),
        h('span', { class: 'b' }, h('span', { class: 'badge' }, x.photo.srcType || 'Kilde'), h('span', { class: 'n' }, x.photo.ref || x.photo.caption || 'Uten beskrivelse'), x.photo.year ? h('span', { class: 'faint' }, String(x.photo.year)) : null, pagesOf(x.photo).length > 1 ? h('span', { class: 'faint' }, pagesOf(x.photo).length + ' sider') : null)))))
        : h('p', { class: 'muted' }, Store.assets ? 'Ingen kilder knyttet til ' + (p.given || 'personen') + ' ennå. Last opp et bilde av en kirkebok, bygdebok, dåpsattest eller avisutklipp.' : 'Kilder kan ikke lastes opp i denne visningen.'));

    const notesCard = p.notes && p.notes.trim() ? h('section', { class: 'card' }, h('h2', null, 'Notater'), h('p', { class: 'notes' }, p.notes)) : null;

    const fanCard = parentsOf(p).some(i => Store.persons.has(i)) ? h('section', { class: 'card fan-card' }, h('h2', null, 'Anetavle', h('button', { class: 'btn sm ghost', onclick: () => App.go('ancestors', p.id) }, 'Se hele anetavlen')), fanChart(p, 3)) : null;
    const ageList = AGE_SLOTS.map(([k, label]) => ({ k, label, sp: slotPortrait(p, k) })).filter(x => x.sp);
    const ageCard = ageList.length ? h('section', { class: 'card' }, h('h2', null, 'Gjennom livet'), h('div', { class: 'age-strip' }, ageList.map(x => h('button', { type: 'button', class: 'age-it', 'aria-label': x.label, onclick: () => Photos.open(x.sp.ph.id, { list: ageList.map(y => y.sp.ph.id) }) }, avatar(Object.assign({}, p, { portrait: x.sp.c }), 72), h('span', { class: 'age-t' }, x.label))))) : null;
    root.append(back, hero, h('div', { class: 'cols' },
      h('div', { class: 'stack' }, ageCard, factsCard, vCard, fam, fanCard, notesCard),
      h('div', { class: 'stack' }, lifeCard, mapCard, photoCard, srcCard)));
    if (this.pendingMap){ const f = this.pendingMap; this.pendingMap = null; f(); }
  }
};

/* ====== Slektstre ====== */
function treeSet(mode, fid){
  const ps = Store.persons;
  if (mode === 'all' || !ps.has(fid)) return new Set(ps.keys());
  const set = new Set([fid]);
  const up = id => { const p = ps.get(id); if (!p) return; parentsOf(p).forEach(pid => { if (ps.has(pid) && !set.has(pid)){ set.add(pid); up(pid); } }); };
  const down = id => { (Idx.kids.get(id) || []).forEach(k => { if (!set.has(k)){ set.add(k); down(k); } }); };
  if (mode === 'anc' || mode === 'line') up(fid);
  if (mode === 'desc' || mode === 'line') down(fid);
  if (mode === 'anc') Idx.partnersOf(fid).forEach(x => set.add(x.p.id));
  else [...set].forEach(id => Idx.partnersOf(id).forEach(x => set.add(x.p.id)));
  return set;
}

const TreeView = {
  mode: 'all', focus: null, sel: null, T: null, cdown: new Set(), cup: new Set(), _key: '',
  mount(root, arg){
    this.root = root; this.T = null; this.needFit = false; this.dim = null;
    if (arg && Store.persons.has(arg)){ this.focus = arg; this.sel = arg; this.mode = 'line'; this.refit = true; }
    const modes = [['all', 'Hele slekten'], ['line', 'Rundt valgt'], ['anc', 'Aner'], ['desc', 'Etterkommere'], ['fan', 'Vifte']];
    this.seg = h('div', { class: 'seg', role: 'group', 'aria-label': 'Visning' }, modes.map(([k, t]) => h('button', { type: 'button', 'data-m': k, onclick: () => { this.mode = k; if (k === 'fan'){ if (this.sel && Store.persons.has(this.sel)) this.focus = this.sel; else { let best = null, bn = -1; Store.persons.forEach(q => { const n = relatedSets(q.id).anc.size; if (n > bn){ bn = n; best = q.id; } }); if (best) this.focus = best; } } if (k !== 'all' && !Store.persons.has(this.focus)) this.focus = this.defaultFocus(); this.refit = true; this.update(); } }, t)));
    this.focusSel = h('select', { class: 'inp', style: { width: 'auto', maxWidth: '100%' }, 'aria-label': 'Utgangsperson', onchange: e => { this.focus = e.target.value; this.sel = this.focus; if (this.mode === 'all') this.mode = 'line'; this.refit = true; this.update(); } });
    this.head = h('div', { class: 'page-h' }, h('div', null, h('h1', null, 'Slektstre'), this.sub = h('p', null, '')));
    this.openAll = h('button', { type: 'button', class: 'btn sm', onclick: () => { this.cdown.clear(); this.cup.clear(); this.update(); } }, 'Åpne alle grener');
    this.closeAll = h('button', { type: 'button', class: 'btn sm', onclick: () => { this.closeBranches(); } }, 'Lukk grener');
    this.fanGens = h('select', { class: 'inp', style: { width: 'auto' }, 'aria-label': 'Antall generasjoner', onchange: e => { this.gens = +e.target.value; this.update(); } }, [3, 4, 5, 6].map(g => h('option', { value: g, selected: g === (this.gens || 5) }, g + ' generasjoner')));
    this.tools = h('div', { class: 'tools' }, this.seg, this.focusSel, this.fanGens, this.openAll, this.closeAll);
    this.wrap = h('div', { class: 'treewrap' });
    this.svg = h('svg', { role: 'img', 'aria-label': 'Slektstre' });
    this.gv = h('g');
    this.svg.appendChild(this.gv);
    this.wrap.appendChild(this.svg);
    this.ctl = h('div', { class: 'treectl' },
      h('button', { class: 'icon-btn', 'aria-label': 'Zoom inn', onclick: () => this.zoomBy(1.4) }, ico('plus')),
      h('button', { class: 'icon-btn', 'aria-label': 'Zoom ut', onclick: () => this.zoomBy(1 / 1.4) }, ico('minus')),
      h('button', { class: 'icon-btn', 'aria-label': 'Tilpass til skjermen', onclick: () => this.fit() }, ico('fit')));
    this.bar = h('div', { class: 'treebar', hidden: true });
    this.wrap.append(this.ctl, this.bar);
    this.empty = h('div');
    root.append(this.head, this.tools, this.wrap, this.empty);
    this.zoom = d3.zoom().scaleExtent([0.15, 2.5]).on('zoom', e => { this.T = e.transform; this.gv.setAttribute('transform', e.transform.toString()); });
    d3.select(this.svg).call(this.zoom).on('dblclick.zoom', null);
    this.ro = new ResizeObserver(() => { if (this.needFit) this.fit(); });
    this.ro.observe(this.wrap);
    this.update();
  },
  defaultFocus(){
    const ps = [...Store.persons.values()];
    if (!ps.length) return null;
    ps.sort((a, b) => (a.birthYear == null) - (b.birthYear == null) || a.birthYear - b.birthYear);
    return (ps.find(p => Idx.kids.has(p.id)) || ps[0]).id;
  },
  zoomBy(f){ d3.select(this.svg).transition().duration(220).call(this.zoom.scaleBy, f); },
  fit(){
    const r = this.wrap.getBoundingClientRect();
    if (!r.width || !this.dim){ this.needFit = true; return; }
    this.needFit = false;
    const { w, h: hh } = this.dim;
    let k = Math.min(r.width / w, r.height / hh, 1);
    let cx = w / 2, cy = hh / 2;
    if (k < 0.5){
      k = Math.max(k, 0.5);
      const n = this.nodes && this.nodes['p' + (this.sel || this.focus)];
      if (n){ cx = n.x; cy = n.y; } else { cx = Math.min(w / 2, r.width / 2 / k); cy = Math.min(hh / 2, r.height / 2 / k); }
    }
    const t = d3.zoomIdentity.translate(r.width / 2 - k * cx, r.height / 2 - k * cy).scale(k);
    d3.select(this.svg).call(this.zoom.transform, t);
  },
  update(){
    const n = Store.persons.size;
    if (!this.focus || !Store.persons.has(this.focus)) this.focus = this.defaultFocus();
    [...this.seg.children].forEach(b => b.setAttribute('aria-pressed', String(b.dataset.m === this.mode)));
    clear(this.focusSel);
    [...Store.persons.values()].sort(nameCmp).forEach(p => this.focusSel.appendChild(h('option', { value: p.id, selected: p.id === this.focus }, fullName(p) + (p.birthYear != null ? ' (f. ' + p.birthYear + ')' : ''))));
    this.focusSel.style.display = this.mode === 'all' || !n ? 'none' : '';
    clear(this.empty);
    if (!n){
      this.wrap.style.display = 'none'; this.tools.style.display = 'none';
      this.sub.textContent = 'Legg til personer og angi foreldre for å bygge treet.';
      this.empty.appendChild(h('div', { class: 'empty' }, h('h2', null, 'Ingen tre ennå'), h('p', null, 'Slektstreet tegnes automatisk ut fra foreldre og partnere du registrerer på personene.'),
        Store.canWrite ? h('button', { class: 'btn primary', onclick: () => openPersonForm({ onSaved: p => App.go('person', p.id) }) }, ico('plus', 18), 'Legg til første person') : null));
      return;
    }
    this.wrap.style.display = ''; this.tools.style.display = '';
    const isFan = this.mode === 'fan';
    this.fanGens.style.display = isFan ? '' : 'none'; this.openAll.style.display = this.closeAll.style.display = isFan ? 'none' : '';
    if (isFan){
      this.wrap.style.display = 'none';
      const fp = Store.persons.get(this.focus);
      this.sub.textContent = 'Anetavle i full sirkel for ' + fullName(fp) + '. Fars side øverst, mors side nederst. Trykk på en person for å åpne den.';
      this.empty.appendChild(h('div', { class: 'card fan-card fan-full' }, fanChart(fp, this.gens || 5, { full: true })));
      return;
    }
    const key = this.mode + '|' + this.focus;
    if (key !== this._key){ this._key = key; this.cdown.clear(); this.cup.clear(); }
    const full = treeSet(this.mode, this.focus);
    const set = this.visibleSet(full);
    this.full = full;
    this.sub.textContent = plural(set.size, 'person', 'personer') + ' vises' + (set.size < full.size ? ' av ' + full.size : '') + '. Dra for å flytte, klyp eller rull for å zoome, trykk på en person for mer. Bruk + og − på kortene for å åpne og lukke grener.';
    this.draw(set);
    if (this.refit){ this.refit = false; this.fit(); }
    this.info();
  },
  kidsIn(id, set){ return (Idx.kids.get(id) || []).filter(k => set.has(k)); },
  parentsIn(id, set){ const p = Store.persons.get(id); return p ? parentsOf(p).filter(x => set.has(x)) : []; },
  descOf(id, set){ const out = new Set(); const go = i => this.kidsIn(i, set).forEach(k => { if (!out.has(k)){ out.add(k); go(k); } }); go(id); return out; },
  ancOf(id, set){ const out = new Set(); const go = i => this.parentsIn(i, set).forEach(k => { if (!out.has(k)){ out.add(k); go(k); } }); go(id); return out; },
  visibleSet(full){
    const hide = new Set();
    this.cdown.forEach(id => { if (!full.has(id)) return; this.descOf(id, full).forEach(d => hide.add(d)); });
    this.cup.forEach(id => { if (!full.has(id)) return; this.ancOf(id, full).forEach(d => hide.add(d)); });
    // ektefeller som bare henger på skjulte personer skjules også
    let ch = true;
    while (ch){ ch = false;
      full.forEach(id => { if (hide.has(id)) return; const ps = Idx.partnersOf(id).filter(x => full.has(x.p.id)); if (!ps.length) return;
        if (!ps.some(x => hide.has(x.p.id))) return;
        const hasOwn = this.parentsIn(id, full).some(x => !hide.has(x)) || this.kidsIn(id, full).some(x => !hide.has(x)) || ps.some(x => !hide.has(x.p.id)) || id === this.focus || id === this.sel;
        if (!hasOwn){ hide.add(id); ch = true; } });
    }
    hide.delete(this.focus);
    return new Set([...full].filter(id => !hide.has(id)));
  },
  closeBranches(){
    const full = treeSet(this.mode, this.focus); this.cdown.clear(); this.cup.clear();
    full.forEach(id => { if (this.kidsIn(id, full).length && this.parentsIn(id, full).length) this.cdown.add(id); });
    this.update(); this.fit();
  },
  draw(set){
    const CW = 224, CH = 76, GAP = 44;
    // 1. fellesskap: partnere og foreldrepar
    const unions = new Map();
    const U = (x, y) => { const key = [x, y].filter(Boolean).sort().join('|'); if (!unions.has(key)) unions.set(key, { key, ids: [x, y].filter(Boolean), kids: [] }); return unions.get(key); };
    set.forEach(id => { const p = Store.persons.get(id); const pp = parentPair(p), f = set.has(pp[0]) ? pp[0] : null, m = set.has(pp[1]) ? pp[1] : null; if (f || m) U(f, m).kids.push(id); });
    set.forEach(id => Idx.partnersOf(id).forEach(x => { if (set.has(x.p.id) && id < x.p.id) U(id, x.p.id); }));
    // grupper av personer som henger sammen via par (vises ved siden av hverandre)
    const par = new Map(); const find = x => { while (par.get(x) !== x){ par.set(x, par.get(par.get(x))); x = par.get(x); } return x; };
    set.forEach(id => par.set(id, id));
    unions.forEach(u => { if (u.ids.length === 2) par.set(find(u.ids[0]), find(u.ids[1])); });
    const comps = new Map(); set.forEach(id => { const r = find(id); if (!comps.has(r)) comps.set(r, []); comps.get(r).push(id); });
    const pairs = [...unions.values()].filter(u => u.ids.length === 2);
    const groups = []; const gOf = new Map();
    comps.forEach(ids => {
      let order;
      if (ids.length === 1) order = ids;
      else {
        // lag en rekkefølge langs partnerlenkene, start i en ende
        const adj = new Map(ids.map(i => [i, []]));
        pairs.forEach(u => { if (adj.has(u.ids[0]) && adj.has(u.ids[1])){ adj.get(u.ids[0]).push(u.ids[1]); adj.get(u.ids[1]).push(u.ids[0]); } });
        const sexRank = i => { const sx = Store.persons.get(i).sex; return sx === 'm' ? 0 : sx === 'f' ? 1 : 2; };
        const start = [...ids].sort((x, y) => adj.get(x).length - adj.get(y).length || sexRank(x) - sexRank(y) || (x < y ? -1 : 1))[0];
        order = []; const seen = new Set();
        const walk = i => { seen.add(i); order.push(i); adj.get(i).filter(j => !seen.has(j)).sort((x, y) => sexRank(x) - sexRank(y)).forEach(j => { if (!seen.has(j)) walk(j); }); };
        walk(start);
      }
      const gi = groups.length; groups.push({ ids: order, w: order.length * CW + (order.length - 1) * GAP });
      order.forEach((i, k) => gOf.set(i, { gi, k }));
    });
    const g = new dagre.graphlib.Graph();
    g.setGraph({ rankdir: 'TB', nodesep: 28, ranksep: 70, marginx: 24, marginy: 24 });
    g.setDefaultEdgeLabel(() => ({}));
    groups.forEach((gr, gi) => g.setNode('g' + gi, { width: gr.w, height: CH }));
    const gEdges = new Set();
    unions.forEach(u => u.kids.forEach(k => { const src = gOf.get(u.ids[0]).gi, dst = gOf.get(k).gi; if (src !== dst){ const key = src + '>' + dst; if (!gEdges.has(key)){ gEdges.add(key); g.setEdge('g' + src, 'g' + dst); } } }));
    dagre.layout(g);
    const gr0 = g.graph();
    this.dim = { w: gr0.width, h: gr0.height };
    this.nodes = {};
    clear(this.gv);
    const pos = new Map(); // person -> {x, y}
    groups.forEach((gr, gi) => { const n = g.node('g' + gi); gr.ids.forEach((id, k) => { const x = n.x - gr.w / 2 + k * (CW + GAP) + CW / 2; pos.set(id, { x, y: n.y }); this.nodes['p' + id] = { x, y: n.y }; }); });
    const eg = h('g'), ng = h('g');
    const down = d3.line().x(d => d[0]).y(d => d[1]).curve(d3.curveBumpY);
    unions.forEach(u => {
      let ux, uy;
      if (u.ids.length === 2){
        const A = pos.get(u.ids[0]), B = pos.get(u.ids[1]);
        const adjacent = A.y === B.y && Math.abs(Math.abs(A.x - B.x) - (CW + GAP)) < 1;
        if (adjacent){
          const l = A.x < B.x ? A : B, r = A.x < B.x ? B : A;
          eg.appendChild(h('path', { class: 'edge couple', d: 'M' + (l.x + CW / 2) + ',' + l.y + 'H' + (r.x - CW / 2) }));
          ux = (l.x + r.x) / 2; uy = l.y;
        } else {
          // ikke ved siden av hverandre: bue under kortene
          const y0 = Math.max(A.y, B.y) + CH / 2, dyy = 22;
          eg.appendChild(h('path', { class: 'edge couple', d: 'M' + A.x + ',' + (A.y + CH / 2) + 'V' + (y0 + dyy) + 'H' + B.x + 'V' + (B.y + CH / 2) }));
          ux = (A.x + B.x) / 2; uy = y0 + dyy;
        }
        if (u.kids.length || true) ng.appendChild(h('circle', { class: 'union', cx: ux, cy: uy, r: 4.5 }));
      } else { const A = pos.get(u.ids[0]); ux = A.x; uy = A.y + CH / 2; }
      u.kids.forEach(k => { const K = pos.get(k); if (!K) return; const y1 = K.y - CH / 2;
        const y0 = u.ids.length === 2 ? uy + CH / 2 + 10 : uy + 8, y2 = y1 - 4, mid = (y0 + y2) / 2;
        eg.appendChild(h('path', { class: 'edge', d: 'M' + ux + ',' + uy + 'V' + y0 + 'C' + ux + ',' + mid + ' ' + K.x + ',' + mid + ' ' + K.x + ',' + y2 })); });
    });
    set.forEach(id => {
      const n = Object.assign({ id }, pos.get(id));
      const p = Store.persons.get(id);
      const card = h('div', { class: 'pcard ' + (p.sex === 'm' ? 'm' : p.sex === 'f' ? 'f' : '') + (n.id === this.sel ? ' sel' : ''), role: 'button', tabindex: 0, 'aria-label': fullName(p) },
        avatar(p, 36), h('div', { class: 'b' }, h('div', { class: 'n' }, nameFirstCaps(p)), h('div', { class: 'y' }, lifeSpan(p)), siblingText(p) ? h('div', { class: 'sb' }, siblingText(p)) : null));
      const act = () => { this.sel = n.id; this.update(); };
      card.addEventListener('click', act);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); act(); } });
      ng.appendChild(h('foreignObject', { x: n.x - CW / 2, y: n.y - CH / 2, width: CW, height: CH }, card));
      const full = this.full || set;
      const mkBtn = (cx, cy, collapsed, count, label, onclick) => {
        const gb = h('g', { class: 'tgl' + (collapsed ? ' closed' : ''), role: 'button', tabindex: 0, 'aria-label': label, transform: 'translate(' + cx + ',' + cy + ')' });
        const txt = collapsed ? '+' + count : '−';
        const w = collapsed ? Math.max(24, 12 + txt.length * 8) : 24;
        gb.append(h('rect', { x: -w / 2, y: -11, width: w, height: 22, rx: 11 }), h('text', { x: 0, y: 5, 'text-anchor': 'middle' }, txt));
        gb.addEventListener('click', e => { e.stopPropagation(); onclick(); });
        gb.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); onclick(); } });
        gb.addEventListener('pointerdown', e => e.stopPropagation());
        ng.appendChild(gb);
      };
      const kidsAll = this.kidsIn(n.id, full);
      if (kidsAll.length){
        const closed = this.cdown.has(n.id), cnt = this.descOf(n.id, full).size;
        mkBtn(n.x, n.y + CH / 2 + 2, closed, cnt, (closed ? 'Åpne' : 'Lukk') + ' etterkommere av ' + fullName(p), () => { if (closed) this.cdown.delete(n.id); else this.cdown.add(n.id); this.update(); });
      }
      const parsAll = this.parentsIn(n.id, full);
      if (parsAll.length){
        const closed = this.cup.has(n.id), cnt = this.ancOf(n.id, full).size;
        mkBtn(n.x, n.y - CH / 2 - 2, closed, cnt, (closed ? 'Åpne' : 'Lukk') + ' aner til ' + fullName(p), () => { if (closed) this.cup.delete(n.id); else this.cup.add(n.id); this.update(); });
      }
    });
    this.gv.append(eg, ng);
    if (this.T) this.gv.setAttribute('transform', this.T.toString());
    else this.needFit = true;
    if (this.needFit) this.fit();
  },
  info(){
    const p = this.sel && Store.persons.get(this.sel);
    if (!p || !this.nodes['p' + p.id]){ this.bar.hidden = true; return; }
    this.bar.hidden = false;
    clear(this.bar).append(
      avatar(p, 40),
      h('div', { style: { minWidth: 0, flex: '1 1 140px' } }, h('div', { class: 'nm' }, fullName(p)), h('div', { class: 'faint', style: { fontSize: '13px' } }, lifeSpan(p))),
      h('div', { style: { display: 'flex', gap: '6px', flexWrap: 'wrap' } },
        h('button', { class: 'btn sm primary', onclick: () => App.go('person', p.id) }, 'Åpne side'),
        h('button', { class: 'btn sm', onclick: () => { this.focus = p.id; this.mode = 'line'; this.refit = true; this.update(); } }, 'Vis rundt'),
        h('button', { class: 'icon-btn', style: { width: '32px', height: '32px' }, 'aria-label': 'Lukk', onclick: () => { this.sel = null; this.update(); } }, ico('x', 16))));
  },
  unmount(){ if (this.ro) this.ro.disconnect(); }
};

/* Generasjon: 1 = eldste kjente. Innfridde regnes til partnerens generasjon. */
function genMap(){
  const ps = Store.persons, g = new Map();
  const get = (id, seen = new Set()) => {
    if (g.has(id)) return g.get(id);
    if (seen.has(id)) return 0;
    seen.add(id);
    const p = ps.get(id);
    let d = null;
    parentsOf(p).forEach(q => { if (ps.has(q)) d = Math.max(d == null ? 0 : d, 1 + get(q, seen)); });
    if (d == null){
      let pd = null;
      Idx.partnersOf(id).forEach(x => { const o = x.p; if (parentsOf(o).some(q => ps.has(q))) pd = Math.max(pd == null ? 0 : pd, get(o.id, new Set(seen))); });
      d = pd == null ? 0 : pd;
    }
    g.set(id, d); return d;
  };
  ps.forEach((_, id) => get(id));
  return g;
}

/* Gren = linjen som starter med et barn av de eldste kjente forfedrene. InnGiftede følger partnerens gren. */
function branchMap(){
  const ps = Store.persons, depth = new Map(), br = new Map();
  const dep = (id, seen = new Set()) => {
    if (depth.has(id)) return depth.get(id);
    if (seen.has(id)) return 0;
    seen.add(id);
    const p = ps.get(id); let d = 0;
    parentsOf(p).forEach(q => { if (ps.has(q)) d = Math.max(d, 1 + dep(q, seen)); });
    depth.set(id, d); return d;
  };
  const get = (id, seen = new Set()) => {
    if (br.has(id)) return br.get(id);
    if (seen.has(id)) return 'root';
    seen.add(id);
    const p = ps.get(id);
    const parents = parentsOf(p).filter(q => ps.has(q));
    let res;
    if (parents.length){
      parents.sort((a, b) => (dep(b) - dep(a)) || (a === p.fatherId ? -1 : 1));
      const q = parents[0];
      res = dep(q) === 0 ? id : get(q, seen);
    } else {
      const pts = Idx.partnersOf(id).filter(x => dep(x.p.id) > 0);
      res = pts.length ? get(pts[0].p.id, new Set(seen)) : 'root';
    }
    br.set(id, res); return res;
  };
  ps.forEach((_, id) => get(id));
  return br;
}

/* ====== Kartanimasjon ====== */
const MapView = {
  colorBy: 'branch',
  year: null, playing: false, speed: 1, hidden: new Set(), selId: null,
  mount(root, arg){
    this.root = root; this.dotEls = new Map(); this.shown = null; this.finished = false; this.playing = false;
    this.head = h('div', { class: 'page-h' }, h('div', null, h('h1', null, 'Slekten på kartet'), h('p', null, 'Trykk på spill av og se hvor familien bodde, år for år. Hver prikk er en person.')));
    this.wrap = h('div', { class: 'mapwrap' });
    this.base = createBaseMap(this.wrap, {});
    this.dots = h('div', { class: 'dots instant' });
    this.wrap.appendChild(this.dots);
    this.yrEl = h('div', { class: 'yr', 'aria-live': 'off' }, '');
    this.metaEl = h('div', { class: 'meta' }, '');
    this.wrap.appendChild(h('div', { class: 'yearbox' }, this.yrEl, this.metaEl));
    this.wrap.appendChild(h('div', { class: 'mapctl' },
      h('button', { class: 'icon-btn', 'aria-label': 'Zoom inn', onclick: () => this.base.zoomBy(1.6) }, ico('plus')),
      h('button', { class: 'icon-btn', 'aria-label': 'Zoom ut', onclick: () => this.base.zoomBy(1 / 1.6) }, ico('minus')),
      h('button', { class: 'icon-btn', 'aria-label': 'Vis alle steder', onclick: () => this.fitAll(true) }, ico('fit'))));
    this.infoEl = h('div', { class: 'info', hidden: true });
    this.nodata = h('div', { class: 'nodata', hidden: true }, h('div', null, h('h2', null, 'Ingen steder å vise ennå'),
      h('p', { class: 'muted' }, 'Legg inn fødested og bosteder med kartposisjon på personene, så dukker de opp her.')));
    this.wrap.append(this.infoEl, this.nodata);
    // spiller
    this.playBtn = h('button', { class: 'play', 'aria-label': 'Spill av', onclick: () => this.toggle() });
    this.slider = h('input', { type: 'range', step: 1, 'aria-label': 'Årstall', oninput: e => { this.pause(); this.finished = false; this.year = +e.target.value; this.sync(true); } });
    this.sparkSvg = h('svg', { class: 'spark', viewBox: '0 0 1000 36', preserveAspectRatio: 'none', 'aria-hidden': 'true' });
    this.axis = h('div', { class: 'axis' });
    this.player = h('div', { class: 'player' }, this.playBtn, h('div', { class: 'scrub' }, this.sparkSvg, this.slider, this.axis));
    this.speedSeg = h('div', { class: 'seg', role: 'group', 'aria-label': 'Hastighet' }, [[1, 'Rolig'], [2, 'Normal'], [4, 'Rask']].map(([v, t]) => h('button', { type: 'button', 'data-s': v, 'aria-pressed': String(v === this.speed), onclick: () => { this.speed = v; [...this.speedSeg.children].forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.s === v))); this.dots.style.setProperty('--mv', (0.8 / v) + 's'); } }, t)));
    this.legend = h('div', { class: 'legend' });
    this.colorSeg = h('div', { class: 'seg', role: 'group', 'aria-label': 'Farge etter' }, [['branch', 'Gren'], ['gen', 'Generasjon'], ['name', 'Etternavn']].map(([v, t]) => h('button', { type: 'button', 'data-c': v, 'aria-pressed': String(v === this.colorBy), onclick: () => { this.colorBy = v; this.hidden.clear(); [...this.colorSeg.children].forEach(b => b.setAttribute('aria-pressed', String(b.dataset.c === v))); this.compute(); this.place(true); } }, t)));
    this.row = h('div', { class: 'maprow' }, this.legend, h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' } }, h('span', { class: 'faint', style: { fontSize: '13px' } }, 'Farge etter'), this.colorSeg, this.speedSeg));
    this.note = h('p', { class: 'fnote' }, 'Personer uten registrert dødsår regnes som levende, eller som avgått ved 80 år hvis de er født for mer enn 100 år siden. Fargen viser enten gren, generasjon (1 er eldste kjente) eller etternavn. En gren starter med et barn av de eldste kjente forfedrene, og de som har giftet seg inn følger partnerens gren og generasjon. Trykk på et navn i forklaringen for å skjule eller vise gruppen.');
    root.append(this.head, this.wrap, this.player, this.row, this.note);
    this.dots.style.setProperty('--mv', '0.8s');
    this.base.onTransform(() => this.zoomed());
    this.selId = arg && Store.persons.has(arg) ? arg : null;
    this.compute();
    this.fitAll(false, this.selId);
    if (this.selId){
      const x = this.people.find(q => q.p.id === this.selId);
      this.year = x ? x.start : this.minY;
    } else this.year = this.minY;
    this.sync(true);
    if (this.selId) this.select(this.selId, true);
  },
  famKey(p){ return norm(p.family) || '?'; },
  branchLabel(id){ const q = Store.persons.get(id); if (!q) return 'Eldste generasjon'; const g = q.given || fullName(q); return (/s$/i.test(g) ? g : g + 's') + ' gren'; },
  compute(){
    this.people = [];
    const bm = this.colorBy === 'branch' ? branchMap() : null, gm = this.colorBy === 'gen' ? genMap() : null;
    Store.persons.forEach(p => { const tl = timelineOf(p); const pr = presence(p, tl); if (pr) this.people.push({ p, tl, start: pr.start, end: pr.end, fam: bm ? bm.get(p.id) : gm ? 'g' + gm.get(p.id) : this.famKey(p) }); });
    const ys = this.people.map(x => x.start);
    this.minY = ys.length ? Math.min(...ys) : NOW_YEAR - 100;
    this.maxY = NOW_YEAR;
    if (this.maxY - this.minY < 5) this.minY = this.maxY - 5;
    const cnt = new Map();
    this.people.forEach(x => cnt.set(x.fam, (cnt.get(x.fam) || 0) + 1));
    const top = [...cnt.entries()].filter(([k]) => k !== 'root').sort((a, b) => b[1] - a[1]).slice(0, 6);
    this.famColor = new Map(top.map(([k], i) => [k, FAM_COLORS[i]]));
    this.famName = new Map();
    this.people.forEach(x => { if (this.famName.has(x.fam)) return; if (this.colorBy === 'branch') this.famName.set(x.fam, this.branchLabel(x.fam)); else if (x.p.family) this.famName.set(x.fam, x.p.family); });
    this.topFam = top.map(([k]) => k);
    this.hasOther = cnt.size > top.length;
    if (this.colorBy === 'gen'){
      const keys = [...cnt.keys()].sort((a, b) => +a.slice(1) - +b.slice(1)), n = keys.length;
      this.topFam = keys; this.hasOther = false;
      this.famColor = new Map(keys.map((k, i) => [k, n === 1 ? 'var(--f4)' : 'color-mix(in oklab, var(--f4), var(--f3) ' + Math.round(i / (n - 1) * 100) + '%)']));
      this.famName = new Map(keys.map(k => [k, (+k.slice(1) + 1) + '. generasjon']));
    }
    // forklaring
    clear(this.legend);
    this.topFam.forEach(k => this.legend.appendChild(h('button', { type: 'button', style: { '--c': this.famColor.get(k) }, 'aria-pressed': String(!this.hidden.has(k)), onclick: e => { this.toggleFam(k, e.currentTarget); } }, h('i'), this.famName.get(k) || 'Uten etternavn')));
    if (this.hasOther) this.legend.appendChild(h('button', { type: 'button', style: { '--c': 'var(--f0)' }, 'aria-pressed': String(!this.hidden.has('*')), onclick: e => this.toggleFam('*', e.currentTarget) }, h('i'), 'Andre'));
    // skala
    this.slider.min = this.minY; this.slider.max = this.maxY;
    clear(this.axis).append(h('span', null, this.minY), h('span', null, Math.round((this.minY + this.maxY) / 2)), h('span', null, 'i dag'));
    this.drawSpark();
    this.nodata.hidden = this.people.length > 0;
  },
  toggleFam(k, btn){ if (this.hidden.has(k)) this.hidden.delete(k); else this.hidden.add(k); btn.setAttribute('aria-pressed', String(!this.hidden.has(k))); this.drawSpark(); this.place(true); },
  isHidden(x){ return this.hidden.has(this.famColor.has(x.fam) ? x.fam : '*'); },
  drawSpark(){
    const n = this.maxY - this.minY + 1, counts = new Array(n).fill(0);
    this.people.forEach(x => { if (this.isHidden(x)) return; for (let y = Math.max(x.start, this.minY); y <= Math.min(x.end, this.maxY); y++) if (locAt(x.tl, y)) counts[y - this.minY]++; });
    const mx = Math.max(1, ...counts);
    const pts = counts.map((c, i) => [i / (n - 1) * 1000, 34 - (c / mx) * 30]);
    const d = 'M0,35 L' + pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' L') + ' L1000,35 Z';
    clear(this.sparkSvg).append(h('path', { class: 'area', d }), h('line', { class: 'base', x1: 0, x2: 1000, y1: 35, y2: 35 }));
  },
  fitAll(animate, onlyId){
    const pts = [];
    this.people.forEach(x => { if (onlyId && x.p.id !== onlyId) return; x.tl.forEach(e => pts.push([e.place.lon, e.place.lat])); });
    this.base.fit(pts.length ? pts : [], { minSpan: 12, pad: 0.15, animate, maxK: 60 });
  },
  zoomed(){
    this.dots.classList.add('instant');
    this.place(true);
    clearTimeout(this._zt);
    this._zt = setTimeout(() => { if (!this._instantNow) this.dots.classList.remove('instant'); }, 140);
  },
  setPlayIcon(){
    clear(this.playBtn).appendChild(ico(this.playing ? 'pause' : (this.finished ? 'replay' : 'play'), 26));
    this.playBtn.setAttribute('aria-label', this.playing ? 'Pause' : (this.finished ? 'Spill av på nytt' : 'Spill av'));
  },
  toggle(){ this.playing ? this.pause() : this.play(); },
  play(){
    if (!this.people.length) return;
    if (this.year >= this.maxY || this.finished){ this.year = this.minY; this.finished = false; this.sync(true); }
    this.playing = true; this.setPlayIcon();
    this.last = performance.now();
    this._instantNow = false;
    const step = t => {
      if (!this.playing) return;
      const dt = Math.min(0.12, (t - this.last) / 1000); this.last = t;
      this.year = Math.min(this.maxY, this.year + dt * 3.5 * this.speed);
      this.sync(false);
      if (this.year >= this.maxY){ this.playing = false; this.finished = true; this.setPlayIcon(); return; }
      this.raf = requestAnimationFrame(step);
    };
    this.raf = requestAnimationFrame(step);
  },
  pause(){ this.playing = false; cancelAnimationFrame(this.raf); this.setPlayIcon(); },
  sync(force){
    const Y = Math.floor(this.year);
    this.slider.value = Y;
    if (Y !== this.shown || force){
      this.shown = Y;
      this.yrEl.textContent = Y;
      if (force){ this.dots.classList.add('instant'); }
      this.place(false);
      if (force){ requestAnimationFrame(() => requestAnimationFrame(() => this.dots.classList.remove('instant'))); }
    }
  },
  place(instant){
    const Y = Math.floor(this.year == null ? this.minY : this.year);
    const base = this.base;
    const active = [];
    this.people.forEach(x => { if (x.start <= Y && Y <= x.end && !this.isHidden(x)){ const loc = locAt(x.tl, Y); if (loc) active.push({ x, loc }); } });
    const groups = new Map();
    active.forEach(a => { const key = a.loc.place.lat.toFixed(3) + ',' + a.loc.place.lon.toFixed(3); if (!groups.has(key)) groups.set(key, { place: a.loc.place, list: [] }); groups.get(key).list.push(a); });
    const live = new Set();
    groups.forEach(gr => {
      gr.list.sort((a, b) => a.x.p.id < b.x.p.id ? -1 : 1);
      const [cx, cy] = base.toScreen(gr.place.lon, gr.place.lat);
      gr.cx = cx; gr.cy = cy;
      const n = gr.list.length;
      gr.rad = n === 1 ? 8 : 7.5 * Math.sqrt(n) + 9;
      gr.list.forEach((a, i) => {
        let ox = 0, oy = 0;
        if (n > 1){ const r = 7.5 * Math.sqrt(i + 0.35), th = i * 2.39996; ox = r * Math.cos(th); oy = r * Math.sin(th); }
        const id = a.x.p.id; live.add(id);
        let rec = this.dotEls.get(id);
        const color = this.famColor.get(a.x.fam) || 'var(--f0)';
        if (!rec){
          const i_ = h('i', { title: fullName(a.x.p) + ' (' + lifeSpan(a.x.p) + ')', onclick: () => this.select(id) });
          const el = h('div', { class: 'dot enter' }, i_);
          el.style.transform = 'translate(' + (cx + ox) + 'px,' + (cy + oy) + 'px)';
          this.dots.appendChild(el);
          rec = { el, timer: 0 };
          this.dotEls.set(id, rec);
          requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('enter')));
        } else {
          clearTimeout(rec.timer);
          rec.el.classList.remove('gone');
          rec.el.style.transform = 'translate(' + (cx + ox) + 'px,' + (cy + oy) + 'px)';
        }
        rec.el.style.setProperty('--c', color);
        rec.el.classList.toggle('sel', id === this.selId);
        rec.el.firstChild.setAttribute('title', fullName(a.x.p) + ' (' + lifeSpan(a.x.p) + ')');
      });
    });
    this.dotEls.forEach((rec, id) => {
      if (live.has(id)) return;
      if (!rec.el.classList.contains('gone')){
        rec.el.classList.add('gone');
        rec.timer = setTimeout(() => { rec.el.remove(); if (this.dotEls.get(id) === rec) this.dotEls.delete(id); }, 450);
      }
    });
    // stedsnavn med enkel kollisjonshåndtering
    this.dots.querySelectorAll('.plabel').forEach(e => e.remove());
    const [W, H] = base.size, boxes = [];
    [...groups.values()].sort((a, b) => b.list.length - a.list.length).forEach(gr => {
      if (!gr.place.name) return;
      const txt = noPlace(gr.place.name) + (gr.list.length > 1 ? ' · ' + gr.list.length : '');
      const w = txt.length * 6.7 + 6, hh = 16;
      const x = gr.cx + gr.rad + 3, y = gr.cy - 8;
      if (x < -w || x > W || y < -20 || y > H) return;
      if (boxes.some(b => x < b.x + b.w && x + w > b.x && y < b.y + b.h && y + hh > b.y)) return;
      boxes.push({ x, y, w, h: hh });
      const lab = h('div', { class: 'plabel' }, noPlace(gr.place.name), gr.list.length > 1 ? h('b', null, ' · ' + gr.list.length) : null);
      lab.style.setProperty('--x', x + 'px'); lab.style.setProperty('--y', y + 'px');
      this.dots.appendChild(lab);
    });
    this.metaEl.textContent = active.length ? plural(active.length, 'person', 'personer') + ' · ' + plural(groups.size, 'sted', 'steder') : (this.people.length ? 'Ingen kjente bosteder dette året' : '');
    if (this.selId) this.infoCard();
  },
  select(id, noFit){
    this.selId = id;
    clear(this.base.routeG);
    const x = this.people.find(q => q.p.id === id);
    if (x && x.tl.length > 1){
      const d = d3.line()(x.tl.map(e => this.base.project(e.place.lon, e.place.lat)));
      this.base.routeG.appendChild(h('path', { class: 'p-route', d }));
    }
    this.dotEls.forEach((rec, pid) => rec.el.classList.toggle('sel', pid === id));
    this.infoCard();
    this.base.svg.onclick = () => { if (this.selId) this.deselect(); };
  },
  deselect(){
    this.selId = null; clear(this.base.routeG); this.infoEl.hidden = true;
    this.dotEls.forEach(rec => rec.el.classList.remove('sel'));
  },
  infoCard(){
    const x = this.people.find(q => q.p.id === this.selId);
    if (!x){ this.infoEl.hidden = true; return; }
    const Y = Math.floor(this.year);
    const loc = (x.start <= Y && Y <= x.end) ? locAt(x.tl, Y) : null;
    const stops = [];
    x.tl.forEach(e => { const l = stops[stops.length - 1]; if (!l || l.place.lat !== e.place.lat || l.place.lon !== e.place.lon) stops.push(e); });
    this.infoEl.hidden = false;
    clear(this.infoEl).append(
      h('div', { class: 'hd' }, avatar(x.p, 44),
        h('div', { style: { minWidth: 0, flex: 1 } }, h('div', { class: 'nm' }, fullName(x.p)),
          h('div', { class: 'muted', style: { fontSize: '13px' } }, lifeSpan(x.p) + ' · ' + (loc ? 'bor ' + iPaa(loc.place) + ' ' + (noPlace(loc.place.name) || 'ukjent sted') : Y < x.start ? 'ikke født ennå' : 'ikke på kartet i ' + Y))),
        h('button', { class: 'icon-btn', style: { width: '32px', height: '32px' }, 'aria-label': 'Lukk', onclick: () => this.deselect() }, ico('x', 16))),
      stops.length > 1 ? h('div', { class: 'route' }, stops.map(s => s.year + ' ' + (noPlace(s.place.name) || '?')).join('  →  ')) : null,
      h('div', { class: 'acts' }, h('button', { class: 'btn sm primary', onclick: () => App.go('person', x.p.id) }, 'Åpne side'), h('button', { class: 'btn sm', onclick: () => this.fitAll(true, x.p.id) }, 'Vis ruten')));
  },
  update(){
    this.compute();
    if (this.year == null || this.year < this.minY) this.year = this.minY;
    if (this.year > this.maxY) this.year = this.maxY;
    this.sync(true);
    if (this.selId) this.select(this.selId, true);
    if (!this.fittedOnce && this.people.length){ this.fittedOnce = true; this.fitAll(false); }
  },
  unmount(){ this.pause(); clearTimeout(this._zt); this.dotEls.forEach(r => clearTimeout(r.timer)); if (this.base) this.base.destroy(); }
};

/* ====== Bilder ====== */
/* ====== Roter bilde (90 grader) ====== */
async function rotatePhoto(id, dir, pg = 0){
  const ph = Store.photos.get(id);
  if (!ph || !ph.assetId) return;
  const page = pagesOf(ph)[pg];
  if (!page || !page.assetId) return;
  const src = await assetBlob(page.assetId);
  const bmp = await createImageBitmap(src);
  try {
    const cv = document.createElement('canvas'); cv.width = bmp.height; cv.height = bmp.width;
    const c = cv.getContext('2d'); c.translate(cv.width / 2, cv.height / 2); c.rotate(dir * Math.PI / 2); c.drawImage(bmp, -bmp.width / 2, -bmp.height / 2);
    let out = null;
    if (src.type === 'image/png') out = await new Promise(res => cv.toBlob(res, 'image/png'));
    if (!out || out.size > 19 * 1024 * 1024) out = await new Promise(res => cv.toBlob(res, 'image/jpeg', 0.95));
    if (!out) throw new Error('encode');
    const up = await Store.assets.upload(out);
    const map = (x, y) => dir > 0 ? [1 - y, x] : [y, 1 - x];
    const q = clone(Store.photos.get(id) || ph);
    const old = page.assetId;
    if (pg === 0){ q.assetId = up.id; q.w = cv.width; q.h = cv.height; } else q.more[pg - 1] = { assetId: up.id, w: cv.width, h: cv.height };
    q.tags = (q.tags || []).map(t => { if (t.x == null || (t.pg || 0) !== pg) return t; const [nx, ny] = map(t.x, t.y); return Object.assign({}, t, { x: +nx.toFixed(4), y: +ny.toFixed(4) }); });
    await Store.savePhoto(q);
    for (const per of [...Store.persons.values()]){
      if (pg !== 0 || !per.portrait || per.portrait.photoId !== id) continue;
      const o = clone(per), [nx, ny] = map(per.portrait.cx, per.portrait.cy);
      o.portrait = { photoId: id, cx: +nx.toFixed(4), cy: +ny.toFixed(4), z: per.portrait.z };
      await Store.savePerson(o);
    }
    if (old && old !== up.id && Store.assets){ try { await Store.assets.delete(old); } catch (_) {} }
  } finally { if (bmp.close) bmp.close(); }
}

/* ====== Beskjær bilde ====== */
const CROP_RATIOS = [['Fri', null], ['Original', 'orig'], ['1:1', 1], ['4:3', 4 / 3], ['3:4', 3 / 4], ['3:2', 3 / 2], ['2:3', 2 / 3]];
function openCropEditor(photoId, onDone, pg = 0){
  const ph0 = Store.photos.get(photoId);
  if (!ph0 || !ph0.assetId) return;
  const page0 = pagesOf(ph0)[pg] || pagesOf(ph0)[0];
  const W = page0.w, H = page0.h;
  let r = { x0: 0, y0: 0, x1: 1, y1: 1 };
  let lock = null;                       // pikselforhold bredde/høyde, eller null
  const kNorm = () => lock * H / W;      // forhold i normaliserte koordinater
  const wrap = h('div', { class: 'cr-wrap', style: { width: 'min(100%, 640px, calc(58vh * ' + (W / H).toFixed(4) + '))', aspectRatio: W + ' / ' + H } });
  const img = h('img', { src: photoUrl(page0), alt: '', draggable: false });
  const box = h('div', { class: 'cr-box', tabindex: 0, 'aria-label': 'Utsnitt' });
  const HANDLES = [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]];
  HANDLES.forEach(([hx, hy]) => box.appendChild(h('i', { class: 'cr-h', 'data-hx': hx, 'data-hy': hy })));
  box.appendChild(h('div', { class: 'cr-grid' }));
  const shade = h('div', { class: 'cr-shade' });
  wrap.append(h('div', { class: 'cr-clip' }, img, shade), box);
  const info = h('p', { class: 'fnote', style: { margin: 0, textAlign: 'center' } });
  const ratioBar = h('div', { class: 'seg', role: 'group', 'aria-label': 'Format', style: { flexWrap: 'wrap' } });
  function px(){ return { w: Math.round((r.x1 - r.x0) * W), h: Math.round((r.y1 - r.y0) * H) }; }
  function draw(){
    Object.assign(shade.style, { left: r.x0 * 100 + '%', top: r.y0 * 100 + '%', width: (r.x1 - r.x0) * 100 + '%', height: (r.y1 - r.y0) * 100 + '%' });
    Object.assign(box.style, { left: r.x0 * 100 + '%', top: r.y0 * 100 + '%', width: (r.x1 - r.x0) * 100 + '%', height: (r.y1 - r.y0) * 100 + '%' });
    const s = px();
    info.textContent = 'Utsnitt: ' + s.w + ' × ' + s.h + ' piksler (originalen er ' + W + ' × ' + H + ')';
    const full = r.x0 === 0 && r.y0 === 0 && r.x1 === 1 && r.y1 === 1;
    saveCopy.disabled = replaceBtn.disabled = full;
  }
  function refit(){
    if (!lock) return;
    const k = kNorm(), cx = (r.x0 + r.x1) / 2, cy = (r.y0 + r.y1) / 2;
    let w = r.x1 - r.x0, hh = r.y1 - r.y0;
    if (w / hh > k) w = hh * k; else hh = w / k;
    r = { x0: cx - w / 2, x1: cx + w / 2, y0: cy - hh / 2, y1: cy + hh / 2 };
  }
  const drawRatios = () => { clear(ratioBar); CROP_RATIOS.forEach(([t, v]) => ratioBar.appendChild(h('button', { type: 'button', 'aria-pressed': String((v === 'orig' ? Math.abs((lock || 0) - W / H) < 1e-6 : v) === (v === 'orig' ? true : lock)), onclick: () => { lock = v === 'orig' ? W / H : v; refit(); drawRatios(); draw(); } }, t))); };
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  let drag = null;
  wrap.addEventListener('pointerdown', e => {
    const t = e.target; let mode = null;
    if (t.classList.contains('cr-h')) mode = { hx: +t.dataset.hx, hy: +t.dataset.hy };
    else if (box.contains(t)) mode = 'move';
    else return;
    e.preventDefault();
    try { wrap.setPointerCapture(e.pointerId); } catch (_) {}
    const b = wrap.getBoundingClientRect();
    drag = { mode, sx: e.clientX, sy: e.clientY, r0: { ...r }, b };
  });
  wrap.addEventListener('pointermove', e => {
    if (!drag) return;
    const { b, r0, mode } = drag;
    const dx = (e.clientX - drag.sx) / b.width, dy = (e.clientY - drag.sy) / b.height;
    if (mode === 'move'){
      const w = r0.x1 - r0.x0, hh = r0.y1 - r0.y0;
      const x0 = clamp(r0.x0 + dx, 0, 1 - w), y0 = clamp(r0.y0 + dy, 0, 1 - hh);
      r = { x0, y0, x1: x0 + w, y1: y0 + hh };
    } else {
      const { hx, hy } = mode, MIN = 0.03;
      const cx = (r0.x0 + r0.x1) / 2, cy = (r0.y0 + r0.y1) / 2;
      const ax = hx === 1 ? r0.x0 : hx === -1 ? r0.x1 : cx, ay = hy === 1 ? r0.y0 : hy === -1 ? r0.y1 : cy;
      const px_ = clamp((hx === 1 ? r0.x1 : hx === -1 ? r0.x0 : cx) + dx), py_ = clamp((hy === 1 ? r0.y1 : hy === -1 ? r0.y0 : cy) + dy);
      let w = hx ? Math.abs(px_ - ax) : r0.x1 - r0.x0, hh = hy ? Math.abs(py_ - ay) : r0.y1 - r0.y0;
      // ikke dra over motsatt kant
      if (hx && ((hx === 1 && px_ < ax) || (hx === -1 && px_ > ax))) w = 0;
      if (hy && ((hy === 1 && py_ < ay) || (hy === -1 && py_ > ay))) hh = 0;
      if (lock){
        const k = kNorm();
        if (hx && hy){ if (w / k > hh) hh = w / k; else w = hh * k; }
        else if (hx) hh = w / k;
        else w = hh * k;
        const maxW = hx === 1 ? 1 - ax : hx === -1 ? ax : 2 * Math.min(cx, 1 - cx);
        const maxH = hy === 1 ? 1 - ay : hy === -1 ? ay : 2 * Math.min(cy, 1 - cy);
        if (w > maxW){ w = maxW; hh = w / k; }
        if (hh > maxH){ hh = maxH; w = hh * k; }
        if (w < MIN){ w = MIN; hh = w / k; }
      } else { w = Math.max(MIN, w); hh = Math.max(MIN, hh); }
      const nx0 = hx === 1 ? ax : hx === -1 ? ax - w : cx - w / 2, ny0 = hy === 1 ? ay : hy === -1 ? ay - hh : cy - hh / 2;
      const x0 = clamp(nx0, 0, 1 - w), y0 = clamp(ny0, 0, 1 - hh);
      r = { x0, y0, x1: x0 + w, y1: y0 + hh };
    }
    draw();
  });
  const end = () => { drag = null; };
  wrap.addEventListener('pointerup', end); wrap.addEventListener('pointercancel', end);

  async function cropBlob(){
    const src = await assetBlob(page0.assetId);
    const bmp = await createImageBitmap(src);
    try {
      const sx = Math.round(r.x0 * bmp.width), sy = Math.round(r.y0 * bmp.height);
      const cw = Math.max(1, Math.min(bmp.width - sx, Math.round((r.x1 - r.x0) * bmp.width))), ch = Math.max(1, Math.min(bmp.height - sy, Math.round((r.y1 - r.y0) * bmp.height)));
      const cv = document.createElement('canvas'); cv.width = cw; cv.height = ch;
      cv.getContext('2d').drawImage(bmp, sx, sy, cw, ch, 0, 0, cw, ch);
      const LIMIT = 19 * 1024 * 1024;
      let out = null;
      if (src.type === 'image/png') out = await new Promise(res => cv.toBlob(res, 'image/png'));
      if (!out || out.size > LIMIT) out = await new Promise(res => cv.toBlob(res, 'image/jpeg', 0.95));
      if (!out) throw new Error('encode');
      return { blob: out, sx, sy, cw, ch, bw: bmp.width, bh: bmp.height };
    } finally { if (bmp.close) bmp.close(); }
  }
  const mapTags = (tags, c, isSrc) => {
    let dropped = 0;
    const out = [];
    (tags || []).forEach(t => {
      if (t.x == null){ out.push(t); return; }
      const nx = (t.x * c.bw - c.sx) / c.cw, ny = (t.y * c.bh - c.sy) / c.ch;
      if (nx >= 0 && nx <= 1 && ny >= 0 && ny <= 1) out.push({ pid: t.pid, x: +nx.toFixed(4), y: +ny.toFixed(4) });
      else if (isSrc) out.push({ pid: t.pid, x: null, y: null });
      else dropped++;
    });
    return { tags: out, dropped };
  };
  async function commit(replace){
    saveCopy.disabled = replaceBtn.disabled = true;
    try {
      const c = await cropBlob();
      const up = await Store.assets.upload(c.blob);
      const isSrc = isSource(ph0);
      const tagsThis = (ph0.tags || []).filter(t => t.x == null || (t.pg || 0) === pg), tagsOther = (ph0.tags || []).filter(t => t.x != null && (t.pg || 0) !== pg);
      const mt = mapTags(tagsThis, c, isSrc);
      let resultId = null;
      if (replace){
        const cur = Store.photos.get(ph0.id) || ph0;
        const q = clone(cur);
        const newTags = mt.tags.map(t => t.x != null && pg > 0 ? Object.assign({}, t, { pg }) : t);
        q.tags = tagsOther.concat(newTags);
        const oldAsset = pagesOf(cur)[pg].assetId;
        if (pg === 0){ q.assetId = up.id; q.w = c.cw; q.h = c.ch; } else q.more[pg - 1] = { assetId: up.id, w: c.cw, h: c.ch };
        await Store.savePhoto(q);
        // profilbilder som bruker dette bildet følger med utsnittet
        for (const per of [...Store.persons.values()]){
          if (pg !== 0 || !per.portrait || per.portrait.photoId !== ph0.id) continue;
          const pp = per.portrait, side = Math.min(c.bw, c.bh) / Math.max(1, pp.z || 1);
          const nx = (pp.cx * c.bw - c.sx) / c.cw, ny = (pp.cy * c.bh - c.sy) / c.ch;
          const o = clone(per);
          if (nx < 0 || nx > 1 || ny < 0 || ny > 1) delete o.portrait;
          else o.portrait = { photoId: ph0.id, cx: +nx.toFixed(4), cy: +ny.toFixed(4), z: +Math.max(1, Math.min(c.cw, c.ch) / side).toFixed(3) };
          await Store.savePerson(o);
        }
        if (oldAsset && oldAsset !== up.id && Store.assets){ try { await Store.assets.delete(oldAsset); } catch (_) {} }
        resultId = ph0.id;
      } else {
        const q = Object.assign(clone(ph0), { id: uid(), assetId: up.id, w: c.cw, h: c.ch, tags: mt.tags, created: Date.now() });
        delete q.more;
        q.caption = (ph0.caption || '') + (ph0.caption ? ' ' : '') + '(beskåret)';
        const saved = await Store.savePhoto(q);
        resultId = (saved && saved.id) || q.id;
      }
      modal.close();
      toast((replace ? 'Bildet er beskåret' : 'Beskåret kopi er lagret') + (mt.dropped ? ' · ' + plural(mt.dropped, 'tagg', 'tagger') + ' utenfor utsnittet er fjernet' : ''));
      if (onDone) onDone(resultId, replace);
    } catch (e){ console.error(e); toast('Kunne ikke beskjære bildet.'); draw(); }
  }
  const saveCopy = h('button', { type: 'button', class: 'btn primary', onclick: () => commit(false) }, 'Lagre som kopi');
  let armed = false;
  const replaceBtn = h('button', { type: 'button', class: 'btn', onclick: () => {
    if (!armed){ armed = true; replaceBtn.classList.add('sure'); replaceBtn.textContent = 'Trykk igjen for å erstatte originalen'; setTimeout(() => { armed = false; replaceBtn.classList.remove('sure'); replaceBtn.textContent = 'Erstatt originalen'; }, 4000); return; }
    commit(true);
  } }, 'Erstatt originalen');
  const body = h('div', { class: 'modal-b' }, h('div', { class: 'crop' }, ratioBar, wrap, info,
    h('p', { class: 'fnote', style: { margin: 0, textAlign: 'center' } }, 'Dra i hjørnene eller kantene for å velge utsnitt, og dra inni rammen for å flytte den. Beskjæringen gjøres på originalbildet i full oppløsning.')),
    h('div', { class: 'form-actions', style: { flexWrap: 'wrap', gap: '8px' } },
      h('button', { type: 'button', class: 'btn ghost', onclick: () => { r = { x0: 0, y0: 0, x1: 1, y1: 1 }; lock = null; drawRatios(); draw(); } }, 'Tilbakestill'),
      h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } }, h('button', { type: 'button', class: 'btn ghost', onclick: () => modal.close() }, 'Avbryt'), replaceBtn, saveCopy)));
  const modal = openModal(isSource(ph0) ? 'Beskjær kilde' : 'Beskjær bilde', body, { cls: 'wide' });
  drawRatios(); draw();
}

const Photos = {
  filter: '', tab: 'photo',
  mount(root){
    this.root = root;
    this.fileIn = h('input', { type: 'file', accept: 'image/*', multiple: true, hidden: true, onchange: e => { this.uploadFiles([...e.target.files], { kind: this.tab }); e.target.value = ''; } });
    this.head = h('div'); this.tools = h('div', { class: 'tools' }); this.body = h('div');
    root.append(this.head, this.tools, this.body, this.fileIn);
    this.update();
  },
  sorted(kind){ return [...Store.photos.values()].filter(p => !kind || (isSource(p) ? 'source' : 'photo') === kind).sort((a, b) => (a.year || 9999) - (b.year || 9999) || (a.created || 0) - (b.created || 0)); },
  update(){
    const src = this.tab === 'source';
    const nPhoto = this.sorted('photo').length, nSrc = this.sorted('source').length;
    const all = this.sorted(this.tab);
    const seg = h('div', { class: 'seg', role: 'group', 'aria-label': 'Type' },
      h('button', { type: 'button', 'aria-pressed': String(!src), onclick: () => { this.tab = 'photo'; this.filter = ''; this.update(); } }, 'Fotografier (' + nPhoto + ')'),
      h('button', { type: 'button', 'aria-pressed': String(src), onclick: () => { this.tab = 'source'; this.filter = ''; this.update(); } }, 'Kilder (' + nSrc + ')'));
    clear(this.head).appendChild(h('div', null, h('div', { class: 'page-h' }, h('div', null, h('h1', null, src ? 'Skriftlige kilder' : 'Fotografier'),
      h('p', null, src ? (all.length ? plural(all.length, 'kilde', 'kilder') + '. Åpne en kilde for å knytte den til personene den nevner.' : 'Last opp bilder av kirkebøker, bygdebøker, dåpsattester og avisutklipp.')
        : (all.length ? plural(all.length, 'bilde', 'bilder') + '. Åpne et bilde og trykk «Tagg personer» for å markere hvem som er med.' : 'Last opp bilder og marker personene i dem.'))),
      Store.canWrite ? h('button', { class: 'btn primary', disabled: !Store.assets, onclick: () => this.fileIn.click() }, ico('upload', 18), src ? 'Last opp kilder' : 'Last opp bilder') : null), seg));
    const tagged = new Set(); all.forEach(ph => (ph.tags || []).forEach(t => tagged.add(t.pid)));
    clear(this.tools);
    if (tagged.size){
      const sel = h('select', { class: 'inp', style: { width: 'auto', maxWidth: '100%' }, 'aria-label': src ? 'Vis kilder om' : 'Vis bilder av', onchange: e => { this.filter = e.target.value; this.update(); } },
        h('option', { value: '' }, src ? 'Alle kilder' : 'Alle bilder'), [...tagged].map(i => Store.persons.get(i)).filter(Boolean).sort(nameCmp).map(p => h('option', { value: p.id, selected: p.id === this.filter }, (src ? 'Nevner ' : 'Med ') + fullName(p))));
      this.tools.appendChild(sel);
    } else this.filter = '';
    this.tools.style.display = tagged.size ? '' : 'none';
    clear(this.body);
    let rows = this.filter ? all.filter(ph => (ph.tags || []).some(t => t.pid === this.filter)) : all;
    if (!all.length){
      this.body.appendChild(h('div', { class: 'empty' }, h('h2', null, src ? 'Ingen kilder ennå' : 'Ingen bilder ennå'),
        h('p', null, !Store.assets ? 'Opplasting er ikke tilgjengelig i denne visningen.' : src ? 'Fotografer eller skann sidene som dokumenterer slekten. Du kan merke av hvor hver person står i teksten, og skille kildene fra fotografiene.' : 'Last opp gamle portretter, gruppebilder eller bilder av gårder og steder. Du kan tagge hver person ved å trykke på ansiktet.'),
        (Store.canWrite && Store.assets) ? h('button', { class: 'btn primary', onclick: () => this.fileIn.click() }, ico('upload', 18), src ? 'Last opp kilder' : 'Last opp bilder') : null));
      return;
    }
    const ids = rows.map(r => r.id);
    this.body.appendChild(h('div', { class: 'gal' }, rows.map(ph => {
      const names = (ph.tags || []).map(t => Store.persons.get(t.pid)).filter(Boolean).map(p => p.given || fullName(p));
      return h('button', { class: 'thumb' + (src ? ' doc' : ''), 'aria-label': ph.caption || ph.ref || 'Åpne', onclick: () => this.open(ph.id, { list: ids }) },
        h('img', { src: photoUrl(ph), alt: ph.caption || '', loading: 'lazy', style: ph.w && ph.h ? { aspectRatio: ph.w + '/' + ph.h } : {} }),
        src ? h('span', { class: 'badge top' }, ph.srcType || 'Kilde') : null,
        (ph.tags || []).length ? h('span', { class: 'tg' }, ico('tag', 13), String(ph.tags.length)) : null,
        h('span', { class: 'cap' }, [yearLabel(ph), ph.place && noPlace(ph.place.name), (src ? (ph.ref || ph.caption) : ph.caption) || names.slice(0, 3).join(', '), pagesOf(ph).length > 1 ? pagesOf(ph).length + ' sider' : null].filter(Boolean).join(' · ') || ' '));
    })));
  },
  unmount(){},
  async uploadFiles(files, o = {}){
    files = files.filter(f => f.type.startsWith('image/'));
    if (!files.length) return;
    if (!Store.assets){ toast('Opplasting er ikke tilgjengelig i denne visningen.'); return; }
    const kind = o.kind || this.tab;
    let groups = files.map(f => [f]);
    if (kind === 'source' && files.length > 1){
      const choice = await new Promise(res => {
        let done = false; const fin = v => { if (done) return; done = true; m.close(); res(v); };
        const m = openModal('Flere filer valgt', h('div', { class: 'modal-b' },
          h('p', null, 'Er dette sidene i én kilde, for eksempel en notis som går over flere sider, eller ' + files.length + ' ulike kilder?'),
          h('button', { class: 'btn primary', onclick: () => fin('one') }, 'Én kilde med ' + files.length + ' sider'),
          h('button', { class: 'btn', onclick: () => fin('many') }, files.length + ' separate kilder'),
          h('button', { class: 'btn ghost', onclick: () => fin(null) }, 'Avbryt')), { onClose: () => { if (!done){ done = true; res(null); } } });
      });
      if (!choice) return;
      if (choice === 'one') groups = [files];
    }
    let last = null, n = 0;
    for (const grp of groups){
      try {
        let ph = null;
        for (const f of grp){
          n++; toast('Laster opp ' + n + ' av ' + files.length + ' …');
          const up = await Store.uploadImage(f);
          if (!ph){
            ph = { id: uid(), assetId: up.assetId, w: up.w, h: up.h, caption: '', year: null, tags: [], created: Date.now(), kind: kind };
            if (kind === 'source'){ ph.srcType = 'Kirkebok'; ph.ref = ''; }
          } else (ph.more = ph.more || []).push({ assetId: up.assetId, w: up.w, h: up.h });
        }
        if (ph){ await Store.savePhoto(ph); last = ph; }
      } catch (e){ toast(e.message === 'unreadable' ? 'Kunne ikke lese en av filene.' : 'Opplastingen feilet. Prøv igjen.'); }
    }
    if (last){ toast(files.length > 1 ? 'Filene er lastet opp' : 'Opplastingen er ferdig'); this.open(last.id, { tagPerson: o.tagPerson || null, startTagging: !!o.tagPerson }); }
  },
  open(id, o = {}){
    const self = this;
    const first = Store.photos.get(id);
    let list = o.list || this.sorted(isSource(first) ? 'source' : 'photo').map(p => p.id);
    if (!list.includes(id)) list = [id, ...list];
    let cur = id, pg = 0, tagging = !!o.startTagging, pre = o.tagPerson || null, pending = null, showNames = true, query = '', big = false;
    const stage = h('div', { class: 'pvstage' }), side = h('div', { class: 'pvside' });
    const caption = h('input', { class: 'inp', type: 'text', placeholder: 'Bildetekst, f.eks. «Familien samlet på Haugen»', 'aria-label': 'Bildetekst', onchange: e => save({ caption: e.target.value }) });
    const refInp = h('input', { class: 'inp', type: 'text', placeholder: 'f.eks. Voss prestearkiv, klokkerbok 1866, s. 42', 'aria-label': 'Kildehenvisning', onchange: e => save({ ref: e.target.value }) });
    const typeSel = h('select', { class: 'inp', 'aria-label': 'Type kilde', onchange: e => save({ srcType: e.target.value }) }, SOURCE_TYPES.map(t => h('option', { value: t }, t)));
    const year = h('input', { class: 'inp', type: 'text', inputmode: 'numeric', placeholder: 'Årstall', 'aria-label': 'Årstall for bildet', style: { maxWidth: '170px' }, onchange: e => { const p = photo(); if (p && !isSource(p)){ const r = parsePhotoYear(e.target.value); save({ year: r.year, decade: r.decade || undefined }); } else save({ year: intOrNull(e.target.value) }); } });
    const nav = h('div', { class: 'pvnav' });
    const photo = () => Store.photos.get(cur);
    const addPageIn = h('input', { type: 'file', accept: 'image/*', multiple: true, hidden: true, onchange: async e => {
      const fs = [...e.target.files].filter(f => f.type.startsWith('image/')); e.target.value = '';
      const p = photo(); if (!fs.length || !p) return;
      const q = clone(p); q.more = q.more || [];
      for (const f of fs){ try { toast('Laster opp side …'); const up = await Store.uploadImage(f); q.more.push({ assetId: up.assetId, w: up.w, h: up.h }); } catch (err){ toast('Kunne ikke lese «' + f.name + '».'); } }
      await Store.savePhoto(q); pg = pagesOf(q).length - 1; pending = null; drawStage(); drawSide();
    } });
    function photoPlace(p){
      let latest = p.place || null, t = null;
      const flush = async () => { clearTimeout(t); t = null; const q = photo(); if (!q) return; const cur = q.place || null; if (JSON.stringify(cur) === JSON.stringify(latest)) return; const c = clone(q); if (latest) c.place = latest; else delete c.place; await Store.savePhoto(c); };
      const w = placeField(p.place, pl => { latest = pl; clearTimeout(t); t = setTimeout(flush, 900); }, { label: 'Sted for bildet', placeholder: 'Kommune eller sted, f.eks. Voss' });
      w.addEventListener('focusout', () => setTimeout(() => { if (t) flush(); }, 0));
      return w;
    }
    async function save(patch){ const p = photo(); if (!p) return; await Store.savePhoto(Object.assign(clone(p), patch)); }
    function loadFields(){ const p = photo(); caption.value = p ? (p.caption || '') : ''; { const ph = p && !isSource(p); year.setAttribute('inputmode', ph ? 'text' : 'numeric'); year.placeholder = ph ? 'f.eks. 1950 eller 1950-tallet' : 'Årstall'; year.style.maxWidth = ph ? '230px' : '130px'; year.value = p && p.year != null ? (ph ? yearLabel(p) : p.year) : ''; } refInp.value = p ? (p.ref || '') : ''; typeSel.value = p && p.srcType ? p.srcType : 'Kirkebok'; caption.disabled = year.disabled = refInp.disabled = typeSel.disabled = !Store.canWrite; }
    async function addTag(pid, pt){
      const p = photo(); if (!p) return;
      const q = clone(p); const tg = { pid, x: pt.x == null ? null : +pt.x.toFixed(4), y: pt.y == null ? null : +pt.y.toFixed(4) }; if (pg > 0 && tg.x != null) tg.pg = pg;
      q.tags = (q.tags || []).filter(t => t.pid !== pid).concat([tg]);
      pending = null; tagging = false; pre = null; query = '';
      await Store.savePhoto(q);
      drawStage(); drawSide();
      const per = Store.persons.get(pid); if (per) toast(fullName(per) + ' er tagget');
    }
    function drawStage(){
      clear(stage);
      const p = photo();
      if (!p){ stage.appendChild(h('p', { class: 'muted' }, 'Bildet finnes ikke lenger.')); return; }
      stage.classList.toggle('big', big);
      const wrap = h('div', { class: 'pvwrap' + (tagging ? ' tagging' : '') + (showNames ? '' : ' nonames') + (big ? ' big' : '') });
      const pgs = pagesOf(p); if (pg >= pgs.length) pg = 0;
      const img = h('img', { src: photoUrl(pgs[pg]), alt: p.caption || 'Bilde' });
      wrap.appendChild(img);
      (p.tags || []).forEach(t => { const per = Store.persons.get(t.pid); if (!per || t.x == null || (t.pg || 0) !== pg) return; wrap.appendChild(h('div', { class: 'pin', style: { left: (t.x * 100) + '%', top: (t.y * 100) + '%' } }, h('i'), h('span', null, per.given || fullName(per)))); });
      if (pending && pending.x != null) wrap.appendChild(h('div', { class: 'pin pending', style: { left: (pending.x * 100) + '%', top: (pending.y * 100) + '%' } }, h('i')));
      wrap.addEventListener('click', e => {
        if (!tagging) return;
        const r = img.getBoundingClientRect();
        const pt = { x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)) };
        if (pre) addTag(pre, pt); else { pending = pt; drawStage(); drawSide(); }
      });
      stage.appendChild(wrap);
      if (pgs.length > 1){
        stage.appendChild(h('div', { class: 'pvpages' },
          h('button', { class: 'btn sm', disabled: pg <= 0, onclick: () => { pg--; pending = null; drawStage(); drawSide(); } }, ico('back', 16), 'Forrige side'),
          h('span', { class: 'faint' }, 'Side ' + (pg + 1) + ' av ' + pgs.length),
          h('button', { class: 'btn sm', disabled: pg >= pgs.length - 1, onclick: () => { pg++; pending = null; drawStage(); drawSide(); } }, 'Neste side', ico('next', 16))));
      }
    }
    function drawSide(){
      clear(side);
      const p = photo(); if (!p) return;
      const edit = Store.canWrite;
      const tagBtn = edit ? h('button', { class: 'btn' + (tagging ? ' primary' : ''), onclick: () => { tagging = !tagging; pending = null; pre = null; query = ''; drawStage(); drawSide(); } }, ico('tag', 16), tagging ? 'Avbryt tagging' : 'Tagg personer') : null;
      const cropBtn = edit && p.assetId && p.w && p.h ? h('button', { class: 'btn', onclick: () => openCropEditor(p.id, (nid, replaced) => { if (!replaced && nid){ list.splice(list.indexOf(cur) + 1, 0, nid); cur = nid; pg = 0; } tagging = false; render(); }, pg) }, ico('crop', 16), 'Beskjær') : null;
      const rotBtn = dir => edit && p.assetId && p.w && p.h ? h('button', { class: 'btn ghost', 'aria-label': dir > 0 ? 'Roter mot høyre' : 'Roter mot venstre', onclick: async e => { const b = e.currentTarget; b.disabled = true; try { await rotatePhoto(p.id, dir, pg); } catch (err){ console.error(err); toast('Kunne ikke rotere bildet.'); } b.disabled = false; } }, ico(dir > 0 ? 'rotr' : 'rotl', 16), dir > 0 ? 'Roter høyre' : 'Roter venstre') : null;
      const sizeBtn = h('button', { class: 'btn ghost', 'aria-pressed': String(big), onclick: () => { big = !big; drawStage(); drawSide(); } }, ico('fit', 16), big ? 'Tilpass til skjermen' : 'Full størrelse');
      const namesBtn = h('button', { class: 'btn ghost', 'aria-pressed': String(showNames), onclick: () => { showNames = !showNames; drawStage(); drawSide(); } }, ico('eye', 16), showNames ? 'Skjul navn' : 'Vis navn');
      if (edit && isSource(p) && Store.assets){
        const pgs = pagesOf(p);
        let armedRm = false;
        const rm = pgs.length > 1 ? h('button', { class: 'btn danger sm', onclick: async () => {
          if (!armedRm){ armedRm = true; rm.classList.add('sure'); rm.lastChild.textContent = 'Trykk igjen for å fjerne side ' + (pg + 1); setTimeout(() => { armedRm = false; rm.classList.remove('sure'); rm.lastChild.textContent = 'Fjern denne siden'; }, 4000); return; }
          const q = clone(photo()), all = pagesOf(q), gone = all[pg], rest = all.filter((_, i) => i !== pg);
          q.assetId = rest[0].assetId; q.w = rest[0].w; q.h = rest[0].h; q.more = rest.slice(1); if (!q.more.length) delete q.more;
          q.tags = (q.tags || []).filter(t => t.x == null || (t.pg || 0) !== pg).map(t => { if (t.x != null && (t.pg || 0) > pg){ const o2 = Object.assign({}, t), n2 = (t.pg || 0) - 1; if (n2 > 0) o2.pg = n2; else delete o2.pg; return o2; } return t; });
          await Store.savePhoto(q);
          if (gone.assetId && Store.assets){ try { await Store.assets.delete(gone.assetId); } catch (_) {} }
          pg = Math.max(0, pg - 1); pending = null; drawStage(); drawSide();
        } }, ico('trash', 14), 'Fjern denne siden') : null;
        side.appendChild(h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } }, h('button', { class: 'btn sm', onclick: () => addPageIn.click() }, ico('plus', 14), 'Legg til side'), rm,
          pgs.length > 1 ? h('span', { class: 'faint', style: { alignSelf: 'center', fontSize: '13px' } }, 'Kilden har ' + pgs.length + ' sider') : null));
      }
      side.appendChild(h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } }, tagBtn, cropBtn, rotBtn(-1), rotBtn(1), namesBtn, sizeBtn));
      const srcMode = isSource(p);
      if (tagging && !pending && !pre) side.appendChild(h('p', { class: 'muted', style: { fontSize: '14px' } }, (srcMode ? 'Trykk på navnet i teksten for å merke hvor personen står, eller legg til en person uten å peke på et sted.' : 'Trykk på ansiktet eller personen i bildet du vil tagge.')));
      if (tagging && pre){ const per = Store.persons.get(pre); side.appendChild(h('p', { class: 'muted', style: { fontSize: '14px' } }, 'Trykk på ' + (per ? fullName(per) : 'personen') + (srcMode ? ' i teksten for å sette merket.' : ' i bildet for å sette taggen.')));
        if (srcMode) side.appendChild(h('div', null, h('button', { class: 'btn sm', onclick: () => addTag(pre, { x: null, y: null }) }, 'Nevnt i kilden, uten merke'))); }
      if (tagging && !pending && !pre && srcMode) side.appendChild(h('div', null, h('button', { class: 'btn sm', onclick: () => { pending = { x: null, y: null }; drawStage(); drawSide(); } }, ico('plus', 14), 'Legg til person uten merke')));
      if (pending){
        const already = new Set((p.tags || []).map(t => t.pid));
        const q = norm(query);
        const people = [...Store.persons.values()].filter(x => !already.has(x.id) && (!q || norm(fullName(x)).includes(q))).sort(nameCmp).slice(0, 8);
        const search = h('input', { class: 'inp', type: 'search', placeholder: 'Søk etter person …', 'aria-label': 'Søk etter person', value: query, autofocus: true });
        const ul = h('ul');
        const fill = () => { clear(ul); const qq = norm(search.value); [...Store.persons.values()].filter(x => !already.has(x.id) && (!qq || norm(fullName(x)).includes(qq))).sort(nameCmp).slice(0, 8).forEach(x => ul.appendChild(h('li', null, h('button', { type: 'button', onclick: () => addTag(x.id, pending) }, avatar(x, 30), h('span', null, fullName(x), x.birthYear != null ? h('span', { class: 'faint' }, ' f. ' + x.birthYear) : null))))); };
        search.addEventListener('input', () => { query = search.value; fill(); });
        fill();
        if (!matchMedia('(pointer:coarse)').matches) setTimeout(() => search.focus(), 0);
        side.appendChild(h('div', { class: 'chooser' }, h('strong', null, 'Hvem er dette?'), search, ul,
          h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
            h('button', { class: 'btn sm', type: 'button', onclick: () => { const pt = pending; openPersonForm({ title: 'Ny person fra bildet', onSaved: np => addTag(np.id, pt) }); } }, ico('plus', 14), 'Ny person'),
            h('button', { class: 'btn sm ghost', type: 'button', onclick: () => { pending = null; drawStage(); drawSide(); } }, 'Angre punktet'))));
      }
      const chips = (p.tags || []).map(t => { const per = Store.persons.get(t.pid); if (!per) return null;
        return h('span', { class: 'chip' }, avatar(per, 26), h('a', { href: '#', class: 't', style: { textDecoration: 'none' }, onclick: e => { e.preventDefault(); modal.close(); App.go('person', per.id); } }, fullName(per)),
          edit ? h('button', { type: 'button', 'aria-label': 'Fjern tagg for ' + fullName(per), onclick: async () => { const q = clone(photo()); q.tags = q.tags.filter(x => x.pid !== t.pid); await Store.savePhoto(q); drawStage(); drawSide(); } }, ico('x', 14)) : null); });
      side.appendChild(h('div', null, h('label', { class: 'lbl' }, srcMode ? 'Personer nevnt i kilden' : 'Personer i bildet'), (p.tags || []).length ? h('div', { class: 'tagchips' }, chips) : h('p', { class: 'muted', style: { fontSize: '14px' } }, srcMode ? 'Ingen er knyttet til kilden ennå.' : 'Ingen er tagget ennå.')));
      if (edit){
        if (srcMode) side.appendChild(h('div', { class: 'fgrid' }, h('div', { class: 'half-m' }, h('label', { class: 'lbl' }, 'Type kilde'), typeSel), h('div', { class: 'half-m' }, h('label', { class: 'lbl' }, 'Årstall for dokumentet'), year),
          h('div', { class: 'full' }, h('label', { class: 'lbl' }, 'Henvisning'), refInp), h('div', { class: 'full' }, h('label', { class: 'lbl' }, 'Notat om kilden'), caption)));
        else side.appendChild(h('div', { class: 'fgrid' }, h('div', { class: 'full' }, h('label', { class: 'lbl' }, 'Bildetekst'), caption), h('div', null, h('label', { class: 'lbl' }, 'Årstall'), year), h('div', { class: 'full' }, h('label', { class: 'lbl' }, 'Sted (valgfritt)'), photoPlace(p))));
        let armed = false;
        const del = h('button', { class: 'btn danger sm', onclick: async () => {
          if (!armed){ armed = true; del.classList.add('sure'); del.lastChild.textContent = 'Trykk igjen for å slette'; setTimeout(() => { armed = false; del.classList.remove('sure'); del.lastChild.textContent = 'Slett bilde'; }, 4000); return; }
          const idx = list.indexOf(cur); const gone = cur;
          list = list.filter(x => x !== gone);
          await Store.deletePhoto(gone);
          if (!list.length) modal.close(); else { cur = list[Math.min(idx, list.length - 1)]; render(); }
        } }, ico('trash', 15), 'Slett bilde');
        side.appendChild(h('div', null, del));
      } else {
        const p2 = photo(); if (p2 && (p2.caption || p2.year || p2.ref || p2.place)) side.appendChild(h('p', null, [p2.srcType, isSource(p2) ? p2.year : yearLabel(p2), p2.place && p2.place.name, p2.ref, p2.caption].filter(Boolean).join(' · ')));
      }
    }
    function drawNav(){
      clear(nav);
      const i = list.indexOf(cur);
      nav.append(h('button', { class: 'btn sm', disabled: i <= 0, onclick: () => go(-1) }, ico('back', 16), 'Forrige'),
        h('span', { class: 'faint', style: { fontSize: '13px' } }, (i + 1) + ' av ' + list.length),
        h('button', { class: 'btn sm', disabled: i >= list.length - 1, onclick: () => go(1) }, 'Neste', ico('next', 16)));
    }
    function go(d){ const i = list.indexOf(cur) + d; if (i < 0 || i >= list.length) return; cur = list[i]; pg = 0; tagging = false; pending = null; pre = null; query = ''; render(); }
    function render(){ loadFields(); drawStage(); drawSide(); drawNav(); }
    const body = h('div', { class: 'modal-b' }, h('div', { class: 'pv' }, stage, nav, side), addPageIn);
    const off = Store.onChange(() => { if (!photo()){ if (list.length > 1){ list = list.filter(x => x !== cur); cur = list[0]; render(); } return; } if (!pending && ![caption, year, refInp, typeSel].includes(document.activeElement)){ drawStage(); drawSide(); drawNav(); } });
    const onKey = e => { if (/input|textarea|select/i.test((e.target || {}).tagName || '')) return; if (e.key === 'ArrowLeft') go(-1); else if (e.key === 'ArrowRight') go(1); };
    document.addEventListener('keydown', onKey);
    const modal = openModal(isSource(first) ? 'Skriftlig kilde' : 'Bilde', body, { cls: 'wide', onClose: () => { off(); document.removeEventListener('keydown', onKey); } });
    render();
  }
};

/* ====== Aneside og etterkommerside ====== */
const GEN_UP = ['Hovedperson', 'Foreldre', 'Besteforeldre', 'Oldeforeldre', 'Tippoldeforeldre', 'Tipp-tippoldeforeldre'];
const GEN_DOWN = ['', 'Barn', 'Barnebarn', 'Oldebarn', 'Tippoldebarn', 'Tipp-tippoldebarn'];
const genUp = g => GEN_UP[g - 1] || ('Generasjon ' + g + ' bakover');
const genDown = g => GEN_DOWN[g] || ('Generasjon ' + g + ' framover');
const bookFrom = (patch) => { BookView.load(); Object.assign(BookView.o, patch); BookView.save(); App.go('book'); };

/* ====== Anetavle i vifteform ====== */
function fanChart(p, G = 3, o = {}){
  const TH = [0, 76, 82, 88, 94, 100];
  const r = [38]; for (let i = 1; i <= G; i++) r[i] = r[i - 1] + TH[i];
  const FULL = !!o.full, SPAN = FULL ? 2 * Math.PI : Math.PI;
  const W = 2 * r[G] + 24, Ht = FULL ? W : r[G] + 34, cx = W / 2, cy = FULL ? Ht / 2 : r[G] + 14;
  const anc = new Map([[1, p]]);
  (function fill(n){ if (n >= Math.pow(2, G)) return; const x = anc.get(n); if (!x) return; const pr = parentPair(x);
    [[pr[0], 2 * n], [pr[1], 2 * n + 1]].forEach(([pid, nn]) => { const q = pid && Store.persons.get(pid); if (q){ anc.set(nn, q); fill(nn); } }); })(1);
  const pt = (rad, a) => [cx + rad * Math.cos(a), cy - rad * Math.sin(a)];
  const f1 = n => n.toFixed(1);
  const trunc = (t, n) => t.length > n ? t.slice(0, Math.max(1, n - 1)) + '…' : t;
  const parts = x => { const g = (x.given || '').trim().split(/\s+/).filter(Boolean); const first = g.shift() || ''; return { first: first.toUpperCase(), rest: [g.join(' '), x.patronym, x.family].filter(Boolean).join(' ') }; };
  const svg = h('svg', { class: 'fan', viewBox: '0 0 ' + f1(W) + ' ' + f1(Ht), role: 'group', 'aria-label': 'Anetavle i vifteform for ' + fullName(p) });
  for (let i = G; i >= 1; i--){
    const n0 = Math.pow(2, i), span = SPAN / n0, ri = r[i - 1], ro = r[i], thick = ro - ri;
    for (let k = 0; k < n0; k++){
      const n = n0 + k, x = anc.get(n), a0 = Math.PI - k * span, a1 = a0 - span;
      const d = 'M' + pt(ri, a0).map(f1) + 'L' + pt(ro, a0).map(f1) + 'A' + ro + ',' + ro + ' 0 0 1 ' + pt(ro, a1).map(f1) + 'L' + pt(ri, a1).map(f1) + 'A' + ri + ',' + ri + ' 0 0 0 ' + pt(ri, a0).map(f1);
      const gEl = h('g', { class: 'fan-w ring' + (i % 2) + (x ? '' : ' empty'), role: x ? 'link' : null, tabindex: x ? 0 : null, 'aria-label': x ? fullName(x) : null },
        h('title', null, x ? fullName(x) + (lifeSpan(x) ? ' ' + lifeSpan(x) : '') : ''), h('path', { d }));
      if (x){
        const nm = parts(x), th = (a0 + a1) / 2, rm = (ri + ro) / 2, [tx, ty] = pt(rm, th);
        const big = i <= 3, fs1 = i <= 2 ? 12.5 : i === 3 ? 11 : 9.5, fs2 = fs1 - 2.3;
        const lines = [[trunc(nm.first, 0), 'f']];
        let rot, maxc;
        if (i <= 3){ rot = 90 - th * 180 / Math.PI; maxc = Math.max(8, Math.floor(rm * span * 0.88 / (fs2 * 0.56))); if (i === 1) maxc = Math.min(maxc, 20); } else { rot = -th * 180 / Math.PI; if (Math.cos(th) < 0) rot += 180; maxc = Math.floor((thick - 8) / (fs2 * 0.5)); }
        if (FULL && i <= 3 && Math.sin(th) < 0) rot += 180;
        const L = [{ t: trunc(nm.first, Math.floor(maxc * 0.85)), cls: 'fn', fs: fs1 }];
        if (nm.rest) L.push({ t: trunc(nm.rest, maxc), cls: 'fr', fs: fs2 });
        if (i <= 3 && lifeSpan(x)) L.push({ t: lifeSpan(x), cls: 'fy', fs: fs2 - .5 });
        const lh = fs1 + 1.5, y0 = -(L.length - 1) * lh / 2;
        const tg = h('g', { transform: 'translate(' + f1(tx) + ',' + f1(ty) + ') rotate(' + f1(rot) + ')' });
        L.forEach((ln, j) => tg.appendChild(h('text', { class: ln.cls, x: 0, y: f1(y0 + j * (lh * (j ? .92 : 1))), 'text-anchor': 'middle', 'dominant-baseline': 'middle', 'font-size': ln.fs }, ln.t)));
        gEl.appendChild(tg);
        const go = () => App.go('person', x.id);
        gEl.addEventListener('click', go);
        gEl.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); go(); } });
      }
      svg.appendChild(gEl);
    }
  }
  const nm0 = parts(p);
  svg.appendChild(h('g', { class: 'fan-c' }, FULL ? h('circle', { cx: f1(cx), cy: f1(cy), r: r[0] }) : h('path', { d: 'M' + pt(r[0], Math.PI).map(f1) + 'A' + r[0] + ',' + r[0] + ' 0 0 1 ' + pt(r[0], 0).map(f1) + 'Z' }),
    h('text', { class: 'fn', x: f1(cx), y: f1(FULL ? cy - 4 : cy - 17), 'text-anchor': 'middle', 'font-size': 11.5 }, trunc(nm0.first, 11)),
    h('text', { class: 'fr', x: f1(cx), y: f1(FULL ? cy + 9 : cy - 5), 'text-anchor': 'middle', 'font-size': 9 }, trunc([nm0.rest].join(''), 16))));
  return svg;
}

const AncestorsView = {
  fanMode: false, gens: 4,
  mount(root, id){ this.root = root; this.id = id; this.render(); },
  update(){ this.render(); },
  render(){
    const root = clear(this.root);
    const p = Store.persons.get(this.id);
    const back = h('button', { class: 'back', onclick: () => App.go('person', this.id) }, ico('back', 18), p ? fullName(p) : 'Tilbake');
    if (!p){ root.append(back, h('div', { class: 'empty' }, h('h2', null, 'Fant ikke personen'))); return; }
    const edit = Store.canWrite;
    const levels = [[{ n: 1, p }]], seen = new Map([[p.id, 1]]), repeats = [];
    for (let g = 1; g < 24; g++){
      const next = [];
      levels[g - 1].forEach(({ n, p: x }) => {
        const pr = parentPair(x);
        [[pr[0], 2 * n], [pr[1], 2 * n + 1]].forEach(([pid, nn]) => {
          const q = pid && Store.persons.get(pid); if (!q) return;
          if (seen.has(pid)){ repeats.push({ n: nn, p: q, first: seen.get(pid) }); return; }
          seen.set(pid, nn); next.push({ n: nn, p: q });
        });
      });
      if (!next.length) break;
      levels.push(next);
    }
    const total = seen.size - 1;
    const full = levels.reduce((m, l, i) => l.length === Math.pow(2, i) ? i + 1 : m, 1);
    const oldest = [...seen.keys()].map(i => Store.persons.get(i)).filter(x => x.birthYear != null).sort((a, b) => a.birthYear - b.birthYear)[0];
    const head = h('div', { class: 'page-h' }, h('div', null, h('h1', null, 'Aner for ' + fullName(p)),
      h('p', null, total ? plural(total, 'kjent stamfar eller stammor', 'kjente forfedre') + ' i ' + plural(levels.length - 1, 'generasjon', 'generasjoner') + (oldest && oldest.id !== p.id ? ' · eldste kjente ' + fullName(oldest) + ' (f. ' + oldest.birthYear + ')' : '') : 'Ingen foreldre er registrert ennå.')));
    const acts = h('div', { class: 'acts', style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' } },
      h('button', { class: 'btn', onclick: () => App.go('tree', p.id) }, ico('tree', 16), 'Vis i slektstreet'),
      h('button', { class: 'btn', onclick: () => bookFrom({ anc: true, ancRoot: p.id }) }, ico('book', 16), 'Lag bok av anetavlen'),
      h('button', { class: 'btn ghost', onclick: () => App.go('descendants', p.id) }, 'Etterkommere'),
      h('div', { class: 'seg', role: 'group', 'aria-label': 'Visning', style: { marginLeft: 'auto' } },
        h('button', { type: 'button', 'aria-pressed': String(!this.fanMode), onclick: () => { this.fanMode = false; this.render(); } }, 'Liste'),
        h('button', { type: 'button', 'aria-pressed': String(this.fanMode), onclick: () => { this.fanMode = true; this.render(); } }, 'Vifte')));
    root.append(back, head, acts);
    if (!total){ root.appendChild(h('div', { class: 'card' }, h('p', { class: 'muted' }, 'Legg til far eller mor på personsiden for å bygge opp anetavlen.'))); return; }
    if (this.fanMode){
      const sel = h('select', { class: 'inp', style: { width: 'auto' }, 'aria-label': 'Antall generasjoner', onchange: e => { this.gens = +e.target.value; this.render(); } },
        [3, 4, 5].map(g => h('option', { value: g, selected: g === this.gens }, g + ' generasjoner (' + (g === 3 ? 'til og med oldeforeldre' : g === 4 ? 'til og med tippoldeforeldre' : 'fem ledd') + ')')));
      root.append(h('div', { class: 'card' }, h('div', { class: 'tools' }, sel), fanChart(p, this.gens),
        h('p', { class: 'fnote' }, 'Viften viser bare direkte forfedre, så onkler og tanter er ikke med. Trykk på en person for å åpne siden hennes eller hans. Far står til venstre og mor til høyre på hvert nivå.')));
      return;
    }
    root.appendChild(h('p', { class: 'fnote' }, 'Nummereringen følger anetavlen: ' + (p.given || 'personen') + ' er nr. 1, og foreldrene får nr. 2 og 3 (far først når det er far og mor). Foreldrene til person n har nr. 2n og 2n+1. Antallet viser hvor mange av plassene i generasjonen som er fylt ut.'));
    levels.forEach((lv, i) => {
      const slots = Math.pow(2, i);
      const rows = [...lv].sort((a, b) => a.n - b.n).map(({ n, p: x }) => {
        const miss = [];
        const pr = parentPair(x).map(i => i && Store.persons.get(i) ? i : null);
        if (!pr[0] && !pr[1]){ if (!x.donorId) miss.push('far og mor'); else miss.push('foreldre'); }
        else if (!pr[0] || !pr[1]){ const have = Store.persons.get(pr[0] || pr[1]); if (have.sex === 'f') miss.push('far'); else if (have.sex === 'm') miss.push('mor'); else miss.push('den andre forelderen'); }
        return h('li', { class: 'an-row' }, h('span', { class: 'an-n' }, n), personChip(x, lifeSpan(x)),
          h('span', { class: 'faint an-pl' }, x.birthPlace && x.birthPlace.name ? noPlace(x.birthPlace.name) : ''),
          x.donorId && Store.persons.get(x.donorId) ? h('span', { class: 'faint an-pl' }, 'Donor: ' + fullName(Store.persons.get(x.donorId))) : null,
          miss.length ? h('button', { class: 'btn sm ghost an-miss', onclick: () => App.go('person', x.id), 'aria-label': 'Mangler ' + miss.join(' og ') + ' for ' + fullName(x) }, 'Mangler ' + miss.join(' og ')) : null);
      });
      const rep = repeats.filter(r => Math.floor(Math.log2(r.n)) === i);
      root.appendChild(h('section', { class: 'card' }, h('h2', null, genUp(i + 1), h('span', { class: 'faint an-cnt' }, i === 0 ? '' : lv.length + ' av ' + slots + (i > 0 && slots > 256 ? '' : ''))),
        h('ul', { class: 'an-list' }, rows, rep.map(r => h('li', { class: 'an-row' }, h('span', { class: 'an-n' }, r.n), personChip(r.p, 'samme som nr. ' + r.first))))));
    });
  }
};

const DescendantsView = {
  depth: 4, collapsed: new Set(),
  mount(root, id){ this.root = root; this.id = id; this.collapsed = new Set(); this.render(); },
  update(){ this.render(); },
  render(){
    const root = clear(this.root);
    const p = Store.persons.get(this.id);
    const back = h('button', { class: 'back', onclick: () => App.go('person', this.id) }, ico('back', 18), p ? fullName(p) : 'Tilbake');
    if (!p){ root.append(back, h('div', { class: 'empty' }, h('h2', null, 'Fant ikke personen'))); return; }
    const perGen = [];
    const seen = new Set([p.id]);
    const countBelow = new Map();
    (function walk(id, g){
      let n = 0;
      Idx.kidsOf(id).forEach(c => { if (seen.has(c.id)) return; seen.add(c.id); perGen[g] = (perGen[g] || 0) + 1; n += 1 + walk(c.id, g + 1); });
      countBelow.set(id, n); return n;
    })(p.id, 1);
    const total = seen.size - 1;
    const living = [...seen].filter(i => i !== p.id).map(i => Store.persons.get(i)).filter(x => !isDead(x) && (x.birthYear == null || NOW_YEAR - x.birthYear < 100)).length;
    const head = h('div', { class: 'page-h' }, h('div', null, h('h1', null, 'Etterkommere av ' + fullName(p)),
      h('p', null, total ? plural(total, 'etterkommer', 'etterkommere') + ' i ' + plural(perGen.length - 1, 'generasjon', 'generasjoner') + (living ? ' · ' + living + ' i live' : '') : 'Ingen barn er registrert ennå.')));
    const acts = h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' } },
      h('button', { class: 'btn', onclick: () => App.go('tree', p.id) }, ico('tree', 16), 'Vis i slektstreet'),
      h('button', { class: 'btn', onclick: () => bookFrom({ desc: true, descRoot: p.id }) }, ico('book', 16), 'Lag bok av etterkommerne'),
      h('button', { class: 'btn ghost', onclick: () => App.go('ancestors', p.id) }, 'Aner'));
    root.append(back, head, acts);
    if (!total){ root.appendChild(h('div', { class: 'card' }, h('p', { class: 'muted' }, 'Legg til barn på personsiden for å bygge opp etterkommerlisten.'))); return; }
    const stats = h('div', { class: 'ds-stats' }, perGen.map((n, g) => n ? h('div', null, h('b', null, n), h('span', null, genDown(g))) : null));
    const depthSel = h('select', { class: 'inp', style: { width: 'auto' }, 'aria-label': 'Vis generasjoner', onchange: e => { this.depth = +e.target.value; this.render(); } },
      [[1, 'Barn'], [2, 'Til barnebarn'], [3, 'Til oldebarn'], [4, '4 generasjoner'], [5, '5 generasjoner'], [99, 'Alle generasjoner']].map(([v, t]) => h('option', { value: v, selected: v === this.depth }, t)));
    root.append(h('section', { class: 'card' }, h('h2', null, 'Oversikt'), stats), h('div', { class: 'tools' }, depthSel,
      h('button', { class: 'btn sm ghost', onclick: () => { this.collapsed = new Set(); this.render(); } }, 'Åpne alle'),
      h('button', { class: 'btn sm ghost', onclick: () => { this.collapsed = new Set([...seen].filter(i => (Idx.kids.get(i) || []).length)); this.render(); } }, 'Lukk alle')));
    const ul = h('ul', { class: 'ds-list' });
    const shown = new Set([p.id]);
    const row = (x, d, parentId) => {
      const kids = Idx.kidsOf(x.id);
      const prts = Idx.partnersOf(x.id);
      const closed = this.collapsed.has(x.id);
      const hidden = d >= this.depth;
      const other = parentId && prts.length ? null : null;
      const li = h('li', { class: 'ds-row', style: { '--d': Math.min(d, 10) } },
        kids.length && !hidden ? h('button', { class: 'ds-t', 'aria-expanded': String(!closed), 'aria-label': (closed ? 'Åpne' : 'Lukk') + ' ' + fullName(x), onclick: () => { if (closed) this.collapsed.delete(x.id); else this.collapsed.add(x.id); this.render(); } }, closed ? '▸' : '▾') : h('span', { class: 'ds-t' }),
        h('div', { class: 'ds-b' }, personChip(x, lifeSpan(x)),
          h('div', { class: 'faint ds-s' }, [prts.length ? prts.map(y => REL_WITH[relKind(y)] + ' ' + fullName(y.p) + (relDates(y) ? ' (' + relDates(y) + ')' : '')).join(' · ') : '', countBelow.get(x.id) ? plural(countBelow.get(x.id), 'etterkommer', 'etterkommere') + (hidden || closed ? ' skjult' : '') : (x.noKids ? 'ingen kjente barn' : '')].filter(Boolean).join(' · '))));
      ul.appendChild(li);
      if (!closed && !hidden) kids.forEach(c => { if (shown.has(c.id)) return; shown.add(c.id); row(c, d + 1, x.id); });
    };
    Idx.kidsOf(p.id).forEach(c => { if (shown.has(c.id)) return; shown.add(c.id); row(c, 0, p.id); });
    root.appendChild(h('section', { class: 'card' }, ul));
  }
};

/* ====== Statistikk ====== */
const StatsView = {
  period: 'all', complete: true, rel: null, relMode: 'all',
  mount(root){ this.root = root; this.render(); },
  update(){ this.render(); },
  render(){
    const root = clear(this.root);
    const PER = [['all', 'Hele slekten', null], ['p0', 'Født før 1800', [-9999, 1799]], ['p1', '1800–1849', [1800, 1849]], ['p2', '1850–1899', [1850, 1899]], ['p3', '1900–1949', [1900, 1949]], ['p4', '1950 og senere', [1950, 9999]]];
    const per = PER.find(x => x[0] === this.period) || PER[0];
    const relSet = this.rel && Store.persons.has(this.rel) ? (this.relMode === 'line' ? bioLine(this.rel) : bioRelatives(this.rel)) : null;
    const all = [...Store.persons.values()].filter(p => !relSet || relSet.has(p.id));
    if (!all.length){ root.append(h('div', { class: 'page-h' }, h('div', null, h('h1', null, 'Statistikk'))), h('div', { class: 'empty' }, h('p', null, 'Legg inn personer for å se statistikk.'))); return; }
    const inPeriod = p => !per[2] || (p.birthYear != null && p.birthYear >= per[2][0] && p.birthYear <= per[2][1]);
    const pool = all.filter(inPeriod);
    const sexes = [['Alle', () => true], ['Kvinner', p => p.sex === 'f'], ['Menn', p => p.sex === 'm']];
    const fmt = v => v == null || Number.isNaN(v) ? '–' : (Math.round(v * 10) / 10).toLocaleString('nb-NO');
    const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : null;
    const med = a => { if (!a.length) return null; const s = [...a].sort((x, y) => x - y), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
    const sum = (label, a, unit) => ({ label, n: a.length, avg: avg(a), med: med(a), min: a.length ? Math.min(...a) : null, max: a.length ? Math.max(...a) : null, unit });
    const table = (rows, cols) => h('div', { class: 'st-tbl-wrap' }, h('table', { class: 'st-tbl' }, h('thead', null, h('tr', null, cols.map(c => h('th', null, c)))),
      h('tbody', null, rows.map(r => h('tr', null, r.map((c, i) => h(i ? 'td' : 'th', { scope: i ? null : 'row' }, c)))))));
    const bars = (items, unit, wide) => { const mx = Math.max(1, ...items.map(i => i[1])); return h('div', { class: 'st-bars' + (wide ? ' wide' : '') }, items.map(([l, v]) => h('div', { class: 'st-bar' }, h('span', { class: 'l' }, l), h('span', { class: 'b' }, h('i', { style: { width: (v / mx * 100) + '%' } })), h('span', { class: 'v' }, v + (unit || ''))))); };
    const big = (n, label, sub) => h('div', { class: 'st-big' }, h('b', null, n), h('span', null, label), sub ? h('small', null, sub) : null);

    // levealder
    const ages = sx => pool.filter(sx).filter(p => p.birthYear != null && p.deathYear != null && p.deathYear >= p.birthYear).map(p => p.deathYear - p.birthYear);
    const lifeRows = sexes.map(([l, f]) => { const a = ages(f), ad = a.filter(x => x >= 15), a50 = a.filter(x => x >= 50); return [l, a.length, fmt(avg(a)), fmt(med(a)), fmt(avg(ad)), fmt(avg(a50)) + (a50.length ? ' (' + a50.length + ')' : ''), a.length ? Math.min(...a) + ' – ' + Math.max(...a) : '–']; });
    const allAges = ages(() => true);
    const bins = []; for (let b = 0; b < 100; b += 10) bins.push([b + '–' + (b + 9), allAges.filter(x => x >= b && x < b + 10).length]);
    bins.push(['100+', allAges.filter(x => x >= 100).length]);
    const lifeCard = h('section', { class: 'card' }, h('h2', null, 'Levealder'),
      allAges.length ? [h('div', { class: 'st-bigs' }, big(fmt(avg(allAges)) + ' år', 'gjennomsnitt', 'median ' + fmt(med(allAges)) + ' år'), big(fmt(avg(allAges.filter(x => x >= 15))) + ' år', 'for dem som ble 15 år eller eldre', plural(allAges.filter(x => x < 15).length, 'barnedødsfall', 'barnedødsfall') + ' utelatt'),
          big(fmt(avg(allAges.filter(x => x >= 50))) + ' år', 'for dem som ble 50 år eller eldre', plural(allAges.filter(x => x >= 50).length, 'person', 'personer'))),
        table(lifeRows, ['', 'Antall', 'Snitt', 'Median', 'Snitt (15+)', 'Snitt (50+)', 'Yngste – eldste']),
        h('h3', { class: 'st-h3' }, 'Alder ved dødsfall'), bars(bins)]
        : h('p', { class: 'muted' }, 'Ingen personer har både fødselsår og dødsår ennå.'),
      h('p', { class: 'fnote' }, 'Bare personer med både fødselsår og dødsår er med.'));

    // barn per kvinne og mann
    const complete = p => !this.complete || isDead(p) || (p.birthYear != null && NOW_YEAR - p.birthYear >= 50);
    const kidsStat = sx => { const rows = pool.filter(sx).filter(complete).map(p => ({ p, n: Idx.kidsOf(p.id).length })).filter(r => r.n > 0 || r.p.noKids); return rows; };
    const kidsCard = h('section', { class: 'card' }, h('h2', null, 'Barn per person'),
      h('label', { class: 'bk-chk', for: 'st-complete' }, h('input', { type: 'checkbox', id: 'st-complete', checked: this.complete, onchange: e => { this.complete = e.target.checked; this.render(); } }), h('span', null, 'Bare avsluttede familier', h('small', null, 'Døde personer, og personer født for mer enn 50 år siden'))),
      h('div', { class: 'st-bigs' }, [['Kvinner', p => p.sex === 'f'], ['Menn', p => p.sex === 'm']].map(([l, f]) => {
        const r = kidsStat(f), a = r.map(x => x.n), par = a.filter(x => x > 0);
        return h('div', { class: 'st-col' }, h('h3', { class: 'st-h3' }, l),
          r.length ? [big(fmt(avg(a)), 'barn per ' + (l === 'Kvinner' ? 'kvinne' : 'mann'), 'blant ' + plural(r.length, 'person', 'personer') + ' med kjent barnestatus'),
            big(fmt(avg(par)), 'barn per ' + (l === 'Kvinner' ? 'mor' : 'far'), plural(par.length, (l === 'Kvinner' ? 'mor' : 'far'), (l === 'Kvinner' ? 'mødre' : 'fedre')) + ' · flest ' + (par.length ? Math.max(...par) : '–')),
            bars([0, 1, 2, 3, 4, 5, 6, 7].map(k => [k === 7 ? '7+' : String(k), a.filter(x => k === 7 ? x >= 7 : x === k).length]))]
            : h('p', { class: 'muted' }, 'Ingen med kjent barnestatus.'));
      })),
      h('p', { class: 'fnote' }, 'Personer uten registrerte barn telles bare med hvis du har krysset av for «Ingen kjente barn». Ellers vet ikke appen om de ikke fikk barn eller om barna bare ikke er lagt inn. Barn regnes under begge juridiske foreldre. Donor telles ikke.'));

    // alder ved første og yngste barn
    const ageAt = (sx, pick) => pool.filter(sx).filter(p => p.birthYear != null).map(p => { const ys = Idx.kidsOf(p.id).map(c => c.birthYear).filter(y => y != null); return ys.length ? pick(ys) - p.birthYear : null; }).filter(x => x != null && x >= 10 && x <= 80);
    const ageCard = (title, pick, note) => {
      const rows = [['Kvinner', p => p.sex === 'f'], ['Menn', p => p.sex === 'm']].map(([l, f]) => { const s = sum(l, ageAt(f, pick)); return [l, s.n, fmt(s.avg), fmt(s.med), s.n ? s.min + ' – ' + s.max : '–']; });
      const has = rows.some(r => r[1]);
      return h('section', { class: 'card' }, h('h2', null, title),
        has ? [h('div', { class: 'st-bigs' }, rows.map(r => big(r[2] === '–' ? '–' : r[2] + ' år', r[0].toLowerCase(), r[1] + ' personer'))), table(rows, ['', 'Antall', 'Snitt', 'Median', 'Yngste – eldste'])]
          : h('p', { class: 'muted' }, 'Ikke nok data. Det trengs fødselsår på både forelder og barn.'),
        note ? h('p', { class: 'fnote' }, note) : null);
    };
    const firstCard = ageCard('Alder ved første barns fødsel', ys => Math.min(...ys), 'Personer med minst ett barn med fødselsår. Aldre under 10 og over 80 regnes som feil og utelates.');
    const lastCard = ageCard('Alder ved yngste barns fødsel', ys => Math.max(...ys), 'Hos personer med ett barn er yngste og første barn det samme barnet.');

    // vanligste fornavn
    const firstName = p => { const g = (p.given || '').trim(); return g ? g.split(/\s+/)[0] : ''; };
    const topNames = sx => { const m = new Map(); pool.filter(sx).forEach(p => { const n = firstName(p); if (!n) return; const k = norm(n); const e = m.get(k) || { label: n, n: 0 }; e.n++; m.set(k, e); });
      return [...m.values()].sort((a, b) => b.n - a.n || a.label.localeCompare(b.label, 'nb')).slice(0, 10); };
    const nameCol = (title, list) => h('div', { class: 'st-col' }, h('h3', { class: 'st-h3' }, title),
      list.length ? bars(list.map(e => [e.label, e.n]), '', true) : h('p', { class: 'muted' }, 'Ingen navn ennå.'));
    const namesCard = h('section', { class: 'card' }, h('h2', null, 'Vanligste fornavn'),
      h('div', { class: 'st-bigs' }, nameCol('Kvinner', topNames(p => p.sex === 'f')), nameCol('Menn', topNames(p => p.sex === 'm'))),
      h('p', { class: 'fnote' }, 'Første fornavn telles. Navn med ulik stavemåte telles hver for seg. Personer uten registrert kjønn er ikke med.'));

    // dødsårsaker
    const causes = new Map();
    const dead = pool.filter(isDead);
    dead.forEach(p => { const c = deathCatOf(p); if (!c) return; causes.set(c, (causes.get(c) || 0) + 1); });
    const withCause = dead.filter(p => deathCatOf(p)).length;
    const causeCard = h('section', { class: 'card' }, h('h2', null, 'Dødsårsaker'),
      causes.size ? bars([...causes.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'nb')), '', true)
        : h('p', { class: 'muted' }, 'Ingen dødsårsaker er lagt inn ennå. Du velger gruppe på personen under «Død».'),
      h('p', { class: 'fnote' }, 'Dødsårsak er oppgitt for ' + withCause + ' av ' + plural(dead.length, 'død person', 'døde personer') + '.'));

    const relMode = h('select', { class: 'inp', style: { width: 'auto', maxWidth: '100%' }, 'aria-label': 'Type slektninger', onchange: e => { this.relMode = e.target.value; this.render(); } },
      h('option', { value: 'all', selected: this.relMode === 'all' }, 'Alle biologiske slektninger'), h('option', { value: 'line', selected: this.relMode === 'line' }, 'Bare rett linje (opp og ned)'));
    const relBox = h('div', { class: 'pf st-rel' });
    const relRef = this.rel && Store.persons.get(this.rel);
    if (relRef){
      relBox.append(h('span', { class: 'chip' }, avatar(relRef, 26), h('span', { class: 't' }, (this.relMode === 'line' ? 'Rett linje fra ' : 'Slekt av ') + fullName(relRef)), h('button', { type: 'button', 'aria-label': 'Fjern filter', onclick: () => { this.rel = null; this.render(); } }, ico('x', 14))));
    } else {
      const inp = h('input', { class: 'inp', type: 'search', placeholder: 'Bare slektninger av … (søk etter person)', autocomplete: 'off', 'aria-label': 'Bare slektninger av' });
      relBox.append(inp);
      autocomplete(inp, q => { const nq = norm(q); if (nq.length < 1) return []; return [...Store.persons.values()].filter(p => norm(fullName(p)).includes(nq) || norm(p.birthName || '').includes(nq)).slice(0, 8).map(p => ({ label: fullName(p), sub: lifeSpan(p), p })); }, it => { this.rel = it.p.id; this.render(); });
    }
    const perSel = h('select', { class: 'inp', style: { width: 'auto', maxWidth: '100%' }, 'aria-label': 'Fødselsperiode', onchange: e => { this.period = e.target.value; this.render(); } },
      PER.map(([v, t]) => h('option', { value: v, selected: v === this.period }, v === 'all' ? t : 'Født ' + t.replace('Født ', '').toLowerCase())));
    root.append(h('div', { class: 'page-h' }, h('div', null, h('h1', null, 'Statistikk'), h('p', null, plural(pool.length, 'person', 'personer') + (relSet ? (this.relMode === 'line' ? ' i rett linje opp og ned fra ' : ' i biologisk slekt med ') + fullName(relRef) : '') + (per[2] ? ' født i perioden' : relSet ? '' : ' i registeret') + ' · tallene bygger på det som er lagt inn'))),
      h('div', { class: 'tools' }, perSel, relMode, relBox),
      lifeCard, namesCard, kidsCard, firstCard, lastCard, causeCard);
  }
};

/* ====== Slektskap mellom to personer ====== */
function kinCore(aId, bId, parentsFn){
  const anc = id => { const m = new Map([[id, { d: 0, path: [id] }]]); let fr = [id];
    while (fr.length){ const nx = []; fr.forEach(i => { const p = Store.persons.get(i); if (!p) return; const e = m.get(i); parentsFn(p).forEach(q => { if (!m.has(q) && Store.persons.has(q)){ m.set(q, { d: e.d + 1, path: e.path.concat([q]) }); nx.push(q); } }); }); fr = nx; }
    return m; };
  const A = anc(aId), B = anc(bId);
  let best = null;
  A.forEach((ea, id) => { const eb = B.get(id); if (!eb) return; const s = ea.d + eb.d; if (!best || s < best.s || (s === best.s && Math.abs(ea.d - eb.d) < Math.abs(best.da - best.db))) best = { s, da: ea.d, db: eb.d }; });
  if (!best) return null;
  const common = []; A.forEach((ea, id) => { const eb = B.get(id); if (eb && ea.d === best.da && eb.d === best.db) common.push({ id, pa: ea.path, pb: eb.path }); });
  return { da: best.da, db: best.db, common };
}
const poss = n => n + (/[sxz]$/i.test(n) ? "'" : 's');
/* Hva er «other» for «me», gitt da/db (da: steg fra me til felles stamforelder, db: fra other). */
function kinWord(da, db, sexOther, count, pathMe, sexOfParentMe){
  const sx = (m, f) => sexOther === 'm' ? m : sexOther === 'f' ? f : m + '/' + f;
  const parSex = id => { const p = Store.persons.get(id); return p ? p.sex : 'u'; };
  if (da === 0 && db === 0) return 'samme person';
  if (da === 0){ return db === 1 ? sx('sønn', 'datter') : db === 2 ? 'barnebarn' : db === 3 ? 'oldebarn' : db === 4 ? 'tippoldebarn' : 'etterkommer i ' + db + '. ledd'; }
  if (db === 0){
    if (da === 1) return sx('far', 'mor');
    if (da === 2){ const s = parSex(pathMe[1]); return s === 'm' ? sx('farfar', 'farmor') : s === 'f' ? sx('morfar', 'mormor') : sx('bestefar', 'bestemor'); }
    return da === 3 ? sx('oldefar', 'oldemor') : da === 4 ? sx('tippoldefar', 'tippoldemor') : 'ane i ' + da + '. ledd';
  }
  if (da === 1 && db === 1){ const w = sx('bror', 'søster'); return count === 1 ? 'halv' + (sexOther === 'm' ? 'bror' : sexOther === 'f' ? 'søster' : 'søsken') : (sexOther === 'm' || sexOther === 'f' ? w : 'søsken'); }
  if (da === 1) return db === 2 ? sx('nevø', 'niese') : db === 3 ? sx('grandnevø', 'grandniese') : 'søskens ' + (db === 4 ? 'oldebarn' : db === 5 ? 'tippoldebarn' : 'etterkommer i ' + (db - 1) + '. ledd');
  if (db === 1){
    if (da === 2){ const s = parSex(pathMe[1]); return s === 'm' ? sx('farbror', 'faster') : s === 'f' ? sx('morbror', 'moster') : sx('onkel', 'tante'); }
    return da === 3 ? sx('grandonkel', 'grandtante') : 'søsken til ' + (da === 4 ? 'en oldeforelder' : da === 5 ? 'en tippoldeforelder' : 'en ane i ' + (da - 1) + '. ledd');
  }
  const m = Math.min(da, db), d = Math.abs(da - db);
  if (da === 2 && db === 2) return 'søskenbarn (' + sx('fetter', 'kusine') + ')';
  if (da === 2 && db === 3) return 'søskenbarns barn';
  if (da === 3 && db === 2) return 'forelders søskenbarn';
  const base = m === 2 ? 'søskenbarn' : m === 3 ? 'tremenning' : m === 4 ? 'firemenning' : m === 5 ? 'femmenning' : m + '-menning';
  return d === 0 ? base : base + ', ' + d + (d === 1 ? ' generasjon ' : ' generasjoner ') + (da > db ? 'eldre' : 'yngre');
}
/* Finn slektskapet. Returnerer { kind, text, rev, how[] } eller null. */
function kinship(aId, bId){
  const A = Store.persons.get(aId), B = Store.persons.get(bId);
  if (!A || !B) return null;
  if (aId === bId) return { text: 'Dette er samme person.', how: [] };
  const nm = p => fullName(p);
  const chain = path => path.map(i => nm(Store.persons.get(i))).join(' → ');
  const tryKind = (fn, label) => {
    const r = kinCore(aId, bId, fn); if (!r) return null;
    const c = r.common.length;
    const wB = kinWord(r.da, r.db, B.sex, c, r.common[0].pa), wA = kinWord(r.db, r.da, A.sex, c, r.common[0].pb);
    const how = [];
    if (r.da > 0 || r.db > 0){
      const anc = r.common.map(x => nm(Store.persons.get(x.id))).join(' og ');
      if (r.da > 0 && r.db > 0) how.push('Felles ' + (c > 1 ? 'stamforeldre' : 'stamforelder') + ': ' + anc + '.');
      r.common.slice(0, 2).forEach(x => { if (x.pa.length > 1) how.push(nm(A) + ' → ' + chain(x.pa.slice(1)) + ' (forelder-linje oppover)'); if (x.pb.length > 1) how.push(nm(B) + ' → ' + chain(x.pb.slice(1)) + ' (forelder-linje oppover)'); });
    }
    return { kind: label, text: nm(B) + ' er ' + poss(nm(A)) + ' ' + wB + '.', rev: nm(A) + ' er ' + poss(nm(B)) + ' ' + wA + '.', how, wB, da: r.da, db: r.db };
  };
  const bio = tryKind(bioParentsOf, 'biologisk');
  if (bio) return bio;
  const legal = tryKind(parentsOf, 'juridisk');
  if (legal){ legal.note = 'Dette er juridisk slektskap (via medforelder eller adopsjon/stefamilie-registrering), ikke biologisk.'; return legal; }
  // partnere og svogerskap
  const sx = (m, f) => B.sex === 'm' ? m : B.sex === 'f' ? f : m + '/' + f;
  const prt = id => Idx.partnersOf(id).filter(x => relKind(x) !== 'foreldre');
  const direct = Idx.partnersOf(aId).find(x => x.p.id === bId);
  if (direct){
    if (relKind(direct) === 'foreldre') return { kind: 'partner', text: nm(B) + ' og ' + nm(A) + ' har barn sammen.', how: [] };
    return { kind: 'partner', text: nm(B) + ' er ' + REL_WITH[relKind(direct)] + ' ' + nm(A) + (relDates(direct) ? ' (' + relDates(direct) + ')' : '') + '.', how: [] };
  }
  const sp = Idx.stepParentsOf(A).find(x => x.p.id === bId); if (sp) return { kind: 'steg', text: nm(B) + ' er ' + poss(nm(A)) + ' ' + sx('stefar', 'stemor') + '.', how: [] };
  const sk = Idx.stepKidsOf(A).find(x => x.p.id === bId); if (sk) return { kind: 'steg', text: nm(B) + ' er ' + poss(nm(A)) + ' stebarn.', how: [] };
  for (const x of prt(aId)){
    const r = tryKind0(x.p.id, bId);
    if (r){
      const w = r.da === 1 && r.db === 0 ? sx('svigerfar', 'svigermor') : (r.da === 1 && r.db === 1) ? sx('svoger', 'svigerinne') : null;
      if (w) return { kind: 'svogerskap', text: nm(B) + ' er ' + poss(nm(A)) + ' ' + w + ' (' + nm(x.p) + ' er ' + REL_NOUN[relKind(x)] + ' med ' + nm(A) + ').', how: [] };
      return { kind: 'svogerskap', text: nm(B) + ' er ' + poss(nm(x.p)) + ' ' + r.wB + ', og ' + nm(x.p) + ' er ' + REL_NOUN[relKind(x)] + ' med ' + nm(A) + '.', how: [] };
    }
  }
  for (const y of prt(bId)){
    const r = tryKind0(aId, y.p.id);
    if (r){
      const w = r.da === 1 && r.db === 1 ? sx('svoger', 'svigerinne') : (r.da === 0 && r.db === 1) ? sx('svigersønn', 'svigerdatter') : null;
      if (w) return { kind: 'svogerskap', text: nm(B) + ' er ' + poss(nm(A)) + ' ' + w + ' (' + nm(B) + ' er ' + REL_NOUN[relKind(y)] + ' med ' + nm(y.p) + ').', how: [] };
      return { kind: 'svogerskap', text: nm(B) + ' er ' + REL_NOUN[relKind(y)] + ' med ' + nm(y.p) + ', som er ' + poss(nm(A)) + ' ' + r.wB + '.', how: [] };
    }
  }
  return null;
  function tryKind0(x, y){ const r = kinCore(x, y, bioParentsOf); if (!r) return null; const Y = Store.persons.get(y); return { da: r.da, db: r.db, wB: kinWord(r.da, r.db, Y.sex, r.common.length, r.common[0].pa) }; }
}

const KinshipView = {
  a: null, b: null,
  mount(root, id){ this.root = root; if (id) this.a = id; this.render(); },
  update(){ this.render(); },
  render(){
    const root = clear(this.root);
    const mk = (key, label) => {
      const box = h('div', { class: 'pf kin-pick' });
      const cur = this[key] && Store.persons.get(this[key]);
      box.append(h('label', { class: 'lbl' }, label));
      if (cur){
        box.append(h('span', { class: 'chip' }, avatar(cur, 26), h('span', { class: 't' }, fullName(cur) + (cur.birthYear != null ? ' (f. ' + cur.birthYear + ')' : '')), h('button', { type: 'button', 'aria-label': 'Fjern', onclick: () => { this[key] = null; this.render(); } }, ico('x', 14))));
      } else {
        const inp = h('input', { class: 'inp', type: 'search', placeholder: 'Søk etter person i registeret', autocomplete: 'off', 'aria-label': label });
        box.append(inp);
        autocomplete(inp, q => { const nq = norm(q); if (nq.length < 1) return []; return [...Store.persons.values()].filter(p => norm(fullName(p)).includes(nq) || norm(p.birthName || '').includes(nq)).slice(0, 8).map(p => ({ label: fullName(p), sub: lifeSpan(p), p })); }, it => { this[key] = it.p.id; this.render(); });
      }
      return box;
    };
    const res = h('div', { class: 'card kin-res' });
    if (this.a && this.b && Store.persons.has(this.a) && Store.persons.has(this.b)){
      const r = kinship(this.a, this.b);
      if (!r) res.append(h('h2', null, 'Ikke i slekt'), h('p', { class: 'muted' }, 'Appen finner ingen forbindelse mellom de to personene via foreldre, partnere eller steforhold som er registrert. Kanskje mangler det en forelder et sted i linjen.'));
      else {
        res.append(h('h2', null, r.kind === 'biologisk' ? 'Biologisk slektskap' : r.kind === 'juridisk' ? 'Juridisk slektskap' : r.kind === 'svogerskap' ? 'Svogerskap' : r.kind === 'steg' ? 'Steforhold' : r.kind === 'partner' ? 'Forhold' : 'Slektskap'),
          h('p', { class: 'kin-main' }, r.text), r.rev ? h('p', { class: 'muted' }, r.rev) : null,
          r.note ? h('p', { class: 'fnote' }, r.note) : null,
          r.how && r.how.length ? h('div', { class: 'kin-how' }, h('h3', { class: 'st-h3' }, 'Slik henger det sammen'), r.how.map(t => h('p', null, t))) : null);
      }
    } else res.append(h('p', { class: 'muted' }, 'Velg to personer, så viser appen hva slektskapet er.'));
    const swap = h('button', { class: 'btn ghost sm', type: 'button', onclick: () => { const t = this.a; this.a = this.b; this.b = t; this.render(); } }, 'Bytt om');
    root.append(h('div', { class: 'page-h' }, h('div', null, h('h1', null, 'Slektskap'), h('p', null, 'Velg to personer fra registeret og se hva slektskapet mellom dem er.'))),
      h('div', { class: 'card' }, h('div', { class: 'kin-grid' }, mk('a', 'Person 1'), mk('b', 'Person 2')), (this.a || this.b) ? h('div', { style: { marginTop: '8px' } }, swap) : null), res);
  }
};

/* ====== Steder, verifisering og kvalitetssjekk ====== */

/* ---------- Steder ---------- */
const placeKey = pl => { if (!pl) return ''; const k = norm(noPlace(pl.kom || pl.name || '')); const r = norm(noPlace(pl.region || '')); return k ? k + (r ? '|' + r : '') : ''; };
const placeTitle = pl => { const k = noPlace(pl.kom || pl.name || ''); return k + (pl.region ? ', ' + noPlace(pl.region) : ''); };
function placeLinkEl(pl, text){
  const key = placeKey(pl);
  if (!key) return text || pl.name || '';
  return h('a', { href: '#sted-' + encodeURIComponent(key), class: 'plink', onclick: e => { e.preventDefault(); App.go('place', key); } }, text || (pl.name || pl.kom));
}
const PIN_SVG = '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 22s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12z" fill="#8A5A3C" stroke="#fff" stroke-width="1.6"/><circle cx="12" cy="10" r="2.6" fill="#fff"/></svg>';

function collectPlaces(){
  const M = new Map();
  const add = (pl, pid, type, year, photo) => {
    const key = placeKey(pl); if (!key) return;
    let e = M.get(key);
    if (!e){ e = { key, title: placeTitle(pl), now: pl.now || '', approx: false, pts: new Map(), farms: new Map(), ev: [], photos: [] }; M.set(key, e); }
    if (pl.now && !e.now) e.now = pl.now;
    if (pl.approx) e.approx = true;
    if (pl.lat != null && pl.lon != null){
      const pk = pl.lat.toFixed(3) + ',' + pl.lon.toFixed(3);
      if (!e.pts.has(pk)) e.pts.set(pk, { lat: pl.lat, lon: pl.lon, name: pl.farm || '', farm: !!pl.farm });
    }
    if (pl.farm){ const f = e.farms.get(pl.farm) || { name: pl.farm, ids: new Set() }; if (pid) f.ids.add(pid); e.farms.set(pl.farm, f); }
    if (photo) e.photos.push(photo); else e.ev.push({ pid, type, year, farm: pl.farm || '' });
  };
  Store.persons.forEach(p => {
    if (p.birthPlace) add(p.birthPlace, p.id, 'født', p.birthYear);
    if (p.deathPlace) add(p.deathPlace, p.id, 'døde', p.deathYear);
    (p.moves || []).forEach(m => { if (m.place) add(m.place, p.id, 'bodde', m.year); });
    if (p.emigratedTo) add(p.emigratedTo, p.id, 'utvandret', p.emigratedYear);
  });
  Store.photos.forEach(ph => { if (ph.place && !isSource(ph)) add(ph.place, null, 'bilde', ph.year, ph); });
  M.forEach(e => { e.persons = new Set(e.ev.map(x => x.pid)); });
  return M;
}
const countTxt = (n, one, many) => n + ' ' + (n === 1 ? one : many);

const PlacesView = {
  q: '',
  mount(root){ this.root = root; this.render(); },
  update(){ this.render(); },
  render(){
    const root = clear(this.root);
    const back = h('button', { class: 'back', onclick: () => App.go('register') }, ico('back', 18), 'Register');
    const M = collectPlaces();
    let list = [...M.values()];
    const nq = norm(this.q);
    if (nq) list = list.filter(e => norm(e.title).includes(nq) || norm(e.now || '').includes(nq) || [...e.farms.keys()].some(f => norm(f).includes(nq)));
    list.sort((a, b) => b.persons.size - a.persons.size || a.title.localeCompare(b.title, 'nb'));
    const search = h('input', { class: 'inp', type: 'search', placeholder: 'Søk etter sted eller gård …', value: this.q, 'aria-label': 'Søk etter sted', oninput: e => { this.q = e.target.value; clearTimeout(this._t); this._t = setTimeout(() => { this.render(); const i = this.root.querySelector('input[type=search]'); if (i){ i.focus(); i.setSelectionRange(i.value.length, i.value.length); } }, 200); } });
    root.append(back, h('div', { class: 'page-h' }, h('div', null, h('h1', null, 'Steder'), h('p', null, countTxt(M.size, 'sted', 'steder') + ' er brukt i fødsel, død, bosted eller utvandring. Trykk på et sted for å se alle som er knyttet til det.'))),
      h('div', { class: 'tools' }, h('div', { class: 'grow' }, search)));
    if (!list.length){ root.appendChild(h('div', { class: 'empty' }, h('p', null, M.size ? 'Ingen steder passer søket.' : 'Ingen steder er lagt inn ennå. Legg inn fødested, dødssted eller bosteder på personene.'))); return; }
    root.appendChild(h('div', { class: 'card' }, h('ul', { class: 'plist' }, list.map(e => {
      const n = t => e.ev.filter(x => x.type === t).length;
      const bits = [n('født') ? n('født') + ' født' : '', n('døde') ? n('døde') + ' døde' : '', n('bodde') ? n('bodde') + ' bodd' : '', n('utvandret') ? n('utvandret') + ' utvandret hit' : ''].filter(Boolean).join(' · ');
      return h('li', null, h('a', { href: '#sted-' + encodeURIComponent(e.key), class: 'plrow', onclick: ev => { ev.preventDefault(); App.go('place', e.key); } },
        h('span', { class: 'pt' }, e.title, e.now && norm(e.now) !== norm(e.title) ? h('small', { class: 'faint' }, ' · nå ' + e.now) : null),
        h('span', { class: 'faint ps' }, bits || (e.photos.length ? countTxt(e.photos.length, 'bilde', 'bilder') : '')),
        h('span', { class: 'pc' }, countTxt(e.persons.size, 'person', 'personer'))));
    }))));
  }
};

const PlaceView = {
  mount(root, key){ this.root = root; this.key = key; this.render(); },
  update(){ this.render(); },
  unmount(){ if (this.base) { try { this.base.destroy(); } catch (_) {} this.base = null; } },
  render(){
    this.unmount();
    const root = clear(this.root);
    const back = h('button', { class: 'back', onclick: () => App.go('places') }, ico('back', 18), 'Alle steder');
    const M = collectPlaces(); const e = M.get(this.key);
    if (!e){ root.append(back, h('div', { class: 'empty' }, h('h2', null, 'Ingen registrerte hendelser her'), h('p', null, 'Ingen er lenger knyttet til dette stedet.'))); return; }
    const by = t => e.ev.filter(x => x.type === t);
    const P = id => Store.persons.get(id);
    const ageOf = p => p && p.birthYear != null && p.deathYear != null && p.deathYear >= p.birthYear ? p.deathYear - p.birthYear : null;
    const avg = a => a.length ? Math.round(a.reduce((x, y) => x + y, 0) / a.length * 10) / 10 : null;
    const bornAges = [...new Set(by('født').map(x => x.pid))].map(id => ageOf(P(id))).filter(x => x != null);
    const diedAges = [...new Set(by('døde').map(x => x.pid))].map(id => ageOf(P(id))).filter(x => x != null);
    const nowNote = e.now && norm(e.now) !== norm(e.title) ? 'Nå en del av ' + e.now : '';
    const sameNow = [...M.values()].filter(x => x.key !== e.key && ((e.now && x.now && norm(x.now) === norm(e.now)) || (e.now && norm(x.title) === norm(e.now)) || (x.now && norm(x.now) === norm(e.title))));
    const stat = (n, label) => h('div', { class: 'st-big' }, h('b', null, String(n)), h('span', null, label));
    const head = h('div', { class: 'page-h' }, h('div', null, h('h1', null, e.title), h('p', null, [nowNote, countTxt(e.persons.size, 'person', 'personer') + ' knyttet til stedet'].filter(Boolean).join(' · '))));
    root.append(back, head);
    root.appendChild(h('section', { class: 'card' }, h('div', { class: 'st-bigs' },
      stat(new Set(by('født').map(x => x.pid)).size, 'født her'), stat(new Set(by('døde').map(x => x.pid)).size, 'døde her'),
      stat(new Set(by('bodde').map(x => x.pid)).size, 'bodde her'), stat(new Set(by('utvandret').map(x => x.pid)).size, 'utvandret hit')),
      (bornAges.length || diedAges.length) ? h('p', { class: 'fnote' }, [bornAges.length ? 'Gjennomsnittlig levealder for dem som ble født her: ' + avg(bornAges).toLocaleString('nb-NO') + ' år (' + bornAges.length + ').' : '', diedAges.length ? 'For dem som døde her: ' + avg(diedAges).toLocaleString('nb-NO') + ' år (' + diedAges.length + ').' : ''].filter(Boolean).join(' ')) : null));
    // kart
    const pts = [...e.pts.values()];
    if (pts.length){
      const host = h('div', { class: 'pick pmap' });
      const mapCard = h('section', { class: 'card' }, h('h2', null, 'Kart'), host);
      root.appendChild(mapCard);
      const base = createBaseMap(host, {}); this.base = base;
      const pins = pts.map(pt => { const el = h('div', { class: 'pin' }); el.innerHTML = PIN_SVG; if (pt.name){ el.appendChild(h('span', { class: 'pin-l' }, pt.name)); } host.appendChild(el); return { el, pt }; });
      const place = () => pins.forEach(({ el, pt }) => { const [x, y] = base.toScreen(pt.lon, pt.lat); el.style.left = x + 'px'; el.style.top = y + 'px'; });
      base.onTransform(place);
      base.fit(pts.map(pt => [pt.lon, pt.lat]), { minSpan: pts.length > 1 ? 1.2 : 4 });
      if (e.approx && pts.length === 1 && !pts[0].farm) mapCard.appendChild(h('p', { class: 'fnote' }, 'Punktet er omtrentlig (midt i dagens kommune). Du kan flytte det på en person ved å velge «Flytt på kartet» på stedet.'));
    }
    // gårder
    if (e.farms.size){
      root.appendChild(h('section', { class: 'card' }, h('h2', null, 'Gårder og steder i kommunen'),
        h('div', { class: 'farms' }, [...e.farms.values()].sort((a, b) => b.ids.size - a.ids.size || a.name.localeCompare(b.name, 'nb')).map(f => h('div', { class: 'farm' }, h('b', null, f.name), h('div', { class: 'chips' }, [...f.ids].map(P).filter(Boolean).map(p => personChip(p))))))));
    }
    // personer etter type
    const sect = (title, t, verb) => {
      const arr = by(t).filter(x => x.pid && P(x.pid)).sort((a, b) => (a.year == null) - (b.year == null) || (a.year || 0) - (b.year || 0));
      if (!arr.length) return null;
      return h('section', { class: 'card' }, h('h2', null, title, h('span', { class: 'faint an-cnt' }, String(arr.length))),
        h('ul', { class: 'an-list' }, arr.map(x => h('li', { class: 'an-row' }, h('span', { class: 'an-n pyear' }, x.year != null ? String(x.year) : '–'), personChip(P(x.pid), lifeSpan(P(x.pid))), x.farm ? h('span', { class: 'faint an-pl' }, x.farm) : null))));
    };
    [sect('Født her', 'født'), sect('Bodde her', 'bodde'), sect('Utvandret hit', 'utvandret'), sect('Døde her', 'døde')].forEach(c => c && root.appendChild(c));
    if (e.photos.length) root.appendChild(h('section', { class: 'card' }, h('h2', null, 'Bilder tatt her'), h('div', { class: 'thumbs' }, e.photos.map(ph => h('button', { class: 'thumb', 'aria-label': ph.caption || 'Bilde', onclick: () => Photos.open(ph.id, { list: e.photos.map(x => x.id) }) }, h('img', { src: photoUrl(ph), alt: '', loading: 'lazy', style: ph.w && ph.h ? { aspectRatio: ph.w + '/' + ph.h } : {} }), h('span', { class: 'cap' }, yearLabel(ph) || ph.caption || ' '))))));
    if (sameNow.length) root.appendChild(h('section', { class: 'card' }, h('h2', null, 'Samme område i dag'), h('p', { class: 'muted', style: { marginTop: 0 } }, 'Disse stedene er i dag en del av samme kommune.'),
      h('ul', { class: 'plist' }, sameNow.map(x => h('li', null, h('a', { href: '#', class: 'plrow', onclick: ev => { ev.preventDefault(); App.go('place', x.key); } }, h('span', { class: 'pt' }, x.title, x.now && norm(x.now) !== norm(x.title) ? h('small', { class: 'faint' }, ' · nå ' + x.now) : null), h('span', { class: 'faint ps' }, ''), h('span', { class: 'pc' }, countTxt(x.persons.size, 'person', 'personer'))))))));
  }
};

/* ---------- Verifisering ----------
   Fødsel og død hører til personen. Hvert foreldreforhold lagres én gang, på barnet (verify['par:<forelderId>']).
   Hvert partnerforhold lagres én gang, på personen med lavest id (verify['partner:<annenId>']).
   Begge sider leser samme post, så verifiseringen vises på begge personsidene. */
const V_LABEL = { ok: 'Bekreftet', doubt: 'Usikker', '': 'Ikke bekreftet' };
const PAR_FIELDS = [['fatherId', 'Far'], ['motherId', 'Mor'], ['coParentId', 'Medforelder'], ['donorId', 'Donor'], ['bioFatherId', 'Biologisk far'], ['bioMotherId', 'Biologisk mor']];
function vItems(p){
  const out = [];
  out.push({ grp: 'Opplysninger', label: 'Fødsel', owner: p.id, key: 'birth' });
  if (isDead(p)) out.push({ grp: 'Opplysninger', label: 'Død', owner: p.id, key: 'death' });
  const seen = new Set();
  PAR_FIELDS.forEach(([f, role]) => { const q = p[f] && Store.persons.get(p[f]); if (!q || seen.has(q.id)) return; seen.add(q.id); out.push({ grp: 'Foreldre', label: role + ': ' + fullName(q), owner: p.id, key: 'par:' + q.id }); });
  Idx.partnersOf(p.id).filter(x => relKind(x) !== 'foreldre').forEach(x => {
    const own = p.id < x.p.id ? p.id : x.p.id;
    out.push({ grp: 'Partnere', label: 'Forholdet til ' + fullName(x.p) + (x.kind === 'gift' ? ' (gift' + (x.year != null ? ' ' + x.year : '') + ')' : x.kind === 'samboer' ? ' (samboer)' : ''), owner: own, key: 'partner:' + (own === p.id ? x.p.id : p.id) });
  });
  const kids = new Map(); Idx.kidsOf(p.id).forEach(c => kids.set(c.id, c)); (Idx.donorKids.get(p.id) || []).forEach(i => { const c = Store.persons.get(i); if (c) kids.set(i, c); });
  [...kids.values()].filter(c => PAR_FIELDS.some(([f]) => c[f] === p.id)).sort((a, b) => (a.birthYear || 9999) - (b.birthYear || 9999)).forEach(c => out.push({ grp: 'Barn', label: 'Barn: ' + fullName(c), owner: c.id, key: 'par:' + p.id }));
  return out.filter(it => Store.persons.has(it.owner));
}
const vRec = it => { const o = Store.persons.get(it.owner); return (o && o.verify && o.verify[it.key]) || {}; };
const vSt = it => vRec(it).st || '';
const vUid = it => it.owner + '|' + it.key;
const srcLabel = ph => [ph.srcType || 'Kilde', ph.ref || ph.caption, ph.year].filter(Boolean).join(' · ');
const allSources = () => [...Store.photos.values()].filter(isSource).sort((a, b) => srcLabel(a).localeCompare(srcLabel(b), 'nb'));

function openVerify(pid){
  const p0 = Store.persons.get(pid); if (!p0) return;
  const srcs = allSources();
  const items = vItems(p0);
  const st = {};
  items.forEach(it => { const v = vRec(it); st[vUid(it)] = { st: v.st || '', src: new Set(v.src || []), note: v.note || '' }; });
  const body = h('form', { class: 'modal-b', novalidate: true, onsubmit: async e => {
    e.preventDefault();
    const byOwner = new Map();
    items.forEach(it => {
      if (!byOwner.has(it.owner)) { const q = clone(Store.persons.get(it.owner)); q.verify = q.verify || {}; delete q.verify.parents; delete q.verify.partners; byOwner.set(it.owner, q); }
      const q = byOwner.get(it.owner), s = st[vUid(it)];
      if (s.st || s.note.trim() || s.src.size) q.verify[it.key] = { st: s.st, src: [...s.src], note: s.note.trim(), at: new Date().toISOString().slice(0, 10) }; else delete q.verify[it.key];
    });
    for (const q of byOwner.values()){ if (!Object.keys(q.verify).length) delete q.verify; await Store.savePerson(q); }
    modal.close(); toast('Verifiseringen er lagret');
  } });
  body.appendChild(h('p', { class: 'faint', style: { fontSize: '13.5px', margin: '0 0 6px' } }, 'Marker hva du har kontrollert mot en kilde. Foreldre- og partnerforhold gjelder begge personene og vises også på den andres side.'));
  let lastGrp = null;
  items.forEach(it => {
    const s = st[vUid(it)];
    if (it.grp !== lastGrp){ lastGrp = it.grp; body.appendChild(h('h3', { class: 'v-grp' }, it.grp)); }
    const sel = h('select', { class: 'inp', 'aria-label': it.label, onchange: e => { s.st = e.target.value; } }, [['', 'Ikke bekreftet'], ['ok', 'Bekreftet i kilde'], ['doubt', 'Usikker']].map(([v, t]) => h('option', { value: v, selected: s.st === v }, t)));
    const srcBox = srcs.length ? h('details', { class: 'v-src' }, h('summary', null, 'Kilder (' + s.src.size + ')'),
      h('div', { class: 'v-srclist' }, srcs.map(ph => h('label', { class: 'bk-chk' }, h('input', { type: 'checkbox', checked: s.src.has(ph.id), onchange: e => { if (e.target.checked) s.src.add(ph.id); else s.src.delete(ph.id); const sm = srcBox.querySelector('summary'); if (sm) sm.textContent = 'Kilder (' + s.src.size + ')'; } }), h('span', null, srcLabel(ph)))))) : null;
    body.appendChild(h('div', { class: 'fs' }, h('h3', null, it.label), sel, srcBox, h('input', { class: 'inp', type: 'text', placeholder: 'Notat, f.eks. «kirkebok Voss 1872, s. 14»', value: s.note, 'aria-label': 'Notat for ' + it.label, oninput: e => { s.note = e.target.value; } })));
  });
  body.appendChild(h('div', { class: 'form-actions' }, h('span'), h('div', { style: { display: 'flex', gap: '8px' } }, h('button', { type: 'button', class: 'btn ghost', onclick: () => modal.close() }, 'Avbryt'), h('button', { type: 'submit', class: 'btn primary' }, 'Lagre'))));
  const modal = openModal('Verifiser ' + fullName(p0), body, {});
}

function verifyCard(p, edit){
  const items = vItems(p);
  const ok = items.filter(it => vSt(it) === 'ok').length;
  const mk = it => {
    const v = vRec(it);
    const srcs = (v.src || []).map(id => Store.photos.get(id)).filter(Boolean);
    return h('div', { class: 'v-row' }, h('span', { class: 'v-l' }, it.label), h('span', { class: 'vbadge v-' + (v.st || 'none') }, (v.st === 'ok' ? '✓ ' : v.st === 'doubt' ? '? ' : '') + V_LABEL[v.st || '']),
      srcs.length || v.note ? h('div', { class: 'v-d' }, srcs.map(ph => h('a', { href: '#', class: 'chip', onclick: e => { e.preventDefault(); Photos.open(ph.id, { list: srcs.map(x => x.id) }); } }, h('span', { class: 't' }, srcLabel(ph)))), v.note ? h('span', { class: 'faint' }, v.note) : null) : null);
  };
  const kids = [];
  let last = null;
  items.forEach(it => { if (it.grp !== last){ last = it.grp; kids.push(h('h3', { class: 'v-grp' }, it.grp)); } kids.push(mk(it)); });
  return h('section', { class: 'card' }, h('h2', null, 'Verifisering', edit ? h('button', { class: 'btn sm', onclick: () => openVerify(p.id) }, 'Verifiser') : null),
    h('p', { class: 'muted', style: { margin: '0 0 6px' } }, ok + ' av ' + items.length + ' er bekreftet i kilde.'), kids);
}

/* ---------- Kvalitetssjekk ---------- */
function runChecks(){
  const out = [];
  const P = [...Store.persons.values()];
  const nm = fullName;
  const push = (code, sev, p, msg, other) => out.push({ code, sev, pid: p.id, other: other || null, msg, key: code + (other ? ':' + other : '') });
  P.forEach(p => {
    const b = p.birthYear, d = p.deathYear;
    if (b != null && d != null && d < b) push('dod-for-fodsel', 'feil', p, 'Dødsåret (' + d + ') er før fødselsåret (' + b + ').');
    if (b != null && d != null && d - b > 110) push('alder', 'advarsel', p, 'Ble ' + (d - b) + ' år. Kontroller årstallene.');
    if (b != null && d == null && !isDead(p) && NOW_YEAR - b > 110) push('levende-gammel', 'advarsel', p, 'Er ikke registrert som død, men ville vært ' + (NOW_YEAR - b) + ' år.');
    // foreldre
    const slots = [[p.fatherId, 'far'], [p.motherId, 'mor'], [p.coParentId, 'medforelder']];
    slots.forEach(([id, role]) => {
      const par = id && Store.persons.get(id); if (!par) return;
      if (id === p.id) return;
      if (b != null && par.birthYear != null){
        const gap = b - par.birthYear;
        if (gap < 15) push('forelder-ung', 'feil', p, nm(par) + ' (' + role + ') var bare ' + gap + ' år da ' + (p.given || 'personen') + ' ble født.', id);
        else if (!p.adopted && ((role === 'mor' && gap > 48) || (role !== 'mor' && gap > 62))) push('forelder-gammel', 'advarsel', p, nm(par) + ' (' + role + ') var ' + gap + ' år da ' + (p.given || 'personen') + ' ble født.', id);
      }
      if (b != null && par.deathYear != null){
        if (role === 'mor' ? b > par.deathYear : b > par.deathYear + 1) push('fodt-etter-dod', 'feil', p, 'Født ' + b + ', men ' + nm(par) + ' (' + role + ') døde ' + par.deathYear + '.', id);
      }
    });
    // syklus
    const seen = new Set(); let cyc = false;
    (function up(i){ const q = Store.persons.get(i); if (!q || cyc) return; parentsOf(q).forEach(x => { if (x === p.id) cyc = true; else if (!seen.has(x)){ seen.add(x); up(x); } }); })(p.id);
    if (cyc) push('syklus', 'feil', p, 'Er sin egen forfar i slektstreet. Sjekk foreldrene som er lagt inn.');
    // partnere
    (p.partners || []).forEach(pt => {
      const o = Store.persons.get(pt.id); if (!o) return;
      const kind = relKind(pt);
      if (pt.year != null){
        [p, o].forEach(x => { if (x.birthYear != null){ const age = pt.year - x.birthYear; if (age < 0) push('forhold-for-fodsel', 'feil', p, 'Forholdet til ' + nm(o) + ' (' + pt.year + ') starter før ' + nm(x) + ' ble født.', o.id); else if (age < 15 && kind === 'gift') push('gift-ung', 'advarsel', p, nm(x) + ' var ' + age + ' år ved giftermålet med ' + nm(x === p ? o : p) + ' (' + pt.year + ').', o.id); }
          if (x.deathYear != null && pt.year > x.deathYear) push('forhold-etter-dod', 'feil', p, 'Forholdet til ' + nm(o) + ' (' + pt.year + ') starter etter at ' + nm(x) + ' døde (' + x.deathYear + ').', o.id); });
        if (pt.endYear != null && pt.endYear < pt.year) push('slutt-for-start', 'feil', p, 'Forholdet til ' + nm(o) + ' slutter (' + pt.endYear + ') før det starter (' + pt.year + ').', o.id);
      }
      if (p.birthYear != null && o.birthYear != null && Math.abs(p.birthYear - o.birthYear) > 30 && p.id < o.id) push('stor-aldersforskjell', 'advarsel', p, 'Aldersforskjell på ' + Math.abs(p.birthYear - o.birthYear) + ' år til ' + nm(o) + '.', o.id);
    });
    // steder og tid
    (p.moves || []).forEach(m => { if (m.year == null) return; if (b != null && m.year < b) push('flytt-for-fodsel', 'feil', p, 'Bosted fra ' + m.year + ' er før fødselsåret (' + b + ').', 'm' + m.year); if (d != null && m.year > d) push('flytt-etter-dod', 'feil', p, 'Bosted fra ' + m.year + ' er etter dødsåret (' + d + ').', 'm' + m.year); });
    if (p.emigratedYear != null){ if (b != null && p.emigratedYear < b) push('utv-for-fodsel', 'feil', p, 'Utvandret ' + p.emigratedYear + ', før fødselsåret (' + b + ').'); if (d != null && p.emigratedYear > d) push('utv-etter-dod', 'feil', p, 'Utvandret ' + p.emigratedYear + ', etter dødsåret (' + d + ').'); }
    // mangler
    if (b == null) push('mangler-fodsel', 'mangler', p, 'Fødselsår mangler.');
    if (p.sex !== 'm' && p.sex !== 'f') push('mangler-kjonn', 'mangler', p, 'Kjønn er ikke oppgitt.');
    if (!p.fatherId && !p.motherId && !p.coParentId && !p.donorId && !p.adopted) push('mangler-foreldre', 'mangler', p, 'Ingen foreldre er registrert.');
    const hasSrc = (Idx.photosOf.get(p.id) || []).some(x => isSource(x.photo));
    if (isDead(p) && !deathCatOf(p)) push('dodsarsak', 'ubekreftet', p, 'Dødsårsak er ikke bekreftet (velg gruppen «Ukjent» hvis den ikke er kjent).');
    if (!hasSrc) push('mangler-kilde', 'mangler', p, 'Ingen kilde er knyttet til personen.');
    const vi = vItems(p), low = t => t.charAt(0).toLowerCase() + t.slice(1);
    const dbt = vi.filter(it => vSt(it) === 'doubt').map(it => low(it.label));
    const unv = vi.filter(it => !vSt(it)).map(it => low(it.label));
    if (dbt.length) push('usikker', 'ubekreftet', p, 'Merket som usikker: ' + dbt.join('; ') + '.');
    if (unv.length) push('ubekreftet', 'ubekreftet', p, 'Ikke bekreftet i kilde: ' + unv.join('; ') + '.');
  });
  // bilder: tagget før fødsel
  Store.photos.forEach(ph => { if (ph.year == null || isSource(ph)) return; (ph.tags || []).forEach(t => { const p = Store.persons.get(t.pid); if (!p) return; if (p.birthYear != null && ph.year < p.birthYear) out.push({ code: 'bilde-for-fodsel', sev: 'feil', pid: p.id, other: ph.id, msg: 'Er tagget på et bilde fra ' + yearLabel(ph) + ', før fødselsåret (' + p.birthYear + ').', key: 'bilde-for-fodsel:' + ph.id }); else if (p.deathYear != null && ph.year > p.deathYear + 1) out.push({ code: 'bilde-etter-dod', sev: 'advarsel', pid: p.id, other: ph.id, msg: 'Er tagget på et bilde fra ' + yearLabel(ph) + ', etter dødsåret (' + p.deathYear + ').', key: 'bilde-etter-dod:' + ph.id }); }); });
  // mulige dubletter
  const groups = new Map();
  P.forEach(p => { const k = norm([p.given, p.patronym, p.family].filter(Boolean).join(' ')); if (!k) return; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(p); });
  groups.forEach(g => { for (let i = 0; i < g.length; i++) for (let j = i + 1; j < g.length; j++){ const a = g[i], c = g[j];
    if (a.birthYear != null && c.birthYear != null && Math.abs(a.birthYear - c.birthYear) > 2) continue;
    const [x, y] = a.id < c.id ? [a, c] : [c, a];
    out.push({ code: 'dublett', sev: 'advarsel', pid: x.id, other: y.id, msg: 'Kan være samme person som ' + fullName(y) + (y.birthYear != null ? ' (f. ' + y.birthYear + ')' : '') + '.', key: 'dublett:' + y.id }); } });
  return out;
}

const Q_SEV = [['feil', 'Feil', 'Ting som ikke kan stemme'], ['advarsel', 'Advarsler', 'Uvanlig eller verdt å sjekke'], ['ubekreftet', 'Ubekreftet', 'Ikke kontrollert mot kilde'], ['mangler', 'Mangler', 'Opplysninger som ikke er lagt inn']];
const QualityView = {
  show: new Set(['feil', 'advarsel']), showIgnored: false, limit: {}, code: null,
  mount(root){ this.root = root; this.render(); },
  update(){ this.render(); },
  render(){
    const root = clear(this.root);
    const back = h('button', { class: 'back', onclick: () => App.go('register') }, ico('back', 18), 'Register');
    root.append(back, h('div', { class: 'page-h' }, h('div', null, h('h1', null, 'Kvalitetssjekk'), h('p', null, 'Appen går gjennom registeret og peker på det som ikke stemmer eller mangler. Alt er forslag. Du bestemmer selv hva som er riktig, og kan ignorere det som er greit.'))));
    if (!Store.persons.size){ root.appendChild(h('div', { class: 'empty' }, h('p', null, 'Legg inn personer først.'))); return; }
    const all = runChecks();
    const ign = x => { const p = Store.persons.get(x.pid); return !!(p && (p.ignored || []).includes(x.key)); };
    const live = all.filter(x => !ign(x)), ignored = all.filter(ign);
    const count = s => live.filter(x => x.sev === s).length;
    // verifisering: oppsummering
    const tot = { t: 0, ok: 0 }, seenV = new Set();
    Store.persons.forEach(p => vItems(p).forEach(it => { const u = vUid(it); if (seenV.has(u)) return; seenV.add(u); tot.t++; if (vSt(it) === 'ok') tot.ok++; }));
    root.appendChild(h('section', { class: 'card' }, h('div', { class: 'q-chips' }, Q_SEV.map(([k, t, sub]) => h('button', { type: 'button', class: 'q-chip q-' + k, 'aria-pressed': String(this.show.has(k)), onclick: () => { if (this.show.has(k)) this.show.delete(k); else this.show.add(k); this.render(); } }, h('b', null, String(count(k))), h('span', null, t), h('small', null, sub)))),
      h('p', { class: 'fnote' }, 'Verifisering: ' + tot.ok + ' av ' + tot.t + ' opplysninger og forhold er bekreftet i kilde (' + (tot.t ? Math.round(tot.ok / tot.t * 100) : 0) + ' %). Du verifiserer på hver persons side. '),
      ignored.length ? h('label', { class: 'bk-chk' }, h('input', { type: 'checkbox', checked: this.showIgnored, onchange: e => { this.showIgnored = e.target.checked; this.render(); } }), h('span', null, 'Vis ' + ignored.length + ' ignorerte')) : null));
    const list = (this.showIgnored ? all : live);
    Q_SEV.forEach(([k, t]) => {
      if (!this.show.has(k)) return;
      const items = list.filter(x => x.sev === k).sort((a, b) => a.code.localeCompare(b.code) || fullName(Store.persons.get(a.pid)).localeCompare(fullName(Store.persons.get(b.pid)), 'nb'));
      if (!items.length) return;
      const lim = this.limit[k] || 40;
      root.appendChild(h('section', { class: 'card' }, h('h2', null, t, h('span', { class: 'faint an-cnt' }, String(items.length))),
        h('ul', { class: 'q-list' }, items.slice(0, lim).map(x => {
          const p = Store.persons.get(x.pid), o = x.other && Store.persons.get(x.other);
          const isI = ign(x);
          return h('li', { class: 'q-row' + (isI ? ' ign' : '') }, personChip(p, lifeSpan(p)), h('span', { class: 'q-m' }, x.msg), o ? personChip(o, lifeSpan(o)) : null,
            h('span', { class: 'q-a' }, h('button', { class: 'btn sm ghost', onclick: () => App.go('person', p.id) }, 'Åpne'),
              Store.canWrite ? h('button', { class: 'btn sm ghost', onclick: async () => { const q = clone(Store.persons.get(x.pid)); const set = new Set(q.ignored || []); if (isI) set.delete(x.key); else set.add(x.key); q.ignored = [...set]; if (!q.ignored.length) delete q.ignored; await Store.savePerson(q); } }, isI ? 'Gjenopprett' : 'Ignorer') : null));
        })),
        items.length > lim ? h('button', { class: 'btn sm', style: { marginTop: '8px' }, onclick: () => { this.limit[k] = lim + 80; this.render(); } }, 'Vis flere (' + (items.length - lim) + ')') : null));
    });
    if (![...this.show].some(k => list.some(x => x.sev === k))) root.appendChild(h('div', { class: 'card' }, h('p', { class: 'muted' }, 'Ingenting å vise for valget ditt. Det er et godt tegn.')));
  }
};

/* ====== Bok til utskrift (A4) ====== */
const BOOK_CSS = "/* Bokside: hvitt A4-ark med faste m\u00e5l, uavhengig av tema. */\n.page{position:relative;width:210mm;height:296.6mm;background:#fff;color:#1c1b19;font-family:'Newsreader',Georgia,'Times New Roman',serif;font-size:10.5pt;line-height:1.42;overflow:hidden;box-sizing:border-box;padding:16mm 18mm 0 18mm;-webkit-print-color-adjust:exact;print-color-adjust:exact;text-align:left}\n.page *{box-sizing:border-box}\n.pg-body{width:174mm;height:259mm;overflow:hidden;position:relative}\n.pg-foot{position:absolute;left:18mm;right:18mm;bottom:9mm;display:flex;justify-content:space-between;gap:10mm;font:8.5pt/1.2 'Schibsted Grotesk',system-ui,sans-serif;color:#77746c;border-top:.3mm solid #d9d5cb;padding-top:2mm}\n.pg-foot span:last-child{font-variant-numeric:tabular-nums}\n.bk-cover{height:259mm;display:flex;flex-direction:column;justify-content:center;gap:8mm;padding-bottom:20mm}\n.bk-cover .rule{width:34mm;height:1.4mm;background:#8a5a3c}\n.bk-cover h1{font:600 44pt/1.02 'Newsreader',Georgia,serif;letter-spacing:-.02em;margin:0;overflow-wrap:anywhere}\n.bk-cover .sub{font:italic 400 17pt/1.3 'Newsreader',Georgia,serif;color:#4c4a45;margin:0}\n.bk-cover .meta{font:9.5pt/1.5 'Schibsted Grotesk',system-ui,sans-serif;color:#77746c;margin:0}\n.bk-h1{font:600 24pt/1.1 'Newsreader',Georgia,serif;letter-spacing:-.015em;margin:0 0 5mm;padding-bottom:3mm;border-bottom:.5mm solid #8a5a3c}\n.bk-h2{font:600 19pt/1.12 'Newsreader',Georgia,serif;letter-spacing:-.01em;margin:0}\n.bk-sec{font:600 7.5pt/1.2 'Schibsted Grotesk',system-ui,sans-serif;letter-spacing:.09em;text-transform:uppercase;color:#8a5a3c;margin:5mm 0 1.6mm}\n.bk-ph{display:flex;gap:5mm;align-items:center;padding-top:2mm;margin-top:2mm;border-top:.3mm solid #d9d5cb}\n.bk-ph.first{border-top:0;margin-top:0;padding-top:0}\n.bk-ph .av{border:.3mm solid #d9d5cb;background:#efece4;color:#5a5750;box-shadow:none}\n.bk-ph .t{min-width:0}\n.bk-life{font:9.5pt/1.3 'Schibsted Grotesk',system-ui,sans-serif;color:#5a5750;margin-top:1mm;font-variant-numeric:tabular-nums}\n.bk-facts{display:grid;grid-template-columns:24mm 1fr;gap:1mm 4mm;margin:2mm 0 0}\n.bk-facts dt{font:600 8.5pt/1.5 'Schibsted Grotesk',system-ui,sans-serif;color:#77746c}\n.bk-facts dd{margin:0;overflow-wrap:anywhere}\n.bk-fam{display:grid;grid-template-columns:24mm 1fr;gap:1mm 4mm;margin:1mm 0 0}\n.bk-fam b{font:600 8.5pt/1.5 'Schibsted Grotesk',system-ui,sans-serif;color:#77746c}\n.bk-fam div{overflow-wrap:anywhere}\n.pref{display:inline-block;margin-left:.3em;min-width:3.6em;font:8.5pt 'Schibsted Grotesk',system-ui,sans-serif;color:#77746c;white-space:nowrap}\n.bk-ev{display:grid;grid-template-columns:13mm 1fr;gap:.6mm 3mm;margin:0}\n.bk-ev .y{font:600 9pt/1.5 'Schibsted Grotesk',system-ui,sans-serif;color:#5a5750;text-align:right;font-variant-numeric:tabular-nums}\n.bk-ev .s{font:8.5pt 'Schibsted Grotesk',system-ui,sans-serif;color:#77746c}\n.bk-p{margin:0 0 2.4mm;white-space:pre-wrap;overflow-wrap:anywhere;text-align:left}\n.bk-srcrefs{font:9pt/1.45 'Schibsted Grotesk',system-ui,sans-serif;color:#3d3b36;margin:0}\n.bk-srcrefs span.k{display:inline-block;min-width:6mm;font-weight:600;color:#8a5a3c}\n.bk-toc{display:grid;grid-template-columns:1fr auto;gap:2.4mm 6mm;margin-top:4mm;font-size:12pt}\n.bk-toc .n{font:600 10pt 'Schibsted Grotesk',system-ui,sans-serif;font-variant-numeric:tabular-nums;text-align:right;color:#5a5750}\n.bk-toc .d{font:9pt 'Schibsted Grotesk',system-ui,sans-serif;color:#77746c;display:block;margin-top:.4mm}\n.bk-fig{margin:0;min-width:0}\n.bk-figs{display:grid;grid-template-columns:1fr 1fr;gap:6mm;margin:0 0 5mm}\n.bk-figs .box{height:70mm;display:grid;place-items:center;background:#f3f1ec;border:.3mm solid #e1ddd3;overflow:hidden}\n.bk-figs img{max-width:100%;max-height:100%;display:block;object-fit:contain}\n.bk-figs figcaption{font:8.8pt/1.35 'Schibsted Grotesk',system-ui,sans-serif;color:#3d3b36;margin-top:1.4mm;height:12mm;overflow:hidden}\n.bk-figs figcaption b{font-weight:600}\n.bk-src{margin:0 0 6mm;break-inside:avoid}\n.bk-src .hd{display:flex;gap:3mm;align-items:baseline;margin-bottom:1.4mm}\n.bk-src .hd .k{font:600 12pt 'Schibsted Grotesk',system-ui,sans-serif;color:#8a5a3c}\n.bk-src .hd .t{font:600 11pt 'Newsreader',Georgia,serif}\n.bk-src .who{font:9pt/1.4 'Schibsted Grotesk',system-ui,sans-serif;color:#5a5750;margin:0 0 2mm}\n.bk-src .img{display:grid;place-items:center;background:#f3f1ec;border:.3mm solid #e1ddd3;overflow:hidden}\n.bk-src .img img{max-width:100%;max-height:100%;display:block;object-fit:contain}\n.bk-tbl{width:100%;border-collapse:collapse;font-size:10pt}\n.bk-tbl th{font:600 8pt 'Schibsted Grotesk',system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#77746c;text-align:left;padding:0 2mm 1.4mm 0;border-bottom:.3mm solid #cfcabc}\n.bk-tbl td{padding:1.1mm 2mm 1.1mm 0;border-bottom:.2mm solid #ece9e1;vertical-align:top}\n.bk-tbl td.n{width:11mm;font:600 9pt 'Schibsted Grotesk',system-ui,sans-serif;color:#8a5a3c;font-variant-numeric:tabular-nums}\n.bk-tbl td.s{font:9pt 'Schibsted Grotesk',system-ui,sans-serif;color:#5a5750}\n.bk-gen{font:600 9pt 'Schibsted Grotesk',system-ui,sans-serif;color:#8a5a3c;margin:3mm 0 1.6mm}\n.bk-desc{margin:0;font-size:10pt;line-height:1.38}\n.bk-desc div{padding-left:calc(var(--d,0)*5mm);text-indent:-3mm;margin-left:3mm;overflow-wrap:anywhere}\n.bk-desc small{font:8.5pt 'Schibsted Grotesk',system-ui,sans-serif;color:#77746c}\n.bk-reg{columns:2;column-gap:8mm;font-size:10pt;line-height:1.35;margin:0}\n.bk-reg div{break-inside:avoid;display:flex;justify-content:space-between;gap:3mm;padding:.35mm 0;border-bottom:.2mm dotted #d9d5cb}\n.bk-reg .p{font:9pt 'Schibsted Grotesk',system-ui,sans-serif;color:#77746c;white-space:nowrap}\n.bk-svg{display:block;width:174mm;margin:0}\n.bk-note{font:8.8pt/1.4 'Schibsted Grotesk',system-ui,sans-serif;color:#77746c;margin:2mm 0 0}\n";
const MMPX = 96 / 25.4;
const BOOK_DEF = {
  title: 'Slekten', subtitle: '', cover: true, toc: true, tree: true, map: true,
  anc: false, ancRoot: '', desc: false, descRoot: '',
  persons: true, portrait: true, facts: true, family: true, life: true, notes: true, srcRefs: true, pagePerPerson: false,
  photos: true, sources: true, srcImages: true, register: true, sort: 'name', selMode: 'all'
};
const escHtml = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const sortPersons = (arr, how) => arr.sort(how === 'birth' ? ((a, b) => (a.birthYear == null) - (b.birthYear == null) || a.birthYear - b.birthYear || nameCmp(a, b)) : nameCmp);
const placeName = pl => pl && pl.name ? noPlace(pl.name) : '';

function splitText(t, max = 900){
  const out = [];
  let s = t.trim();
  while (s.length > max){
    let cut = s.lastIndexOf('. ', max);
    if (cut < max * 0.5) cut = s.lastIndexOf(' ', max);
    if (cut < 1) cut = max;
    out.push(s.slice(0, cut + 1).trim());
    s = s.slice(cut + 1).trim();
  }
  if (s) out.push(s);
  return out;
}

function bookTreeSvg(set, maxW, maxH){
  const g = new dagre.graphlib.Graph();
  g.setGraph({ rankdir: 'TB', nodesep: 10, ranksep: 30, marginx: 6, marginy: 6 });
  g.setDefaultEdgeLabel(() => ({}));
  const NW = 124, NH = 34;
  set.forEach(id => g.setNode('p' + id, { width: NW, height: NH, kind: 'p', id }));
  const unions = new Map();
  const U = (a, b) => { const key = [a, b].filter(Boolean).sort().join('|'); if (!unions.has(key)) unions.set(key, { key, ids: [a, b].filter(Boolean), kids: [] }); return unions.get(key); };
  set.forEach(id => { const p = Store.persons.get(id); const pp = parentPair(p), f = set.has(pp[0]) ? pp[0] : null, m = set.has(pp[1]) ? pp[1] : null; if (f || m) U(f, m).kids.push(id); });
  set.forEach(id => Idx.partnersOf(id).forEach(x => { if (set.has(x.p.id) && id < x.p.id) U(id, x.p.id); }));
  unions.forEach(u => { g.setNode('u' + u.key, { width: 4, height: 4, kind: 'u' }); u.ids.forEach(i => g.setEdge('p' + i, 'u' + u.key)); u.kids.forEach(k => g.setEdge('u' + u.key, 'p' + k)); });
  dagre.layout(g);
  const gw = g.graph().width, gh = g.graph().height;
  let W = maxW, H = W * gh / gw;
  if (H > maxH){ H = maxH; W = H * gw / gh; }
  const svg = h('svg', { viewBox: '0 0 ' + gw + ' ' + gh, width: W, height: H, class: 'bk-svg', style: 'width:' + W + 'px;height:' + H + 'px' });
  const line = d3.line().x(d => d.x).y(d => d.y).curve(d3.curveMonotoneY);
  g.edges().forEach(e => { const pts = g.edge(e).points; if (pts && pts.length) svg.appendChild(h('path', { d: line(pts), fill: 'none', stroke: '#b9b4a6', 'stroke-width': 0.9 })); });
  g.nodes().forEach(nid => {
    const n = g.node(nid);
    if (n.kind === 'u'){ svg.appendChild(h('circle', { cx: n.x, cy: n.y, r: 2, fill: '#8a5a3c' })); return; }
    const p = Store.persons.get(n.id);
    const nm = fullName(p);
    svg.appendChild(h('rect', { x: n.x - NW / 2, y: n.y - NH / 2, width: NW, height: NH, rx: 3, fill: '#fff', stroke: '#8a5a3c', 'stroke-width': 0.8 }));
    svg.appendChild(h('text', { x: n.x, y: n.y - 3, 'text-anchor': 'middle', 'font-size': 9.5, 'font-family': 'Newsreader,Georgia,serif', 'font-weight': 600, fill: '#1c1b19' }, nm.length > 22 ? nm.slice(0, 21) + '…' : nm));
    svg.appendChild(h('text', { x: n.x, y: n.y + 9, 'text-anchor': 'middle', 'font-size': 7.5, 'font-family': 'Schibsted Grotesk,system-ui,sans-serif', fill: '#6a675f' }, lifeSpan(p)));
  });
  return svg;
}

function bookMapSvg(pts, W, H){
  initGeo();
  const xy = pts.map(p => GEO.proj([p.lon, p.lat]));
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  xy.forEach(([x, y]) => { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); });
  const pad = 0.14, dx = Math.max(x1 - x0, 14), dy = Math.max(y1 - y0, 14 * H / W);
  const k = Math.min(1800, W / (dx * (1 + 2 * pad)), H / (dy * (1 + 2 * pad)));
  const tx = W / 2 - k * (x0 + x1) / 2, ty = H / 2 - k * (y0 + y1) / 2;
  const svg = h('svg', { viewBox: '0 0 ' + W + ' ' + H, width: W, height: H, class: 'bk-svg', style: 'width:' + W + 'px;height:' + H + 'px' });
  svg.appendChild(h('rect', { width: W, height: H, fill: '#dde7ee' }));
  const g = h('g', { transform: 'translate(' + tx + ',' + ty + ') scale(' + k + ')' });
  const nse = 'vector-effect:non-scaling-stroke';
  g.appendChild(h('path', { d: GEO.dLand, fill: '#f7f5ee', stroke: '#9fb0ba', 'stroke-width': 0.6, style: nse }));
  g.appendChild(h('path', { d: GEO.dBorders, fill: 'none', stroke: '#bdc7cd', 'stroke-width': 0.5, 'stroke-dasharray': '3 2', style: nse }));
  g.appendChild(h('path', { d: GEO.dKland, fill: '#f7f5ee', stroke: '#f7f5ee', 'stroke-width': 1, style: nse }));
  if (k > 4) g.appendChild(h('path', { d: GEO.dKom, fill: 'none', stroke: '#d6dad2', 'stroke-width': 0.5, style: nse }));
  g.appendChild(h('path', { d: GEO.dCounty, fill: 'none', stroke: '#a3b0b7', 'stroke-width': 0.7, style: nse }));
  g.appendChild(h('path', { d: GEO.dKcoast, fill: 'none', stroke: '#9fb0ba', 'stroke-width': 0.6, style: nse }));
  svg.appendChild(g);
  const boxes = [];
  const order = pts.map((p, i) => i).sort((a, b) => pts[b].n - pts[a].n);
  order.forEach(i => {
    const p = pts[i], x = tx + k * xy[i][0], y = ty + k * xy[i][1];
    const r = Math.min(9, 3.5 + Math.sqrt(p.n) * 1.1);
    svg.appendChild(h('circle', { cx: x, cy: y, r, fill: '#8a5a3c', 'fill-opacity': 0.85, stroke: '#fff', 'stroke-width': 1 }));
    const txt = p.name + (p.n > 1 ? ' (' + p.n + ')' : '');
    const w = txt.length * 5.4 + 4, bx = x + r + 2, by = y - 6;
    if (!p.name || bx + w > W || boxes.some(b => bx < b.x + b.w && bx + w > b.x && by < b.y + 12 && by + 12 > b.y)) return;
    boxes.push({ x: bx, y: by, w });
    svg.appendChild(h('text', { x: bx, y: y + 3, 'font-size': 9.5, 'font-family': 'Schibsted Grotesk,system-ui,sans-serif', fill: '#1c1b19', stroke: '#fff', 'stroke-width': 2.4, 'paint-order': 'stroke', 'stroke-linejoin': 'round' }, txt));
  });
  return svg;
}

async function waitFonts(){
  try {
    await Promise.race([
      Promise.all(['10.5pt Newsreader', '600 12pt Newsreader', 'italic 12pt Newsreader', '9pt "Schibsted Grotesk"', '600 9pt "Schibsted Grotesk"'].map(f => document.fonts.load(f))),
      new Promise(r => setTimeout(r, 3500))
    ]);
  } catch (_) {}
}

/* Selve utlegget: tilordner innholdsblokker til A4-sider med faste mål. */
async function composeBook(o, inc){
  await waitFonts();
  const persons = sortPersons([...inc].map(id => Store.persons.get(id)).filter(Boolean), o.sort);
  const blocks = [], toc = [];
  const B = (el, extra) => { blocks.push(Object.assign({ el }, extra || {})); return el; };
  const pref = id => inc.has(id) && o.persons ? h('span', { class: 'pref', 'data-pid': id }, ' (s. 00)') : null;
  const nameWithRef = p => [fullName(p), pref(p.id)];
  const year = p => p.birthYear != null ? ' (f. ' + p.birthYear + ')' : '';
  const section = (id, title, desc) => { toc.push({ id, title, desc }); B(h('h1', { class: 'bk-h1' }, title), { id, brk: 'before', keep: true }); };

  // kilder og fotografier som hører til utvalget
  const tagged = ph => (ph.tags || []).filter(t => inc.has(t.pid));
  const allPh = [...Store.photos.values()].filter(ph => tagged(ph).length).sort((a, b) => (a.year || 9999) - (b.year || 9999) || (a.created || 0) - (b.created || 0));
  const srcs = allPh.filter(isSource), photos = allPh.filter(ph => !isSource(ph));
  const kNo = new Map(srcs.map((s, i) => [s.id, 'K' + (i + 1)]));

  // slektstre
  if (o.tree && inc.size > 1){
    section('sec-tree', 'Slektstre', plural(inc.size, 'person', 'personer'));
    B(bookTreeSvg(inc, 174 * MMPX, 215 * MMPX));
    B(h('p', { class: 'bk-note' }, 'Treet viser de valgte personene med foreldre og partnere der de er med i utvalget.'));
  }
  // kart
  if (o.map){
    const m = new Map();
    persons.forEach(p => timelineOf(p).forEach(e => { const key = e.place.lat.toFixed(3) + ',' + e.place.lon.toFixed(3); if (!m.has(key)) m.set(key, { lat: e.place.lat, lon: e.place.lon, name: e.place.name || '', ids: new Set() }); m.get(key).ids.add(p.id); }));
    if (m.size){
      section('sec-map', 'Kart over bosteder', plural(m.size, 'sted', 'steder'));
      B(bookMapSvg([...m.values()].map(v => ({ lat: v.lat, lon: v.lon, name: v.name, n: v.ids.size })), 174 * MMPX, 200 * MMPX));
      B(h('p', { class: 'bk-note' }, 'Hvert punkt er et sted der minst én person er født, har bodd eller døde. Tallet i parentes er hvor mange personer som har tilknytning til stedet.'));
    }
  }
  // anetavle
  if (o.anc && Store.persons.has(o.ancRoot)){
    const root = Store.persons.get(o.ancRoot);
    const rows = [];
    (function rec(id, n){ const p = Store.persons.get(id); if (!p || rows.length > 1500) return; rows.push({ n, p }); const pr = parentPair(p); rec(pr[0], n * 2); rec(pr[1], n * 2 + 1); })(root.id, 1);
    rows.sort((a, b) => a.n - b.n);
    section('sec-anc', 'Anetavle for ' + fullName(root), plural(rows.length, 'person', 'personer'));
    B(h('p', { class: 'bk-note' }, 'Nummereringen følger anetavlen: personen selv er nr. 1, og foreldrene får nr. 2 og 3 (far først når det er far og mor). Foreldrene til person n har nr. 2n og 2n+1.'), { keep: true });
    let gen = 0, chunk = [];
    const flush = () => { if (chunk.length){ B(h('table', { class: 'bk-tbl' }, h('tbody', null, chunk))); chunk = []; } };
    rows.forEach(r => {
      const g = Math.floor(Math.log2(r.n)) + 1;
      if (g !== gen){ flush(); gen = g; B(h('div', { class: 'bk-gen' }, g === 1 ? 'Generasjon 1' : 'Generasjon ' + g + (g === 2 ? ' · foreldre' : g === 3 ? ' · besteforeldre' : g === 4 ? ' · oldeforeldre' : '')), { keep: true }); }
      chunk.push(h('tr', null, h('td', { class: 'n' }, String(r.n)), h('td', null, nameWithRef(r.p)), h('td', { class: 's' }, lifeSpan(r.p)), h('td', { class: 's' }, placeName(r.p.birthPlace))));
      if (chunk.length >= 20) flush();
    });
    flush();
  }
  // etterkommere
  if (o.desc && Store.persons.has(o.descRoot)){
    const root = Store.persons.get(o.descRoot);
    const lines = [];
    (function rec(id, d, path){
      const p = Store.persons.get(id); if (!p || path.has(id) || lines.length > 1500) return;
      const pts = Idx.partnersOf(id);
      lines.push({ p, d, pts });
      const np = new Set(path).add(id);
      Idx.kidsOf(id).forEach(c => rec(c.id, d + 1, np));
    })(root.id, 0, new Set());
    section('sec-desc', 'Etterkommere av ' + fullName(root), plural(lines.length, 'person', 'personer'));
    let chunk = [];
    const flush = () => { if (chunk.length){ B(h('div', { class: 'bk-desc' }, chunk)); chunk = []; } };
    lines.forEach(l => {
      chunk.push(h('div', { style: { '--d': Math.min(l.d, 8) } }, nameWithRef(l.p), ' ', h('small', null, lifeSpan(l.p)), l.pts.length ? h('small', null, ' · ' + l.pts.map(x => REL_WITH[relKind(x)] + ' ' + fullName(x.p)).join(' · ')) : null));
      if (chunk.length >= 34) flush();
    });
    flush();
  }
  // personkapitler
  if (o.persons && persons.length){
    section('sec-persons', 'Personer', plural(persons.length, 'person', 'personer'));
    persons.forEach((p, idx) => {
      const portrait = o.portrait && (Idx.photosOf.get(p.id) || []).some(x => !isSource(x.photo) && x.tag.x != null && x.photo.assetId);
      B(h('div', { class: 'bk-ph' }, portrait ? avatar(p, 62) : null,
        h('div', { class: 't' }, h('h2', { class: 'bk-h2' }, fullName(p)), h('div', { class: 'bk-life' }, lifeSpan(p) + (ageText(p) ? ' · ' + ageText(p) : '')))), { id: 'p' + p.id, brk: o.pagePerPerson && idx > 0 ? 'before' : null, keep: true });
      if (o.facts){
        const rows = [];
        const b = [p.birthYear != null ? String(p.birthYear) : null, p.birthDate, placeName(p.birthPlace)].filter(Boolean).join(' · ');
        const d = [p.deathYear != null ? String(p.deathYear) : null, p.deathDate, placeName(p.deathPlace)].filter(Boolean).join(' · ') || (isDead(p) ? 'tidspunkt ukjent' : '');
        if (p.patronym) rows.push(['Patronym', p.patronym]);
        if (b) rows.push(['Født', b]);
        if (p.emigratedTo) rows.push(['Utvandret til', [p.emigratedYear != null ? String(p.emigratedYear) : null, placeName(p.emigratedTo)].filter(Boolean).join(' · ')]);
        if (d) rows.push(['Død', d]);
        { const dc = deathCatOf(p), ds = deathSpecOf(p); if (dc || ds) rows.push(['Dødsårsak', dc && ds ? dc + ' (' + ds + ')' : (dc || ds)]); }
        if (rows.length) B(h('dl', { class: 'bk-facts' }, rows.map(([k, v]) => [h('dt', null, k), h('dd', null, v)])));
      }
      if (o.family){
        const par = parentsOf(p).map(i => Store.persons.get(i)).filter(Boolean);
        const donor = p.donorId && Store.persons.get(p.donorId);
        const prt = Idx.partnersOf(p.id), kids = Idx.kidsOf(p.id), sib = Idx.siblingsOf(p);
        const list = (arr, fn) => arr.map((x, i) => [i ? ', ' : '', fn(x)]);
        const rows = [];
        if (par.length) rows.push(['Foreldre', list(par, x => [nameWithRef(x), x.id === p.fatherId ? ' (far)' : x.id === p.motherId ? ' (mor)' : ' (medforelder)'])]);
        if (p.adopted){ rows.push(['Adoptert', [p.adoptYear != null ? String(p.adoptYear) : 'ja']]); const bp = [p.bioFatherId, p.bioMotherId].map(i => i && Store.persons.get(i)).filter(Boolean); if (bp.length) rows.push(['Biologiske foreldre', list(bp, x => [nameWithRef(x), x.id === p.bioFatherId ? ' (far)' : ' (mor)'])]); }
        if (donor) rows.push(['Donor', [nameWithRef(donor)]]);
        if (prt.length) rows.push(['Partner', list(prt, x => [nameWithRef(x.p), relShort(x) ? ' (' + relShort(x) + ')' : ''])]); else if (p.noPartners) rows.push(['Partner', ['ingen kjente']]);
        if (kids.length) rows.push(['Barn', list(kids, x => [nameWithRef(x), year(x)])]); else if (p.noKids) rows.push(['Barn', ['ingen kjente']]);
        if (!sib.length && p.noSiblings) rows.push(['Søsken', ['ingen kjente']]);
        if (sib.length) rows.push(['Søsken', list(sib, x => { const k = Idx.siblingKind(p, x); return [nameWithRef(x), year(x), k === 'halv' ? ' (halvsøsken)' : k === 'hel' && (p.donorId || x.donorId) ? ' (helsøsken)' : '']; })]);
        const stp = Idx.stepParentsOf(p), stk = Idx.stepKidsOf(p);
        if (stp.length) rows.push(['Steforeldre', list(stp, x => [nameWithRef(x.p), ' (partner til ' + (x.via.given || fullName(x.via)) + ')'])]);
        if (stk.length) rows.push(['Stebarn', list(stk, x => [nameWithRef(x.p), year(x.p)])]);
        if (rows.length) B(h('div', { class: 'bk-fam' }, rows.map(([k, v]) => [h('b', null, k), h('div', null, v)])));
      }
      if (o.life){
        const ev = lifeEvents(p).filter(e => e.k !== 'u' && e.k !== 'k' || true);
        for (let i = 0; i < ev.length; i += 14){
          const part = ev.slice(i, i + 14);
          B(h('div', null, i === 0 ? h('div', { class: 'bk-sec' }, 'Livsløp') : null,
            h('div', { class: 'bk-ev' }, part.map(e => [h('div', { class: 'y' }, e.y != null ? String(e.y) : '–'), h('div', null, e.t, e.s ? h('span', { class: 's' }, ' · ' + e.s) : null)]))));
        }
      }
      if (o.notes && p.notes && p.notes.trim()){
        const paras = p.notes.split(/\n{2,}/).flatMap(t => splitText(t));
        paras.forEach((t, i) => B(h('div', null, i === 0 ? h('div', { class: 'bk-sec' }, 'Notater') : null, h('p', { class: 'bk-p' }, t)), i === 0 ? { keep: false } : {}));
      }
      if (o.srcRefs && o.sources){
        const mine = srcs.filter(s => (s.tags || []).some(t => t.pid === p.id));
        if (mine.length) B(h('div', null, h('div', { class: 'bk-sec' }, 'Kilder'), h('p', { class: 'bk-srcrefs' }, mine.map(s => h('div', null, h('span', { class: 'k' }, kNo.get(s.id)), [s.srcType || 'Kilde', s.ref, s.year].filter(Boolean).join(', '), h('span', { class: 'pref', 'data-sid': s.id }, ' (s. 00)'))))));
      }
    });
  }
  // fotografier
  if (o.photos && photos.length){
    section('sec-photos', 'Fotografier', plural(photos.length, 'bilde', 'bilder'));
    for (let i = 0; i < photos.length; i += 2){
      B(h('div', { class: 'bk-figs' }, photos.slice(i, i + 2).map(ph => {
        const names = tagged(ph).map(t => Store.persons.get(t.pid)).filter(Boolean).slice(0, 6).map(fullName).join(', ');
        return h('figure', { class: 'bk-fig' }, h('div', { class: 'box' }, h('img', { src: photoUrl(ph), alt: ph.caption || '', 'data-asset': ph.assetId, 'data-max': 1800 })),
          h('figcaption', null, [ph.year ? h('b', null, yearLabel(ph) + ' ') : null, ph.caption || '', ph.place && ph.place.name ? ((ph.caption ? ' · ' : '') + ph.place.name) : '', names ? (ph.caption || ph.year || (ph.place && ph.place.name) ? ' · ' : '') + names : '']));
      })));
    }
  }
  // kilder
  if (o.sources && srcs.length){
    section('sec-src', 'Kilder', plural(srcs.length, 'kilde', 'kilder'));
    srcs.forEach(s => {
      const who = tagged(s).map(t => Store.persons.get(t.pid)).filter(Boolean).map(fullName).join(', ');
      const kids = [h('div', { class: 'hd' }, h('span', { class: 'k' }, kNo.get(s.id)), h('span', { class: 't' }, [s.srcType || 'Kilde', s.year].filter(Boolean).join(' · '))),
        s.ref ? h('p', { class: 'bk-p', style: { margin: '0 0 1mm' } }, s.ref) : null,
        s.caption ? h('p', { class: 'bk-p', style: { margin: '0 0 1mm' } }, s.caption) : null,
        h('p', { class: 'who' }, 'Nevner: ' + who)];
      const pgs = pagesOf(s);
      const pageImg = pgx => { const wpx = 174 * MMPX, hmax = 195 * MMPX; const hpx = pgx.w && pgx.h ? Math.min(hmax, wpx * pgx.h / pgx.w) : 120 * MMPX; return h('div', { class: 'img', style: { height: hpx + 'px' } }, h('img', { src: photoUrl(pgx), alt: '', 'data-asset': pgx.assetId, 'data-max': 2600 })); };
      if (pgs.length > 1) kids.splice(1, 0, h('p', { class: 'who' }, plural(pgs.length, 'side', 'sider')));
      if (o.srcImages) kids.push(pageImg(pgs[0]));
      B(h('div', { class: 'bk-src' }, kids), { id: 's' + s.id });
      if (o.srcImages) pgs.slice(1).forEach((pgx, i) => B(h('div', { class: 'bk-src' }, h('div', { class: 'hd' }, h('span', { class: 'k' }, kNo.get(s.id)), h('span', { class: 't' }, 'side ' + (i + 2) + ' av ' + pgs.length)), pageImg(pgx))));
    });
  }
  // register
  if (o.register){
    section('sec-reg', 'Navneregister', plural(persons.length, 'person', 'personer'));
    const sorted = [...persons].sort(nameCmp);
    for (let i = 0; i < sorted.length; i += 46){
      B(h('div', { class: 'bk-reg' }, sorted.slice(i, i + 46).map(p => h('div', null,
        h('span', null, (p.family ? p.family + ', ' : '') + (p.given || ''), ' ', h('span', { class: 'p' }, lifeSpan(p))),
        o.persons ? h('span', { class: 'p', 'data-pid': p.id }, 's. 00') : null))));
    }
  }

  /* --- paginering --- */
  const holder = h('div', { style: 'position:fixed;left:-10000px;top:0;visibility:hidden;pointer-events:none' });
  document.body.appendChild(holder);
  const offset = (o.cover ? 1 : 0) + (o.toc ? 1 : 0);
  const pagesArr = [];
  const newPage = () => { const body = h('div', { class: 'pg-body' }); const art = h('article', { class: 'page' }, body); holder.appendChild(art); pagesArr.push({ art, body }); return pagesArr[pagesArr.length - 1]; };
  const pageOf = {};
  let cur = newPage();
  const over = pg => pg.body.scrollHeight > pg.body.clientHeight + 1;
  blocks.forEach(blk => {
    if (blk.brk === 'before' && cur.body.children.length) cur = newPage();
    cur.body.appendChild(blk.el);
    if (over(cur) && cur.body.children.length > 1){
      cur.body.removeChild(blk.el);
      const moved = [blk.el];
      let last = cur.body.lastElementChild;
      while (last && last._keep && cur.body.children.length > 1){ cur.body.removeChild(last); moved.unshift(last); last = cur.body.lastElementChild; }
      cur = newPage();
      moved.forEach(m => cur.body.appendChild(m));
    }
    blk.el._keep = !!blk.keep;
    if (blk.id) pageOf[blk.id] = pagesArr.indexOf(cur) + 1 + offset;
  });
  if (!pagesArr[pagesArr.length - 1].body.children.length && pagesArr.length > 1) pagesArr.pop().art.remove();
  pagesArr.forEach(pg => { const f = pg.body.firstElementChild; if (f && f.classList.contains('bk-ph')) f.classList.add('first'); });

  // sidetall og henvisninger
  const final = [];
  const foot = (n, lbl) => h('div', { class: 'pg-foot' }, h('span', null, 'Slektsboka' + (o.title ? ' · ' + o.title : '')), h('span', null, String(n)));
  if (o.cover){
    const ys = persons.map(p => p.birthYear).filter(y => y != null);
    final.push(h('article', { class: 'page' }, h('div', { class: 'pg-body' }, h('div', { class: 'bk-cover' }, h('div', { class: 'rule' }),
      h('h1', null, o.title || 'Slekten'), o.subtitle ? h('p', { class: 'sub' }, o.subtitle) : null,
      h('p', { class: 'meta' }, plural(persons.length, 'person', 'personer') + (ys.length ? ' · fra ' + Math.min(...ys) + ' til i dag' : '') + '\nUtarbeidet ' + new Date().toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' }), ))
    )));
    final[0].querySelector('.meta').style.whiteSpace = 'pre-line';
  }
  if (o.toc){
    const entries = toc.map(t => [h('div', null, t.title, t.desc ? h('span', { class: 'd' }, t.desc) : null), h('div', { class: 'n' }, String(pageOf[t.id] || ''))]);
    final.push(h('article', { class: 'page' }, h('div', { class: 'pg-body' }, h('h1', { class: 'bk-h1' }, 'Innhold'), h('div', { class: 'bk-toc' }, entries)), foot(final.length + 1)));
  }
  pagesArr.forEach(pg => { pg.art.remove(); pg.art.appendChild(foot(final.length + 1)); final.push(pg.art); });
  holder.remove();
  final.forEach(a => {
    a.querySelectorAll('.pref[data-pid]').forEach(s => { const n = pageOf['p' + s.dataset.pid]; if (n) s.textContent = ' (s. ' + n + ')'; else s.remove(); });
    a.querySelectorAll('.pref[data-sid]').forEach(s => { const n = pageOf['s' + s.dataset.sid]; if (n) s.textContent = ' (s. ' + n + ')'; else s.remove(); });
    a.querySelectorAll('.p[data-pid]').forEach(s => { const n = pageOf['p' + s.dataset.pid]; s.textContent = n ? 's. ' + n : ''; });
  });
  return { pages: final, count: final.length, persons: persons.length };
}

/* ====== Lagre som egen HTML-fil (når utskrift ikke er mulig i visningen) ====== */
async function blobToDataUrl(blob, max){
  const bmp = await createImageBitmap(blob);
  const s = Math.min(1, max / Math.max(bmp.width, bmp.height));
  const cv = document.createElement('canvas'); cv.width = Math.round(bmp.width * s); cv.height = Math.round(bmp.height * s);
  cv.getContext('2d').drawImage(bmp, 0, 0, cv.width, cv.height);
  if (bmp.close) bmp.close();
  return cv.toDataURL('image/jpeg', 0.86);
}
async function inlineBookImages(root){
  const imgs = [...root.querySelectorAll('img[data-asset]')];
  for (let i = 0; i < imgs.length; i++){
    const im = imgs[i];
    try { im.src = await blobToDataUrl(await assetBlob(im.dataset.asset), +im.dataset.max || 1800); } catch (_) { im.removeAttribute('src'); }
  }
}
function bookDocHtml(pagesHtml, title){
  return '<!doctype html><html lang="nb"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + escHtml(title) + '</title>' +
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,400..600&family=Schibsted+Grotesk:wght@400..800&display=swap">' +
    '<style>' + BOOK_CSS + '\n.av{position:relative;flex:none;width:var(--s,40px);height:var(--s,40px);border-radius:max(3px,calc(var(--s,40px)*.09));overflow:hidden;display:grid;place-items:center}.av img{position:absolute;max-width:none;display:block}\nbody{margin:0;background:#8d8a82;font-family:system-ui,sans-serif}.bar{position:sticky;top:0;z-index:5;display:flex;gap:12px;align-items:center;justify-content:center;padding:10px;background:#1e2b36;color:#fff;font-size:14px}.bar button{font:inherit;font-weight:600;padding:8px 16px;border-radius:8px;border:0;background:#c99a74;color:#1b1209;cursor:pointer}.page{margin:14px auto;box-shadow:0 2px 14px rgba(0,0,0,.35)}' +
    '@page{size:A4;margin:0}@media print{.bar{display:none}body{background:#fff}.page{margin:0;box-shadow:none;break-after:page;page-break-after:always}.page:last-child{break-after:auto;page-break-after:auto}}</style></head><body>' +
    '<div class="bar"><button onclick="window.print()">Skriv ut eller lagre som PDF</button><span>Velg papirstørrelse A4 og ingen marger.</span></div>' + pagesHtml + '</body></html>';
}

/* ====== Visning ====== */
const BookView = {
  o: null, sel: new Set(), result: null,
  load(){
    if (this.o) return;
    this.o = Object.assign({}, BOOK_DEF);
    try { const s = JSON.parse(localStorage.getItem('slekt.book') || 'null'); if (s){ Object.assign(this.o, s.o || {}); this.sel = new Set(s.sel || []); } } catch (_) {}
  },
  save(){ try { localStorage.setItem('slekt.book', JSON.stringify({ o: this.o, sel: [...this.sel] })); } catch (_) {} },
  included(){ return this.o.selMode === 'all' ? new Set(Store.persons.keys()) : new Set([...this.sel].filter(id => Store.persons.has(id))); },
  mount(root){
    this.load(); this.root = root; this.result = null;
    this.ui = h('div', { class: 'bookui' });
    this.prev = h('div', { class: 'bookprev', hidden: true });
    this.bar = h('div', { class: 'bookbar' });
    root.append(h('div', { class: 'page-h' }, h('div', null, h('h1', null, 'Bok til utskrift'), h('p', null, 'Velg hva som skal være med, se forhåndsvisningen og skriv ut hele boken i A4-format.'))), this.ui, this.bar, this.prev);
    this.draw();
    this.ro = new ResizeObserver(() => this.scale());
    this.ro.observe(root);
  },
  update(){ if (this.o.selMode === 'pick') this.drawList(); this.fillRoots(); },
  unmount(){ if (this.ro) this.ro.disconnect(); },
  scale(){ const w = this.prev.clientWidth - 24; if (w > 0) this.prev.style.setProperty('--sc', String(Math.min(1, w / (210 * MMPX)))); },
  chk(key, label, hint){
    const o = this.o;
    const id = 'bk-' + key;
    return h('label', { class: 'bk-chk', for: id }, h('input', { type: 'checkbox', id, checked: !!o[key], onchange: e => { o[key] = e.target.checked; this.save(); this.draw(); } }), h('span', null, label, hint ? h('small', null, hint) : null));
  },
  rootSel(key){
    const o = this.o;
    const sel = h('select', { class: 'inp', 'aria-label': 'Utgangsperson', onchange: e => { o[key] = e.target.value; this.save(); } });
    sel._key = key; this.rootSels = (this.rootSels || []).concat(sel);
    return sel;
  },
  fillRoots(){
    (this.rootSels || []).forEach(sel => {
      const key = sel._key;
      clear(sel);
      const ps = [...Store.persons.values()].sort(nameCmp);
      if (!ps.some(p => p.id === this.o[key]) && ps.length) this.o[key] = (ps.find(p => p.id === this.o[key]) || ps[0]).id;
      ps.forEach(p => sel.appendChild(h('option', { value: p.id, selected: p.id === this.o[key] }, fullName(p) + (p.birthYear != null ? ' (f. ' + p.birthYear + ')' : ''))));
    });
  },
  draw(){
    const o = this.o;
    this.rootSels = [];
    const ancRow = o.anc ? h('div', { class: 'bk-sub' }, h('label', { class: 'lbl' }, 'Anetavle for'), this.rootSel('ancRoot')) : null;
    const descRow = o.desc ? h('div', { class: 'bk-sub' }, h('label', { class: 'lbl' }, 'Etterkommere av'), this.rootSel('descRoot')) : null;
    const personOpts = o.persons ? h('div', { class: 'bk-sub bk-grid' }, this.chk('portrait', 'Portrett'), this.chk('facts', 'Født og død'), this.chk('family', 'Familie'), this.chk('life', 'Livsløp og bosteder'), this.chk('notes', 'Notater'), this.chk('srcRefs', 'Kildehenvisninger'), this.chk('pagePerPerson', 'Hver person på ny side')) : null;
    const srcOpts = o.sources ? h('div', { class: 'bk-sub' }, this.chk('srcImages', 'Ta med bildene av kildene')) : null;
    const nSel = this.included().size;
    clear(this.ui).append(
      h('section', { class: 'card' }, h('h2', null, 'Innhold'),
        h('div', { class: 'bk-grid' }, this.chk('cover', 'Forside'), this.chk('toc', 'Innholdsfortegnelse'), this.chk('tree', 'Slektstre', 'tegning av de valgte personene'), this.chk('map', 'Kart over bosteder')),
        h('div', { class: 'bk-grid' }, this.chk('anc', 'Anetavle', 'forfedre i nummerert liste'), this.chk('desc', 'Etterkommere', 'inndelt oversikt')), ancRow, descRow,
        h('div', { class: 'bk-grid' }, this.chk('persons', 'Personkapitler', 'én fortelling per person')), personOpts,
        h('div', { class: 'bk-grid' }, this.chk('photos', 'Fotografier', 'med navn på dem som er tagget'), this.chk('sources', 'Kilder', 'kirkebøker, bygdebøker og avisutklipp')), srcOpts,
        h('div', { class: 'bk-grid' }, this.chk('register', 'Navneregister', 'med sidehenvisninger'))),
      h('section', { class: 'card' }, h('h2', null, 'Personer'),
        h('div', { class: 'seg', role: 'group', 'aria-label': 'Hvilke personer' },
          h('button', { type: 'button', 'aria-pressed': String(o.selMode === 'all'), onclick: () => { o.selMode = 'all'; this.save(); this.draw(); } }, 'Alle (' + Store.persons.size + ')'),
          h('button', { type: 'button', 'aria-pressed': String(o.selMode === 'pick'), onclick: () => { o.selMode = 'pick'; if (!this.sel.size) this.sel = new Set(Store.persons.keys()); this.save(); this.draw(); } }, 'Utvalg' + (o.selMode === 'pick' ? ' (' + nSel + ')' : ''))),
        o.selMode === 'pick' ? this.pickUi() : null),
      h('section', { class: 'card' }, h('h2', null, 'Tittel og rekkefølge'),
        h('div', { class: 'fgrid' },
          h('div', { class: 'half-m' }, h('label', { class: 'lbl', for: 'bk-title' }, 'Tittel'), h('input', { class: 'inp', id: 'bk-title', value: o.title, oninput: e => { o.title = e.target.value; this.save(); } })),
          h('div', { class: 'half-m' }, h('label', { class: 'lbl', for: 'bk-sub' }, 'Undertittel'), h('input', { class: 'inp', id: 'bk-sub', value: o.subtitle, placeholder: 'f.eks. Haugen-slekten fra Voss', oninput: e => { o.subtitle = e.target.value; this.save(); } })),
          h('div', { class: 'full' }, h('label', { class: 'lbl' }, 'Personene sorteres etter'), h('div', { class: 'seg', role: 'group' },
            h('button', { type: 'button', 'aria-pressed': String(o.sort === 'name'), onclick: () => { o.sort = 'name'; this.save(); this.draw(); } }, 'Etternavn'),
            h('button', { type: 'button', 'aria-pressed': String(o.sort === 'birth'), onclick: () => { o.sort = 'birth'; this.save(); this.draw(); } }, 'Fødselsår'))))));
    this.fillRoots();
    clear(this.bar);
    this.makeBtn = h('button', { class: 'btn primary', onclick: () => this.make() }, ico('eye', 18), this.result ? 'Lag forhåndsvisning på nytt' : 'Lag forhåndsvisning');
    this.bar.append(this.makeBtn);
    if (this.result) this.actions();
  },
  pickUi(){
    const o = this.o;
    const rootSel = h('select', { class: 'inp', 'aria-label': 'Utgangsperson for hurtigvalg' });
    const fill = () => { clear(rootSel); [...Store.persons.values()].sort(nameCmp).forEach(p => rootSel.appendChild(h('option', { value: p.id }, fullName(p) + (p.birthYear != null ? ' (f. ' + p.birthYear + ')' : '')))); };
    fill();
    const apply = mode => { const id = rootSel.value; if (!id) return; const s = treeSet(mode, id); this.sel = mode === 'all' ? new Set(Store.persons.keys()) : s; this.save(); this.drawList(); this.countLabel(); };
    this.search = h('input', { class: 'inp', type: 'search', placeholder: 'Søk i listen …', 'aria-label': 'Søk', oninput: () => this.drawList() });
    this.listEl = h('div', { class: 'bk-list' });
    this.drawList();
    return h('div', { class: 'bk-pick' },
      h('div', { class: 'bk-sub' }, h('label', { class: 'lbl' }, 'Hurtigvalg fra person'), rootSel,
        h('div', { class: 'bk-quick' },
          h('button', { class: 'btn sm', onclick: () => apply('anc') }, 'Aner'), h('button', { class: 'btn sm', onclick: () => apply('desc') }, 'Etterkommere'), h('button', { class: 'btn sm', onclick: () => apply('line') }, 'Aner og etterkommere'),
          h('button', { class: 'btn sm ghost', onclick: () => { this.sel = new Set(Store.persons.keys()); this.save(); this.drawList(); this.countLabel(); } }, 'Velg alle'),
          h('button', { class: 'btn sm ghost', onclick: () => { this.sel = new Set(); this.save(); this.drawList(); this.countLabel(); } }, 'Fjern alle'))),
      this.search, this.listEl);
  },
  countLabel(){ const b = this.ui.querySelectorAll('.seg button')[1]; if (b) b.textContent = 'Utvalg (' + this.included().size + ')'; },
  drawList(){
    if (!this.listEl) return;
    const q = norm(this.search ? this.search.value : '');
    clear(this.listEl);
    [...Store.persons.values()].filter(p => !q || norm(fullName(p)).includes(q)).sort(nameCmp).forEach(p => {
      const id = 'bkp-' + p.id;
      this.listEl.appendChild(h('label', { class: 'bk-row', for: id }, h('input', { type: 'checkbox', id, checked: this.sel.has(p.id), onchange: e => { if (e.target.checked) this.sel.add(p.id); else this.sel.delete(p.id); this.save(); this.countLabel(); } }),
        avatar(p, 28), h('span', { class: 'n' }, fullName(p)), h('span', { class: 'faint' }, lifeSpan(p))));
    });
  },
  async make(){
    const inc = this.included();
    if (!inc.size){ toast('Velg minst én person.'); return; }
    this.makeBtn.disabled = true;
    toast('Lager boken …');
    await new Promise(r => setTimeout(r, 40));
    try {
      this.result = await composeBook(this.o, inc);
      this.show();
      toast('Boken er ' + plural(this.result.count, 'side', 'sider'));
    } catch (e){ console.error(e); toast('Kunne ikke lage boken.'); }
    this.draw();
  },
  show(){
    clear(this.prev); this.prev.hidden = false;
    this.result.pages.forEach(pg => this.prev.appendChild(h('div', { class: 'pgwrap' }, pg)));
    this.scale();
    setTimeout(() => { try { this.prev.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (_) {} }, 60);
  },
  actions(){
    const info = h('span', { class: 'muted' }, plural(this.result.count, 'side', 'sider') + ' · ' + plural(this.result.persons, 'person', 'personer'));
    this.bar.append(info);
    if (LOCAL_MODE){
      this.bar.append(h('button', { class: 'btn primary', onclick: () => this.print() }, ico('upload', 16), 'Skriv ut eller lagre som PDF'));
      this.bar.append(h('button', { class: 'btn', onclick: e => this.saveHtml(e.currentTarget) }, 'Lagre som HTML-fil'));
    } else {
      this.bar.append(h('button', { class: 'btn primary', onclick: e => this.saveHtml(e.currentTarget) }, ico('upload', 16), 'Lagre boken som fil'));
      this.bar.append(h('p', { class: 'fnote', style: { flexBasis: '100%', margin: 0 } }, 'Utskrift er ikke mulig direkte i denne visningen. Lagre boken som en HTML-fil, åpne den i nettleseren og velg Skriv ut. Direkte utskrift fungerer i GitHub-versjonen.'));
    }
  },
  async print(){
    const imgs = [...this.prev.querySelectorAll('img')];
    await Promise.all(imgs.map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
    const done = () => { document.body.classList.remove('printing-book'); window.removeEventListener('afterprint', done); };
    window.addEventListener('afterprint', done);
    document.body.classList.add('printing-book');
    try { window.print(); } catch (_) { done(); }
  },
  async saveHtml(btn){
    btn.disabled = true; toast('Pakker bildene inn i filen …');
    try {
      const clones = this.result.pages.map(a => a.cloneNode(true));
      const wrap = h('div', null, clones);
      await inlineBookImages(wrap);
      const html = bookDocHtml(clones.map(c => c.outerHTML).join('\n'), (this.o.title || 'Slekten') + ' – Slektsboka');
      await saveFile(new Blob([html], { type: 'text/html' }), 'slektsboka-bok-' + todayStr() + '.html');
    } catch (e){ console.error(e); toast('Kunne ikke lage filen.'); }
    btn.disabled = false;
  }
};

/* ====== Appskall ====== */
const App = {
  view: 'register', arg: null, cur: null,
  views: { register: RegisterView, person: PersonView, tree: TreeView, map: MapView, photos: Photos, ancestors: AncestorsView, descendants: DescendantsView, book: BookView, stats: StatsView, kinship: KinshipView, places: PlacesView, place: PlaceView, quality: QualityView },
  tabOf: { register: 'register', person: 'register', ancestors: 'register', descendants: 'register', stats: 'stats', kinship: 'register', places: 'register', place: 'register', quality: 'register', tree: 'tree', map: 'map', photos: 'photos', book: 'book' },
  hashOf: { register: 'register', tree: 'tre', map: 'kart', photos: 'bilder' },
  init(){
    try { const br = document.querySelector('.brand'); if (br) br.appendChild(h('small', { title: 'Versjon av appen' }, 'v' + '26.10 12:43')); } catch (_) {}
    this.main = document.getElementById('main');
    this.banner = document.getElementById('banner');
    const tabs = document.getElementById('tabs');
    this.tabEls = {};
    [['register', 'users', 'Register'], ['tree', 'tree', 'Slektstre'], ['map', 'pin', 'Kart'], ['photos', 'image', 'Bilder'], ['stats', 'chart', 'Statistikk'], ['book', 'book', 'Bok']].forEach(([k, ic, t]) => {
      const b = h('button', { class: 'tab', role: 'tab', 'aria-selected': 'false', onclick: () => this.go(k) }, ico(ic, 20), h('span', null, t));
      this.tabEls[k] = b; tabs.appendChild(b);
    });
    Store.onChange(() => this.refresh());
    let v = 'register', a = null;
    try {
      const hs = (location.hash || '').replace('#', '');
      if (hs === 'tre') v = 'tree'; else if (hs === 'kart') v = 'map'; else if (hs === 'bilder') v = 'photos'; else if (hs === 'bok') v = 'book'; else if (hs === 'statistikk') v = 'stats'; else if (hs === 'slektskap') v = 'kinship'; else if (hs === 'steder') v = 'places'; else if (hs === 'kvalitet') v = 'quality'; else if (hs.startsWith('sted-')){ v = 'place'; try { a = decodeURIComponent(hs.slice(5)); } catch (_) { a = hs.slice(5); } }
      else if (hs.startsWith('aner-')){ v = 'ancestors'; a = hs.slice(5); } else if (hs.startsWith('etterkommere-')){ v = 'descendants'; a = hs.slice(13); }
      else if (hs.startsWith('p-')){ v = 'person'; a = hs.slice(2); }
    } catch (_) {}
    this.go(v, a);
    Store.init().then(() => this.refresh());
  },
  go(view, arg){
    if (this.cur && this.cur.unmount) this.cur.unmount();
    this.view = view; this.arg = arg == null ? null : arg;
    clear(this.main);
    const t = this.tabOf[view];
    Object.entries(this.tabEls).forEach(([k, b]) => b.setAttribute('aria-selected', String(k === t)));
    this.cur = this.views[view];
    this.cur.mount(this.main, this.arg);
    this.drawBanner();
    try { window.scrollTo(0, 0); } catch (_) {}
  },
  refresh(){
    this.drawBanner();
    if (this.cur && this.cur.update) this.cur.update();
  },
  drawBanner(){
    clear(this.banner);
    if (LOCAL_MODE && Store.mode === 'local'){
      const last = +lsGet('slekt.lastBackup') || 0, ch = +lsGet('slekt.changes') || 0;
      const old = last && (Date.now() - last) > 30 * 86400000;
      if (ch >= 5 && (!last || old)){
        this.banner.appendChild(h('div', { class: 'banner', role: 'status' }, h('span', null, h('b', null, last ? 'Det er over en måned siden sist du tok sikkerhetskopi. ' : 'Du har ikke tatt sikkerhetskopi ennå. '), 'Dataene ligger bare på denne enheten.'),
          h('button', { class: 'btn sm', onclick: () => App.go('register') }, 'Til sikkerhetskopi')));
      }
    }
    if (Store.mode === 'memory'){
      this.banner.appendChild(h('div', { class: 'banner', role: 'status' }, h('span', null, h('b', null, 'Lagring er ikke tilgjengelig i denne visningen. '), 'Det du legger inn blir borte når du lukker siden.')));
    } else if (Store.canWrite){
      const ex = [...Store.persons.values()].filter(p => p.ex);
      if (ex.length){
        const btn = h('button', { class: 'btn sm', onclick: async () => {
          btn.disabled = true; btn.textContent = 'Fjerner …';
          const ids = [...Store.persons.values()].filter(p => p.ex).map(p => p.id);
          const phs = [...Store.photos.values()].filter(p => p.ex).map(p => p.id);
          for (const id of ids){ Store.persons.delete(id); await Store._del('persons', id); }
          for (const id of phs){ await Store.deletePhoto(id); }
          Store.emit(); toast('Eksempeldataene er fjernet');
        } }, 'Fjern eksempeldata');
        this.banner.appendChild(h('div', { class: 'banner' }, h('span', null, h('b', null, 'Eksempelfamilie. '), 'Personene under er oppdiktet og viser hvordan appen fungerer. Fjern dem når du vil begynne med din egen slekt.'), btn));
      }
    }
  }
};
document.addEventListener('DOMContentLoaded', () => App.init());
if (document.readyState !== 'loading') App.init();

