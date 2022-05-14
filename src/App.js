import { useEffect, useState } from "react";
import SwitchOne from "./components/Switch/Switch";
import { Box } from "./components/Layouts/Box";
import { Center } from "./components/Layouts/Center";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Box
      height="100vh"
      background={theme === "light" ? "#F9FAFC" : "#0A1120"}
      transition={"background 0.2s ease-in-out;"}
    >
      <Center height="100%">
        <SwitchOne theme={theme} setTheme={setTheme} />
      </Center>
    </Box>
  );
};

export default App;
