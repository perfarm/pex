import { variantFontSize, variantPadding } from '~/commons/variants/sizes';
import { styled } from '~/theme';

export const Input = styled('input', variantFontSize, variantPadding, {
  backgroundColor: 'transparent',
  border: 'none',
  flex: 1,
  outline: 'none',
  minHeight: '40px',
});
