const validSections = new Set(['calc', 'db/items', 'db/mobs', 'db/skills', 'db/maps', 'db/creation', 'admin']);
export function parseRoute(pathname = window.location.pathname) {
  const parts = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  if (!parts.length) return { name: 'home' };
  const serverName = parts.shift();
  const section = parts.join('/');
  return validSections.has(section) ? { name: section, serverName } : { name: 'dashboard', serverName };
}
export function navigate(path) { history.pushState({}, '', path); window.dispatchEvent(new PopStateEvent('popstate')); }
export function installRouter(render) { window.addEventListener('popstate', () => render(parseRoute())); document.addEventListener('click', (event) => { const link = event.target.closest('a[data-route]'); if (!link || event.metaKey || event.ctrlKey) return; event.preventDefault(); navigate(link.getAttribute('href')); }); }
