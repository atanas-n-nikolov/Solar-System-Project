import { Link } from 'react-router';

export default function Header() {
    return (
        <header className="bg-dark-bg text-white">
            <div className="flex items-center justify-between !ml-auto !mr-auto max-w-[1800px] l-header">
                <section className="logoSection" aria-label="Site logo">
                    <Link to="/" className="flex items-center gap-8">
                        <img
                            src="/images/solar-system.svg"
                            alt="Solar System logo"
                            className="h-[3em] w-auto"
                        />
                        <span className="text-white text-[1.5em] font-bold">Solar System</span>
                    </Link>
                </section>
                <nav className="mainNavigation" aria-label="Main navigation">
                    <ul className="flex justify-around gap-[1.25em]">
                        <li className="p-header">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="p-header">
                            <Link to="/planets" className="nav-link">Planets</Link>
                        </li>
                        <li className="p-header">
                            <Link to="/quiz" className="nav-link">Quiz</Link>
                        </li>
                        <li className="p-header">
                            <Link to={`/profile/#`} className="nav-link">@abv.bg</Link>
                        </li>
                        <li className="p-header">
                            <Link to="/logout" className="nav-link">Logout</Link>
                        </li>
                        <li className="p-header">
                            <Link to="/sign-up" className="nav-link">Sign up</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};