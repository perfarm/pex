import { FC } from "react";

import { Path, Root } from "~/commons/variants/svgIcon";
import { PropsIcon } from "~/components/Icons/types";
import { theme } from "~/theme";

export const Check: FC<PropsIcon> = ({
  className,
  color = "gray",
  size = 18,
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
      d="M20.25 6.75049L9.75 17.25L4.5 12.0005"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Root>
);
