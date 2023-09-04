import { Button as OriginalButton } from '~/components/Button';
import { styled } from '~/theme';

import { Col as OriginalCol } from '~/screens/admin/release/Manage/style';

export const Button = styled(OriginalButton, {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: 20,
});

export const DirCol = styled(OriginalCol, {
  alignItems: 'stretch',
  flex: 0,
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '0 !important',
});

export const LeftCol = styled(OriginalCol, {
  alignItems: 'stretch',
  flex: 1,
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '0 !important',
  padding: 15,
});

export const ReadMoreCol = styled(OriginalCol, {
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  marginLeft: '0 !important',
});
