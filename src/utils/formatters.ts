/**
 * Formata um valor numérico para moeda EUR (Português)
 * Exemplo: 1250.5 -> "1.250,50 €"
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Formata um valor numérico paramoeda EUR sem o símbolo
 * Exemplo: 1250.5 -> "1.250,50"
 */
export function formatCurrencyWithoutSymbol(value: number): string {
  return new Intl.NumberFormat('pt-PT', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Formata uma data para o formato DD/MM/YYYY
 * Exemplo: "2026-03-24" -> "24/03/2026"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-PT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

/**
 * Formata uma data para o formato de mês/ano
 * Exemplo: "2026-03-24" -> "Março 2026"
 */
export function formatMonthYear(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-PT', {
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/**
 * Formata uma data para o formato curto de dia/mês
 * Exemplo: "2026-03-24" -> "24 Mar"
 */
export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-PT', {
    day: '2-digit',
    month: 'short',
  }).format(date);
}

/**
 * Retorna o nome do mês em português
 */
export function getMonthName(month: number): string {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  return months[month - 1] || '';
}

/**
 * Retorna a data atual no formato YYYY-MM-DD
 */
export function getCurrentDateString(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Retorna o mês e ano atuais
 */
export function getCurrentMonthAndYear(): { month: number; year: number } {
  const now = new Date();
  return {
    month: now.getMonth() + 1,
    year: now.getFullYear(),
  };
}
