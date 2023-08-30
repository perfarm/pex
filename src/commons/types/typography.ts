import { Prefixed } from '@stitches/react/types/util';

import { theme } from '~/theme';

export type FontWeight = Prefixed<'$', keyof typeof theme.fontWeights>;
export type FontSizes = Prefixed<'$', keyof typeof theme.fontSizes>;
export type HtmlTextTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span' | 'strong';
