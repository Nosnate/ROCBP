const SESSION_KEY = 'ro-platform-session';
export function session() { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); }
export function signIn({ name = 'Demo Administrator', role = 'admin' } = {}) { const value = { name, role }; localStorage.setItem(SESSION_KEY, JSON.stringify(value)); return value; }
export function signOut() { localStorage.removeItem(SESSION_KEY); }
export function isAdmin() { return session()?.role === 'admin'; }
