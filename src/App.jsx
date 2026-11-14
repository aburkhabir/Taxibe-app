import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Itineraire from "./pages/Itineraire";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/itineraire" element={<Itineraire />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;