import { FC } from "react";

import { theme } from "~/theme";

import { Path, Root } from "~/commons/variants/svgIcon";
import { Props } from "./types";

export const EnvelopeSimple: FC<Props> = ({
  className,
  color = "gray",
  size = 24,
}) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M3 5.25H21M3 5.25V18C3 18.1989 3.07902 18.3897 3.21967 18.5303C3.36032 18.671 3.55109 18.75 3.75 18.75H20.25C20.4489 18.75 20.6397 18.671 20.7803 18.5303C20.921 18.3897 21 18.1989 21 18V5.25M3 5.25L12 13.5L21 5.25"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Root>
);
