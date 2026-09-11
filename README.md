# RO Nexus — Phase 1

A modular, server-aware Ragnarok Online platform prototype. The initial uaRO profile is Pre-Renewal (99/70) and intentionally separates reusable game data from tenant-specific overrides.

## Directory layout

```text
index.html                         # Classic-script application shell (file:// compatible)
src/
  main.js                          # Composes views and binds the SPA
  router.js                        # HTTP routes plus file:// hash-route fallback
  calculator.js                    # Pure Pre-Renewal stat/job-bonus rules
  database.js                      # Database search rendering and filters
  auth.js                          # Replaceable simulated auth boundary
data/
  repository.js                    # Runtime repository and override merge point
  core-pre-renewal/
    items.json                     # Canonical shared records, addressed by ID
    items.data.js                  # Classic-script runtime dataset for file:// demos
    items.schema.json              # Contract for item import/admin tooling
  servers/<tenant>/                # Tenant-only rules and overrides (next data packs)
tests/calculator.test.js           # Executable calculator regression tests
```

## Routes

The client router serves `/`, `/:server_name/`, `/:server_name/calc`,
`/:server_name/db/{items,mobs,skills,maps,creation}`, and `/:server_name/admin`.
When hosted over HTTP, static hosts must rewrite unknown application paths to `index.html`. When opened directly from `file://`, the router uses `#/uaro/calc` hash routes instead, avoiding browser module/CORS restrictions.

## Core rules

`src/calculator.js` is framework-free and exposed through a classic script, so it runs when `index.html` is opened directly from disk. It clamps each base stat to **1–99**;
therefore malformed saved data and UI values cannot produce base stats above 99.
It implements classic Pre-Renewal increasing costs: 2 for 2–11, 3 for 12–21,
through 11 for 92–99. The Lord Knight job table applies its full Job 70 bonus
(STR +15, AGI +8, VIT +10, INT +1, DEX +8, LUK +6) to the Overview total while
retaining base and bonus values separately.

## JSON items

Every item has one numeric `id`; references and tenant overrides must use that
ID. `items.data.js` is a deliberately small runtime mirror of the canonical JSON so the demo does not issue forbidden `file://` fetch requests. `applicableJobs` contains stable class IDs (or `all`), `slots` is an integer,
and `script` stores the lossless emulator bonus script. The structured `bonuses`
array is for search/display/calculation while `script` remains the canonical
exportable behavior. Validate imports against `data/core-pre-renewal/items.schema.json`.

## Checks

```bash
npm test
```
