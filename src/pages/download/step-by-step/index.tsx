import useDidMount from 'beautiful-react-hooks/useDidMount';
import { useRouter } from 'next/router';
import { Loader } from '~/components/Loader';
import { NextPageWithLayout } from '~/pages/_app';

const StepByStep: NextPageWithLayout = () => {
  const { push } = useRouter();

  useDidMount(() => push('/download/step-by-step/1'));

  return <Loader position="fixed">Carregando...</Loader>;
};

export default StepByStep;
