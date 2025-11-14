import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter, createContext } from './index';

/**
 * Create and configure tRPC HTTP server
 * @param port - Port to listen on (default: 3000)
 * @returns HTTP server instance
 */
export function createServer(port: number = 3000) {
  return createHTTPServer({
    router: appRouter,
    createContext,
  }).listen(port, () => {
    console.log(`tRPC server listening on http://localhost:${port}`);
  });
}

/**
 * Example usage in apps/subgraph:
 *
 * import { createServer } from '@project/trpc/server';
 *
 * const server = createServer(3000);
 */
