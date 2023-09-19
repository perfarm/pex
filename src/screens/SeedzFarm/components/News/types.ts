export interface News {
  title: string;
  id: string;
  date: string;
  image: string;
  source: string;
  description: string;
}

export interface Props extends News {}
