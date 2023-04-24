import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Search from "./pages/Search";
import Latest from "./pages/Latest";
import DangerZone from "./pages/DangerZone";
import RestaurantDetail from "./pages/RestaurantDetail";
import InspectionDetails from "./pages/InspectionDetails";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Search />} />
                        <Route path="latest" element={<Latest />} />
                        <Route path="danger-zone" element={<DangerZone />} />
                        <Route path="about" element={<About />} />
                        <Route
                            path="restaurantDetail"
                            element={<RestaurantDetail />}
                        />
                        <Route
                            path="inspection-details"
                            // render={(props) => <InspectionDetails {...props} />}
                            element={<InspectionDetails />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
