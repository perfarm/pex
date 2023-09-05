import { CardProduct } from '~/components/CardProduct';

import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

import { Row as OriginalRow } from '~/components/Grid';
import { TwoColorsContainer as OriginalTwoColorsContainer } from '~/components/TwoColorsContainer';

import { RefreshButton as OriginalRefreshButton } from '../admin/release/Manage/components/Users/style';

const paddingX = '30px';

const Content = styled('div', {
  display: 'flex',
  flex: 1,
});

const zIndexGreaterThanTimeline = styled('div');

export const TwoColorsContainer = styled(OriginalTwoColorsContainer, {
  background: 'linear-gradient(var(--colors-pastureGreen) 140px, var(--colors-lighterGray) 20px)',
  padding: '30px 0',
});

export const Root = styled('div');

export const Container = styled('div', {
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
});

export const Br = styled('br');

export const Title = styled(Typography, zIndexGreaterThanTimeline, {
});

export const Subtitle = styled(Typography, zIndexGreaterThanTimeline, {
  marginTop: 5,
});

export const HeaderCardProduct = styled(CardProduct);

export const HeaderContent = styled('div', {
  padding: `0 30px`,
});

export const BodyContent = styled(Content, {
  padding: `30px ${paddingX} 0 ${paddingX}`,
});

export const ScheduleList = styled('div', {
  maxWidth: '$minScreenWidth',

  marginTop: 15,
  display: 'flex',
  flexDirection: 'column',
});

export const Row = styled(OriginalRow, {
  padding: '0 30px',
});

export const RefreshButton = styled(OriginalRefreshButton, {
  backgroundColor: 'transparent !important',
  border: 'none',
});
