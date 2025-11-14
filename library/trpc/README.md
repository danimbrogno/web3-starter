# tRPC

Starter tRPC infrastructure that can be used in apps/subgraph as the API layer.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the library:
```bash
npm run build
```

## Usage

### Server (in apps/subgraph)

```typescript
import { createServer } from '@project/trpc/server';

// Start tRPC server
const server = createServer(3000);
```

### Client

```typescript
import { createClient } from '@project/trpc/client';

const client = createClient('http://localhost:3000');

// Use the client
const health = await client.health.query();
const hello = await client.hello.query({ name: 'World' });
const echo = await client.echo.mutate({ message: 'Hello!' });
```

### Custom Routers

Extend the base router in `src/index.ts`:

```typescript
import { router, publicProcedure } from '@project/trpc';
import { z } from 'zod';

export const customRouter = router({
  myQuery: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      // Your logic here
      return { id: input.id };
    }),
});

// Merge with appRouter
export const appRouter = router({
  ...customRouter,
  // ... other routers
});
```

## Integration with apps/subgraph

In your Ponder application, you can use tRPC as the API layer:

```typescript
// In apps/subgraph/src/api.ts
import { createServer } from '@project/trpc/server';

export function startApiServer() {
  return createServer(3000);
}
```
