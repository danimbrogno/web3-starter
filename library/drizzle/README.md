# Drizzle

Barebones Drizzle ORM tooling for managing database models and migrations.

## Setup

1. Set your `DATABASE_URL` environment variable:
```bash
export DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

2. Define your schema in `src/index.ts`

3. Generate migrations:
```bash
npm run db:generate
```

4. Run migrations:
```bash
npm run db:migrate
```

## Usage

### Generate Migrations
```bash
npm run db:generate
```

### Run Migrations
```bash
npm run db:migrate
```

### Push Schema (Development)
```bash
npm run db:push
```

### Open Drizzle Studio
```bash
npm run db:studio
```

## Example

```typescript
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { schema } from '@project/drizzle';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool, { schema });

// Use db to query your tables
const allUsers = await db.select().from(schema.users);
```
