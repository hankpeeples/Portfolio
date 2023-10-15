import { themes, type Theme } from "./theme.ts";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.tsx";
import styled, { ThemeProvider } from "styled-components";

const App = () => {
  const [theme, setTheme] = useState<Theme>(themes.default);
  const [backendConnected, setBackendConnected] = useState<boolean>(false);

  const handleThemeChange = () => {
    if (theme === themes.default) setTheme(themes.dark);
    else setTheme(themes.default);
  };

  useEffect(() => {
    getAnalytics(setBackendConnected);
  }, []);

  console.info("Backend:", backendConnected);

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Navbar themeChanger={handleThemeChange} />
      </Main>
    </ThemeProvider>
  );
};

const getAnalytics = async (backend: (arg: boolean) => void) => {
  try {
    const res = await fetch("http://localhost:8080/analytics");
    // will report frontend error if backend is not running/reachable
    if (res.status === 200) {
      backend(true);
      console.info(await res.json());
    }
  } catch (err) {
    console.debug(err);
  }
};

export default App;

const Main = styled.main`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: 0.2s all ease-in-out;
  overflow: hidden;
  padding: 8px;
  width: 100vw;
  height: 100vh;
`;
