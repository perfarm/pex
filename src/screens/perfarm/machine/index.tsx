import useDidMount from 'beautiful-react-hooks/useDidMount';
import { useRouter } from 'next/router';
import { FC, useCallback, useEffect, useState } from 'react';
import { RequestError } from '~/commons/api/RequestError';
import { fetchMachines } from '~/commons/api/fetchMachines';
import { saveMachine } from '~/commons/api/saveMachine';
import { Machine as MachineDef } from '~/commons/firebase/machines/types';
import { Check } from '~/components/Icons';
import { Error } from '~/components/InputRoot/style';
import { Loader } from '~/components/Loader';
import { ProductInputCard } from '~/components/ProductInputCard';
import { TemplatePerfarm } from '~/components/TemplatePerfarm';
import { toast } from '~/components/Toaster';
import { useAuth } from '~/context/auth/useAuth';
import { Description, List, Title } from './style';

export const Machine: FC = () => {
  const [list, setList] = useState<MachineDef[]>([]);
  const [selected, setSelected] = useState<string>();
  const [btnLoading, setBtnLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const { push } = useRouter();
  const { user, fetchCurrentUser, loading: loadingUser } = useAuth();

  const handleNext = useCallback(async () => {
    if (user?.machine) return;

    setFormIsSubmitted(true);

    if (!selected) return;

    setBtnLoading(true);

    try {
      await saveMachine(selected);
      await fetchCurrentUser();

      toast.success('Maquinário salvo com sucesso');

      push('/perfarm/machine/finish');
    } catch (e) {
      toast.error((e as RequestError).data.message);
    } finally {
      setBtnLoading(false);
    }
  }, [push, fetchCurrentUser, selected, user]);

  useDidMount(async () => {
    if (user?.machine) {
      push('/perfarm/machine/finish');
      return;
    }

    if (loadingUser) {
      return;
    }

    try {
      const response = await fetchMachines();
      setList(response);
    } catch (e) {
      toast.error((e as RequestError).data.message);
    } finally {
      setFetchLoading(false);
    }
  });

  useEffect(() => {
    if (user?.machine) {
      push('/perfarm/machine/finish');
    }
  }, [user, push]);

  return (
    <TemplatePerfarm
      step={2}
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
        MAQUINÁRIOS
      </Title>
      <Description color="$gray" variant="$body4">
        Chegou a hora de decidir sobre ter operações terceirizadas ou próprias, com menores ou maiores custos
        administrativos, respectivamente:
      </Description>
      {fetchLoading || loadingUser ? (
        <div style={{ marginTop: 30 }}>
          <Loader position="static">Buscando máquinas...</Loader>
        </div>
      ) : (
        <>
          <List>
            {list.map(({ image, id, description, name }, index) => (
              <ProductInputCard
                key={`machine-${index}`}
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
            <Error style={{ fontSize: 14, textAlign: 'center' }}>Selecione uma maquinário</Error>
          )}
        </>
      )}
    </TemplatePerfarm>
  );
};
