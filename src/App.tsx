import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "./components/ui/theme-provider";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
