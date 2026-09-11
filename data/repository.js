/* JSON repository boundary; data is injected by items.data.js for file:// support. */
(() => {
  class JsonRepository {
    constructor({ coreItems = [], serverOverrides = [] } = {}) { this.coreItems = coreItems; this.serverOverrides = serverOverrides; }
    static fromRuntime(serverProfile) { return new JsonRepository({ coreItems: window.RO_CORE_ITEMS ?? [], serverOverrides: serverProfile.itemOverrides ?? [] }); }
    items() { const records = new Map(this.coreItems.map((item) => [item.id, item])); for (const override of this.serverOverrides) records.set(override.id, { ...records.get(override.id), ...override, serverOverride: true }); return [...records.values()]; }
    itemById(id) { return this.items().find((item) => item.id === Number(id)) ?? null; }
    searchItems(filters = {}) { const query = (filters.query ?? '').trim().toLowerCase(); return this.items().filter((item) => (!query || `${item.id} ${item.name} ${item.type}`.toLowerCase().includes(query)) && (!filters.type || item.type === filters.type) && (!filters.job || item.applicableJobs.includes(filters.job))); }
  }
  window.RORepository = { JsonRepository };
})();
