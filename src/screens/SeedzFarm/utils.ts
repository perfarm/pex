import { coffee, corn, ox, soybean } from '~/commons/mock/news';
import { News } from './components/News/types';
import { Quotation } from './components/Quotation/types';

export const quotationList: Quotation[] = [
  {
    name: 'Soja',
    city: 'Orlândia (SP)',
    value: '130,00',
    valueMeasure: 'sc 60kg',
    id: 'NLu8GbkHTwL8jWzIVsGk',
    date: '18/09/23',
    hours: 'às 11:00',
    source: 'AGROLINK',
  },
  {
    name: 'Cana',
    city: 'São Paulo',
    value: '145,00',
    valueMeasure: 'ton',
    id: 'Q6M2RfEWW2bZpD3er8Vr',
    date: '15/09/23',
    hours: 'às 11:00',
    source: 'CONSECANA SP',
  },
  {
    name: 'Gado',
    city: 'Barretos (SP)',
    value: '220,00',
    valueMeasure: '@',
    id: 'fpVcV41YiBh2ZlGQ2HWA',
    date: '18/09/23',
    hours: 'às 11:02',
    source: 'AGROLINK',
  },
  {
    name: 'Café',
    city: 'Espírito Santo do Pinhal (SP)',
    value: '800,00',
    valueMeasure: 'sc 60kg',
    id: 'xfeRzDp5dN9459o7zXF4',
    date: '19/09/23',
    hours: 'às 11:00',
    source: 'NOTÍCIAS AGRÍCOLAS',
  },
];

export const newsList: News[] = [
  {
    id: 'NLu8GbkHTwL8jWzIVsGk',
    ...soybean,
  },
  {
    id: 'Q6M2RfEWW2bZpD3er8Vr',
    ...corn,
  },
  {
    id: 'fpVcV41YiBh2ZlGQ2HWA',
    ...ox,
  },
  {
    id: 'xfeRzDp5dN9459o7zXF4',
    ...coffee,
  },
];
