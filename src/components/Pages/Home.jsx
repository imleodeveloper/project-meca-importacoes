//import { useState , useEffect , useRef } from "react";
//import { Link } from "react-router-dom";

import '../../css/index.css';


import { SwiperSlide , Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCreative} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-creative';

import imgSlider1 from '../../img/Home/1738013790877.webp';
import imgSlider3 from '../../img/Home/background-home-services.webp';
import imgSlider4 from '../../img/Home/img-slider4-subs2.webp';
import imgSlider2Subs from '../../img/Home/wmremove-transformed.webp';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function Home(){

    //OBJETO DO SLIDER HOME    
    const objSlider = [
        {   name: 'Meca Importações - Somos referência no mercado Brasileiro, nossos serviços são reconhecidos pela qualidade e excelência, comprovados pela satisfação de nossos clientes. - Slider 1',
            id: '1',
            image: imgSlider1,
            brightness: 30,
            title: [
                {
                    type: 'main',
                    className: 'main-slide-container-1',
                    children: [
                        { text: 'MECA IMPORTAÇÕES', className: 'title-slider1' },
                        { text: <strong>CONECTANDO TECNOLOGIA AO SEU NEGÓCIO</strong>, className: 'subtitle-slider1' },
                        {
                            text: <strong>SOMOS REFERÊNCIA NO MERCADO BRASILEIRO, CONECTANDO INOVAÇÃO E TECNOLOGIA À DISTRIBUIÇÃO DE COMPONENTES ELETRÔNICOS.</strong>,
                            className: 'slider-description',
                        },
                        {
                            type: 'button',
                            text: 'SOBRE NÓS ...',
                            className: 'slider-button',
                            link: '/empresa/sobre-nos',
                        },
                    ],
                },
            ],
        },
        {   name: 'Especialização em Componentes para Novas Tecnologias como IA, Automação, Telecomunicações, Componentes Eletrônicos. - Slider 2',
            id: '2',
            image: imgSlider2Subs,
            brightness: 30,
            title: [
                {
                    type: 'main',
                    className: 'main-slide-container-2',
                    children: [
                        { text: 'SOMOS ESPECIALIZADOS EM:', className: 'title-slider2' },
                        { text: <strong>IMPORTAÇÃO E DISTRIBUIÇÃO DE COMPONENTES ELETRÔNICOS</strong>, className: 'subtitle-slider2' },
                        {text: <strong>Automação Comercial, Inteligência Artificial, Telecomunicações, Automotiva, entre outras soluções inovadoras para sua empresa.</strong>, className: 'description-slider2'},
                        {
                            type: 'button',
                            text: 'SAIBA MAIS ...',
                            className: 'slider-button',
                            link: '/solucoes/especializacao',
                        },
                    ],
                },
            ],
        },
        {   name: 'Serviços Especializados, Inovação, Importação e Distribuição de Componentes Eletrônicos. - Slider 3 ',
            id: '3',
            image: imgSlider3, 
            brightness: 55,
            title: [
                {
                    type: 'main', // Indica a estrutura principal do slide
                    className: 'main-slide-container-3', // Classe principal do container
                    children: [ // Conteúdo dentro da estrutura principal
                        { text: 'NOSSOS SERVIÇOS', className: 'title-slider3' },
                        { 
                            text: <strong>São reconhecidos pela qualidade e excelência, comprovados pela satisfação de nossos clientes.</strong>, 
                            className: 'subtitle-slider3' 
                        },
                        {
                            type: 'group', // Indicação semântica para um grupo de serviços
                            className: 'services-container', // Classe específica para o grupo
                            children: [ // Array de itens de serviço agrupados
                                {
                                    text: 'Importação',
                                    description: 'Gestão completa do processo de importação, com agilidade, segurança e eliminação de custos inesperados',
                                    className: 'service-div-3',
                                    link: '/solucoes/servicos',
                                },
                                {
                                    text: 'Despacho Aduaneiro',
                                    description: 'Liberação de mercadorias nas alfândegas, com conformidade fiscal e agilidade no processo de importação.',
                                    className: 'service-div-1',
                                    link: '/solucoes/servicos',
                                },
                                {
                                    text: 'Estocagem',
                                    description: 'Soluções de armazenamento seguro e monitoramento eficiente para fácil acesso e rastreamento.',
                                    className: 'service-div-2',
                                    link: '/solucoes/servicos',
                                },
                                {
                                    text: 'Logística',
                                    description: 'Planejamento e execução do transporte de mercadorias, garantindo eficiência, tempo e custo reduzidos.',
                                    className: 'service-div-4',
                                    link: '/solucoes/servicos',
                                },
                            ],
                        },
                    ],
                },
            ] 
        },
        {
            name: 'Entre em contato conosco para maiores informações! - Slider 4',
            id: '4',
            image: imgSlider4,
            brightness: 40,
            title: [
                {
                    type: 'main',
                    className: 'main-slide-container-4',
                    children: [
                        { text: 'Deseja mais informações?', className: 'title-slider4' },
                        {
                            text: 'Estamos à disposição. Envie uma mensagem por WhatsApp e preencha o formulário para contato.',
                            className: 'subtitle-slider4',
                        },
                        {
                            type: 'button',
                            text: 'FALE CONOSCO!',
                            className: 'slider-button',
                            link: '/contato',
                        },
                    ],
                },
            ],
        },
    ];
    //OBJETO DO SLIDER HOME


    //ANIMAÇÕES
    useEffect(() => {
        const slides = document.querySelectorAll(".main-slide-container-1, .main-slide-container-2, .main-slide-container-3, .main-slide-container-4");

        // Seleciona os elementos dentro dos slides (como os títulos e descrições)
        const slideTitlesAndDescriptions = document.querySelectorAll(
            ".title-slider1, .subtitle-slider1, .slider-description, " +
            ".title-slider2, .subtitle-slider2, .description-slider2, " +
            ".title-slider3, .subtitle-slider3, .slider-description, " +
            ".title-slider4, .subtitle-slider4"
        );

        const observerOptions = {
            root: null, // Usa o viewport como referência
            threshold: 0.1, // Ativa quando 10% do slide está visível
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const target = entry.target;

                if (entry.isIntersecting) {
                    // Adiciona a classe de animação quando o slide entra na viewport
                    target.classList.add("animate");
                } else {
                    // Remove a classe de animação quando o slide sai da viewport
                    target.classList.remove("animate");
                }
            });
        }, observerOptions);

        slides.forEach((slide) => observer.observe(slide));

        // Observa os elementos internos dos slides (como títulos e descrições)
        slideTitlesAndDescriptions.forEach((element) => observer.observe(element));

        return () => {
            // Limpa o observer ao desmontar o componente
            observer.disconnect();
        };
    }, []);


    return(
        <article className="articleHome">
            <Helmet>
                {/* JSON-LD para schema.org */}
                <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "url": "https://www.mecaimportacoes.com.br/",
                    "name": "Meca Importações",
                    "description": "Bem-vindo à Meca Importações, referência em componentes eletrônicos e soluções inovadoras para o seu negócio.",
                    "dateModified": "2025-03-22",
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
                            "https://www.instagram.com/mecaimportacoes"
                        ]
                    }   
                }
                `}
                </script>

                {/* Metadados para SEO e redes sociais */}
                <title>Home | Meca Importações</title>
                <meta property="og:title" content="Home | Meca Importações" />
                <meta property="og:description" content="Distribuímos excelência em componentes eletrônicos para o mercado brasileiro, conectando inovação e confiança." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mecaimportacoes.com.br/" />
            </Helmet>
            <section className='section-slider'>
                <div className="sliderHome" role="region" >
                    <div className="positionSliderHome">
                        <Swiper                            
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={{ 
                                clickable: true,
                            }}
                            navigation
                            modules={[Navigation, Pagination, Scrollbar, EffectCreative, Autoplay]}
                            loop={true}
                            autoplay={{delay: 20000, disableOnInteraction: false}}
                            effect="creative"
                            grabCursor={true}
                            speed={1500}
                            creativeEffect={{
                                prev:{
                                    translate: [0, 0, -100],
                                    opacity: 0,
                                },
                                next: {
                                    translate: ["800%", 0, -500],
                                },
                                current: {
                                    translate: [0, 0, 0],
                                    rotate: [0, 0, 0],
                                    
                                },
                            }}
                        >
                            {objSlider.map((item) => (
                            <SwiperSlide key={item.id} className={`custom-swiper ${item.id === '2' ? 'second-slide' : ''}`}>
                                <img 
                                    src={item.image} 
                                    alt={`Imagem de destaque: ${item.name}`} 
                                    className="slideHome-item" 
                                    loading="lazy"
                                    style={{ filter: `brightness(${item.brightness}%)` }}
                                />
                                <div className="slideHome-text">
                                    {item.title.map((line, index) => {
                                        // Verifica se o item é o container principal
                                        if (line.type === 'main' && line.children) {
                                            return (
                                                <div key={index} className={`${line.className}`}>
                                                    {line.children.map((child, idx) => {
                                                        // Verifica se o item é um grupo de serviços
                                                        if (child.type === 'group' && child.children) {
                                                            return (
                                                                <div key={idx} className={child.className}>
                                                                    {child.children.map((service, svcIdx) => (
                                                                        <Link
                                                                            key={svcIdx}
                                                                            to={service.link || '#'}
                                                                            className={`service-div ${service.className}`}
                                                                            aria-label={`Saiba mais sobre ${service.text}`}
                                                                        >
                                                                            <span className="mini-service-title">
                                                                                {service.text}
                                                                            </span>
                                                                            {service.description && (
                                                                                <p className="mini-service-description">
                                                                                    {service.description}
                                                                                </p>
                                                                            )}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            );
                                                        }
                        
                                                        // Verifica se o item é um botão de navegação
                                                        if (child.type === 'button' && child.link) {
                                                            return (
                                                                <Link
                                                                    key={idx}
                                                                    to={child.link} // Navega para o link especificado
                                                                    className={child.className}
                                                                >
                                                                    {child.text}
                                                                </Link>
                                                            );
                                                        }
                        
                                                        // Renderiza itens normais (textos)
                                                        return (
                                                            <span key={idx} className={child.className}>
                                                                {child.text}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            );
                                        }
                        
                                        // Renderiza outros elementos (caso não seja do tipo 'main')
                                        return (
                                            <span key={index} className={line.className}>
                                                {line.text}
                                            </span>
                                        );
                                    })}
                                </div>
                            </SwiperSlide>  
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Home;

