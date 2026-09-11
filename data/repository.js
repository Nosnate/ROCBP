/** JSON repository boundary: all UI code resolves records through this API. */
const DATA_ROOT = new URL('./', import.meta.url);

export class JsonRepository {
  constructor({ coreItems = [], serverOverrides = [] } = {}) {
    this.coreItems = coreItems;
    this.serverOverrides = serverOverrides;
  }

  static async load(serverProfile) {
    const response = await fetch(new URL('core-pre-renewal/items.json', DATA_ROOT));
    if (!response.ok) throw new Error(`Unable to load item data (${response.status}).`);
    const coreItems = await response.json();
    return new JsonRepository({ coreItems, serverOverrides: serverProfile.itemOverrides ?? [] });
  }

  items() {
    const records = new Map(this.coreItems.map((item) => [item.id, item]));
    for (const override of this.serverOverrides) {
      records.set(override.id, { ...records.get(override.id), ...override, serverOverride: true });
    }
    return [...records.values()];
  }

  itemById(id) { return this.items().find((item) => item.id === Number(id)) ?? null; }

  searchItems(filters = {}) {
    const query = (filters.query ?? '').trim().toLowerCase();
    return this.items().filter((item) =>
      (!query || `${item.id} ${item.name} ${item.type}`.toLowerCase().includes(query)) &&
      (!filters.type || item.type === filters.type) &&
      (!filters.job || item.applicableJobs.includes(filters.job))
    );
  }
}
