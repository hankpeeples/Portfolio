import { ThemeProvider, themes } from "./theme.ts";
import type { Theme } from "./theme.ts";
import ThemeChanger from "./components/ThemeChanger.tsx";
import { useEffect, useState } from "react";

const App = () => {
  const [theme, setTheme] = useState<Theme>(themes.default);

  const handleThemeChange = () => {
    if (theme === themes.default) setTheme(themes.dark);
    else setTheme(themes.default);
  };

  useEffect(() => {
    fetch("http://localhost:5174/analytics");
  }, []);

  return (
    <ThemeProvider>
      <main
        className="w-screen h-screen"
        style={{
          backgroundColor: theme.background,
          color: theme.text,
          transition: "0.3s ease-in-out",
        }}
      >
        <div>Navbar</div>
        <div>Content</div>
        <div>Footer</div>
        <ThemeChanger
          theme={theme}
          themes={themes}
          onChangeTheme={handleThemeChange}
        />
      </main>
    </ThemeProvider>
  );
};

export default App;
