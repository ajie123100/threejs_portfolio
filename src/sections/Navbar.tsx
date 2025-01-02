import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(item => (
                <li key={item.id} className="nav-li">
                    <a href={item.href} className="nav-li_a" onClick={() => { }}>{item.name}</a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen((preIsOpen) => !preIsOpen)

    return (
        <header className="fixed top-0 left-0 ring-0 z-50 bg-black/90 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 text-xl font-bold hover:text-white transition-colors">Ajie</a>
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                <NavItems />
                </nav>
            </div>
        </header>
    );
}

export default Navbar;