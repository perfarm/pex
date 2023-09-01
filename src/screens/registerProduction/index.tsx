import useDidMount from 'beautiful-react-hooks/useDidMount';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { RequestError } from '~/commons/api/RequestError';
import { fetchProducts } from '~/commons/api/fechProducts';
import { ProductItem } from '~/commons/api/fechProducts/types';
import { postRegisterProduct } from '~/commons/api/postRegisterProduct';
import { IconRight } from '~/commons/variants/components';
import { TemplateFlowStep } from '~/components/TemplateFlowStep';
import { toast } from '~/components/Toaster';
import { Description, Img, ImgContent, List, ListItem } from './style';

const listProductions = [
  {
    img: '/imgs/icons/soja.png',
    label: 'SOJA',
    id: 'soja',
  },
  {
    img: '/imgs/icons/cafe.png',
    label: 'CAFÉ',
    id: 'cafe',
  },
  {
    img: '/imgs/icons/cana.png',
    label: 'CANA',
    id: 'cana',
  },
  {
    img: '/imgs/icons/gado.png',
    label: 'GADO',
    id: 'gado',
  },
];

export const ScreenRegisterProduction = () => {
  const [list, setList] = useState<ProductItem[]>([]);
  const [selected, setSelected] = useState('');

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  const { push } = useRouter();

  const handleSelectProduct = useCallback((value: string) => {
    setSelected(value);
    setBtnDisabled(false);
  }, []);

  const handleBack = useCallback(() => {
    push('/register/profile');
  }, [push]);

  const handleSubmit = useCallback(async () => {
    setBtnLoading(true);

    try {
      await postRegisterProduct(selected);

      push('/register/completed');
    } catch (e) {
      toast.error((e as RequestError).data.message);
    } finally {
      setBtnLoading(false);
    }
  }, [push, selected]);

  useDidMount(async () => {
    const response = await fetchProducts();
    setList(response);
  });

  return (
    <TemplateFlowStep
      title="CREDENCIAMENTO"
      subtitle="Escolha a sua produção:"
      step={2}
      handleNext={handleSubmit}
      handleBack={handleBack}
      isBtnNextDisabled={btnDisabled}
      isBtnNextLoading={btnLoading}
      btnNextDescription={
        <>
          AVANÇAR <IconRight color="white" size={24} />
        </>
      }
    >
      <List>
        {list?.map(({ image, id, name }, index) => (
          <ListItem key={`list-item-${index}`} onClick={() => handleSelectProduct(id)} isActive={selected === id}>
            <ImgContent>
              <Img src={image} alt={name} width={35} height={35} />
            </ImgContent>
            <Description variant="$body3" weight="$bold">
              {name}
            </Description>
          </ListItem>
        ))}
      </List>
    </TemplateFlowStep>
  );
};
