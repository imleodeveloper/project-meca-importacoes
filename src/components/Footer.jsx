import { Link } from 'react-router-dom';
import LogoMeca from '/Logo-Horizontal.webp';

function Footer(){
    return(
        <footer>
            <div className="footer-columns">
                <div className="footer-column">
                    <div className="footer-section">
                        <span className="title-footer-section">Navegação</span>
                        <ul className="navigation-footer-section">
                            <li className="item-navigation-footer">
                                <Link to="/" className="link-item-footer">Home</Link>
                            </li>
                            <li className="item-navigation-footer">
                                <Link to="/empresa/sobre-nos" className="link-item-footer">Sobre nós</Link>
                            </li>
                            <li className="item-navigation-footer">
                                <Link to="/solucoes/especializacao" className="link-item-footer">Especialização</Link>
                            </li>
                            <li className="item-navigation-footer">
                                <Link to="/solucoes/servicos" className="link-item-footer">Serviços</Link>
                            </li>
                            <li className="item-navigation-footer">
                                <Link to="/contato" className="link-item-footer">Entre em contato</Link>
                            </li>
                            <li className="item-navigation-footer">
                                <Link to="/blog" className="link-item-footer">Nosso blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-column" id="gap-social-footer">    
                    <div className="footer-section" id='social-id-footer'>                
                        <span className="title-footer-section">SIGA NOSSAS REDES SOCIAIS!</span>
                        <ul className="footer-social">
                            <li className="footer-social-item">
                                <a 
                                href="https://www.instagram.com/meca_importacoes/"
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="link-instagram"
                                >
                                <i className="mdi mdi-instagram"></i>
                                </a>
                            </li>
                            <li className="footer-social-item">
                                <a 
                                href="https://www.linkedin.com/in/meca-importações-6137a7346/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="link-linkedin"
                                >
                                <i className="mdi mdi-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div> 
                    <div className="footer-section" id="contact-id-footer">
                        <span className="title-footer-section">CONTATE-NOS</span>

                        <div className="footer-contact-item">
                            <i className="mdi mdi-whatsapp icon-link-footer"></i>
                            <i className="mdi mdi-phone-in-talk-outline icon-link-footer"></i>
                            <a
                            href="https://wa.me/5511970718680"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-footer"
                            >
                            +55 (11) 97071-8680
                            </a>
                        </div>

                        <div className="footer-contact-item">
                            <i className="mdi mdi-email icon-link-footer"></i>
                            <a
                            href="mailto:contato@mecaimportacoes.com.br"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-footer"
                            >
                            contato@mecaimportacoes.com.br
                            </a>
                        </div>
                    </div>  
                </div>
                <div className="footer-column">
                    <div className='footer-section'>                      
                        <span className="title-footer-section">Links Úteis</span>
                        <ul className="navigation-footer-section">
                            <Link to="/empresa/privacidade" className='link-item-footer'>
                                <li className="item-navigation-footer">Política de Privacidade</li>
                            </Link>
                            <a href='https://support.google.com/chrome/answer/95647?hl=pt' target="_blank" rel="noopener noreferrer" className="link-item-footer">
                                <li className="item-navigation-footer">Definições de Cookies</li>
                            </a>
                            <a
                                href='https://wa.me/5511957001041'
                                className='link-item-footer'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                            <li className="item-navigation-footer">Fale conosco / WhatsApp</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-section div-logo-footer">
                        <img src={LogoMeca} alt="Imagem em destaque: Logo da Meca Importações de Componentes Eletrônicos" title="Meca Importações" className="logo-footer" loading="lazy"/>
                    </div>              
                    <div className="footer-section" id="meca-footer">
                        <strong className="link-footer">MECA IMPORTAÇÕES 2025</strong>
                        <p className='link-footer'>Todos os direitos reservados.</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;