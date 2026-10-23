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
  plus:'<path d="M12 5v14M5 12h14"/>', minus:'<path d="M5 12h14"/>',
  play:'<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>',
  pause:'<path d="M8.5 5v14M15.5 5v14" stroke-width="3"/>',
  replay:'<path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5M4.5 4v4.8h4.8"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  pencil:'<path d="M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19z"/>',
  back:'<path d="M15 5l-7 7 7 7"/>', next:'<path d="M9 5l7 7-7 7"/>',
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
const fullName = p => [p.given, p.family].filter(Boolean).join(' ') || 'Uten navn';
const initials = p => ((p.given || '?')[0] + (p.family ? p.family[0] : '')).toUpperCase();
const nameCmp = (a, b) => (a.family || '').localeCompare(b.family || '', 'nb') || (a.given || '').localeCompare(b.given || '', 'nb');
function lifeSpan(p){
  const b = p.birthYear, d = p.deathYear;
  if (b == null && d == null) return 'årstall ukjent';
  if (d == null) return (b != null ? b : '?') + (NOW_YEAR - (b || 0) > 105 ? ' –' : ' –');
  return (b != null ? b : '?') + ' – ' + d;
}
function ageText(p){
  if (p.birthYear != null && p.deathYear != null) return (p.deathYear - p.birthYear) + ' år';
  if (p.birthYear != null && p.deathYear == null && NOW_YEAR - p.birthYear <= 105) return NOW_YEAR - p.birthYear + ' år';
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
    arr = window.__D.gaz.map(r => ({ name: r[0], sub: r[1], lat: r[2], lon: r[3], kom: r[4] === 1, n: norm(r[0]) }));
    return arr;
  };
})();
function searchPlaces(q, limit = 8){
  const nq = norm(q);
  if (nq.length < 2) return [];
  const out = [], seen = new Set();
  const used = new Map();
  Store.persons.forEach(p => {
    const pl = [p.birthPlace, p.deathPlace, ...(p.moves || []).map(m => m.place)];
    pl.forEach(x => { if (x && x.lat != null && x.name) used.set(x.name + '|' + x.lat.toFixed(2) + '|' + x.lon.toFixed(2), x); });
  });
  used.forEach(x => { if (norm(x.name).includes(nq)) { out.push({ label: x.name, sub: 'brukt før', place: { name: x.name, lat: x.lat, lon: x.lon } }); seen.add(norm(x.name)); } });
  const g = GAZ();
  const starts = [], inc = [];
  for (const r of g){
    if (r.n.startsWith(nq)) starts.push(r);
    else if (starts.length < 40 && r.n.includes(nq)) inc.push(r);
    if (starts.length > 60) break;
  }
  starts.sort((a, b) => (b.kom - a.kom) || 0);
  for (const r of [...starts, ...inc]){
    if (out.length >= limit) break;
    out.push({ label: r.name, sub: r.sub + (r.kom ? ' · kommune' : ''), place: { name: r.name, lat: r.lat, lon: r.lon } });
  }
  return out.slice(0, limit);
}

/* ====== Datalag ====== */
const Idx = {
  kids: new Map(), partners: new Map(), photosOf: new Map(),
  rebuild(){
    this.kids.clear(); this.partners.clear(); this.photosOf.clear();
    const addP = (a, b, year) => {
      if (!Store.persons.has(a) || !Store.persons.has(b) || a === b) return;
      if (!this.partners.has(a)) this.partners.set(a, new Map());
      const m = this.partners.get(a);
      if (!m.has(b) || (year != null && m.get(b).year == null)) m.set(b, { year: year == null ? null : year });
    };
    Store.persons.forEach(p => {
      [p.fatherId, p.motherId].forEach(pid => { if (pid && Store.persons.has(pid)){ if (!this.kids.has(pid)) this.kids.set(pid, []); this.kids.get(pid).push(p.id); } });
      if (p.fatherId && p.motherId){ addP(p.fatherId, p.motherId, null); addP(p.motherId, p.fatherId, null); }
      (p.partners || []).forEach(pt => { addP(p.id, pt.id, pt.year); addP(pt.id, p.id, pt.year); });
    });
    Store.photos.forEach(ph => (ph.tags || []).forEach(t => {
      if (!this.photosOf.has(t.pid)) this.photosOf.set(t.pid, []);
      this.photosOf.get(t.pid).push({ photo: ph, tag: t });
    }));
    this.photosOf.forEach(a => a.sort((x, y) => (x.photo.year || 9999) - (y.photo.year || 9999)));
  },
  kidsOf(id){ return (this.kids.get(id) || []).map(i => Store.persons.get(i)).filter(Boolean).sort((a, b) => (a.birthYear || 9999) - (b.birthYear || 9999)); },
  partnersOf(id){ const m = this.partners.get(id); return m ? [...m.entries()].map(([i, v]) => ({ p: Store.persons.get(i), year: v.year })).filter(x => x.p) : []; },
  siblingsOf(p){
    const s = new Map();
    [p.fatherId, p.motherId].forEach(pid => { if (pid) (this.kids.get(pid) || []).forEach(k => { if (k !== p.id) s.set(k, Store.persons.get(k)); }); });
    return [...s.values()].filter(Boolean).sort((a, b) => (a.birthYear || 9999) - (b.birthYear || 9999));
  }
};

const Store = {
  persons: new Map(), photos: new Map(), db: null, assets: null, canWrite: true, mode: 'loading',
  listeners: new Set(), _raf: 0,
  onChange(fn){ this.listeners.add(fn); return () => this.listeners.delete(fn); },
  emit(){
    if (this._raf) return;
    this._raf = requestAnimationFrame(() => { this._raf = 0; Idx.rebuild(); this.listeners.forEach(f => { try { f(); } catch (e) { console.error(e); } }); });
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
    if (ph && ph.assetId && this.assets){ try { await this.assets.delete(ph.assetId); } catch (_) {} }
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
const SOURCE_TYPES = ['Kirkebok', 'Bygdebok', 'Dåpsattest', 'Folketelling', 'Avisutklipp', 'Brev', 'Annet'];

/* ====== Personhjelp ====== */
function endYear(p){
  if (p.deathYear != null) return p.deathYear;
  if (p.birthYear == null) return null;
  return (NOW_YEAR - p.birthYear > 100) ? p.birthYear + 80 : NOW_YEAR;
}
function timelineOf(p){
  const a = [];
  const ok = pl => pl && pl.lat != null && pl.lon != null;
  if (p.birthYear != null && ok(p.birthPlace)) a.push({ year: p.birthYear, place: p.birthPlace, kind: 'birth' });
  (p.moves || []).forEach(m => { if (m.year != null && ok(m.place)) a.push({ year: m.year, place: m.place, kind: 'move' }); });
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
function avatar(p, size = 40){
  const box = h('span', { class: 'av ' + (p.sex === 'm' ? 'm' : p.sex === 'f' ? 'f' : ''), style: { '--s': size + 'px' } });
  const list = Idx.photosOf.get(p.id);
  const hit = list && list.find(x => !isSource(x.photo) && x.tag.x != null && x.photo.w && x.photo.h && x.photo.assetId);
  if (hit){
    const { photo, tag } = hit, r = photo.h / photo.w;
    const Z = Math.max(2.4, 1.2 / Math.min(1, r) , 1 / r + 0.2);
    // bilde skalert til Z * boksbredde; sentrer på merket
    let left = (0.5 - tag.x * Z) * 100, top = (0.5 - tag.y * Z * r) * 100;
    left = Math.min(0, Math.max((1 - Z) * 100, left));
    top = Math.min(0, Math.max((1 - Z * r) * 100, top));
    const img = h('img', { src: photoUrl(photo), alt: '', loading: 'lazy', style: { width: (Z * 100) + '%', left: left + '%', top: top + '%' } });
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
    if (ph.file && z.has(ph.file) && !URLS.has(ph.assetId)){
      const b = await z.get(ph.file);
      const typed = new Blob([b], { type: { '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' }[ph.file.slice(ph.file.lastIndexOf('.'))] || 'application/octet-stream' });
      await LocalDB.put('blobs', ph.assetId, typed);
      URLS.set(ph.assetId, URL.createObjectURL(typed));
    }
    delete ph.file;
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
function openPlacePicker(cur, cb){
  const host = h('div', { class: 'pick' });
  const search = h('input', { class: 'inp', type: 'search', placeholder: 'Søk etter sted for å flytte kartet dit…', autocomplete: 'off', 'aria-label': 'Søk etter sted' });
  const sw = h('div', { class: 'pf' }, search);
  const status = h('div', { class: 'faint', style: { fontSize: '13px' } }, 'Trykk i kartet for å sette punktet. Dra og zoom for å finne riktig sted.');
  const useBtn = h('button', { class: 'btn primary', type: 'button', disabled: true }, 'Bruk dette punktet');
  const body = h('div', { class: 'modal-b' }, sw, host, status, h('div', { class: 'form-actions', style: { position: 'static', borderTop: '0', padding: '0', margin: '0' } }, h('span'), useBtn));
  const modal = openModal('Velg sted på kartet', body, { cls: 'wide' });
  const base = createBaseMap(host, {});
  let pt = cur && cur.lat != null ? { lat: cur.lat, lon: cur.lon } : null;
  let pickedName = null;
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
    pickedName = null;
    setPt({ lat: +lat.toFixed(4), lon: +lon.toFixed(4) });
  });
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
    base.destroy(); modal.close(); cb(out);
  });
}

function placeField(initial, onChange, o = {}){
  let v = initial ? clone(initial) : { name: '', lat: null, lon: null };
  const wrap = h('div', { class: 'pf' });
  const inp = h('input', { class: 'inp', type: 'text', placeholder: o.placeholder || 'Sted, f.eks. Voss eller Chicago', value: v.name || '', autocomplete: 'off', 'aria-label': o.label || 'Sted' });
  const st = h('div', { class: 'st' });
  wrap.append(inp, st);
  const out = () => (v.name || v.lat != null) ? { name: v.name || '', lat: v.lat, lon: v.lon } : null;
  function status(){
    clear(st);
    const btn = h('button', { type: 'button', class: 'btn ghost sm', onclick: () => openPlacePicker(v, pt => {
      v.lat = pt.lat; v.lon = pt.lon;
      if (!v.name && pt.name){ v.name = pt.name; inp.value = pt.name; }
      onChange(out()); status();
    }) }, ico('pin', 15), v.lat != null ? 'Flytt på kartet' : 'Velg på kartet');
    if (v.lat != null){ st.className = 'st ok'; st.append(h('span', null, '✓ På kartet (' + v.lat.toFixed(2) + ', ' + v.lon.toFixed(2) + ')'), btn); }
    else { st.className = 'st'; st.append(h('span', null, 'Ikke plassert på kartet ennå'), btn); }
  }
  inp.addEventListener('input', () => { v.name = inp.value; onChange(out()); });
  autocomplete(inp, q => searchPlaces(q), it => { v = { name: it.place.name, lat: it.place.lat, lon: it.place.lon }; inp.value = v.name; onChange(out()); status(); });
  status();
  return wrap;
}

/* ====== Velg person fra registeret (med aldersvurdering) ====== */
const ROLE_LABEL = { father: 'far', mother: 'mor', partner: 'partner', child: 'barn', sibling: 'søsken' };
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
  if (role === 'father' || role === 'mother'){
    if (rb != null && c.deathYear != null && c.deathYear < rb - (role === 'father' ? 1 : 0)){ r.lvl = 3; return r; }
  }
  if (role === 'child'){
    if (cb != null && ref.deathYear != null && ref.deathYear < cb - (ref.sex === 'f' ? 0 : 1)){ r.lvl = 3; return r; }
  }
  if (rb == null || cb == null) return r;
  const parentRange = (sex, gap) => {
    const [g0, g1, m0, m1] = sex === 'f' ? [16, 48, 12, 54] : [16, 62, 12, 78];
    return gap >= g0 && gap <= g1 ? 0 : gap >= m0 && gap <= m1 ? 2 : 3;
  };
  if (role === 'father' || role === 'mother'){ r.gap = rb - cb; r.lvl = parentRange(role === 'father' ? 'm' : 'f', r.gap); r.ideal = 29; }
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
  if (role === 'father' || role === 'mother') rel.desc.forEach(i => ex.add(i));
  if (role === 'child') rel.anc.forEach(i => ex.add(i));
  if (role === 'partner'){ rel.anc.forEach(i => ex.add(i)); rel.desc.forEach(i => ex.add(i)); const me = Store.persons.get(ref.id); if (me) Idx.siblingsOf(me).forEach(x => ex.add(x.id)); }
  if (role === 'sibling'){ rel.anc.forEach(i => ex.add(i)); rel.desc.forEach(i => ex.add(i)); }
  const cands = [...Store.persons.values()].filter(p => !ex.has(p.id) && !(role === 'father' && p.sex === 'f') && !(role === 'mother' && p.sex === 'm')).map(p => ({ p, fit: ageFit(role, ref, p) }));
  const groups = [[0, 'Passer i alder'], [1, 'Alder ukjent'], [2, 'Mulig, men uvanlig aldersforskjell'], [3, 'Passer ikke i alder']];
  cands.sort((a, b) => a.fit.lvl - b.fit.lvl || (a.fit.gap == null ? 0 : Math.abs(a.fit.gap - a.fit.ideal)) - (b.fit.gap == null ? 0 : Math.abs(b.fit.gap - b.fit.ideal)) || nameCmp(a.p, b.p));
  const search = h('input', { class: 'inp', type: 'search', placeholder: 'Søk i registeret …', autocomplete: 'off', autofocus: true, 'aria-label': 'Søk i registeret', oninput: () => draw() });
  const yearInp = opts.withYear ? h('input', { class: 'inp', type: 'number', inputmode: 'numeric', placeholder: 'Gift år (valgfritt)', 'aria-label': 'Giftermål, år' }) : null;
  const list = h('div', { class: 'pk-list' });
  let showBad = false;
  const done = (p) => { modal.close(); opts.onPick(p, { year: yearInp ? intOrNull(yearInp.value) : null }); };
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
    yearInp, search, list);
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
  const f = editing ? clone(opts.person) : Object.assign({ id: uid(), given: '', family: '', sex: 'u', birthYear: null, birthDate: '', birthPlace: null, deathYear: null, deathDate: '', deathPlace: null, fatherId: null, motherId: null, partners: [], moves: [], notes: '', created: Date.now() }, clone(opts.preset || {}));
  f.partners = f.partners || []; f.moves = f.moves || [];
  const incoming = [];
  if (editing){
    Store.persons.forEach(o => (o.partners || []).forEach(pt => { if (pt.id === f.id){ incoming.push(o.id); if (!f.partners.some(x => x.id === o.id)) f.partners.push({ id: o.id, year: pt.year == null ? null : pt.year }); } }));
  }
  const all = [...Store.persons.values()].filter(p => p.id !== f.id).sort(nameCmp);
  const optLabel = p => fullName(p) + (p.birthYear != null ? ' (f. ' + p.birthYear + ')' : '');
  const personSelect = (cur, filter, onch, none) => h('select', { class: 'inp', onchange: e => onch(e.target.value || null), 'aria-label': none },
    h('option', { value: '' }, none), all.filter(filter).map(p => h('option', { value: p.id, selected: p.id === cur }, optLabel(p))));
  const fld = (label, el, cls) => h('div', { class: cls || '' }, h('label', { class: 'lbl' }, label), el);

  const given = h('input', { class: 'inp', value: f.given || '', autocomplete: 'off', autofocus: true, oninput: e => f.given = e.target.value });
  const family = h('input', { class: 'inp', value: f.family || '', autocomplete: 'off', oninput: e => f.family = e.target.value });
  const birthName = h('input', { class: 'inp', value: f.birthName || '', autocomplete: 'off', placeholder: 'Hvis annet enn etternavnet, f.eks. pikenavn', oninput: e => f.birthName = e.target.value });
  const sexBtns = {};
  const sexSeg = h('div', { class: 'seg', role: 'group', 'aria-label': 'Kjønn' }, [['m', 'Mann'], ['f', 'Kvinne'], ['u', 'Ukjent']].map(([k, t]) => sexBtns[k] = h('button', { type: 'button', 'aria-pressed': String(f.sex === k), onclick: () => { f.sex = k; Object.entries(sexBtns).forEach(([kk, b]) => b.setAttribute('aria-pressed', String(kk === k))); } }, t)));
  const yearInp = (key, ph) => h('input', { class: 'inp', type: 'number', inputmode: 'numeric', min: 0, max: 2100, placeholder: ph || 'År', value: f[key] != null ? f[key] : '', oninput: e => f[key] = intOrNull(e.target.value) });
  const textInp = (key, ph) => h('input', { class: 'inp', type: 'text', placeholder: ph, value: f[key] || '', oninput: e => f[key] = e.target.value });

  const selfRef = () => ({ id: f.id, birthYear: f.birthYear, deathYear: f.deathYear, sex: f.sex });
  const parentField = role => personField({ role, label: role === 'father' ? 'Far' : 'Mor', ref: selfRef, value: role === 'father' ? f.fatherId : f.motherId, empty: 'Ukjent. Velg eller opprett …',
    onChange: v => { if (role === 'father') f.fatherId = v; else f.motherId = v; },
    exclude: () => f.partners.map(x => x.id).filter(Boolean),
    preset: () => ({ sex: role === 'father' ? 'm' : 'f' }) });
  const partnersBox = h('div', { style: { display: 'grid', gap: '10px' } });
  function drawPartners(){
    clear(partnersBox);
    f.partners.forEach((pt, i) => {
      partnersBox.appendChild(h('div', { class: 'rowline' },
        personField({ role: 'partner', label: 'Partner', ref: selfRef, value: pt.id, onChange: v => pt.id = v,
          exclude: () => f.partners.filter(x => x !== pt).map(x => x.id).filter(Boolean),
          preset: () => ({ sex: f.sex === 'm' ? 'f' : f.sex === 'f' ? 'm' : 'u' }) }),
        h('input', { class: 'inp', type: 'number', inputmode: 'numeric', placeholder: 'Gift år', value: pt.year != null ? pt.year : '', 'aria-label': 'Giftermål, år', oninput: e => pt.year = intOrNull(e.target.value) }),
        h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Fjern partner', onclick: () => { f.partners.splice(i, 1); drawPartners(); } }, ico('x', 18))));
    });
    partnersBox.appendChild(h('div', null, h('button', { type: 'button', class: 'btn sm', onclick: () => { f.partners.push({ id: null, year: null }); drawPartners(); } }, ico('plus', 16), 'Legg til partner')));
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
  const form = h('form', { class: 'modal-b', novalidate: true, onsubmit: async e => {
    e.preventDefault();
    if (!(f.given || '').trim() && !(f.family || '').trim()){ given.focus(); toast('Skriv inn et navn først.'); return; }
    saveBtn.disabled = true;
    const o = clone(f);
    o.given = (o.given || '').trim(); o.family = (o.family || '').trim(); o.birthName = (o.birthName || '').trim();
    o.birthPlace = o.birthPlace && (o.birthPlace.name || o.birthPlace.lat != null) ? o.birthPlace : null;
    o.deathPlace = o.deathPlace && (o.deathPlace.name || o.deathPlace.lat != null) ? o.deathPlace : null;
    o.moves = (o.moves || []).filter(m => m.place && (m.place.name || m.place.lat != null)).sort((a, b) => (a.year == null) - (b.year == null) || (a.year || 0) - (b.year || 0));
    const seen = new Set();
    o.partners = (o.partners || []).filter(pt => pt.id && !seen.has(pt.id) && seen.add(pt.id));
    if (o.fatherId === o.id) o.fatherId = null;
    if (o.motherId === o.id) o.motherId = null;
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
    h('div', { class: 'fgrid' }, fld('Fornavn', given, 'half-m'), fld('Etternavn', family, 'half-m'), fld('Fødenavn', birthName, 'full'), fld('Kjønn', sexSeg, 'full')),
    h('div', { class: 'fs' }, h('h3', null, 'Født'),
      h('div', { class: 'fgrid' }, fld('År', yearInp('birthYear', 'f.eks. 1872'), 'half-m'), fld('Dato eller detaljer', textInp('birthDate', 'f.eks. 12. mars'), 'half-m'),
        fld('Fødested', placeField(f.birthPlace, pl => f.birthPlace = pl, { label: 'Fødested' }), 'full'))),
    h('div', { class: 'fs' }, h('h3', null, 'Død'),
      h('div', { class: 'fgrid' }, fld('År (tomt hvis personen lever)', yearInp('deathYear', 'f.eks. 1941'), 'half-m'), fld('Dato eller detaljer', textInp('deathDate', 'f.eks. 3. januar'), 'half-m'),
        fld('Dødssted', placeField(f.deathPlace, pl => f.deathPlace = pl, { label: 'Dødssted' }), 'full'))),
    h('div', { class: 'fs' }, h('h3', null, 'Foreldre'),
      h('div', { class: 'fgrid' }, fld('Far', parentField('father'), 'half-m'), fld('Mor', parentField('mother'), 'half-m'))),
    h('div', { class: 'fs' }, h('h3', null, 'Ektefelle eller partner'), partnersBox),
    h('div', { class: 'fs' }, h('h3', null, 'Bosteder gjennom livet'),
      h('p', { class: 'faint', style: { fontSize: '13px' } }, 'Fødestedet brukes som første bosted. Legg til hvert sted personen flyttet til, med årstallet flyttingen skjedde. Stedene med kartposisjon vises i kartanimasjonen.'), movesBox),
    h('div', null, h('label', { class: 'lbl' }, 'Notater'), notes),
    h('div', { class: 'form-actions' }, delBtn, h('div', { style: { display: 'flex', gap: '8px' } }, h('button', { type: 'button', class: 'btn ghost', onclick: () => modal.close() }, 'Avbryt'), saveBtn)));
  const modal = openModal(editing ? 'Rediger ' + fullName(opts.person) : (opts.title || 'Ny person'), form, { cls: 'wide' });
  return modal;
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
      [['name', 'Sorter: etternavn'], ['birth', 'Sorter: fødselsår'], ['recent', 'Sorter: nylig lagt til']].map(([v, t]) => h('option', { value: v, selected: v === this.sort }, t)));
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
      Store.canWrite ? h('button', { class: 'btn primary', onclick: () => openPersonForm({ onSaved: p => App.go('person', p.id) }) }, ico('plus', 18), 'Ny person') : null));
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
    else rows.sort(nameCmp);
    if (!rows.length){ this.body.appendChild(h('div', { class: 'empty' }, h('p', null, 'Ingen treff på «' + this.q + '».'))); return; }
    const ul = h('ul', { class: 'people' });
    rows.forEach(p => {
      const parts = [];
      if (p.birthPlace && p.birthPlace.name) parts.push('Født i ' + p.birthPlace.name);
      const last = (p.moves || []).filter(m => m.place && m.place.name).slice(-1)[0];
      if (last && p.deathYear == null) parts.push('bor i ' + last.place.name);
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
function lifeEvents(p){
  const ev = [];
  const pn = pl => pl && pl.name ? pl.name : null;
  if (p.birthYear != null || p.birthPlace) ev.push({ y: p.birthYear, k: 'b', t: 'Født' + (pn(p.birthPlace) ? ' i ' + pn(p.birthPlace) : ''), s: p.birthDate });
  (p.moves || []).forEach(m => ev.push({ y: m.year, k: 'm', t: 'Bosatt i ' + (pn(m.place) || 'ukjent sted'), s: m.place && m.place.lat == null ? 'ikke på kartet' : '' }));
  Idx.partnersOf(p.id).forEach(x => { if (x.year != null) ev.push({ y: x.year, k: 'u', t: 'Giftet seg med ' + fullName(x.p) }); });
  Idx.kidsOf(p.id).forEach(c => { if (c.birthYear != null) ev.push({ y: c.birthYear, k: 'k', t: 'Barn født: ' + fullName(c) }); });
  if (p.deathYear != null || p.deathPlace) ev.push({ y: p.deathYear, k: 'd', t: 'Døde' + (pn(p.deathPlace) ? ' i ' + pn(p.deathPlace) : ''), s: p.deathDate });
  return ev.map((e, i) => Object.assign(e, { i })).sort((a, b) => (a.y == null) - (b.y == null) || (a.y || 0) - (b.y || 0) || a.i - b.i);
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
          h('button', { class: 'btn', onclick: () => App.go('tree', p.id) }, ico('tree', 16), 'Vis i slektstreet'),
          h('button', { class: 'btn', onclick: () => App.go('map', p.id) }, ico('pin', 16), 'Vis på kartet'))));

    // fakta
    const facts = h('dl', { class: 'facts' });
    const row = (k, v) => { if (v) facts.append(h('dt', null, k), h('dd', null, v)); };
    row('Født som', p.birthName || '');
    row('Født', [p.birthYear != null ? String(p.birthYear) : null, p.birthDate, p.birthPlace && p.birthPlace.name].filter(Boolean).join(' · '));
    row('Død', [p.deathYear != null ? String(p.deathYear) : null, p.deathDate, p.deathPlace && p.deathPlace.name].filter(Boolean).join(' · '));
    row('Kjønn', p.sex === 'm' ? 'Mann' : p.sex === 'f' ? 'Kvinne' : '');
    const lastMove = (p.moves || []).filter(m => m.place && m.place.name).slice(-1)[0];
    row(p.deathYear != null ? 'Siste bosted' : 'Bosted', lastMove ? lastMove.place.name + (lastMove.year != null ? ' (fra ' + lastMove.year + ')' : '') : '');
    const factsCard = h('section', { class: 'card' }, h('h2', null, 'Fakta'), facts.children.length ? facts : h('p', { class: 'muted' }, 'Ingen opplysninger er lagt inn ennå.'));

    // familie
    const parents = [p.fatherId, p.motherId].map(i => Store.persons.get(i)).filter(Boolean);
    const partners = Idx.partnersOf(p.id), kids = Idx.kidsOf(p.id), sibs = Idx.siblingsOf(p);
    const grp = (title, nodes, adds) => h('div', null, h('h3', null, title), h('div', { class: 'chips' }, nodes, edit ? adds : null));
    const addBtn = (label, fn) => h('button', { class: 'btn sm ghost', onclick: fn }, ico('plus', 14), label);
    const relink = async fn => { const q = clone(Store.persons.get(p.id)); fn(q); await Store.savePerson(q); };
    const setParent = async (child, field, pid) => { const q = clone(Store.persons.get(child)); q[field] = pid; await Store.savePerson(q); };
    const refOf = { id: p.id, birthYear: p.birthYear, deathYear: p.deathYear, sex: p.sex };
    const addParent = kind => pickPerson({ role: kind === 'm' ? 'father' : 'mother', ref: refOf, exclude: [p.fatherId, p.motherId, ...partners.map(x => x.p.id)].filter(Boolean),
      onPick: np => relink(q => { if (kind === 'm') q.fatherId = np.id; else q.motherId = np.id; }).then(() => toast(fullName(np) + ' er lagt til som ' + (kind === 'm' ? 'far' : 'mor'))),
      onNew: () => openPersonForm({ title: kind === 'm' ? 'Ny far' : 'Ny mor', preset: { sex: kind }, onSaved: np => relink(q => { if (kind === 'm') q.fatherId = np.id; else q.motherId = np.id; }) }) });
    const addPartner = () => pickPerson({ role: 'partner', withYear: true, ref: refOf, exclude: partners.map(x => x.p.id),
      onPick: (np, ex) => relink(q => { q.partners = (q.partners || []).concat([{ id: np.id, year: ex.year }]); }).then(() => toast(fullName(np) + ' er lagt til som partner')),
      onNew: () => openPersonForm({ title: 'Ny partner', preset: { partners: [{ id: p.id, year: null }], sex: partners.length || p.sex === 'u' ? 'u' : (p.sex === 'm' ? 'f' : 'm') } }) });
    const addChild = () => {
      const other = partners.length === 1 ? partners[0].p.id : null;
      const field = p.sex === 'f' ? 'motherId' : 'fatherId';
      pickPerson({ role: 'child', ref: refOf, exclude: kids.map(x => x.id),
        onPick: async np => {
          if (np[field] && np[field] !== p.id){ toast(fullName(np) + ' har allerede en annen ' + (field === 'motherId' ? 'mor' : 'far') + ' registrert.'); return; }
          await setParent(np.id, field, p.id); toast(fullName(np) + ' er lagt til som barn');
        },
        onNew: () => {
          const preset = { family: (p.sex === 'f' ? '' : p.family) || '' };
          if (p.sex === 'f'){ preset.motherId = p.id; preset.fatherId = other; } else { preset.fatherId = p.id; preset.motherId = other; }
          openPersonForm({ title: 'Nytt barn', preset });
        } });
    };
    const addSibling = () => {
      if (!p.fatherId && !p.motherId){ toast('Legg først inn minst én forelder, så kan søsken kobles til dem.'); return; }
      pickPerson({ role: 'sibling', ref: refOf, exclude: sibs.map(x => x.id),
        onPick: async np => {
          const q = clone(Store.persons.get(np.id));
          if ((p.fatherId && q.fatherId && q.fatherId !== p.fatherId) || (p.motherId && q.motherId && q.motherId !== p.motherId)){ toast(fullName(np) + ' har andre foreldre registrert. Rediger personen hvis de skal være søsken.'); return; }
          if (p.fatherId && !q.fatherId) q.fatherId = p.fatherId;
          if (p.motherId && !q.motherId) q.motherId = p.motherId;
          await Store.savePerson(q); toast(fullName(np) + ' er lagt til som søsken');
        },
        onNew: () => openPersonForm({ title: 'Nytt søsken', preset: { fatherId: p.fatherId || null, motherId: p.motherId || null, family: p.family || '' } }) });
    };
    const fam = h('section', { class: 'card' }, h('h2', null, 'Familie'), h('div', { class: 'fam' },
      grp('Foreldre', parents.map(x => personChip(x, x.id === p.fatherId ? 'far' : 'mor')), [!p.fatherId ? addBtn('Far', () => addParent('m')) : null, !p.motherId ? addBtn('Mor', () => addParent('f')) : null]),
      grp('Partner', partners.map(x => personChip(x.p, x.year != null ? 'gift ' + x.year : '')), addBtn('Partner', addPartner)),
      grp('Barn', kids.map(x => personChip(x, x.birthYear != null ? 'f. ' + x.birthYear : '')), addBtn('Barn', addChild)),
      grp('Søsken', sibs.map(x => personChip(x, x.birthYear != null ? 'f. ' + x.birthYear : '')), addBtn('Søsken', addSibling))));

    // livsløp
    const evs = lifeEvents(p);
    const lifeCard = h('section', { class: 'card' }, h('h2', null, 'Livsløp'),
      evs.length ? h('ul', { class: 'life-list' }, evs.map(e => h('li', null, h('div', { class: 'yr' }, e.y != null ? e.y : '–'), h('div', { class: 'dot ' + (e.k === 'k' ? 'kid' : e.k === 'm' ? 'sm' : '') }), h('div', null, h('div', null, e.t), e.s ? h('div', { class: 'k' }, e.s) : null))))
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
    const photos = (Idx.photosOf.get(p.id) || []).filter(x => !isSource(x.photo));
    const sources = (Idx.photosOf.get(p.id) || []).filter(x => isSource(x.photo));
    const fileIn = h('input', { type: 'file', accept: 'image/*', multiple: true, hidden: true, onchange: e => { Photos.uploadFiles([...e.target.files], { tagPerson: p.id }); e.target.value = ''; } });
    const photoCard = h('section', { class: 'card' }, h('h2', null, 'Bilder', (edit && Store.assets) ? h('button', { class: 'btn sm', onclick: () => fileIn.click() }, ico('upload', 15), 'Legg til bilde') : null), fileIn,
      photos.length ? h('div', { class: 'thumbs' }, photos.map(x => h('button', { class: 'thumb', 'aria-label': x.photo.caption || 'Bilde', onclick: () => Photos.open(x.photo.id) }, h('img', { src: photoUrl(x.photo), alt: x.photo.caption || '', loading: 'lazy' }), x.photo.year || x.photo.caption ? h('span', { class: 'cap' }, [x.photo.year, x.photo.caption].filter(Boolean).join(' · ')) : null)))
        : h('p', { class: 'muted' }, Store.assets ? 'Ingen bilder av ' + (p.given || 'personen') + ' ennå. Last opp et bilde og trykk på ansiktet for å tagge.' : 'Bilder kan ikke lastes opp i denne visningen.'));

    const srcIn = h('input', { type: 'file', accept: 'image/*', multiple: true, hidden: true, onchange: e => { Photos.uploadFiles([...e.target.files], { tagPerson: p.id, kind: 'source' }); e.target.value = ''; } });
    const srcCard = h('section', { class: 'card' }, h('h2', null, 'Kilder', (edit && Store.assets) ? h('button', { class: 'btn sm', onclick: () => srcIn.click() }, ico('upload', 15), 'Legg til kilde') : null), srcIn,
      sources.length ? h('ul', { class: 'srclist' }, sources.map(x => h('li', null, h('button', { class: 'srcrow', onclick: () => Photos.open(x.photo.id, { list: sources.map(y => y.photo.id) }) },
        h('img', { src: photoUrl(x.photo), alt: '', loading: 'lazy' }),
        h('span', { class: 'b' }, h('span', { class: 'badge' }, x.photo.srcType || 'Kilde'), h('span', { class: 'n' }, x.photo.ref || x.photo.caption || 'Uten beskrivelse'), x.photo.year ? h('span', { class: 'faint' }, String(x.photo.year)) : null)))))
        : h('p', { class: 'muted' }, Store.assets ? 'Ingen kilder knyttet til ' + (p.given || 'personen') + ' ennå. Last opp et bilde av en kirkebok, bygdebok, dåpsattest eller avisutklipp.' : 'Kilder kan ikke lastes opp i denne visningen.'));

    const notesCard = p.notes && p.notes.trim() ? h('section', { class: 'card' }, h('h2', null, 'Notater'), h('p', { class: 'notes' }, p.notes)) : null;

    root.append(back, hero, h('div', { class: 'cols' },
      h('div', { class: 'stack' }, factsCard, fam, notesCard),
      h('div', { class: 'stack' }, lifeCard, mapCard, photoCard, srcCard)));
    if (this.pendingMap){ const f = this.pendingMap; this.pendingMap = null; f(); }
  }
};

/* ====== Slektstre ====== */
function treeSet(mode, fid){
  const ps = Store.persons;
  if (mode === 'all' || !ps.has(fid)) return new Set(ps.keys());
  const set = new Set([fid]);
  const up = id => { const p = ps.get(id); if (!p) return; [p.fatherId, p.motherId].forEach(pid => { if (pid && ps.has(pid) && !set.has(pid)){ set.add(pid); up(pid); } }); };
  const down = id => { (Idx.kids.get(id) || []).forEach(k => { if (!set.has(k)){ set.add(k); down(k); } }); };
  if (mode === 'anc' || mode === 'line') up(fid);
  if (mode === 'desc' || mode === 'line') down(fid);
  if (mode === 'anc') Idx.partnersOf(fid).forEach(x => set.add(x.p.id));
  else [...set].forEach(id => Idx.partnersOf(id).forEach(x => set.add(x.p.id)));
  return set;
}

const TreeView = {
  mode: 'all', focus: null, sel: null, T: null,
  mount(root, arg){
    this.root = root; this.T = null; this.needFit = false; this.dim = null;
    if (arg && Store.persons.has(arg)){ this.focus = arg; this.sel = arg; this.mode = 'line'; this.refit = true; }
    const modes = [['all', 'Hele slekten'], ['line', 'Rundt valgt'], ['anc', 'Aner'], ['desc', 'Etterkommere']];
    this.seg = h('div', { class: 'seg', role: 'group', 'aria-label': 'Visning' }, modes.map(([k, t]) => h('button', { type: 'button', 'data-m': k, onclick: () => { this.mode = k; if (k !== 'all' && !Store.persons.has(this.focus)) this.focus = this.defaultFocus(); this.refit = true; this.update(); } }, t)));
    this.focusSel = h('select', { class: 'inp', style: { width: 'auto', maxWidth: '100%' }, 'aria-label': 'Utgangsperson', onchange: e => { this.focus = e.target.value; this.sel = this.focus; if (this.mode === 'all') this.mode = 'line'; this.refit = true; this.update(); } });
    this.head = h('div', { class: 'page-h' }, h('div', null, h('h1', null, 'Slektstre'), this.sub = h('p', null, '')));
    this.tools = h('div', { class: 'tools' }, this.seg, this.focusSel);
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
    const set = treeSet(this.mode, this.focus);
    this.sub.textContent = plural(set.size, 'person', 'personer') + ' vises. Dra for å flytte, klyp eller rull for å zoome, trykk på en person for mer.';
    this.draw(set);
    if (this.refit){ this.refit = false; this.fit(); }
    this.info();
  },
  draw(set){
    const CW = 208, CH = 70;
    const g = new dagre.graphlib.Graph();
    g.setGraph({ rankdir: 'TB', nodesep: 20, ranksep: 48, marginx: 24, marginy: 24 });
    g.setDefaultEdgeLabel(() => ({}));
    set.forEach(id => g.setNode('p' + id, { width: CW, height: CH, kind: 'p', id }));
    const unions = new Map();
    const U = (a, b) => { const key = [a, b].filter(Boolean).sort().join('|'); if (!unions.has(key)) unions.set(key, { key, ids: [a, b].filter(Boolean), kids: [] }); return unions.get(key); };
    set.forEach(id => { const p = Store.persons.get(id); const f = set.has(p.fatherId) ? p.fatherId : null, m = set.has(p.motherId) ? p.motherId : null; if (f || m) U(f, m).kids.push(id); });
    set.forEach(id => Idx.partnersOf(id).forEach(x => { if (set.has(x.p.id) && id < x.p.id) U(id, x.p.id); }));
    unions.forEach(u => {
      g.setNode('u' + u.key, { width: 10, height: 10, kind: 'u' });
      u.ids.forEach(i => g.setEdge('p' + i, 'u' + u.key));
      u.kids.forEach(k => g.setEdge('u' + u.key, 'p' + k));
    });
    dagre.layout(g);
    const gr = g.graph();
    this.dim = { w: gr.width, h: gr.height };
    this.nodes = {};
    clear(this.gv);
    const line = d3.line().x(d => d.x).y(d => d.y).curve(d3.curveMonotoneY);
    const eg = h('g'), ng = h('g');
    g.edges().forEach(e => { const pts = g.edge(e).points; if (pts && pts.length) eg.appendChild(h('path', { class: 'edge', d: line(pts) })); });
    g.nodes().forEach(nid => {
      const n = g.node(nid); this.nodes[nid] = n;
      if (n.kind === 'u'){ ng.appendChild(h('circle', { class: 'union', cx: n.x, cy: n.y, r: 4 })); return; }
      const p = Store.persons.get(n.id);
      const card = h('div', { class: 'pcard ' + (p.sex === 'm' ? 'm' : p.sex === 'f' ? 'f' : '') + (n.id === this.sel ? ' sel' : ''), role: 'button', tabindex: 0, 'aria-label': fullName(p) },
        avatar(p, 36), h('div', { class: 'b' }, h('div', { class: 'n' }, fullName(p)), h('div', { class: 'y' }, lifeSpan(p)), siblingText(p) ? h('div', { class: 'sb' }, siblingText(p)) : null));
      const act = () => { this.sel = n.id; this.update(); };
      card.addEventListener('click', act);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); act(); } });
      ng.appendChild(h('foreignObject', { x: n.x - CW / 2, y: n.y - CH / 2, width: CW, height: CH }, card));
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
    [p.fatherId, p.motherId].forEach(q => { if (q && ps.has(q)) d = Math.max(d == null ? 0 : d, 1 + get(q, seen)); });
    if (d == null){
      let pd = null;
      Idx.partnersOf(id).forEach(x => { const o = x.p; if ([o.fatherId, o.motherId].some(q => q && ps.has(q))) pd = Math.max(pd == null ? 0 : pd, get(o.id, new Set(seen))); });
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
    [p.fatherId, p.motherId].forEach(q => { if (q && ps.has(q)) d = Math.max(d, 1 + dep(q, seen)); });
    depth.set(id, d); return d;
  };
  const get = (id, seen = new Set()) => {
    if (br.has(id)) return br.get(id);
    if (seen.has(id)) return 'root';
    seen.add(id);
    const p = ps.get(id);
    const parents = [p.fatherId, p.motherId].filter(q => q && ps.has(q));
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
      const txt = gr.place.name + (gr.list.length > 1 ? ' · ' + gr.list.length : '');
      const w = txt.length * 6.7 + 6, hh = 16;
      const x = gr.cx + gr.rad + 3, y = gr.cy - 8;
      if (x < -w || x > W || y < -20 || y > H) return;
      if (boxes.some(b => x < b.x + b.w && x + w > b.x && y < b.y + b.h && y + hh > b.y)) return;
      boxes.push({ x, y, w, h: hh });
      const lab = h('div', { class: 'plabel' }, gr.place.name, gr.list.length > 1 ? h('b', null, ' · ' + gr.list.length) : null);
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
          h('div', { class: 'muted', style: { fontSize: '13px' } }, lifeSpan(x.p) + ' · ' + (loc ? 'bor i ' + (loc.place.name || 'ukjent sted') : Y < x.start ? 'ikke født ennå' : 'ikke på kartet i ' + Y))),
        h('button', { class: 'icon-btn', style: { width: '32px', height: '32px' }, 'aria-label': 'Lukk', onclick: () => this.deselect() }, ico('x', 16))),
      stops.length > 1 ? h('div', { class: 'route' }, stops.map(s => s.year + ' ' + (s.place.name || '?')).join('  →  ')) : null,
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
        h('img', { src: photoUrl(ph), alt: ph.caption || '', loading: 'lazy' }),
        src ? h('span', { class: 'badge top' }, ph.srcType || 'Kilde') : null,
        (ph.tags || []).length ? h('span', { class: 'tg' }, ico('tag', 13), String(ph.tags.length)) : null,
        h('span', { class: 'cap' }, [ph.year, (src ? (ph.ref || ph.caption) : ph.caption) || names.slice(0, 3).join(', ')].filter(Boolean).join(' · ') || ' '));
    })));
  },
  unmount(){},
  async uploadFiles(files, o = {}){
    files = files.filter(f => f.type.startsWith('image/'));
    if (!files.length) return;
    if (!Store.assets){ toast('Opplasting er ikke tilgjengelig i denne visningen.'); return; }
    const kind = o.kind || this.tab;
    let last = null;
    for (let i = 0; i < files.length; i++){
      toast('Laster opp ' + (i + 1) + ' av ' + files.length + ' …');
      try {
        const up = await Store.uploadImage(files[i]);
        const ph = { id: uid(), assetId: up.assetId, w: up.w, h: up.h, caption: '', year: null, tags: [], created: Date.now(), kind: kind };
        if (kind === 'source'){ ph.srcType = 'Kirkebok'; ph.ref = ''; }
        await Store.savePhoto(ph); last = ph;
      } catch (e){ toast(e.message === 'unreadable' ? 'Kunne ikke lese «' + files[i].name + '».' : 'Opplastingen feilet. Prøv igjen.'); }
    }
    if (last){ toast(files.length > 1 ? 'Filene er lastet opp' : 'Opplastingen er ferdig'); this.open(last.id, { tagPerson: o.tagPerson || null, startTagging: !!o.tagPerson }); }
  },
  open(id, o = {}){
    const self = this;
    const first = Store.photos.get(id);
    let list = o.list || this.sorted(isSource(first) ? 'source' : 'photo').map(p => p.id);
    if (!list.includes(id)) list = [id, ...list];
    let cur = id, tagging = !!o.startTagging, pre = o.tagPerson || null, pending = null, showNames = true, query = '', big = false;
    const stage = h('div', { class: 'pvstage' }), side = h('div', { class: 'pvside' });
    const caption = h('input', { class: 'inp', type: 'text', placeholder: 'Bildetekst, f.eks. «Familien samlet på Haugen»', 'aria-label': 'Bildetekst', onchange: e => save({ caption: e.target.value }) });
    const refInp = h('input', { class: 'inp', type: 'text', placeholder: 'f.eks. Voss prestearkiv, klokkerbok 1866, s. 42', 'aria-label': 'Kildehenvisning', onchange: e => save({ ref: e.target.value }) });
    const typeSel = h('select', { class: 'inp', 'aria-label': 'Type kilde', onchange: e => save({ srcType: e.target.value }) }, SOURCE_TYPES.map(t => h('option', { value: t }, t)));
    const year = h('input', { class: 'inp', type: 'number', inputmode: 'numeric', placeholder: 'Årstall', 'aria-label': 'Årstall for bildet', style: { maxWidth: '130px' }, onchange: e => save({ year: intOrNull(e.target.value) }) });
    const nav = h('div', { class: 'pvnav' });
    const photo = () => Store.photos.get(cur);
    async function save(patch){ const p = photo(); if (!p) return; await Store.savePhoto(Object.assign(clone(p), patch)); }
    function loadFields(){ const p = photo(); caption.value = p ? (p.caption || '') : ''; year.value = p && p.year != null ? p.year : ''; refInp.value = p ? (p.ref || '') : ''; typeSel.value = p && p.srcType ? p.srcType : 'Kirkebok'; caption.disabled = year.disabled = refInp.disabled = typeSel.disabled = !Store.canWrite; }
    async function addTag(pid, pt){
      const p = photo(); if (!p) return;
      const q = clone(p); q.tags = (q.tags || []).filter(t => t.pid !== pid).concat([{ pid, x: pt.x == null ? null : +pt.x.toFixed(4), y: pt.y == null ? null : +pt.y.toFixed(4) }]);
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
      const img = h('img', { src: photoUrl(p), alt: p.caption || 'Bilde' });
      wrap.appendChild(img);
      (p.tags || []).forEach(t => { const per = Store.persons.get(t.pid); if (!per || t.x == null) return; wrap.appendChild(h('div', { class: 'pin', style: { left: (t.x * 100) + '%', top: (t.y * 100) + '%' } }, h('i'), h('span', null, per.given || fullName(per)))); });
      if (pending && pending.x != null) wrap.appendChild(h('div', { class: 'pin pending', style: { left: (pending.x * 100) + '%', top: (pending.y * 100) + '%' } }, h('i')));
      wrap.addEventListener('click', e => {
        if (!tagging) return;
        const r = img.getBoundingClientRect();
        const pt = { x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)) };
        if (pre) addTag(pre, pt); else { pending = pt; drawStage(); drawSide(); }
      });
      stage.appendChild(wrap);
    }
    function drawSide(){
      clear(side);
      const p = photo(); if (!p) return;
      const edit = Store.canWrite;
      const tagBtn = edit ? h('button', { class: 'btn' + (tagging ? ' primary' : ''), onclick: () => { tagging = !tagging; pending = null; pre = null; query = ''; drawStage(); drawSide(); } }, ico('tag', 16), tagging ? 'Avbryt tagging' : 'Tagg personer') : null;
      const sizeBtn = h('button', { class: 'btn ghost', 'aria-pressed': String(big), onclick: () => { big = !big; drawStage(); drawSide(); } }, ico('fit', 16), big ? 'Tilpass til skjermen' : 'Full størrelse');
      const namesBtn = h('button', { class: 'btn ghost', 'aria-pressed': String(showNames), onclick: () => { showNames = !showNames; drawStage(); drawSide(); } }, ico('eye', 16), showNames ? 'Skjul navn' : 'Vis navn');
      side.appendChild(h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } }, tagBtn, namesBtn, sizeBtn));
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
        else side.appendChild(h('div', { class: 'fgrid' }, h('div', { class: 'full' }, h('label', { class: 'lbl' }, 'Bildetekst'), caption), h('div', null, h('label', { class: 'lbl' }, 'Årstall'), year)));
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
        const p2 = photo(); if (p2 && (p2.caption || p2.year || p2.ref)) side.appendChild(h('p', null, [p2.srcType, p2.year, p2.ref, p2.caption].filter(Boolean).join(' · ')));
      }
    }
    function drawNav(){
      clear(nav);
      const i = list.indexOf(cur);
      nav.append(h('button', { class: 'btn sm', disabled: i <= 0, onclick: () => go(-1) }, ico('back', 16), 'Forrige'),
        h('span', { class: 'faint', style: { fontSize: '13px' } }, (i + 1) + ' av ' + list.length),
        h('button', { class: 'btn sm', disabled: i >= list.length - 1, onclick: () => go(1) }, 'Neste', ico('next', 16)));
    }
    function go(d){ const i = list.indexOf(cur) + d; if (i < 0 || i >= list.length) return; cur = list[i]; tagging = false; pending = null; pre = null; query = ''; render(); }
    function render(){ loadFields(); drawStage(); drawSide(); drawNav(); }
    const body = h('div', { class: 'modal-b' }, h('div', { class: 'pv' }, stage, nav, side));
    const off = Store.onChange(() => { if (!photo()){ if (list.length > 1){ list = list.filter(x => x !== cur); cur = list[0]; render(); } return; } if (!pending && ![caption, year, refInp, typeSel].includes(document.activeElement)){ drawStage(); drawSide(); drawNav(); } });
    const onKey = e => { if (/input|textarea|select/i.test((e.target || {}).tagName || '')) return; if (e.key === 'ArrowLeft') go(-1); else if (e.key === 'ArrowRight') go(1); };
    document.addEventListener('keydown', onKey);
    const modal = openModal(isSource(first) ? 'Skriftlig kilde' : 'Bilde', body, { cls: 'wide', onClose: () => { off(); document.removeEventListener('keydown', onKey); } });
    render();
  }
};

/* ====== Appskall ====== */
const App = {
  view: 'register', arg: null, cur: null,
  views: { register: RegisterView, person: PersonView, tree: TreeView, map: MapView, photos: Photos },
  tabOf: { register: 'register', person: 'register', tree: 'tree', map: 'map', photos: 'photos' },
  hashOf: { register: 'register', tree: 'tre', map: 'kart', photos: 'bilder' },
  init(){
    this.main = document.getElementById('main');
    this.banner = document.getElementById('banner');
    const tabs = document.getElementById('tabs');
    this.tabEls = {};
    [['register', 'users', 'Register'], ['tree', 'tree', 'Slektstre'], ['map', 'pin', 'Kart'], ['photos', 'image', 'Bilder']].forEach(([k, ic, t]) => {
      const b = h('button', { class: 'tab', role: 'tab', 'aria-selected': 'false', onclick: () => this.go(k) }, ico(ic, 20), h('span', null, t));
      this.tabEls[k] = b; tabs.appendChild(b);
    });
    Store.onChange(() => this.refresh());
    let v = 'register', a = null;
    try {
      const hs = (location.hash || '').replace('#', '');
      if (hs === 'tre') v = 'tree'; else if (hs === 'kart') v = 'map'; else if (hs === 'bilder') v = 'photos';
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

