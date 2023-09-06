import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

import { TwoColorsContainer as OriginalTwoColorsContainer } from '~/components/TwoColorsContainer';

export const TwoColorsContainer = styled(OriginalTwoColorsContainer, {
  background: 'linear-gradient(var(--colors-pastureGreen) 240px, var(--colors-lighterGray) 20px)',
  padding: 30,
});

export const Page = styled('div', {
  minHeight: '100vh',
  justifyContent: 'center',
  overflow: 'auto',
});

export const TitleContainer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-start',
  marginBottom: 30,
});

export const ImageContainer = styled('div', {
  height: 160,
  borderRadius: '$5',
});

export const ImageContent = styled('div', {
  borderRadius: '$5',
  backgroundSize: 'cover',
  height: '100%',
});

export const Title = styled(Typography, {
  marginTop: 15,
});

export const Description = styled(Typography, {
  marginTop: 15,
  whiteSpace: 'break-spaces',
  textAlign: 'center',
});

export const CaretParent = styled('div', {
  transition: 'transform 0.1s',
  variants: {
    isActive: {
      true: {
        transform: 'rotate(90deg)',
      },
      false: {
        transform: 'rotate(0deg)',
      }
    },
  },
});

export const Image = styled('img', {
  maxWidth: '100%',
});

export const RewardValue = styled(Description, { marginTop: 0 });

export const CollapseDecription = styled('div', {
  transition: 'height 0.3s',
  overflow: 'hidden',
  textAlign: 'center',
  height: 0,
  variants: {
    isActive: {
      true: {
        height: 'auto',
      },
      false: {
        height: 0,
      }
    },
  },
});

export const CollapseText = styled(Typography, {
  paddingTop: 30,
});