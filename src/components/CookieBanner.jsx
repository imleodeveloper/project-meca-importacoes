import '../css/index.css';
import { useEffect, useState } from 'react';
import LogoMeca from '../img/Logo Header/Logo branci vetorizado PNG.png';

function CookieBanner(){

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verifica se o cookie de aceitação já foi configurado
        const acceptedCookies = localStorage.getItem('cookiesAccepted');
        if(!acceptedCookies){
            setIsVisible(true); // Mostra o banner se não houver consentimento
        }
    }, []);

    const userAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsVisible(false);
    }

    return(

        isVisible && (
            <div className="cookie-banner">
                <div className="cookie-banner-content">
                    <img src={LogoMeca} alt="Logo Meca Importações de Componentes Eletrônicos" className="cookie-logo" />
                    <p>
                    Este site utiliza cookies para proporcionar uma experiência melhor. Sua navegação confirma a concordância com nossa
                        <a href="/empresa/privacidade" target="_blank" rel="noopener noreferrer">
                            Política de Privacidade
                        </a>.
                        <a href='https://support.google.com/chrome/answer/95647?hl=pt' target="_blank" rel="noopener noreferrer" className="definition-cookies-banner">Ver definições de cookies.</a>
                    </p>
                    <button onClick={userAccept} className="btn-accept">
                        Aceitar
                    </button>
                </div>
            </div>
        )

    )
};

export default CookieBanner;