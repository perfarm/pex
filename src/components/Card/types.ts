import { CSSProperties } from "@stitches/react";
import { PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}