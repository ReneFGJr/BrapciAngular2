import type { PqApplications } from './pq-applications.component';

export const MISSING = 'Não informado';
export type CrossingDimension = 'genero' | 'regiao' | 'instituicao';
export type LevelClassification = 'todos' | 'atual' | 'antiga' | 'outros';
export interface CrossingScholar {
  bs_nome: string; bs_genero?: string | null; bs_nivel: string;
  bs_start: string; bs_finish: string; BS_IES: string;
}
export function clean(value: string | null | undefined): string {
  const text = String(value ?? '').trim();
  return !text || /^(NI|N\/A|NULL|UNDEFINED|NÃO INFORMAD[OA])$/i.test(text) ? MISSING : text;
}
export function classification(level: string): LevelClassification {
  if (['A', 'B', 'C'].includes(clean(level).toUpperCase())) return 'atual';
  if (/^(1[ABCD]|2[ABC]?)$/.test(clean(level).toUpperCase())) return 'antiga';
  return 'outros';
}
export function historicalRecords(history: PqApplications): CrossingScholar[] {
  return Object.values(history).flatMap((year) =>
    [...(year.novas ?? []), ...(year.reconcedidas ?? []), ...(year.novas_apos_interrupcao ?? [])]
      .map((item) => ({ bs_nome: item.nome, bs_genero: item.bs_genero, bs_nivel: item.nivel,
        bs_start: item.inicio, bs_finish: item.fim, BS_IES: item.ies })));
}
export function validDates(item: CrossingScholar): boolean {
  const valid = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value ?? '') &&
    Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
  return valid(item.bs_start) && valid(item.bs_finish) && item.bs_start <= item.bs_finish;
}
export function snapshot(records: CrossingScholar[], date?: string): CrossingScholar[] {
  const people = new Map<string, CrossingScholar>();
  for (const item of records) {
    if (date && (!validDates(item) || item.bs_start > date || item.bs_finish < date)) continue;
    const key = item.bs_nome?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
    if (!key) continue;
    const previous = people.get(key);
    if (!previous || item.bs_start > previous.bs_start) people.set(key, item);
  }
  return [...people.values()];
}
export function crossingRows(records: CrossingScholar[], levels: string[], category: (item: CrossingScholar) => string) {
  const groups = new Map<string, Map<string, number>>();
  for (const item of records) {
    const level = clean(item.bs_nivel).toUpperCase();
    const normalizedLevel = level === MISSING.toUpperCase() ? MISSING : level;
    if (!levels.includes(normalizedLevel)) continue;
    const label = category(item);
    const counts = groups.get(label) ?? new Map<string, number>();
    counts.set(normalizedLevel, (counts.get(normalizedLevel) ?? 0) + 1);
    groups.set(label, counts);
  }
  return [...groups].map(([label, counts]) => {
    const total = [...counts.values()].reduce((sum, count) => sum + count, 0);
    return { label, total, cells: levels.map((level) => {
      const count = counts.get(level) ?? 0;
      return { level, count, percentage: total ? count / total * 100 : 0 };
    }) };
  }).sort((a, b) => b.total - a.total || a.label.localeCompare(b.label, 'pt-BR'));
}
