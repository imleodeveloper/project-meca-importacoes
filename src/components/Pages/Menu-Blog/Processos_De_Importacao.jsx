import { Link } from "react-router-dom";
import img from "../../../img/blog/processos-de-importacao.webp";

const Processos_De_Importacao = () => {
    return(
        <article className="themesBlog-article">
            <h1>Processos de Importação: Entenda as Etapas e Requisitos</h1>
            <span>
                <Link to="/blog" className="link-blog">Voltar ao blog</Link>
            </span>
            <section>
                <div className="img-themes">
                    <img src={img} alt="Processos de Importação"/>
                </div>
                <p>
                    Importar produtos pode ser uma <strong>ótima oportunidade de negócios</strong>, 
                    mas exige <strong>conhecimento</strong> e <strong>planejamento</strong>. Desde a <strong>escolha do fornecedor </strong> 
                    até o <strong>desembaraço aduaneiro</strong>, cada etapa é essencial para garantir uma 
                    <strong>importação segura e eficiente</strong>, evitando problemas alfandegários e reduzindo custos.
                    <br/>
                    <strong>Confira cada etapa:</strong>
                </p>

                <div>
                    <h2>1. Escolha do fornecedor</h2>
                    <p>
                        Selecionar <strong>fornecedores confiáveis</strong> é o primeiro passo. Avalie a <strong>reputação</strong> da empresa, 
                        peça amostras e verifique <strong>certificações</strong> para garantir a qualidade dos produtos.
                    </p>
                </div>
                <div>
                    <h2>2. Documentação necessária</h2>
                    <p>
                        A importação exige uma série de documentos, como:
                    </p>
                    <ul>
                        <li><strong>Fatura Comercial (Invoice):</strong> Documento emitido pelo fornecedor com detalhes da compra.</li>
                        <li><strong>Packing List:</strong> Lista dos produtos, volumes e peso da carga.</li>
                        <li><strong>Conhecimento de Embarque:</strong> Documento de transporte marítimo, aéreo ou rodoviário.</li>
                        <li><strong>Licenças e Registros:</strong> Alguns produtos exigem autorizações especiais para entrar no país.</li>
                    </ul>
                </div>

                <div>
                    <h2>3. Tributação e custos</h2>
                    <p>
                        Os principais impostos sobre importação no Brasil incluem:
                    </p>
                    <ul>
                        <li><strong>Imposto de Importação (II):</strong> Varia de acordo com o tipo de produto.</li>
                        <li><strong>ICMS:</strong> Cobrado pelos estados sobre a circulação de mercadorias.</li>
                        <li><strong>PIS e COFINS:</strong> Tributos federais aplicáveis a alguns produtos.</li>                    
                    </ul>
                    <p>
                        Além disso, considere os <strong>custos com transporte</strong>, <strong>armazenagem</strong> e <strong>taxas alfandegárias</strong>.
                    </p>
                </div>

                <div>
                    <h2>4. Processo de desembaraço Aduaneiro</h2>
                    <p>
                        Essa é a etapa de <strong>liberação da mercadoria na alfândega</strong>. A <strong>Receita Federal</strong> faz a conferência 
                        dos documentos e, se tudo estiver correto, a carga é liberada. Para <strong>agilizar o processo</strong>, 
                        é fundamental ter toda a <strong>documentação organizada</strong> e seguir corretamente as exigências legais.
                    </p>
                </div>

                <div>
                    <h2>5. Dicas para uma importação segura e eficiente</h2>
                    <ul>
                        <li><strong>Pesquise bem</strong> os fornecedores antes de fechar negócios.</li>
                        <li><strong>Calcule todos os custos</strong> antes da compra para evitar surpresas.</li>
                        <li><strong>Verifique certificações</strong> ou autorizações exigidas para o produto.</li>                    
                        <li><strong>Organize toda a documentação</strong> desde o início.</li>                    
                        <li><strong>Considere contratar um despachante aduaneiro</strong> para facilitar o processo.</li>                    
                    </ul>
                </div>

                <div>
                    <h2>Conclusão</h2>
                    <p>
                        A importação pode ser um <strong>grande diferencial competitivo</strong>, mas exige planejamento. 
                        Com um <strong>processo bem estruturado</strong>, é possível garantir <strong>produtos de qualidade</strong>, 
                        <strong> reduzir custos</strong> e <strong>evitar problemas alfandegários</strong>.
                    </p>
                </div>

                <div>
                    <span>
                        <div className="title-share">
                            <h2>Compartilhe esse blog: </h2>
                        </div>
                        <div className="links-share">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://mecaimportacoes.com.br/blog/processos-de-importacao" target="_blank" className="share-button facebook">
                                <i className="mdi mdi-facebook" aria-label="icone-facebook"></i>
                            </a>

                            <a href="https://twitter.com/intent/tweet?url=https://mecaimportacoes.com.br/blog/processos-de-importacao" target="_blank" className="share-button twitter">
                                <i className="mdi mdi-twitter" aria-label="icone-twitter"></i>
                            </a>

                            <a href="https://wa.me/?text=https://mecaimportacoes.com.br/blog/processos-de-importacao" target="_blank" className="share-button whatsapp">
                                <i className="mdi mdi-whatsapp" aria-label="icone-whatsapp"></i>
                            </a>

                            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://mecaimportacoes.com.br/blog/processos-de-importacao" target="_blank" className="share-button linkedin">
                                <i className="mdi mdi-linkedin" aria-label="icone-linkedin"></i>
                            </a>
                        </div>
                    </span>
                </div>
            </section>
        </article>
    )
}
export default Processos_De_Importacao;