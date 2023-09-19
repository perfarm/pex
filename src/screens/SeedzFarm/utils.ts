import NewsMock from '~/commons/mock/news';
import { News } from './components/News/types';
import { Quotation } from './components/Quotation/types';

export const quotationList: Quotation[] = [
  {
    name: 'Soja',
    city: 'Orlândia (SP)',
    value: '137,50',
    valueMeasure: 'sc 60kg',
    id: 'NLu8GbkHTwL8jWzIVsGk',
    date: '18/09/23',
    hours: 'às 11:00',
    source: 'AGROLINK',
  },
  {
    name: 'Cana',
    city: 'São Paulo',
    value: '1,19',
    valueMeasure: 'KG/ton',
    id: 'Q6M2RfEWW2bZpD3er8Vr',
    date: '15/09/23',
    hours: 'às 11:00',
    source: 'CONSECANA SP',
  },
  {
    name: 'Gado',
    city: 'Barretos (SP)',
    value: '200,00',
    valueMeasure: '1 Arroba',
    id: 'fpVcV41YiBh2ZlGQ2HWA',
    date: '18/09/23',
    hours: 'às 11:02',
    source: 'AGROLINK',
  },
  {
    name: 'Café',
    city: 'Espírito Santo do Pinhal (SP)',
    value: '830,00',
    valueMeasure: 'sc 60kg',
    id: 'xfeRzDp5dN9459o7zXF4',
    date: '19/09/23',
    hours: 'às 11:00',
    source: 'NOTÍCIAS AGRÍCOLAS',
  },
];

export const newsList: News[] = [
  {
    title: `Soja - ${NewsMock.title}`,
    id: 'NLu8GbkHTwL8jWzIVsGk',
    date: 'Ontem',
    image: NewsMock.image,
    description: NewsMock.content,
    source: NewsMock.source,
  },
  {
    title: `Cana - ${NewsMock.title}`,
    id: 'Q6M2RfEWW2bZpD3er8Vr',
    date: 'Ontem',
    image: NewsMock.image,
    description: NewsMock.content,
    source: NewsMock.source,
  },
  {
    title: `Gado - ${NewsMock.title}`,
    id: 'fpVcV41YiBh2ZlGQ2HWA',
    date: 'Ontem',
    image: NewsMock.image,
    description: NewsMock.content,
    source: NewsMock.source,
  },
  {
    title: `Café - ${NewsMock.title}`,
    id: 'xfeRzDp5dN9459o7zXF4',
    date: 'Ontem',
    image: NewsMock.image,
    description: NewsMock.content,
    source: NewsMock.source,
  },
];
