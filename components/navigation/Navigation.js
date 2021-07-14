import React, {useState, useEffect} from 'react';
import Link from 'next/link';

export default function Navigation({isHomePage}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            setOffset(pageYOffset);
        }
    }, []);
    return (
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${offset > 0 ? 'navbar-bg-light-dark' : ''} ${!isHomePage ? 'nav-dark' : ''}`}>
            <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand text-light" href="#">RPG Corrientes</a>
                <div className="navigation-content">
                    <button className={`navbar-toggler-button ${menuOpen ? 'button-active' : ''}`} onClick={() => { setMenuOpen(!menuOpen) }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-hamburger">
                            <div className={`line ${menuOpen ? 'line-active-1' : ''}`}></div>
                            <div className={`line ${menuOpen ? 'line-active-2' : ''}`}></div>
                            <div className={`line ${menuOpen ? 'line-active-3' : ''}`}></div>
                        </span>
                    </button>
                    <div className={`collapse navbar-collapse ${menuOpen ? 'navbar-collapse-active' : ''}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link text-light" aria-current="page" onClick={() => setMenuOpen(false)}>Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contacto">
                                    <a className="nav-link text-light" aria-current="page" onClick={() => setMenuOpen(false)}>Contacto</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/ubicacion">
                                    <a className="nav-link text-light" aria-current="page" onClick={() => setMenuOpen(false)}>Ubicacion</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/anuncios">
                                    <a className="nav-link text-light" aria-current="page" onClick={() => setMenuOpen(false)}>Anuncios</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
