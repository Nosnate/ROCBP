import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateOverview, getJobBonuses, statCost, statIncreaseCost } from '../src/calculator.js';
test('uses the authentic pre-renewal cost brackets', () => { assert.equal(statIncreaseCost(1), 2); assert.equal(statIncreaseCost(11), 3); assert.equal(statIncreaseCost(91), 11); assert.equal(statCost(1, 12), 23); });
test('never permits a base stat above 99', () => { assert.equal(calculateOverview({ classId:'lord_knight', jobLevel:70, baseStats:{ STR:600 } }).base.STR, 99); });
test('applies all Lord Knight job 70 bonuses to overview totals', () => { const result = calculateOverview({ classId:'lord_knight', jobLevel:70, baseStats:{ STR:99, AGI:99, VIT:99, INT:99, DEX:99, LUK:99 } }); assert.deepEqual(getJobBonuses('lord_knight', 70), { STR:15, AGI:8, VIT:10, INT:1, DEX:8, LUK:6 }); assert.equal(result.total.STR, 114); assert.equal(result.total.VIT, 109); });
