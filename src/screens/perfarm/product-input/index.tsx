import useDidMount from 'beautiful-react-hooks/useDidMount';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { RequestError } from '~/commons/api/RequestError';
import { fechProductInput } from '~/commons/api/fechProductInput';
import { saveProductInput } from '~/commons/api/saveProductInput';
import { ProductionInput } from '~/commons/firebase/production-inputs/types';
import { Check } from '~/components/Icons';
import { Error } from '~/components/InputRoot/style';
import { Loader } from '~/components/Loader';
import { ProductInputCard } from '~/components/ProductInputCard';
import { TemplatePerfarm } from '~/components/TemplatePerfarm';
import { toast } from '~/components/Toaster';
import { useAuth } from '~/context/auth/useAuth';
import { Description, List, Title } from './style';

export const ProductInput = () => {
  const [list, setList] = useState<ProductionInput[]>([]);
  const [selected, setSelected] = useState<string>();
  const [btnLoading, setBtnLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const { push } = useRouter();
  const { user, fetchCurrentUser, loading: loadingUser } = useAuth();

  const handleNext = useCallback(async () => {
    if (user?.productionInput) return;

    setFormIsSubmitted(true);

    if (!selected) return;

    setBtnLoading(true);

    try {
      await saveProductInput(selected);
      await fetchCurrentUser();

      toast.success('Insumo salvo com sucesso');

      push('/perfarm/product-input/finish');
    } catch (e) {
      toast.error((e as RequestError).data.message);
    } finally {
      setBtnLoading(false);
    }
  }, [push, fetchCurrentUser, selected, user]);

  useDidMount(async () => {
    if (user?.productionInput) {
      push('/perfarm/product-input/finish');
      return;
    }

    if (loadingUser) {
      return;
    }

    try {
      const response = await fechProductInput();
      setList(response);
    } catch (e) {
      toast.error((e as RequestError).data.message);
    } finally {
      setFetchLoading(false);
    }
  });

  useEffect(() => {
    if (user?.productionInput) {
      push('/perfarm/product-input/finish');
    }
  }, [user, push]);

  return (
    <TemplatePerfarm
      step={1}
      handleNext={handleNext}
      hideBackBtn
      btnNextDescription={
        <>
          <span style={{ marginRight: 10 }}>CONCLUIR</span> <Check color="white" size={24} />
        </>
      }
      isBtnNextLoading={btnLoading}
      isBtnNextDisabled={btnLoading}
    >
      <Title color="$pastureGreen" variant="$headline6">
        INSUMOS
      </Title>
      <Description color="$gray" variant="$body4">
        Agora que você está no controle total da sua produção, é hora de escolher sabiamente. Selecione o kit de insumo
        com as respectivas características da sua escolha:
      </Description>
      {fetchLoading ? (
        <div style={{ marginTop: 30 }}>
          <Loader position="static">Buscando insumos...</Loader>
        </div>
      ) : (
        <>
          <List>
            {list.map(({ image, id, description, name }, index) => (
              <ProductInputCard
                key={`product-input-${index}`}
                onClick={() => setSelected(id)}
                hasError={formIsSubmitted && !selected}
                isActive={selected === id}
                image={image}
                name={name}
                description={description}
              />
            ))}
          </List>
          {formIsSubmitted && !selected && (
            <Error style={{ fontSize: 14, textAlign: 'center' }}>Selecione um insumo</Error>
          )}
        </>
      )}
    </TemplatePerfarm>
  );
};
