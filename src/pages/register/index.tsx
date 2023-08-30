import usePreviousValue from 'beautiful-react-hooks/usePreviousValue';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { translate } from '~/commons/storage/release/types';
import { Toast, toast } from '~/components/Toaster';
import { useReleaseSocketWithStorage } from '~/hooks/useReleaseSocketWithStorage';

export default function Register() {
  const { push } = useRouter();
  const { currentFeatureIndex, feature, releasedFeature, message } = useReleaseSocketWithStorage();
  const oldReleasedFeature = usePreviousValue(releasedFeature);

  const goToInstallPage = () => push('/install');
  const goToSchedulePage = () => push('/schedule');

  useEffect(() => {
    if (oldReleasedFeature !== releasedFeature) {
      const name = translate(releasedFeature);
      toast.custom((t) => {
        t.message = (
          <p>
            Nova funcionalidade liberada: <b>{name}</b>
          </p>
        );
        return <Toast toast={t} />;
      });
    }
  }, [oldReleasedFeature, releasedFeature]);

  return (
    <div>
      Register Screen - {currentFeatureIndex}
      <br />
      <br />
      Message - {message}
      <br />
      <br />
      Liberado - {releasedFeature}
      <br />
      <br />
      ---- FEATURES ----
      <br />
      <br />
      {Object.entries(feature).map(([key, value], index) => (
        <Fragment key={`${key}-${index}`}>
          <div>
            {key} - {String(value)}
          </div>
          <br />
        </Fragment>
      ))}
      <button onClick={goToInstallPage}>Ir tela instalção</button>
      <button onClick={goToSchedulePage}>Ir tela Cronograma</button>
    </div>
  );
}
