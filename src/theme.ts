import {
  createTheming,
  type ThemingType,
} from "@callstack/react-theme-provider";

export type Theme = {
  primary: string;
  accent: string;
  background: string;
  background2: string;
  text: string;
  secondary: string;
};

export const themes: { [key: string]: Theme } = {
  default: {
    primary: "#FE4A49",
    accent: "#1B998B",
    background: "#eee",
    background2: "#fff",
    text: "#1f1f1f",
    secondary: "#39393A",
  },
  dark: {
    primary: "#FE4A49",
    accent: "#1B998B",
    background: "#504f4d",
    background2: "#2f2f2f",
    text: "#fff",
    secondary: "#252525",
  },
};

const { ThemeProvider, withTheme }: ThemingType<Theme> = createTheming(
  themes.default,
);

export { ThemeProvider, withTheme };
