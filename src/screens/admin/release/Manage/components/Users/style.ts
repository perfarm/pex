import { Button } from '~/components/Button';
import { styled } from '~/theme';

import { keyframes } from '@stitches/react';
import { ArrowClockwise } from '~/components/Icons';
import { TitleContainer as OriginalTitleContainer } from '~/screens/admin/release/Manage/style';

export const Header = styled('div', {
  display: 'flex',
  width: '100%',
});

export const TitleContainer = styled(OriginalTitleContainer, {
  flex: 1,
});

export const RefreshButton = styled(Button);

const animateLoading = keyframes({
  from: {
    transform: 'rotate(0)',
    transformOrigin: 'center',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

export const IconLoading = styled(ArrowClockwise, {
  variants: {
    loading: {
      true: {
        animation: `${animateLoading} .6s linear infinite`,
      },
    },
  },
});
