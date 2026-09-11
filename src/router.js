(() => {
  const validSections = new Set(['calc', 'db/items', 'db/mobs', 'db/skills', 'db/maps', 'db/creation', 'admin']);
  function activePath() { return location.protocol === 'file:' ? location.hash.slice(1) || '/' : location.pathname; }
  function parseRoute(pathname = activePath()) { const parts = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean); if (!parts.length) return { name: 'home' }; const serverName = parts.shift(); const section = parts.join('/'); return validSections.has(section) ? { name: section, serverName } : { name: 'dashboard', serverName }; }
  function navigate(path) { if (location.protocol === 'file:') location.hash = path; else { history.pushState({}, '', path); window.dispatchEvent(new PopStateEvent('popstate')); } }
  function installRouter(render) { window.addEventListener('popstate', () => render(parseRoute())); window.addEventListener('hashchange', () => render(parseRoute())); document.addEventListener('click', (event) => { const link = event.target.closest('a[data-route]'); if (!link || event.metaKey || event.ctrlKey) return; event.preventDefault(); navigate(link.getAttribute('href')); }); }
  window.RORouter = { parseRoute, navigate, installRouter };
})();
