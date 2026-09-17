export interface DatedLike { likedAt?: string | null; }
const labels = ['Hoje', 'Ontem', 'Última semana', 'Penúltima semana', 'Três semanas',
  'Quatro semanas', 'Mês passado', 'Dois meses atrás', 'Três meses atrás',
  'Este ano', 'Ano passado', 'Mais de um ano', 'Data não informada'];

function parseDate(value?: string | null): Date | null {
  if (!value) return null;
  // Preserve the calendar date of database timestamps without a timezone.
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})(?:$|[T ])/);
  if (!match) return null;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return date.getFullYear() === Number(match[1]) && date.getMonth() === Number(match[2]) - 1 &&
    date.getDate() === Number(match[3]) ? date : null;
}

export function groupLikes<T extends DatedLike>(works: T[], now = new Date()): { label: string; works: T[] }[] {
  const groups = labels.map(label => ({ label, works: [] as T[] }));
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const sorted = works.map(work => ({ work, date: parseDate(work.likedAt) }))
    .sort((a, b) => (b.date?.getTime() ?? -Infinity) - (a.date?.getTime() ?? -Infinity) ||
      (b.work.likedAt || '').localeCompare(a.work.likedAt || ''));
  for (const { work, date } of sorted) {
    let index = 12;
    if (date) {
      const days = (today - Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())) / 86400000;
      const months = (now.getFullYear() - date.getFullYear()) * 12 + now.getMonth() - date.getMonth();
      if (days < 0) index = 12;
      else if (days === 0) index = 0;
      else if (days === 1) index = 1;
      else if (days <= 7) index = 2;
      else if (days <= 14) index = 3;
      else if (days <= 21) index = 4;
      else if (days <= 28) index = 5;
      else if (months >= 1 && months <= 3) index = 5 + months;
      else if (date.getFullYear() === now.getFullYear()) index = 9;
      else if (date.getFullYear() === now.getFullYear() - 1) index = 10;
      else index = 11;
    }
    groups[index].works.push(work);
  }
  return groups.filter(group => group.works.length > 0);
}
