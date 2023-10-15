import styled from "styled-components";
import { type Theme } from "../theme";
import { themes } from "../theme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

type Props = {
  theme: Theme;
  onChangeTheme: VoidFunction;
};

const ThemeChanger = ({ theme, onChangeTheme }: Props) => {
  return (
    <Icon onClick={() => onChangeTheme()}>
      <p>{theme === themes.default ? <SunIcon /> : <MoonIcon />}</p>
    </Icon>
  );
};

export default ThemeChanger;

const Icon = styled.div`
  height: 1.3rem;
  width: 1.3rem;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.accent};
    transition: all 0.2s ease-in-out;
  }
`;
