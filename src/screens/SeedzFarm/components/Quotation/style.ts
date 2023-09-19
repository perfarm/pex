import { Button as OriginalButton } from '~/components/Button';
import { styled } from '~/theme';

import { Col as OriginalCol } from '~/screens/admin/release/Manage/style';

export const Button = styled(OriginalButton, {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: 20,
});

export const ImageCol = styled(OriginalCol, {
  alignItems: 'center',
  flex: 0,
  display: 'flex',
});

export const DirCol = styled(OriginalCol, {
  alignItems: 'stretch',
  flex: 0,
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'space-between',
  minWidth: '100px',
});

export const CenterCol = styled(OriginalCol, {
  alignItems: 'stretch',
  flex: 1,
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '0 !important',
  paddingLeft: 10,
  paddingRight: 10,
});
