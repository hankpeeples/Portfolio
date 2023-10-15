// import { withTheme } from "../theme.ts";
import type { Theme } from "../theme.ts";

type Props = {
  theme: Theme;
  themes: { [key: string]: Theme };
  onChangeTheme: VoidFunction;
};

const ThemeChanger = ({ theme, themes, onChangeTheme }: Props) => (
  <div onClick={() => onChangeTheme()}>
    {theme === themes.dark ? "dark" : "default"}
  </div>
);

export default ThemeChanger;
