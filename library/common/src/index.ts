/**
 * Generic TypeScript library utilities
 */

/**
 * Formats a message with a source identifier
 * @param source - The source identifier
 * @returns Formatted message string
 */
export function formatMessage(source: string): string {
  return `Hello from ${source}!`;
}

/**
 * Library version
 */
export const version = '0.0.1';

/**
 * Utility function to check if a value is defined
 * @param value - Value to check
 * @returns True if value is not null or undefined
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * Utility function to create a delay
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after the delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Utility function to retry an async operation
 * @param fn - Function to retry
 * @param retries - Number of retries
 * @param delayMs - Delay between retries in milliseconds
 * @returns Result of the function
 */
export async function retry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delayMs: number = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0) {
      await delay(delayMs);
      return retry(fn, retries - 1, delayMs);
    }
    throw error;
  }
}
