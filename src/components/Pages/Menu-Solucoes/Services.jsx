import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Services(){

     // FUNÇÃO DE ROLAR PÁGINA    
     
     const sectionRef = useRef(null);
     const teleportToSection = () => {
        if(sectionRef.current){
            gsap.set(sectionRef.current, { opacity: 0});

            // Teleporta para a section
            window.scrollTo({
                top: sectionRef.current.offsetTop,
                behavior: "auto",
            });

            gsap.to(sectionRef.current, {
                opacity: 1,
                duration: 2,
                ease: "power1.out",
            });
        }
     };

     // ANIMAÇÃO DA PÁGINA
    {/* ANIMAÇÕES DAS SECTIONS INICIO */}
    const forMedia = gsap.matchMedia();

    //PRIMEIRA SECTION DA PÁGINA SERVIÇOS
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".title-main-services", {
            x: 0, 
            y: 0,
            opacity: 1,
            rotate: "0deg",
            delay: 0.4,
        });
        gsap.to(".text-main-services", {
            x: 0, 
            y: 0,
            scale: 1,
            opacity: 1,
            rotate: "0deg",
            delay: 0.6,
        });
        gsap.to(".arrow-animation", {
            x: 0, 
            y: 0,
            opacity: 1,
            rotate: "0deg",
            delay: 1.7, 
        });
        gsap.to(".button-scrollTo", {
            x: 0, 
            y: 0,
            opacity: 1,
            rotate: "0deg",
            delay: 1, 
        });
        return() => {
            gsap.killTweensOf(".title-main-especializacao, .text-main-especializacao, .arrow-animation, button-scrollTo")
        }
    }, []);  
    //PRIMEIRA SECTION DA PÁGINA SERVIÇOS

    //SEGUNDA SECTION DA PÁGINA SERVIÇOS   ******* COM MEDIA
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        forMedia.add("(max-width: 1023px)", () => {
            // Animação para telas menores
            gsap.to(".h1-services", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger: {
                    trigger: ".h1-services",
                    //markers: true,
                    scrub: true,
                    start: "top 600px",
                    end: "bottom 300px",
                },
            });
            gsap.to(".h3-contact-solutions-2, .p-contact-solutions-2, .button-contact-solutions-2", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".item-services",
                    //markers: true,
                    scrub: true,
                    start: "top 400px",
                    end: "bottom 200px",
                },
            });

            gsap.to(".item-services", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger: {
                    trigger: ".item-services",
                    scrub: true,
                    //markers: true,
                    start: "top 600px",
                    end: "bottom 500px",
                },
            });
        });     
        forMedia.add("(min-width: 1024px)", () => {
            // Animação para telas maiores
            gsap.to(".h1-services", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger: {
                    trigger: ".h1-services",
                    //markers: true,
                    scrub: true,
                    start: "top 900px",
                    end: "bottom 260px",
                },
            });
            gsap.to(".h3-contact-solutions-2, .p-contact-solutions-2, .button-contact-solutions-2", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".item-services",
                    //markers: true,
                    scrub: true,
                    start: "top 400px",
                    end: "bottom 250px",
                },
            });

            gsap.to(".item-services", {
                x: 0,
                y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger: {
                    trigger: ".item-services", // Gatilho no segundo item
                    scrub: true,
                    //markers: true,
                    start: "top 600px",
                    end: "bottom 500px",
                },
            });
    
        });
        forMedia.add("(min-width: 1920px)", () => {
            // Animação para telas maiores
            gsap.to(".h1-services", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger: {
                    trigger: ".h1-services",
                    //markers: true,
                    scrub: true,
                    start: "top 900px",
                    end: "bottom 600px",
                },
            });
            gsap.to(".item-services", {
                x: 0,
                y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger: {
                    trigger: ".item-services", // Gatilho no segundo item
                    scrub: true,
                    //markers: true,
                    start: "top 800px",
                    end: "bottom 700px",
                },
            });
            gsap.to(".h3-contact-solutions-2, .p-contact-solutions-2, .button-contact-solutions-2", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".item-services",
                    //markers: true,
                    scrub: true,
                    start: "top 700px",
                    end: "bottom 600px",
                },
            });
    
        });
        return () => {
            forMedia.revert(); // Remove os listeners para evitar conflitos
        };
    }, []);     
    //SEGUNDA SECTION DA PÁGINA ESPECIALIZAÇÃO  ******* COM MEDIA

    return(
        <div className="main-services">
            <Helmet>
                {/* JSON-LD para schema.org */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "url": "https://www.mecaimportacoes.com.br/solucoes/servicos",
                            "name": "Serviços | Meca Importações",
                            "description": "Explore os serviços da Meca Importações, oferecendo soluções completas para otimização de importação, logística e distribuição final, com agilidade e precisão.",
                            "mainEntityOfPage": "https://www.mecaimportacoes.com.br/solucoes/servicos"
                        }
                    `}
                </script>

                {/* Metadados para SEO e redes sociais */}
                <title>Serviços | Meca Importações</title>
                <meta name="description" content="Explore nossos serviços para otimizar o processo de importação, logística e distribuição de produtos, com foco em agilidade e precisão." />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Meca Importações, Componentes, Componentes eletrônicos, Distribuição, Importação, Importação de componentes eletrônicos" />
                <meta property="og:title" content="Serviços | Meca Importações" />
                <meta property="og:description" content="Descubra as soluções completas da Meca Importações para importar, armazenar e distribuir seus produtos com eficiência e segurança." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mecaimportacoes.com.br/solucoes/servicos" />
            </Helmet>
            <section className="section-main-services">
                <h1 className="title-main-services">Serviços</h1>
                <p className="text-main-services">
                    A <strong style={{color: '#0059ff'}}>Meca Importações</strong>, oferece soluções completas para otimizar o processo de 
                    <strong> importação</strong> e entrega dos seus produtos. Desde o despacho aduaneiro até a 
                    distribuição final, nosso foco é assegurar que cada etapa seja realizada com agilidade e 
                    precisão. Com nossa expertise, proporcionamos um fluxo eficiente que mantém sua operação em movimento, reduzindo custos e melhorando o tempo de entrega.
                </p>
               <button onClick={teleportToSection} className="button-scrollTo">VEJA A SEGUIR</button>
                <div className="arrow-animation"></div>
            </section>
            <section className="section-services" ref={sectionRef}>  
                <h2 className="h1-services">Nossos Serviços</h2>
                <div className="div-containers-services">                     
                    <div className="item-services">
                        <div className="item-header-services">
                            <h3 className="item-title-services">Processo de Importação</h3>
                        </div>
                        <div className="item-text-services">
                            <p>
                                Gerenciamos cada etapa da importação, desde a negociação até a documentação necessária, 
                                garantindo um processo sem complicações. Com um gerenciamento completo, asseguramos 
                                conformidade, agilidade e a <strong>eliminação de custos inesperados</strong>, oferecendo total segurança para sua carga.
                            </p>
                        </div>
                    </div>    

                    <div className="div-button-contact-solutions">
                        <h3 className="h3-contact-solutions-2">Restou alguma dúvida?</h3>
                        <p className="p-contact-solutions-2">Estamos aqui para ajudar. Entre em contato conosco!</p>
                        <Link to="/contato" className="link-button-solution"><button className="button-contact-solutions-2">FALE CONOSCO !</button></Link>
                    </div>

                </div>      
            </section>
        </div>
    )
}

export default Services;