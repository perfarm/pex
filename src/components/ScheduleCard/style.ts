import { styled } from "~/theme";
import { Button } from "../Button";
import { Col } from "../Grid";

export const TimeCol = styled(Col, {
  alignItems: 'flex-start',
});

export const StatusCol = styled(Col, {
  textAlign: 'right',
});

export const SpeakerIconCol = styled(Col, {
  alignItems: 'center',
  display: 'flex',
  flex: 0,
});

export const SpeakerCol = styled(Col, {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  paddingLeft: 10,
});

export const ActionButton = styled(Button, {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  width: '100%',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
