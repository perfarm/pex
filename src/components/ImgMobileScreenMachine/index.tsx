import { FC } from 'react';
import { Background, ImageMachine, Root } from './style';

export const ImgMobileScreenMachine: FC = () => (
  <Root>
    <Background src="/imgs/banners/background-bubble.svg" alt="Background Bubble" width={320} height={268} />
    <ImageMachine
      src="/imgs/banners/mobile-screen-machine.png"
      alt="Tela de Seleção de maquina agrícola"
      width={242}
      height={372}
    />
  </Root>
);
