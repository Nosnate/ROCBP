/**
 * Pure Pre-Renewal calculator rules. This module deliberately has no DOM or
 * server-global dependencies, so a server profile can select its own rules.
 */
export const PRE_RENEWAL_STAT_CAP = 99;
export const PRIMARY_STATS = Object.freeze(['STR', 'AGI', 'VIT', 'INT', 'DEX', 'LUK']);

const zeroStats = () => Object.fromEntries(PRIMARY_STATS.map((stat) => [stat, 0]));

/** The cost to raise a stat from `value` to `value + 1`. */
export function statIncreaseCost(value) {
  const current = Number(value);
  if (!Number.isInteger(current) || current < 1 || current >= PRE_RENEWAL_STAT_CAP) {
    throw new RangeError(`Stat value must be an integer from 1 to ${PRE_RENEWAL_STAT_CAP - 1}.`);
  }
  // 1 → 2 costs 2, 11 → 12 costs 3, …, 91 → 92 costs 11.
  return Math.floor((current - 1) / 10) + 2;
}

export function clampBaseStat(value, cap = PRE_RENEWAL_STAT_CAP) {
  const parsed = Number.parseInt(value, 10);
  return Math.max(1, Math.min(cap, Number.isFinite(parsed) ? parsed : 1));
}

/** Cost of moving one stat from `from` to `to`, including every increment. */
export function statCost(from, to, cap = PRE_RENEWAL_STAT_CAP) {
  const start = clampBaseStat(from, cap);
  const end = clampBaseStat(to, cap);
  if (end <= start) return 0;

  let cost = 0;
  for (let value = start; value < end; value += 1) cost += statIncreaseCost(value);
  return cost;
}

export function totalStatCost(stats, cap = PRE_RENEWAL_STAT_CAP) {
  return PRIMARY_STATS.reduce((total, stat) => total + statCost(1, stats?.[stat] ?? 1, cap), 0);
}

/**
 * Job-bonus milestones. Values are *increments at that job level*, rather
 * than duplicated totals. This makes partial job levels deterministic.
 *
 * The Lord Knight 70 total is STR +15, AGI +8, VIT +10, INT +1, DEX +8, LUK +6.
 */
export const JOB_BONUS_TABLES = Object.freeze({
  lord_knight: Object.freeze({
    maxJobLevel: 70,
    milestones: Object.freeze([
      [1, 'STR'], [2, 'VIT'], [3, 'AGI'], [5, 'STR'], [6, 'DEX'], [7, 'VIT'], [9, 'LUK'], [10, 'STR'], [12, 'AGI'], [13, 'VIT'], [14, 'DEX'], [16, 'STR'], [17, 'LUK'], [18, 'VIT'], [20, 'AGI'], [21, 'STR'], [23, 'DEX'], [24, 'VIT'], [25, 'LUK'], [27, 'STR'], [28, 'AGI'], [30, 'VIT'], [31, 'DEX'], [32, 'STR'], [34, 'LUK'], [36, 'AGI'], [38, 'STR'], [39, 'DEX'], [40, 'VIT'], [42, 'STR'], [43, 'LUK'], [45, 'AGI'], [47, 'DEX'], [49, 'STR'], [50, 'VIT'], [52, 'LUK'], [53, 'STR'], [54, 'AGI'], [57, 'DEX'], [58, 'STR'], [60, 'VIT'], [61, 'AGI'], [63, 'STR'], [64, 'DEX'], [65, 'STR'], [67, 'STR'], [68, 'VIT'], [70, 'INT']
    ])
  })
});

export function getJobBonuses(classId, jobLevel, tables = JOB_BONUS_TABLES) {
  const table = tables[classId];
  if (!table) return zeroStats();
  const level = Math.max(1, Math.min(table.maxJobLevel, Number.parseInt(jobLevel, 10) || 1));
  return table.milestones.reduce((bonuses, [requiredLevel, stat]) => {
    if (requiredLevel <= level) bonuses[stat] += 1;
    return bonuses;
  }, zeroStats());
}

export function calculateOverview({ classId, jobLevel, baseStats }, options = {}) {
  const cap = options.statCap ?? PRE_RENEWAL_STAT_CAP;
  const base = Object.fromEntries(PRIMARY_STATS.map((stat) => [stat, clampBaseStat(baseStats?.[stat], cap)]));
  const job = getJobBonuses(classId, jobLevel, options.jobBonusTables ?? JOB_BONUS_TABLES);
  const total = Object.fromEntries(PRIMARY_STATS.map((stat) => [stat, base[stat] + job[stat]]));
  return Object.freeze({ base, job, total, statPointsUsed: totalStatCost(base, cap) });
}
