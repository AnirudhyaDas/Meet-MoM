import { ThermometerSnowflake } from "lucide-react";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
