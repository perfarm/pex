import { styled } from '~/theme';

export const Smooth = styled('div', {
  bottom: 0,
  display: 'flex',
  height: 75,
  position: 'relative',
  width: '100%',
});

export const TabRoot = styled('div', {
  background: '#FFF',
  bottom: 0,
  display: 'flex',
  height: 75,
  position: 'fixed',
  width: '100%',
  zIndex: '$appBar',
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
  },
});

export const IconContainer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});
