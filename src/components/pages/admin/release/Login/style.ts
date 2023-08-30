import { styled } from '~/theme';

export const Form = styled('form', {
  bottom: 0,
  display: 'flex',
  height: 75,
  position: 'absolute',
  width: '100%',
});

export const TabRoot = styled('div', {
  background: '#FFF',
  bottom: 0,
  display: 'flex',
  height: 75,
  position: 'fixed',
  width: '100%',
});

export const Tab = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: 75,

  a: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start',
    paddingTop: 10,
    width: '100%',
    textDecoration: 'none',
  }
});

export const IconContainer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});
