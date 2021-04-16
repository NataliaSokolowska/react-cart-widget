import CartSection from "./components/Organism/CartSection/CartSection";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import { theme } from "./theme/mainTheme";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CartSection />
      </ThemeProvider>
    </div>
  );
}

export default App;
