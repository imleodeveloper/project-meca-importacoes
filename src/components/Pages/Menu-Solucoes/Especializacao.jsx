import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Especializacao(){

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

    //PRIMEIRA SECTION DA PÁGINA ESPECIALIZAÇÃO
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".title-main-especializacao", {
            x: 0, 
            y: 0,
            opacity: 1,
            rotate: "0deg",
            delay: 0.4,
        });
        gsap.to(".text-main-especializacao", {
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
    //PRIMEIRA SECTION DA PÁGINA ESPECIALIZAÇÃO

    //SEGUNDA SECTION DA PÁGINA ESPECIALIZAÇÃO   ******* COM MEDIA

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        forMedia.add("(max-width: 1023px", () => {
            gsap.to(".h3-contact-solutions, .p-contact-solutions, .button-contact-solutions", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".section-especializacao",
                    //markers: true,
                    scrub: true,
                    start: "top 700px",
                    end: "bottom 600px",
                },
            });
        });
        forMedia.add("(min-width: 1024px)", () => {
            gsap.to(".h3-contact-solutions, .p-contact-solutions, .button-contact-solutions", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".section-especializacao",
                    //markers: true,
                    scrub: true,
                    start: "top 800px",
                    end: "bottom 900px",
                },
            });
        });
        forMedia.add("(min-width: 1920px)", () => {
            gsap.to(".h3-contact-solutions, .p-contact-solutions, .button-contact-solutions", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".section-especializacao",
                    //markers: true,
                    scrub: true,
                    start: "top 1100px",
                    end: "bottom 1300px",
                },
            });
        });
        return () => {
            forMedia.revert(); // Remove os listeners para evitar conflitos
        };
    }, []);   
    //SEGUNDA SECTION DA PÁGINA ESPECIALIZAÇÃO  ******* COM MEDIA


    return(
        <div className="main-especializacao">
            <Helmet>
                {/* JSON-LD para schema.org */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "url": "https://www.mecaimportacoes.com.br/solucoes/especializacao",
                            "name": "Meca Importações",
                            "description": "Descubra as especializações da Meca Importações, oferecendo soluções inovadoras em automação industrial, circuitos integrados, inteligência artificial, e muito mais em Diadema.",
                            "dateModified": "2025-02-17",
                            "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Rua Regente Feijó, 166",
                                    "addressLocality": "Diadema",
                                    "addressRegion": "SP",
                                    "postalCode": "09910-770",
                                    "addressCountry": "BR"
                                },
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "+55 11 97071-8680",
                                    "contactType": "customer service",
                                    "availableLanguage": "Portuguese"
                                },
                                "sameAs": [
                                    "https://www.linkedin.com/company/meca-importações/about/?viewAsMember=true",
                                    "https://www.instagram.com/mecaimportacoes",
                                ]
                        }        
                                            
                    
                    `}
                </script>

                {/* Metadados para SEO e redes sociais */}
                <title>Especialização | Meca Importações</title>
                <meta name="description" content="Conheça as especializações da Meca Importações em automação industrial, circuitos integrados, inteligência artificial, e outras soluções inovadoras." />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Meca Importações, Componentes, Componentes eletrônicos, Distribuição, Importação, Importação de componentes eletrônicos" />
                <meta property="og:title" content="Especializações | Meca Importações" />
                <meta property="og:description" content="Descubra nossas soluções em automação industrial, circuitos integrados e outras áreas de inovação tecnológica." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mecaimportacoes.com.br/solucoes/especializacao" />
            </Helmet>
            <section className="section-main-especializacao">
                <h1 className="title-main-especializacao">Especialização</h1>
                <p className="text-main-especializacao">
                    Na <strong style={{color: '#0059ff'}}>Meca Importações</strong>, somos especializados em oferecer soluções 
                    tecnológicas e inovadoras para diversos setores <strong>industriais. </strong>
                    Com nossa expertise em áreas como <strong>automação</strong>, <strong>telecomunicações</strong>, 
                    <strong> automotivo</strong> e <strong>hospitalar</strong>, trabalhamos para garantir que sua empresa esteja sempre à frente, 
                    aumentando a eficiência e a produtividade de seus processos.
                </p>
                <button onClick={teleportToSection} className="button-scrollTo">ROLAR À PÁGINA</button>
                <div className="arrow-animation"></div>
            </section>
            <section className="section-especializacao"  ref={sectionRef}>  
                
                <div className="div-button-contact-solutions">
                    <h3 className="h3-contact-solutions">Restou alguma dúvida?</h3>
                    <p className="p-contact-solutions">Estamos aqui para ajudar. Entre em contato conosco!</p>                    
                    <Link to="/contato" className="link-button-solution">
                        <button className="button-contact-solutions">FALE CONOSCO !</button>
                    </Link>                
                </div>  

            </section>

            
        </div>
    )
}

export default Especializacao;