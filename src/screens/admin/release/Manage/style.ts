import { Col as OriginalCol } from '~/components/Grid';
import { styled } from '~/theme';

export const Page = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  padding: '20px',
  overflow: 'auto',
});

export const Col = styled(OriginalCol, {
  '&:nth-of-type(2)': {
    marginLeft: 30,
  }
});

export const TitleContainer = styled('div', {
  marginBottom: 30,
  textAlign: 'center',
});

export const LabelContainer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
});

export const SwitchContainer = styled('div', {
  marginTop: 15,
});
