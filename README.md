[README.md](https://github.com/user-attachments/files/32120820/README.md)
# Ragnarok Online Build Planner

A modern, responsive Ragnarok Online character builder, skill planner and build-sharing platform for Pre-Renewal and private servers.

The project starts with **uaRO** and is designed from the beginning to support multiple servers with their own rules, custom content and modifications.

## Features

- Pre-Renewal character builder
- Stat calculator
- Full skill planner with prerequisites
- Equipment planner
- Cards and refinement support
- Server-specific rules and overrides
- uaRO-specific content
- Build notes
- Item and skill references
- Searchable game database
- Local build saving
- Import/export
- Shareable build URLs
- Discord-friendly build output
- Forum BBCode output
- Build preview images
- Responsive desktop, tablet and mobile UI
- English-first internationalization architecture

## Server Support

The first supported server is:

**uaRO**

Server-specific data is kept separate from the generic Pre-Renewal data.

This allows the project to support additional private servers without duplicating the entire Ragnarok Online database.

```text
Core Ragnarok Data
        ↓
Server-specific overrides
        ↓
Calculator
```

For example, a server can modify an existing skill or item without requiring a second completely duplicated database entry.

## Data Architecture

The project separates application logic from game data.

```text
src/
├── calculator/
├── skill-planner/
├── database/
├── sharing/
├── localization/
└── server/

data/
├── core/
└── servers/
    └── uaro/
```

This is intentional.

Server-specific changes should be easy to find, update and maintain.

## Build References

Build notes are designed to support references such as:

```text
@item:1232
@weapon:1232
@skill:sonic_blow
@mob:1511
@card:4008
@quest:example
```

These references can be resolved into readable database objects.

For example:

```text
@weapon:1232
```

can become:

```text
Assassin Dagger [0]
```

with additional information displayed on hover.

The initial implementation may use static data. A database backend can be added later without changing the concept.

## Sharing

Builds can eventually be shared through:

- Direct build URLs
- Discord-friendly text
- Forum BBCode
- Preview images
- JSON export/import

The build format is versioned so future application updates can remain compatible with older builds.

## Internationalization

The initial interface is English.

The application is designed to support additional languages later, including German and other community languages.

User interface strings and database content should be kept separate from application logic.

## Long-Term Vision

The goal is to evolve the project from a simple calculator into a complete Ragnarok Online build and information platform.

Future features may include:

- Multiple private servers
- Renewal support
- Full item database
- Monster and MVP database
- Drop information
- Maps
- Quests
- Crafting
- Advanced damage simulation
- Server-specific formulas
- User accounts
- Cloud builds
- Public build library
- Community build sharing
- Server administrator tools
- Server-customized data packs
- Additional languages
- API access

## Current Status

Early development.

The project currently focuses on establishing the architecture and the first uaRO Pre-Renewal implementation.

Expect incomplete data and functionality while the underlying systems are being developed.

## Data Sources

uaRO-specific information is based on the official uaRO documentation:

https://wiki.uaro.net/

Generic Ragnarok Online data and server-specific modifications are intentionally kept separate.

## Philosophy

The project aims to be:

- Practical
- Organized
- Accurate
- Extensible
- Mobile-friendly
- Server-aware
- Easy to maintain

Most importantly, adding or changing a private server should not require rewriting the calculator.

## License

License to be determined.

Server-specific data, game data and third-party resources may have their own respective licenses and attribution requirements.
