import * as SQLite from 'expo-sqlite';
import { DATABASE_NAME } from '../utils/constants';

let db: SQLite.SQLiteDatabase | null = null;

/**
 * Obtém a instância da base de dados SQLite.
 * Cria a BD se ainda não existir.
 */
export async function getDatabase(): Promise<SQLite.SQLiteDatabase> {
  if (db) {
    return db;
  }

  db = await SQLite.openDatabaseAsync(DATABASE_NAME);
  return db;
}

/**
 * Fecha a ligação à base de dados.
 */
export async function closeDatabase(): Promise<void> {
  if (db) {
    await db.closeAsync();
    db = null;
  }
}

/**
 * Executa uma query SQL que não retorna dados (INSERT, UPDATE, DELETE).
 */
export async function runAsync(
  sql: string,
  ...params: (string | number | boolean | null)[]
): Promise<SQLite.SQLiteRunResult> {
  const database = await getDatabase();
  return database.runAsync(sql, ...params);
}

/**
 * Executa uma query SQL e retorna todos os resultados.
 */
export async function getAllAsync<T>(
  sql: string,
  ...params: (string | number | boolean | null)[]
): Promise<T[]> {
  const database = await getDatabase();
  return database.getAllAsync<T>(sql, ...params);
}

/**
 * Executa uma query SQL e retorna o primeiro resultado.
 */
export async function getFirstAsync<T>(
  sql: string,
  ...params: (string | number | boolean | null)[]
): Promise<T | null> {
  const database = await getDatabase();
  return database.getFirstAsync<T>(sql, ...params);
}
