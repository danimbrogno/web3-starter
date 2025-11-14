import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

/**
 * Example schema - replace with your own tables
 */
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

/**
 * Database configuration
 */
export interface DatabaseConfig {
  connectionString: string;
}

/**
 * Get default database configuration
 * @param overrides - Optional configuration overrides
 * @returns Database configuration
 */
export function getDrizzleConfig(overrides: Partial<DatabaseConfig> = {}): DatabaseConfig {
  const defaultConfig: DatabaseConfig = {
    connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/app',
  };
  return { ...defaultConfig, ...overrides };
}

/**
 * Export schema for use in migrations
 */
export const schema = {
  users,
};
