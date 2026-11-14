import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Accueil from "./pages/accueil";
import Itineraire from "./pages/itineraire";
import Footer from "./components/footer";

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