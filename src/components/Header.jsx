
import { Link , useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';
import LogoHeader2 from '../img/Logo Header/Logo-Deitado.png'
import { useState } from "react";


function Header(){

    const locationURL = useLocation();

    // ANIMAÇÃO BOTÃO MOBILE
    const [menuMobile, setMenuMobile] = useState(false);

    const toggleMobileMenu = () => {
        setMenuMobile(!menuMobile);
    }

    const closeMobileMenu = () => {
        setMenuMobile(false);
    }


    return(
        <header>
            <nav className="navbar">
                {/* LOGO DO MENU*/}
                <div className="div-logo-nav">               
                    <Link className="navbar-logo" to="/">
                        <img src={LogoHeader2} alt="Logo da Meca Importações de Componentes Eletrônicos" title="Meca Importações"/>                    
                    </Link>
                </div>
                {/* FIM LOGO DO MENU*/}

                {/* Botão Mobile */}
                <div 
                    className={`mobile-menu ${menuMobile ? "active" : ""}`}
                    onClick={toggleMobileMenu}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                {/* Lista de Links */}
                <ul className={`nav-list ${menuMobile ? "active" : ""}`}>
                    
                    <li className="nav-item">
                        <Link 
                            to="/" 
                            className={`nav-link ${locationURL.pathname === '/' ? 'active' : ''}`}
                            onClick={closeMobileMenu}>Home</Link>
                    </li>

                    <li className="nav-item nav-dropdown">
                        <Link 
                            to="#" 
                            className={`nav-link ${locationURL.pathname === '/' ? 'active' : ''}`}
                            >Empresa <i className="mdi mdi-menu-down"></i></Link>
                        <span></span>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">
                                <Link 
                                    to="/empresa/privacidade" 
                                    className={`nav-link ${locationURL.pathname === '/empresa/privacidade' ? 'active' : ''}`}
                                    onClick={closeMobileMenu}>Política de Privacidade</Link>
                            </li>
                            <li className="dropdown-item">
                                <Link 
                                    to="/empresa/sobre-nos" 
                                    className={`nav-link ${locationURL.pathname === '/empresa/sobre-nos' ? 'active' : ''}`}
                                    onClick={closeMobileMenu}>Sobre nós</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item nav-dropdown">
                        <Link 
                            to="#" 
                            className={`nav-link ${locationURL.pathname === '/' ? 'active' : ''}`}
                            >Soluções<i className="mdi mdi-menu-down"></i></Link>
                        <span></span>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">
                                <Link 
                                    to="/solucoes/especializacao" 
                                    className={`nav-link ${locationURL.pathname === '/solucoes/especializacao' ? 'active' : ''}`}
                                    onClick={closeMobileMenu}>Especialização</Link>
                            </li>
                            <li className="dropdown-item">
                                <Link 
                                    to="/solucoes/servicos" 
                                    className={`nav-link ${locationURL.pathname === '/solucoes/servicos' ? 'active' : ''}`}
                                    onClick={closeMobileMenu}>Serviços</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link 
                            to="/contato" 
                            className={`nav-link ${locationURL.pathname === '/contato' ? 'active' : ''}`}
                            onClick={closeMobileMenu}>Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;