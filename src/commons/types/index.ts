import { Prefixed } from '@stitches/react/types/util';

import { theme } from '~/theme';

export type CommonSize = 'small' | 'medium' | 'large';
export type CommonPaletteColors = 'primary' | 'secondary' | 'error' | 'gray' | 'success';
export type CommonDescription = string | JSX.Element;

export type Colors = Prefixed<'$', keyof typeof theme.colors>;
