import "./App.css";
import { Provider } from "./components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Search from "./pages/Search";
import Latest from "./pages/Latest";
import DangerZone from "./pages/DangerZone";
import ReactGA from "react-ga4";
import theme from "./inc/chakra-ui/theme.js";

if (process.env.NODE_ENV === "production")
  ReactGA.initialize(process.env.REACT_APP_GA);

function App() {
  return (
    <Provider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Search />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/danger-zone" element={<DangerZone />} />
            <Route path="/about" element={<About />} />\
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
