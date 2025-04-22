import item1 from "../../img/blog/processos-de-importacao.webp";
import item2 from "../../img/blog/microcontroladores.webp";
import item3 from "../../img/blog/o-que-sao-componentes.webp";
import item4 from "../../img/blog/inteligencia-artificial.webp";
import { Link } from "react-router-dom";

const Blog = () => {
    return(
        <article className="article-blog">

            <section className="section-blog">
                <div className="head-blog">
                    <h1>Para você ficar por dentro</h1>
                    <span>
                        <a href="https://www.instagram.com/meca_importacoes/"><i className="mdi mdi-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/meca-importações-6137a7346/"><i className="mdi mdi-linkedin"></i></a>
                    </span>
                </div>
                <div className="item-g">
                    <Link to="/blog/processos-de-importacao" className="link-blog">
                        <div className="img-item-g">
                            <img src={item1}/>
                        </div>
                        <h2>Processos de importação: entenda as etapas e requisitos</h2>
                        <p>
                            <strong>Importar produtos</strong> exige planejamento e conhecimento das normas. 
                            Desde a escolha do <strong>fornecedor</strong> até o <strong>desembaraço aduaneiro</strong>, 
                            é essencial entender <strong>tributações</strong>, <strong>documentação</strong> e <strong>logística</strong>. 
                            Um processo bem estruturado reduz custos e evita problemas alfandegários, 
                            garantindo uma importação segura e eficiente.
                        </p>
                        <span className="metadata">31 Mar 2025</span>
                        <span className="button-view-more">
                            <button>Ver mais</button>
                        </span>
                    </Link>
                </div>
                <div className="item-g">
                    <Link to="/blog/o-que-sao-componentes-eletronicos" className="link-blog">
                        <div className="img-item-g">
                            <img src={item3}/>
                        </div>
                        <h2>O que são componentes eletrônicos?</h2>
                        <p>
                            <strong>Componentes eletrônicos</strong> são peças fundamentais em dispositivos tecnológicos, 
                            como <strong>resistores</strong>, <strong>capacitores</strong> e <strong>microchips</strong>, que controlam o fluxo de eletricidade, 
                            armazenam energia e processam sinais, sendo essenciais para a criação de produtos 
                            eletrônicos.
                        </p>
                        <span className="metadata">31 Mar 2025</span>
                        <span className="button-view-more">
                            <button>Ver mais</button>
                        </span>
                    </Link>
                </div>
                <div className="item-g">
                    <Link to="/blog/microcontroladores" className="link-blog">
                        <div className="img-item-g">
                            <img src={item2}/>
                        </div>
                        <h2>Microcontroladores o coração da internet das coisas (IoT)!</h2> 
                        <p>
                            A importação de <strong>componentes eletrônicos</strong>, como microcontroladores, 
                            exige um planejamento cuidadoso. É fundamental ter conhecimento sobre 
                            <strong> fornecedores</strong>, <strong>tributação</strong> e <strong>logística </strong>
                            para garantir a eficiência do processo. Com uma abordagem estratégica, é possível 
                            minimizar custos, evitar imprevistos e assegurar a entrega de produtos de alta qualidade, 
                            mantendo a competitividade no mercado.
                        </p>
                        <span className="metadata">16 Abr 2025</span>
                        <span className="button-view-more">
                            <button>Ver mais</button>
                        </span>
                    </Link>
                </div>
                <div className="item-g">
                    <Link to="/blog/inteligencia-artificial" className="link-blog">
                        <div className="img-item-g">
                            <img src={item4}/>
                        </div>
                        <h2>Inteligência artificial</h2>
                        <p>
                            A <strong>Inteligência artificial</strong> vem revolucionando a eletrônica: 
                            <strong> sensores e microcontroladores</strong> estão cada vez mais inteligentes, 
                            <strong> circuitos são otimizados automaticamente</strong> e a 
                            <strong> produção industrial se torna mais precisa com IA</strong>. 
                            Isso se reflete em <strong>produtos mais duráveis, eficientes e modernos</strong> — 
                            desde eletrônicos de consumo até veículos autônomos.
                            <br/>A <strong>Meca Importações</strong> está sempre atualizada com as tendências para 
                            trazer o <strong>melhor em componentes eletrônicos</strong>!
                        </p>
                        <span className="metadata">22 Abr 2025</span>
                        <span className="button-view-more">
                            <button>Ver mais</button>
                        </span>
                    </Link>
                </div>
                {/*<div className="itens-p">                    
                    <div className="item-p">
                        <div className="img-item-p">
                            <img src={item2}/>

                        </div>
                        <h2>Importação de componentes eletrônicos: tudo o que você precisa saber</h2>
                        <p>
                            Importar <strong>componentes eletrônicos</strong> requer planejamento, conhecimento sobre 
                            <strong> fornecedores</strong>, <strong>tributação</strong> e <strong>logística</strong>. Entender as normas e estratégias corretas 
                            ajuda a evitar problemas e reduzir custos, garantindo produtos de qualidade 
                            e competitividade no mercado.
                        </p>
                        <span className="metadata">31 Mar 2025</span>
                        <span className="button-view-more">
                            <button>Ver mais</button>
                        </span>
                    </div>
                     <div className="item-p">
                        <div className="img-item-p">
                            <img src={item3}/>
                        </div>
                        <h2>O que são componentes eletrônicos?</h2>
                        <p>
                            <strong>Componentes eletrônicos</strong> são peças fundamentais em dispositivos tecnológicos, 
                            como <strong>resistores</strong>, <strong>capacitores</strong> e <strong>microchips</strong>, que controlam o fluxo de eletricidade, 
                            armazenam energia e processam sinais, sendo essenciais para a criação de produtos 
                            eletrônicos.
                        </p>
                        <span className="metadata">31 Mar 2025</span>
                        <span className="button-view-more">
                            <Link to="/blog/processos-de-importacao"><button>Ver mais</button></Link>
                        </span>
                    </div>
                    
                </div>*/}
            </section>

        </article>
    )
};

export default Blog;