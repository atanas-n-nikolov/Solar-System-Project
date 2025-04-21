import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/home/Home";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 min-h-[80vh]">
                <Home />
            </main>
            <Footer />
        </div>
    )
}