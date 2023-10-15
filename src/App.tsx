import { ThemeProvider, themes } from "./theme.ts";
import type { Theme } from "./theme.ts";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.tsx";

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

  // console.info("Backend:", backendConnected);

  return (
    <ThemeProvider theme={theme}>
      <main
        className="overflow-hidden p-2 w-screen h-screen"
        style={{
          backgroundColor: theme.background,
          color: theme.text,
          transition: "0.3s ease-in-out",
        }}
      >
        <Navbar theme={theme} themeChanger={handleThemeChange} />
      </main>
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
