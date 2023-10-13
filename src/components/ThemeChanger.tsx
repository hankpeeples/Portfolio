// import { withTheme } from "../theme.ts";
import type { Theme } from "../theme.ts";

type Props = {
  theme: Theme;
  themes: { [key: string]: Theme };
  onChangeTheme: Function;
};

const ThemeChanger = ({ theme, themes, onChangeTheme }: Props) => (
  <div
    style={{
      color: theme.primary,
      backgroundColor: theme.secondary,
      transition: "0.3s ease-in-out",
    }}
    onClick={() => onChangeTheme()}
  >
    CHANGE THEME: {theme === themes.dark ? "dark" : "default"}
  </div>
);

export default ThemeChanger;
