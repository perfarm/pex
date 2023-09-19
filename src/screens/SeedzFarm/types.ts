export interface Quoatation {
  name: string;
  city: string;
  value: string;
  valueMeasure: string;
  id: string;
  date: string;
  source: string;
}

export interface News {
  title: string;
  id: string;
  date: string;
}

export interface Props {
  quoatation: Quoatation;
  news?: News;
}
