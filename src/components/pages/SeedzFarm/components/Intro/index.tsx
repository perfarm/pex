import { FC } from 'react';

import { Card } from '~/components/Card';
import { Download } from '~/components/Icons/Download';
import { SeedzFarmLogo } from '~/components/Icons/SeedzFarmLogo';
import { Typography } from '~/components/Typography';

import { Button, TwoColorsContainer } from './style';

export const Intro: FC = () => (
  <TwoColorsContainer>
    <Card style={{ maxWidth: 500, padding: 30, width: '100%' }}>
      <div style={{ textAlign: 'center' }}>
        <SeedzFarmLogo />
      </div>
      <div style={{ textAlign: 'center', marginTop: 10 }}>
        <Typography variant="$body5">
          Acesse as cotações, clima da sua região, as últimas notícias sobre o agro e compartilhe suas experiências no
          nosso social, além de muitos outros recursos disponíveis. Veja abaixo uma amostra que preparamos para você.
        </Typography>
      </div>
      <a href="https://atomic-alternate.app.link" target="_blank" style={{ textDecoration: 'none' }}>
        <Button size="sm" color="primary" fullWidth>
          Baixar Agora
          <div style={{ display: 'inline-block', marginLeft: 10 }}>
            <Download />
          </div>
        </Button>
      </a>
    </Card>
  </TwoColorsContainer>
);
