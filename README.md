# Web3 Starter

This repository provides a minimal Turborepo workspace that wires together three applications and four supporting libraries:

- `apps/cli`: simple Node CLI that exercises the shared libraries.
- `apps/main`: React front-end built with Vite.
- `apps/subgraph`: Node bootstrap script for indexing workflows.
- `library/common`: shared utilities.
- `library/contracts`: contract metadata helpers.
- `library/drizzle`: database configuration helpers.
- `library/ponder-config`: helpers for creating Ponder configuration.
- `library/trpc`: lightweight RPC helper used across the workspace.

## Quick Start

```bash
npm install
npm run build
npm run dev
```

## Available Scripts

- `npm run build` - Build all apps and libraries
- `npm run dev` - Start development servers
- `npm run test` - Run tests across all workspaces
- `npm run lint` - Lint all workspaces
- `npm run clean` - Clean build artifacts

Each project is intentionally lightweight and intended to be extended to suit your needs.
