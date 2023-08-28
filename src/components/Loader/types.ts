import { CSSProperties, PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  position?: Extract<CSSProperties['position'], 'fixed' | 'static' | 'absolute'>;
}
