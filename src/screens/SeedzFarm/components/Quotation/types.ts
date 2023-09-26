export interface Quotation {
  image: string;
  name: string;
  city: string;
  value: string;
  valueMeasure: string;
  id: string;
  date: string;
  hours: string;
  source: string;
}

export interface Props extends Quotation { }
