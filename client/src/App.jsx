import { Route, Routes } from "react-router";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import Planets from "./components/planets/Planets";
import PlanetDetails from "./components/planets/planeDetails/PlanetDetails";
import Register from "./components/auth/register/Register";
import Login from "./components/auth/login/Login";
import Quiz from "./components/quiz/Quiz";
import UserProvider from "./providers/UserProvider";
import Logout from "./components/auth/logout/Logout";
import { LanguageProvider } from "./context/LangContext";
import './i18n';

export default function App() {
    return (
        <LanguageProvider>
            <UserProvider>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1 min-h-[80vh]">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/planets" element={<Planets />} />
                            <Route path="/planet/:planetId" element={<PlanetDetails />} />
                            <Route path="/sign-up" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/quiz" element={<Quiz />} />
                            <Route path="/logout" element={<Logout />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </UserProvider>
        </LanguageProvider>
    )
}