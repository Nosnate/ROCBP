const { calculateOverview, PRIMARY_STATS, PRE_RENEWAL_STAT_CAP } = window.ROCalculator;
const { installRouter, parseRoute } = window.RORouter;
const { databaseView, bindDatabaseSearch } = window.RODatabase;
const { isAdmin, signIn, signOut, session } = window.ROAuth;
const { JsonRepository } = window.RORepository;

const profile = { id: 'uaro', name: 'uaRO', rules: { baseMax: 99, jobMax: 70, maxStat: 99 }, itemOverrides: [] };
const build = { classId: 'lord_knight', jobLevel: 70, baseStats: { STR: 99, AGI: 1, VIT: 1, INT: 1, DEX: 1, LUK: 1 } };
let repository;
const app = document.querySelector('#app');
const link = (href, label) => `<a data-route href="${href}">${label}</a>`;

function shell(content) {
  const current = session();
  return `<header><a data-route class="brand" href="/">RO Nexus</a><nav>${link('/uaro/', 'uaRO')} ${link('/uaro/calc', 'Calculator')} ${link('/uaro/db/items', 'Database')} ${link('/uaro/admin', 'Admin')}</nav><button id="auth">${current ? `Sign out · ${current.name}` : 'Demo admin login'}</button></header><main>${content}</main>`;
}
function calculatorView() {
  const overview = calculateOverview(build, { statCap: profile.rules.maxStat });
  return `<section class="panel"><p class="eyebrow">uaRO · Pre-Renewal</p><h1>Character calculator</h1><p class="muted">Base stats are strictly capped at ${PRE_RENEWAL_STAT_CAP}; job bonuses are shown separately and included in the total.</p><div class="form-grid">${PRIMARY_STATS.map((stat) => `<label>${stat}<input data-stat="${stat}" type="number" min="1" max="99" value="${overview.base[stat]}"><small>Base ${overview.base[stat]} + Job ${overview.job[stat]} = <b>${overview.total[stat]}</b></small></label>`).join('')}<label>Job level<input id="job-level" type="number" min="1" max="70" value="${build.jobLevel}"></label></div><p class="result">Stat points used: <b>${overview.statPointsUsed}</b></p></section>`;
}
function dashboard() { return `<section class="panel hero"><p class="eyebrow">${profile.name} server dashboard</p><h1>Pre-Renewal data, per server.</h1><p>Rates: 5× Base / 5× Job / 5× Drop · Level cap 99/70 · Server-specific overrides stay isolated from the core repository.</p>${link('/uaro/calc', 'Open the calculator →')}</section>`; }
function home() { return `<section class="panel hero"><p class="eyebrow">Multi-tenant Ragnarok Online platform</p><h1>One core database. Server-specific truth.</h1><p>Select a server profile to browse its database, plan a character, and apply controlled admin overrides.</p>${link('/uaro/', 'Enter uaRO →')}</section>`; }
function admin() { return isAdmin() ? `<section class="panel"><p class="eyebrow">uaRO administration</p><h1>Overrides</h1><p>Authenticated administrators can submit item, monster and drop overrides. Persistence and server-side authorization are the next backend phase.</p></section>` : `<section class="panel"><h1>Administrator verification required</h1><p>Use the demo login to preview the protected route.</p></section>`; }
function render(route = parseRoute()) {
  let content;
  if (route.name === 'home') content = home();
  else if (route.name === 'dashboard') content = dashboard();
  else if (route.name === 'calc') content = calculatorView();
  else if (route.name.startsWith('db/')) content = databaseView(repository, route.name.split('/')[1]);
  else content = admin();
  app.innerHTML = shell(content);
  document.querySelector('#auth').addEventListener('click', () => { if (isAdmin()) signOut(); else signIn(); render(); });
  document.querySelectorAll('[data-stat]').forEach((input) => input.addEventListener('input', (event) => { build.baseStats[event.target.dataset.stat] = Math.max(1, Math.min(99, Number.parseInt(event.target.value, 10) || 1)); render({ name: 'calc', serverName: 'uaro' }); }));
  document.querySelector('#job-level')?.addEventListener('input', (event) => { build.jobLevel = Math.max(1, Math.min(70, Number.parseInt(event.target.value, 10) || 1)); render({ name: 'calc', serverName: 'uaro' }); });
  bindDatabaseSearch(repository);
}
repository = JsonRepository.fromRuntime(profile);
installRouter(render);
render();
