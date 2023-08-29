import { FC } from "react";

import { Root, Spinner as SpinnerStyled } from "./style";
import { Props } from "./types";

export const Spinner: FC<Props> = ({ color = "white", children }) => (
  <Root>
    <SpinnerStyled color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerStyled>
    {children}
  </Root>
);
