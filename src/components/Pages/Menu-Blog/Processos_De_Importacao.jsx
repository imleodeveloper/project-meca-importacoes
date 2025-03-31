import img from "../../../img/blog/processos-de-importacao.jpg";

const Processos_De_Importacao = () => {
    return(
        <article className="processosBlog-article">
            <h1>Processos de Importação: Entenda as Etapas e Requisitos</h1>
            <span className="social-blog">
                <span>Nos siga:</span>
                <ul>
                    
                    <li>
                        <a
                            href="https://www.instagram.com/meca_importacoes/"
                            target="_blank" 
                            rel="noopener noreferrer" 
                        >
                            <i className="mdi mdi-instagram"></i></a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/company/meca-importa%C3%A7%C3%B5es/about/?viewAsMember=true" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                        >
                            <i className="mdi mdi-linkedin"></i></a>
                    </li>
                </ul>
            </span>
            <section>
                <div className="img-processos">
                    <img src={img}/>
                </div>
                <p>
                    Importar produtos pode ser uma ótima oportunidade de negócios, 
                    mas exige conhecimento e planejamento. Desde a escolha do fornecedor 
                    até o desembaraço aduaneiro, cada etapa é essencial para garantir uma 
                    importação segura e eficiente, evitando problemas alfandegários e reduzindo custos.

                    Confira cada etapa:
                </p>

                <div>
                    <h2>1. Escolha do fornecedor</h2>
                    <p>
                        Selecionar fornecedores confiáveis é o primeiro passo. Avalie a reputação da empresa, 
                        peça amostras e verifique certificações para garantir a qualidade dos produtos.
                    </p>
                </div>
                <div>
                    <h2>2. Documentação necessária</h2>
                    <p>
                        A importação exige uma série de documentos, como:
                    </p>
                    <ul>
                        <li>Fatura Comercial (Invoice): Documento emitido pelo fornecedor com detalhes da compra.</li>
                        <li>Packing List: Lista dos produtos, volumes e peso da carga.</li>
                        <li>Conhecimento de Embarque: Documento de transporte marítimo, aéreo ou rodoviário.</li>
                        <li>Licenças e Registros: Alguns produtos exigem autorizações especiais para entrar no país.</li>
                    </ul>
                </div>

                <div>
                    <h2>3. Tributação e custos</h2>
                    <p>
                        Os principais impostos sobre importação no Brasil incluem:
                    </p>
                    <ul>
                        <li>Imposto de Importação (II): Varia de acordo com o tipo de produto.</li>
                        <li>ICMS: Cobrado pelos estados sobre a circulação de mercadorias.</li>
                        <li>PIS e COFINS: Tributos federais aplicáveis a alguns produtos.</li>                    
                    </ul>
                    <p>Além disso, considere os custos com transporte, armazenagem e taxas alfandegárias.</p>
                </div>

                <div>
                    <h2>4. Processo de desembaraço Aduaneiro</h2>
                    <p>
                        Essa é a etapa de liberação da mercadoria na alfândega. A Receita Federal faz a conferência 
                        dos documentos e, se tudo estiver correto, a carga é liberada. Para agilizar o processo, 
                        é fundamental ter toda a documentação organizada e seguir corretamente as exigências legais.
                    </p>
                </div>

                <div>
                    <h2>5. Dicas para uma importação segura e eficiente</h2>
                    <ul>
                        <li>Pesquise bem os fornecedores antes de fechar negócios.</li>
                        <li>Calcule todos os custos antes da compra para evitar surpresas.</li>
                        <li>Verifique se o produto precisa de certificações ou autorizações.</li>                    
                        <li>Mantenha a documentação sempre organizada.</li>                    
                        <li>Considere contratar um despachante aduaneiro para facilitar o processo.</li>                    
                    </ul>
                </div>

                <div>
                    <h2>Conclusão</h2>
                    <p>
                        A importação pode ser um grande diferencial competitivo, mas exige planejamento. 
                        Com um processo bem estruturado, é possível garantir produtos de qualidade, 
                        reduzir custos e evitar problemas alfandegários.
                    </p>
                </div>
            </section>
        </article>
    )
}
export default Processos_De_Importacao;