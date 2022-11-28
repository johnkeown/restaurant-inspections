import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Search from "./pages/Search";
import RestaurantDetail from "./pages/RestaurantDetail";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Search />} />
                        <Route path="about" element={<About />} />
                        <Route
                            path="restaurantDetail"
                            element={<RestaurantDetail />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
