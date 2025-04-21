import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-dark-bg text-white text-center !pt-[3em] !pb-[3em]" aria-label="Footer navigation">
            <div className="flex justify-center items-center max-w-[1800px] !ml-auto !mr-auto">
                <div className="flex flex-col items-center justify-around flex-1 gap-[2em]">
                    <div className="flex items-center justify-center gap-[2em] flex-1">
                        <a className="text-2xl nav-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a className="text-2xl nav-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a className="text-2xl nav-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                    <nav className="flex-2">
                        <ul className="flex items-center justify-center gap-[2em]">
                            <li><Link className="nav-link" to="/about">About Us</Link></li>
                            <li><Link className="nav-link" to="/contact">Contact</Link></li>
                            <li><Link className="nav-link" to="#">Privacy Policy</Link></li>
                            <li><Link className="nav-link" to="#">Terms of Service</Link></li>
                        </ul>
                    </nav>
                    <p>© 2025 Solar System - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}