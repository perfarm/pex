import React, { FC, useCallback, useMemo, useRef, useState } from 'react';

import { Arrow, Container, Content, ContentWrap, Portal, Provider, Root, Trigger, TriggerWrap } from './style';
import { Props } from './type';

export const Tooltip: FC<Props> = ({
  align,
  children,
  color,
  delay = 250,
  description,
  isBodyChild = false,
  isOpen = false,
  maxHeight,
  side,
}) => {
  const [open, setOpen] = useState(isOpen);
  const containerRef = useRef();

  const complement = useMemo(() => (isBodyChild ? {} : { container: containerRef?.current }), [isBodyChild]);

  const onClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Provider>
      <Container ref={containerRef}>
        <Root delayDuration={delay} onOpenChange={setOpen} open={open}>
          <Trigger asChild onClick={onClick}>
            <TriggerWrap>{children}</TriggerWrap>
          </Trigger>
          <Portal {...complement}>
            <Content align={align} color={color} side={side} sideOffset={12}>
              <ContentWrap maxHeight={maxHeight}>{description}</ContentWrap>
              <Arrow />
            </Content>
          </Portal>
        </Root>
      </Container>
    </Provider>
  );
};
