import * as Crypto from 'expo-crypto';

/**
 * Gera um ID único UUID v4.
 */
export function generateId(): string {
  return Crypto.randomUUID();
}
