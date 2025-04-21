import { Route, Routes } from "react-router";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import Planets from "./components/planets/Planets";
import PlanetDetails from "./components/planets/planeDetails/PlanetDetails";
import Register from "./components/auth/register/Register";
import Login from "./components/auth/login/Login";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 min-h-[80vh]">
                <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/planet/:planetId" element={<PlanetDetails />} />
                    <Route path="/sign-up" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}