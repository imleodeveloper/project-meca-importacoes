import '../../css/index.css';
import { Link , useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';


function Obrigado(){

    const locationURL = useLocation();

    //PRIMEIRA SECTION DA PÁGINA ESPECIALIZAÇÃO
    useLayoutEffect(() => {
        gsap.to(".icon-obrigado", {
            x: 0, 
            y: 0,
            opacity: 1,
            rotate: "0deg",
            delay: 0.4,
        });
        gsap.to(".h1-obrigado", {
            x: 0, 
            y: 0,
            scale: 1,
            opacity: 1,
            rotate: "0deg",
            delay: 0.6,
        });
        gsap.to(".h2-obrigado", {
            x: 0, 
            y: 0,
            opacity: 1,
            rotate: "0deg",
            delay: 0.9, 
        });
        gsap.to(".back-button", {
            x: 0, 
            y: 0,
            scale: 1,
            opacity: 1,
            rotate: "0deg",
            delay: 1, 
        });
        return() => {
            gsap.killTweensOf(".title-main-especializacao, .text-main-especializacao, .arrow-animation, button-scrollTo")
        }
    }, []);  
    //PRIMEIRA SECTION DA PÁGINA SERVIÇOS


    return(
        <div className="main-obrigado">
            <Helmet>
                {/* JSON-LD para schema.org */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "url": "https://www.mecaimportacoes.com.br/contato/obrigado",
                            "name": "Obrigado | Meca Importações",
                            "description": "Obrigado por entrar em contato com a Meca Importações. Em breve, nossa equipe retornará com as informações solicitadas.",
                            "mainEntityOfPage": "https://www.mecaimportacoes.com.br/contato/obrigado"
                        }
                    `}
                </script>

                {/* Metadados para SEO e redes sociais */}
                <title>Obrigado | Meca Importações</title>
                <meta name="description" content="Obrigado por entrar em contato com a Meca Importações. Estamos à disposição para fornecer mais informações." />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Meca Importações, Componentes, Componentes eletrônicos, Distribuição, Importação, Importação de componentes eletrônicos" />
                <meta property="og:title" content="Obrigado | Meca Importações" />
                <meta property="og:description" content="Agradecemos pelo seu contato. Nossa equipe retornará em breve com as informações solicitadas." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mecaimportacoes.com.br/contato/obrigado" />
            </Helmet>
            <article>
                <i className="mdi mdi-check-circle-outline icon-obrigado"></i>
                <h1 className="h1-obrigado">Obrigado por entrar em contato!</h1>
                <h2 className="h2-obrigado">Estamos à disposição e em breve retornaremos com maiores informações!</h2>
                <Link to="/contato" className={`nav-link ${locationURL.pathname === '/contato' ? 'active' : ''}`}>
                    <div className="back-button">
                        <i className="mdi mdi-arrow-u-left-top"></i><span>Voltar</span>
                    </div>
                </Link>
            </article>
        </div>
    )
}

export default Obrigado;