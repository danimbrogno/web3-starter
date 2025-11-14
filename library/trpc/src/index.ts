import { initTRPC } from '@trpc/server';
import { z } from 'zod';

// Re-export client and server utilities
export { createClient } from './client';
export { createServer } from './server';

/**
 * Context type for tRPC
 * Extend this interface to add your own context properties
 */
export interface Context {
  // Add your context properties here
  // Example: user?: User;
}

/**
 * Create tRPC context
 * @param opts - Context creation options
 * @returns Context object
 */
export function createContext(opts?: any): Context {
  // Implement your context creation logic here
  return {};
}

/**
 * Initialize tRPC
 */
const t = initTRPC.context<Context>().create();

/**
 * Base router and procedure exports
 */
export const router = t.router;
export const publicProcedure = t.procedure;

/**
 * Example router - replace with your own routers
 */
export const appRouter = router({
  /**
   * Health check endpoint
   */
  health: publicProcedure.query(() => {
    return {
      status: 'ok',
      timestamp: Date.now(),
    };
  }),

  /**
   * Example query with input validation
   */
  hello: publicProcedure
    .input(
      z.object({
        name: z.string().optional(),
      })
    )
    .query(({ input }) => {
      return {
        message: `Hello, ${input.name ?? 'World'}!`,
      };
    }),

  /**
   * Example mutation
   */
  echo: publicProcedure
    .input(
      z.object({
        message: z.string(),
      })
    )
    .mutation(({ input }) => {
      return {
        echoed: input.message,
        timestamp: Date.now(),
      };
    }),
});

export type AppRouter = typeof appRouter;

/**
 * Legacy compatibility - can be removed if not needed
 */
export interface RpcRequest {
  path: string;
}

export interface RpcResponse {
  message: string;
  timestamp: number;
}

/**
 * Legacy request handler - can be removed if not needed
 */
export function handleRequest(request: RpcRequest): RpcResponse {
  return {
    message: `trpc:${request.path}`,
    timestamp: Date.now(),
  };
}
