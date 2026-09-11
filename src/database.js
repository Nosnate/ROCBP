export function databaseView(repository, category) {
  const type = category === 'items' ? '' : category.slice(0, -1);
  const items = repository.searchItems(type ? { type } : {});
  return `<section class="panel"><p class="eyebrow">${category} database</p><h1>${category[0].toUpperCase() + category.slice(1)}</h1><label class="search">Search by ID or name <input id="item-search" placeholder="e.g. 501 or Red Potion"></label><div id="database-results">${rows(items)}</div></section>`;
}
function rows(items) { return items.length ? `<div class="table">${items.map((item) => `<article><b>${item.name}</b><span>ID ${item.id} · ${item.type} · ${item.slots} slots</span><small>${item.applicableJobs.join(', ')}</small></article>`).join('')}</div>` : '<p>No records in this initial dataset.</p>'; }
export function bindDatabaseSearch(repository) { document.querySelector('#item-search')?.addEventListener('input', (event) => { document.querySelector('#database-results').innerHTML = rows(repository.searchItems({ query: event.target.value })); }); }
