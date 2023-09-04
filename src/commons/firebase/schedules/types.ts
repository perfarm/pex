export type Status = 'IN_PROGRESS' | 'FINALIZED' | 'PENDING';

export type Schedule = {
  id?: string;
  hasAction?: boolean;
  description?: string;
  title: string;
  time: string;
  status: Status;
  speaker?: string;
  order: number
  section?: string;
}

export const translate = (status: Status) => {
  if (status === 'PENDING') return 'Programação';
  if (status === 'FINALIZED') return 'Finalizado';

  return 'Em andamento';
}