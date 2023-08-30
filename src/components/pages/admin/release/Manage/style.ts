import { styled } from '~/theme';

export const Page = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  padding: '20px',
  justifyContent: 'center',
});

export const Row = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
});

export const Col = styled('div', {
  flex: 1,

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
