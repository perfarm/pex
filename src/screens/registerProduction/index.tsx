import useDidMount from 'beautiful-react-hooks/useDidMount';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { RequestError } from '~/commons/api/RequestError';
import { fetchProducts } from '~/commons/api/fechProducts';
import { ProductItem } from '~/commons/api/fechProducts/types';
import { postRegisterProduct } from '~/commons/api/postRegisterProduct';
import { IconRight } from '~/commons/variants/components';
import { CardProduct } from '~/components/CardProduct';
import { TemplateFlowStep } from '~/components/TemplateFlowStep';
import { toast } from '~/components/Toaster';
import { List } from './style';

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

  const handleBack = useCallback(() => push('/register/profile'), [push]);

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
          <CardProduct
            key={`list-item-${index}`}
            onClick={() => handleSelectProduct(id)}
            isActive={selected === id}
            image={image}
            name={name}
          />
        ))}
      </List>
    </TemplateFlowStep>
  );
};
