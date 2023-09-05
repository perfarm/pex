import { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
  id?: string;
}