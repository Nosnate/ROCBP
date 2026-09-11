/* Runtime copy of items.json. Classic script avoids fetch() and works from file://. */
window.RO_CORE_ITEMS = [
  { id: 501, aegisName: 'Red_Potion', name: 'Red Potion', type: 'usable', subtype: 'healing', slots: 0, weight: 70, buy: 50, sell: 25, applicableJobs: ['all'], equipLocations: [], bonuses: [], script: 'itemheal 45,60;', metadata: { isCustom: false, source: 'core-pre-renewal' } },
  { id: 1101, aegisName: 'Sword', name: 'Sword [3]', type: 'weapon', weaponLevel: 1, attack: 25, slots: 3, weight: 500, applicableJobs: ['novice', 'swordman', 'knight', 'lord_knight', 'crusader', 'paladin'], equipLocations: ['weapon'], bonuses: [{ kind: 'stat', stat: 'ATK', value: 25 }], script: '', metadata: { isCustom: false, source: 'core-pre-renewal' } }
];
