import { useRef , useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet';

function SobreNos(){

    


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
    

    {/* ANIMAÇÕES DAS SECTIONS INICIO */}
    const forMedia = gsap.matchMedia();

    //PRIMEIRA SECTION DA PÁGINA SOBRE NÓS
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".title-sobrenos", {
            x: 0, 
            y: 0,
            opacity: 1,
            rotate: "0deg",
            delay: 0.4,
        });
        gsap.to(".text-sobrenos", {
            x: 0, 
            y: 0,
            opacity: 1,
            rotate: "0deg",
            delay: 0.8,
        });
        gsap.to(".arrow-animation", {
            x: 0, 
            y: 0,
            opacity: 1,
            rotate: "0deg",
            delay: 1.2, 
        });
        return() => {
            gsap.killTweensOf(".title-sobrenos, .text-sobrenos, .arrow-animation")
        }
    }, []);     
    //PRIMEIRA SECTION DA PÁGINA SOBRE NÓS
    

    //SEGUNDA SECTION DA PÁGINA SOBRE NÓS   ******* COM MEDIA
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        forMedia.add("(max-width: 768px)", () => {
            // Animação para telas menores
            gsap.to(".title-sobrenos2, .text-sobrenos2, .list-sobrenos2", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".div-sobrenos2",
                    //markers: true,
                    scrub: true,
                    start: "top 875px",
                    end: "bottom 985px",
                },
            });
        });      
        forMedia.add("(min-width: 769px)", () => {
            // Animação para telas maiores
            gsap.to(".title-sobrenos2, .text-sobrenos2, .list-sobrenos2", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger: {
                    trigger: ".div-sobrenos2",
                    scrub: true,
                    start: "top 930px",
                    //markers: true,
                    end: "bottom 753px",
                },
            });
        });
        forMedia.add("(min-width: 1920px)", () => {
            // Animação para telas maiores
            gsap.to(".title-sobrenos2, .text-sobrenos2, .list-sobrenos2", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger: {
                    trigger: ".div-sobrenos2",
                    scrub: true,
                    start: "top 1000px",
                    //markers: true,
                    end: "bottom 900px",
                },
            });
        });
        return () => {
            forMedia.revert(); // Remove os listeners para evitar conflitos
        };
    }, []);     
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        forMedia.add("(max-width: 768px", () => {
            gsap.to(".title-sobrenos3, .text-sobrenos3, .container-sobrenos3", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".list-sobrenos2:nth-child(3)",
                    //markers: true,
                    scrub: true,
                    start: "top 700px",
                    end: "bottom 450px",
                },
            });
        });
        forMedia.add("(min-width: 769px)", () => {
            gsap.to(".title-sobrenos3, .text-sobrenos3, .container-sobrenos3", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".list-sobrenos2:nth-child(3)",
                    //markers: true,
                    scrub: true,
                    start: "top 700px",
                    end: "bottom 450px",
                },
            });
        });
        forMedia.add("(min-width: 1920px)", () => {
            gsap.to(".title-sobrenos3, .text-sobrenos3, .container-sobrenos3", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".list-sobrenos2:nth-child(3)",
                    //markers: true,
                    scrub: true,
                    start: "top 900px",
                    end: "bottom 850px",
                },
            });
        });
        return () => {
            forMedia.revert(); // Remove os listeners para evitar conflitos
        };
    }, []);   
    //SEGUNDA SECTION DA PÁGINA SOBRE NÓS  ******* COM MEDIA

    //TERCEIRA SECTION DA PÁGINA SOBRE NÓS  ******* COM MEDIA
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        forMedia.add("(max-width: 768px)", () => {
            gsap.to(".title-sobrenos-3, .text-sobrenos-3, .sobrenos-button", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".container-sobrenos3:nth-child(2)",
                    //markers: true,
                    scrub: true,
                    start: "top 600px",
                    end: "bottom 450px",
                },
            });
        });
        forMedia.add("(min-width: 769px)", () => {
            gsap.to(".title-sobrenos-3, .text-sobrenos-3, .sobrenos-button", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".container-sobrenos3:nth-child(2)",
                    //markers: true,
                    scrub: true,
                    start: "top 530px",
                    end: "bottom 400px",
                },
            });
        });       
        forMedia.add("(min-width: 1560px)", () => {
            gsap.to(".title-sobrenos-3, .text-sobrenos-3, .sobrenos-button", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".container-sobrenos3:nth-child(2)",
                    //markers: true,
                    scrub: true,
                    start: "top 830px",
                    end: "bottom 600px",
                },
            });
        });
        forMedia.add("(min-width: 1920px)", () => {
            gsap.to(".title-sobrenos-3, .text-sobrenos-3, .sobrenos-button", {
                x: 0, y: 0,
                opacity: 1,
                rotate: "0deg",
                scale: 1,
                scrollTrigger:{
                    trigger: ".container-sobrenos3:nth-child(2)",
                    //markers: true,
                    scrub: true,
                    start: "top 1200px",
                    end: "bottom 900px",
                },
            });
        });
       return () => {
            forMedia.revert(); // Remove os listeners para evitar conflitos
        };
    }, []);    
    //TERCEIRA SECTION DA PÁGINA SOBRE NÓS  ******* COM MEDIA
    
    {/* ANIMAÇÕES DAS SECTIONS FIM */}

    return(
        <div className='main-sobrenos'>

            <Helmet>
                {/* JSON-LD para schema.org */}
                <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Meca Importações",
                        "url": "https://www.mecaimportacoes.com.br/sobre-nos",
                        "description": "Conheça a Meca Importações, referência em componentes eletrônicos, oferecendo soluções inovadoras e suporte especializado para seus projetos.",
                        "sameAs": [,
                            "https://www.instagram.com/mecaimportacoes"
                        ],
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+55-11-957001041",
                            "contactType": "Customer Service",
                            "areaServed": "BR",
                            "availableLanguage": "Portuguese"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Rua Exemplo, 123",
                            "addressLocality": "São Paulo",
                            "postalCode": "12345-678",
                            "addressCountry": "BR"
                        }
                    }
                `}
                </script>

                {/* Metadados para SEO e redes sociais */}
                <title>Sobre Nós | Meca Importações</title>
                <meta name="description" content="Conheça a Meca Importações, referência em componentes eletrônicos, oferecendo soluções inovadoras e suporte especializado para seus projetos." />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Meca Importações, Componentes, Componentes eletrônicos, Distribuição, Importação, Importação de componentes eletrônicos" />
                <meta property="og:title" content="Sobre Nós | Meca Importações" />
                <meta property="og:description" content="Saiba mais sobre a Meca Importações e nossa missão de oferecer soluções eficientes e inovadoras em componentes eletrônicos." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mecaimportacoes.com.br/sobre-nos" />
            </Helmet>

            <section className="section-sobrenos">
                <h1 className="title-sobrenos">SOBRE NÓS</h1>
                <p className="text-sobrenos">
                    Com 5 anos de experiência, somos referência na comercialização de componentes eletrônicos, 
                    conectando inovação e qualidade ao mercado. Atendemos diversos  setores como tecnologia, 
                    automação e automobilístico, oferecendo soluções eficientes e atendimento especializado para 
                    impulsionar seus projetos.
                </p>
                <p className="text-sobrenos"><strong><span>Meca Importações:</span> Conectando tecnologia ao seu negócio.</strong></p>
                <button onClick={teleportToSection}>ROLAR À PÁGINA</button>
                <div className="arrow-animation"></div>
            </section>
            <section className={`section-sobrenos2`} ref={sectionRef}>
                <div className="div-sobrenos2">
                    <h2 className="title-sobrenos2">Seja nosso parceiro.</h2>
                    <p className="text-sobrenos2">
                        Ao optar pela Meca Importações, você estabelece uma relação confiável, combinando inovação tecnológica, 
                        atendimento de excelência e preços acessíveis. Estamos comprometidos com o sucesso do seu negócio, 
                        oferecendo soluções que aumentam a eficiência e diminuem os custos operacionais. 
                        Com uma ampla gama de produtos, expertise e comprometimento, estamos prontos para transformar 
                        suas ideias em soluções concretas.
                    </p>
                    <ul className="ul-list-sobrenos2">
                        <li className={`list-sobrenos2`} id='first-list-sobrenos2'>
                            <strong>Ampla Rede Internacional:</strong> Importamos diretamente dos melhores fabricantes, assegurando produtos de qualidade superior.
                        </li>
                        <li className={`list-sobrenos2`} id='second-list-sobrenos2'>
                            <strong>Estoque Estratégico:</strong> Asseguramos disponibilidade para atender às demandas mais desafiadoras de forma ágil.
                        </li>
                        <li className={`list-sobrenos2`} id='third-list-sobrenos2'>
                            <strong>Expertise Técnica:</strong> Nossa equipe altamente capacitada oferece suporte e consultoria na escolha dos melhores componentes para cada projeto.
                        </li>
                    </ul>
                </div>
                <div className="div-sobrenos3">               
                    <div className="container-sobrenos3">
                        <h2 className={`title-sobrenos3`}>Nosso compromisso</h2>
                        <p className={`text-sobrenos3`}>
                            Oferecer componentes eletrônicos de excelente qualidade, com agilidade e eficácia, 
                            contribuindo para o crescimento dos negócios de nossos clientes por meio de soluções 
                            tecnológicas avançadas.
                        </p>
                    </div>

                    <div className="container-sobrenos3">
                        <h2 className={`title-sobrenos3`}>Propósito</h2>
                        <p className={`text-sobrenos3`}>
                            Ser reconhecida como a principal distribuidora de componentes eletrônicos no Brasil, 
                            destacando-se pela confiabilidade, atendimento exclusivo e compromisso com a inovação tecnológica.
                        </p>
                    </div>
                </div>            
            </section>
            <section className="section-sobrenos3">
                <div className="div-sobrenos-3">
                    <h2 className="title-sobrenos-3">Deseja mais informações?</h2>
                    <p className="text-sobrenos-3">
                        Conte conosco para esclarecer suas dúvidas! Entre em contato com nossa equipe e envie suas informações pelo formulário disponível.
                    </p>
                    <Link to="/contato" style={{
                        width: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        textDecoration:'none'
                        }}
                        >
                        <button className="sobrenos-button">
                            FALE CONOSCO!
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default SobreNos;