# Subgraph

A Ponder.sh boilerplate application for indexing blockchain events.

## Setup

1. Copy `.env.example` to `.env` and fill in your RPC URL:
```bash
cp .env.example .env
```

2. Install dependencies:
```bash
npm install
```

3. Configure your contracts in `ponder.config.ts`

4. Define your schema in `schema.graphql`

5. Implement event handlers in `src/index.ts`

## Usage

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

### Code Generation
```bash
npm run codegen
```

## Documentation

See [Ponder.sh documentation](https://ponder.sh/docs) for more information.
