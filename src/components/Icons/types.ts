import { theme } from "~/theme";

export interface PropsIcon {
  className?: string;
  color?: keyof typeof theme.colors;
  size?: string | number;
}
