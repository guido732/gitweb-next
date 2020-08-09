// React
import React, { FC } from "react";
// Styles
import { StyledContainer } from "./styles";
// Types
import { ILayout } from "./types";

export const Layout: FC<ILayout> = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export default Layout;
