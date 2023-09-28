import { coffee, corn, ox, soybean } from '~/commons/mock/news';
import { News } from './components/News/types';
import { Quotation } from './components/Quotation/types';

export const quotationList: Quotation[] = [
  {
    image: 'https://atomic-public.s3.sa-east-1.amazonaws.com/pex/quotation-icon/soybean.png',
    name: 'Soja',
    city: 'Ribeirão Preto (SP)',
    value: '130,00',
    valueMeasure: 'sc 60kg',
    id: 'NLu8GbkHTwL8jWzIVsGk',
    date: '28/09/23',
    hours: 'às 08:00',
    source: 'PERFARM',
  },
  {
    image: 'https://atomic-public.s3.sa-east-1.amazonaws.com/pex/quotation-icon/cana.png',
    name: 'Cana',
    city: 'Ribeirão Preto (SP)',
    value: '145,00',
    valueMeasure: 'ton',
    id: 'Q6M2RfEWW2bZpD3er8Vr',
    date: '28/09/23',
    hours: 'às 08:00',
    source: 'PERFARM',
  },
  {
    image: 'https://atomic-public.s3.sa-east-1.amazonaws.com/pex/quotation-icon/ox.png',
    name: 'Gado',
    city: 'Ribeirão Preto (SP)',
    value: '220,00',
    valueMeasure: '@',
    id: 'fpVcV41YiBh2ZlGQ2HWA',
    date: '28/09/23',
    hours: 'às 08:02',
    source: 'PERFARM',
  },
  {
    image: 'https://atomic-public.s3.sa-east-1.amazonaws.com/pex/quotation-icon/coffee.png',
    name: 'Café',
    value: '800,00',
    city: 'Ribeirão Preto (SP)',
    valueMeasure: 'sc 60kg',
    id: 'xfeRzDp5dN9459o7zXF4',
    date: '28/09/23',
    hours: 'às 08:00',
    source: 'PERFARM',
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
