import { Theme, themes } from "../theme";
import ThemeChanger from "./ThemeChanger";

type Props = {
  theme: Theme;
  themeChanger: VoidFunction;
};

const Navbar = ({ theme, themeChanger }: Props) => {
  return (
    <div
      className="flex flex-row justify-between items-center p-3 w-full rounded-md shadow-md h-fit"
      style={{ backgroundColor: theme.background2 }}
    >
      Navbar
      <ThemeChanger
        theme={theme}
        themes={themes}
        onChangeTheme={themeChanger}
      />
    </div>
  );
};

export default Navbar;
