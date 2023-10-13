import {
  createTheming,
  type ThemingType,
} from "@callstack/react-theme-provider";

export type Theme = {
  primary: string;
  accent: string;
  background: string;
  text: string;
  secondary: string;
};

export const themes: { [key: string]: Theme } = {
  default: {
    primary: "#FFA72A",
    accent: "#458622",
    background: "#FFC777",
    text: "#504f4d",
    secondary: "#7F5315",
  },
  dark: {
    primary: "#FFA72A",
    accent: "#458622",
    background: "#504f4d",
    text: "#FFC777",
    secondary: "#252525",
  },
};

const { ThemeProvider, withTheme }: ThemingType<Theme> = createTheming(
  themes.default,
);

export { ThemeProvider, withTheme };
