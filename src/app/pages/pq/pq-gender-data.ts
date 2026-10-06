export interface GenderScholar { bs_nome: string; bs_genero?: string | null; bs_start: string; bs_finish: string; }
export const GENDERS = [
  { code: 'F', label: 'Feminino', icon: 'bi-gender-female', color: 'var(--pq-series-2)' },
  { code: 'M', label: 'Masculino', icon: 'bi-gender-male', color: 'var(--pq-series-1)' },
  { code: 'X', label: 'Não informado / indefinido', icon: 'bi-question-circle', color: 'var(--pq-series-5)' },
];
export function genderCounts(records: GenderScholar[]) {
  const people = new Map<string, GenderScholar>();
  for (const record of records) {
    const key = record.bs_nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
    if (!key) continue;
    const previous = people.get(key);
    if (!previous || record.bs_start > previous.bs_start) people.set(key, record);
  }
  const total = people.size;
  return { total, groups: GENDERS.map((gender) => {
    const count = [...people.values()].filter((record) => {
      const code = record.bs_genero?.trim().toUpperCase();
      return (code === 'F' || code === 'M' ? code : 'X') === gender.code;
    }).length;
    return { ...gender, count, percentage: total ? count / total * 100 : 0 };
  }) };
}
export function genderHistory(records: GenderScholar[], currentYear: number, activeRecords: GenderScholar[]) {
  const dated = records.filter((record) => /^\d{4}-\d{2}-\d{2}$/.test(record.bs_start) && /^\d{4}-\d{2}-\d{2}$/.test(record.bs_finish) && record.bs_start <= record.bs_finish);
  if (!dated.length && !activeRecords.length) return [];
  const first = Math.min(currentYear, ...dated.map((record) => Number(record.bs_start.slice(0, 4))));
  const last = currentYear;
  return Array.from({ length: Math.max(0, last - first + 1) }, (_, index) => {
    const year = first + index;
    // The API's active list is authoritative for the current year; the history
    // can include scholarships that have already ended or have not yet begun.
    const snapshot = `${year}-12-31`;
    const people = year === currentYear ? activeRecords
      : dated.filter((record) => record.bs_start <= snapshot && record.bs_finish >= snapshot);
    return { year, ...genderCounts(people) };
  });
}
