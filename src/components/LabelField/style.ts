import { variantFontSize } from '~/commons/variants/sizes';
import { styled } from '~/theme';

export const Root = styled('label', variantFontSize, {
  alignItems: 'center',
  color: '$gray700',
  display: 'flex',
  marginBottom: '$1',

  defaultVariants: { size: 'medium' },
});

export const Icon = styled('span', {
  marginLeft: '$3',
});

export const OptionalDescription = styled('span', {
  color: '$gray400',
  marginLeft: '$3',
});
