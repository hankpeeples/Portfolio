import styled from "styled-components";
import ThemeChanger from "./ThemeChanger";

type Props = {
  themeChanger: VoidFunction;
};

type NavItem = string;

const NavItems: NavItem[] = ["Home", "Projects", "Blog", "Contact"];

const Navbar = ({ themeChanger }: Props) => {
  return (
    <NavbarContainer>
      <div>
        <img src="/vite.svg" style={{ height: "1.5rem" }} />
      </div>
      {NavItems.map((item, idx) => {
        return (
          <NavItemWrapper key={idx}>
            <p>{item}</p>
          </NavItemWrapper>
        );
      })}
      <ThemeChanger onChangeTheme={themeChanger} />
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
  width: 100%;
  font-weight: 600; /* SemiBold */
  height: fit-content;
  border-radius: 6px;

  box-shadow: 2px 2px 2px rgb(0 0 0 / 0.3);

  user-select: none;
  background-color: ${({ theme }) => theme.background2};
`;

const NavItemWrapper = styled.div`
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.primary};
  }
`;
