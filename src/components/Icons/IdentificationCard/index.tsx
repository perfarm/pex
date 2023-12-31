import { FC } from "react";

import { theme } from "~/theme";

import { Path, Root } from "~/commons/variants/svgIcon";
import { Props } from "./types";

export const IdentificationCard: FC<Props> = ({
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
      d="M14.25 13.5H18M5.72894 15.75C5.8954 15.106 6.27109 14.5355 6.79698 14.1283C7.32287 13.721 7.96916 13.5 8.63431 13.5M8.63431 13.5C9.29946 13.5 9.94577 13.7209 10.4717 14.1281C10.9976 14.5354 11.3733 15.1058 11.5398 15.7497M8.63431 13.5C9.87695 13.5 10.8844 12.4926 10.8844 11.25C10.8844 10.0074 9.87706 9 8.63442 9C7.39177 9 6.38442 10.0074 6.38442 11.25C6.38442 12.4926 7.39167 13.5 8.63431 13.5ZM14.25 10.5H18M3.75 4.5H20.25C20.6642 4.5 21 4.83579 21 5.25V18.75C21 19.1642 20.6642 19.5 20.25 19.5H3.75C3.33579 19.5 3 19.1642 3 18.75V5.25C3 4.83579 3.33579 4.5 3.75 4.5Z"
      stroke={theme.colors[color].value}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Root>
);
