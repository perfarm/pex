import { FC } from "react";
import { BottomTab } from "../BottomTab";
import { Props } from "./types";

export const Layout: FC<Props> = ({ children }) => (
  <div>
    Navbar
    <br />
    {children}
    <br />
    <BottomTab />
  </div>
);
