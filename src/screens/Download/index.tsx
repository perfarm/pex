import { FC, Fragment, useState } from 'react';

import { Modal } from 'antd';

import useDidMount from 'beautiful-react-hooks/useDidMount';
import { Container, LinkNavigation } from '~/commons/variants/components';
import { Button } from '~/components/Button';
import { FooterRealizationPartners } from '~/components/FooterRealizationPartners';
import { ImgPerfarmExperienceLine } from '~/components/ImgPerfarmExperienceLine';
import { Typography } from '~/components/Typography';
import {
  BodyContent,
  ButtonDownload,
  ButtonGoUrl,
  CancelButton,
  Description,
  IconDownload,
  Img,
  Root,
  Subtitle,
  Title,
} from './style';
import { Props } from './types';

export const ScreenDownload: FC<Props> = ({ isDownloadable }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useDidMount(() => {
    const func = () => {
      setLoading(true);

      setTimeout(() => {
        setIsModalOpen(true);
        setLoading(false);
      }, 12000);
    };

    window.addEventListener('pwainstalled', func);

    return () => window.removeEventListener('pwainstalled', func);
  });

  return (
    <Root>
      <Modal
        title="App instalado com sucesso"
        open={isModalOpen}
        footer={(_, { OkBtn, CancelBtn }) => (
          <Fragment>
            <CancelButton color="gray" size="xsm" variant="outlined" onClick={handleCancel}>
              Fechar
            </CancelButton>
            <LinkNavigation href={`${process.env.NEXT_PUBLIC_URL}/register/profile`} target="_blank">
              <Button color="primary" size="xsm">
                Abrir app
              </Button>
            </LinkNavigation>
          </Fragment>
        )}
      >
        <Typography>
          Parabéns, seu app do Performance Experience foi instalado com sucesso. Clique no botão abaixo para começar a
          usá-lo.
        </Typography>
      </Modal>

      <BodyContent>
        <Container>
          <ImgPerfarmExperienceLine />
          <Title color="$pastureGreen" variant="$body2" weight="$bold">
            27 E 29 DE SETEMBRO
          </Title>
          <Subtitle color="$pastureGreen" variant="$body6" weight="$medium">
            ESPAÇO RIBEIRÃO PRETO - SÃO PAULO
          </Subtitle>
          <Img src="/static/imgs/download.png" alt="phone" />
          <Title color="$pastureGreen" variant="$body2" weight="$bold">
            EXPERIMENTE O FUTURO DA GESTÃO AGRÍCOLA EM APENAS ALGUNS PASSOS SIMPLES!
          </Title>
          <Description variant="$body6" weight="$medium">
            Baixe este aplicativo exclusivo do evento, que oferece uma degustação da poderosa experiência Perfarm.
          </Description>
          {isDownloadable ? (
            <ButtonDownload id="pwaAppInstallBtn" color="primary" showLoader={loading} disabled={loading}>
              BAIXE AGORA O APP
              <IconDownload color="white" size={24} />
            </ButtonDownload>
          ) : (
            <LinkNavigation href={`${process.env.NEXT_PUBLIC_URL}/register/profile`} target="_blank">
              <ButtonGoUrl color="primary" variant="contained">
                Abrir APP
              </ButtonGoUrl>
            </LinkNavigation>
          )}
        </Container>
      </BodyContent>
      <FooterRealizationPartners />
    </Root>
  );
};
