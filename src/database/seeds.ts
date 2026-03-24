import { getDatabase } from './connection';
import {
  DEFAULT_INCOME_CATEGORIES,
  DEFAULT_EXPENSE_CATEGORIES,
} from '../utils/constants';
import { generateId } from '../utils/generators';

/**
 * Insere as categorias predefinidas na base de dados.
 * Só executa se ainda não existirem categorias.
 */
export async function seedCategories(): Promise<void> {
  const database = await getDatabase();

  // Check if categories already exist
  const count = await database.getFirstAsync<{ count: number }>(
    'SELECT COUNT(*) as count FROM categories'
  );

  if (count && count.count > 0) {
    return; // Categories already seeded
  }

  await database.withTransactionAsync(async () => {
    // Insert income categories
    for (const category of DEFAULT_INCOME_CATEGORIES) {
      await database.runAsync(
        `INSERT INTO categories (id, name, type, icon, is_custom, sort_order)
         VALUES (?, ?, 'income', ?, 0, ?)`,
        generateId(),
        category.name,
        category.icon,
        category.sortOrder
      );
    }

    // Insert expense categories
    for (const category of DEFAULT_EXPENSE_CATEGORIES) {
      await database.runAsync(
        `INSERT INTO categories (id, name, type, icon, is_custom, sort_order)
         VALUES (?, ?, 'expense', ?, 0, ?)`,
        generateId(),
        category.name,
        category.icon,
        category.sortOrder
      );
    }
  });
}

/**
 * Seed para criar uma conta de teste (opcional, para desenvolvimento).
 */
export async function seedTestAccount(): Promise<void> {
  const database = await getDatabase();

  const count = await database.getFirstAsync<{ count: number }>(
    'SELECT COUNT(*) as count FROM accounts WHERE is_deleted = 0'
  );

  if (count && count.count > 0) {
    return; // Account already exists
  }

  await database.runAsync(
    `INSERT INTO accounts (id, name, balance, color, icon)
     VALUES (?, ?, ?, ?, ?)`,
    generateId(),
    'Carteira',
    0,
    '#3B82F6',
    'wallet'
  );
}
