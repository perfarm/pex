import { css } from '~/theme';

export const variantFontSize = css({
  defaultVariants: {
    size: 'medium',
  },
  variants: {
    size: {
      large: {
        fontSize: '$description2',
      },
      medium: {
        fontSize: '$body2',
      },
      small: {
        fontSize: '$body5',
      },
    },
  },
});

export const variantPadding = css({
  defaultVariants: {
    size: 'medium',
  },
  variants: {
    size: {
      large: {
        padding: '$4',
      },
      medium: {
        padding: '$3',
      },
      small: {
        padding: '$2 $3',
      },
    },
  },
});
