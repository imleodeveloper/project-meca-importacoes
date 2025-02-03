import { useRef, useState } from 'react';
import '../../../css/index.css';
import { Helmet } from 'react-helmet';

import useOnScreen from '../Hooks/useOnScreen';


function Privacidade(){


    const policies = [
        {
            title: "Interpretação e Definições:",
            description: (
                <>
                    <h3>Interpretação</h3>
                    <p>
                        As palavras cuja letra inicial está em maiúscula têm significados definidos nas seguintes condições. 
                        As seguintes definições terão o mesmo significado independentemente de aparecerem no singular ou no plural.
                    </p>

                    <h3>Definições</h3>
                    <p>Para os propósitos desta Política de Privacidade:</p>
                    <ul>
                        <li>
                            <p><strong>Conta</strong> significa uma conta única criada para você acessar nosso Serviço ou partes do nosso Serviço.</p>
                        </li>
                        <li>
                            <p><strong>Afiliada</strong> significa uma entidade que controla, é controlada por ou está sob controle comum com uma parte, onde "controle" significa propriedade de 50% ou mais das ações, participação acionária ou outros títulos com direito a voto para eleição de diretores ou outra autoridade gerencial.</p>
                        </li>
                        <li>
                            <p><strong>Empresa</strong> (referida como "a Empresa", "Nós", "Nos" ou "Nosso" neste Acordo) refere-se a Meca Importações, Rua Regente de Feijó, 166 - 09910-770 Diadema, SP.</p>
                        </li>
                        <li>
                            <p><strong>Cookies</strong> são pequenos arquivos que são colocados no seu computador, dispositivo móvel ou qualquer outro dispositivo por um site, contendo os detalhes do seu histórico de navegação nesse site entre seus muitos usos.</p>
                        </li>
                        <li>
                            <p><strong>País</strong> refere-se a: Brasil</p>
                        </li>
                        <li>
                            <p><strong>Dispositivo</strong> significa qualquer dispositivo que possa acessar o Serviço, como um computador, um celular ou um tablet digital.</p>
                        </li>
                        <li>
                            <p><strong>Dados Pessoais</strong> são quaisquer informações que se relacionam a um indivíduo identificado ou identificável.</p>
                        </li>
                        <li>
                            <p><strong>Serviço</strong> refere-se ao Website.</p>
                        </li>
                        <li>
                            <p><strong>Provedor de Serviço</strong> significa qualquer pessoa natural ou jurídica que processa os dados em nome da Empresa. Refere-se a empresas ou indivíduos terceirizados empregados pela Empresa para facilitar o Serviço, para fornecer o Serviço em nome da Empresa, para realizar serviços relacionados ao Serviço ou para ajudar a Empresa a analisar como o Serviço é usado.</p>
                        </li>
                        <li>
                            <p><strong>Serviço de Mídias Sociais de Terceiros</strong> refere-se a qualquer site ou site de rede social através do qual um Usuário pode fazer login ou criar uma conta para usar o Serviço.</p>
                        </li>
                        <li>
                            <p><strong>Dados de Uso</strong> refere-se a dados coletados automaticamente, seja gerados pelo uso do Serviço ou pela própria infraestrutura do Serviço (por exemplo, a duração de uma visita à página).</p>
                        </li>
                        <li>
                            <p><strong>Website</strong> refere-se a Meca Importações, acessível a partir de <a href="https://www.mecaimportacoes.com.br" rel="external nofollow noopener" target="_blank">www.mecaimportacoes.com.br</a></p>
                        </li>
                        <li>
                            <p><strong>Você</strong> significa o indivíduo que acessa ou usa o Serviço, ou a empresa, ou outra entidade legal em nome da qual tal indivíduo está acessando ou usando o Serviço, conforme aplicável.</p>
                        </li>
                    </ul>
                </>
            ),
    },
    {
        title: "Coleta e Uso de Seus Dados Pessoais:",
        description: (
            <>
                <h3>Tipos de Dados Coletados</h3>
                <h4>Dados Pessoais</h4>
                <p>Enquanto utiliza nosso Serviço, podemos solicitar que você nos forneça certas informações pessoalmente identificáveis que podem ser usadas para contatá-lo ou identificá-lo. Informações pessoalmente identificáveis podem incluir, mas não se limitam a:</p>
                <ul>
                    <li>Email</li>
                    <li>Nome e sobrenome</li>
                    <li>Telefone</li>
                    <li>Endereço, Estado, Província, CEP, Cidade</li>
                    <li>Dados de Uso</li>
                </ul>
                <h4>Dados de Uso</h4>
                <p>Dados de Uso são coletados automaticamente quando você utiliza o Serviço.</p>
                <p>Dados de Uso podem incluir informações como o endereço de Protocolo de Internet (por exemplo, IP) do seu Dispositivo, tipo de navegador, versão do navegador, as páginas do nosso Serviço que você visita, o tempo e data da sua visita, o tempo gasto nessas páginas, identificadores únicos de dispositivo e outros dados diagnósticos.</p>
                <p>Quando você acessa o Serviço por ou através de um dispositivo móvel, podemos coletar certas informações automaticamente, incluindo, mas não se limitando a, o tipo de dispositivo móvel que você usa, seu ID único de dispositivo móvel, o endereço IP do seu dispositivo móvel, seu sistema operacional móvel, o tipo de navegador de Internet móvel que você usa, identificadores únicos de dispositivo e outros dados diagnósticos.</p>
                <p>Também podemos coletar informações que seu navegador envia sempre que você visita nosso Serviço ou quando você acessa o Serviço por ou através de um dispositivo móvel.</p>
                
                <h4>Tecnologias de Rastreamento e Cookies</h4>
                <p>Usamos Cookies e tecnologias de rastreamento semelhantes para acompanhar a atividade em nosso Serviço e armazenar certas informações. As tecnologias de rastreamento usadas são balizas, tags e scripts para coletar e rastrear informações e para melhorar e analisar nosso Serviço. As tecnologias que usamos podem incluir:</p>
                <ul>
                    <li><strong>Cookies ou Cookies do Navegador.</strong> Um cookie é um pequeno arquivo colocado em seu Dispositivo. Você pode instruir seu navegador a recusar todos os Cookies ou a indicar quando um Cookie está sendo enviado. No entanto, se você não aceitar Cookies, pode não ser capaz de usar algumas partes do nosso Serviço. A menos que você tenha ajustado a configuração do seu navegador para recusar Cookies, nosso Serviço pode usar Cookies.</li>
                    <li><strong>Balizas Web.</strong> Certas seções do nosso Serviço e nossos emails podem conter pequenos arquivos eletrônicos conhecidos como balizas web (também referidos como gifs transparentes, tags de pixel e gifs de um único pixel) que permitem à Empresa, por exemplo, contar usuários que visitaram essas páginas ou abriram um email e para outras estatísticas relacionadas ao site (por exemplo, registrar a popularidade de uma determinada seção e verificar a integridade do sistema e do servidor).</li>
                </ul>
                <p>Cookies podem ser "Persistentes" ou "De Sessão". Cookies Persistentes permanecem no seu computador pessoal ou dispositivo móvel quando você fica offline, enquanto Cookies de Sessão são excluídos assim que você fecha seu navegador. Você pode saber mais sobre cookies no artigo do <a href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies" target="_blank">site da TermsFeed</a>.</p>
                <p>Usamos tanto Cookies de Sessão quanto Persistentes para os propósitos descritos abaixo:</p>
                <ul>
                    <li>
                        <p><strong>Cookies Necessários / Essenciais</strong></p>
                        <p>Tipo: Cookies de Sessão</p>
                        <p>Administrados por: Nós</p>
                        <p>Propósito: Esses Cookies são essenciais para fornecer a você os serviços disponíveis através do Website e para permitir que você use algumas de suas funcionalidades. Eles ajudam a autenticar usuários e prevenir uso fraudulento de contas de usuários. Sem esses Cookies, os serviços que você solicitou não podem ser fornecidos, e nós usamos esses Cookies apenas para fornecer esses serviços.</p>
                    </li>
                    <li>
                        <p><strong>Cookies de Política / Aceitação de Avisos</strong></p>
                        <p>Tipo: Cookies Persistentes</p>
                        <p>Administrados por: Nós</p>
                        <p>Propósito: Esses Cookies identificam se os usuários aceitaram o uso de cookies no Website.</p>
                    </li>
                    <li>
                        <p><strong>Cookies de Funcionalidade</strong></p>
                        <p>Tipo: Cookies Persistentes</p>
                        <p>Administrados por: Nós</p>
                        <p>Propósito: Esses Cookies nos permitem lembrar escolhas que você faz quando usa o Website, como lembrar seus detalhes de login ou preferência de idioma. O propósito desses Cookies é fornecer a você uma experiência mais personalizada e evitar que você tenha que reentrar suas preferências toda vez que usar o Website.</p>
                    </li>
                </ul>
                <p>Para mais informações sobre os cookies que usamos e suas escolhas em relação aos cookies, por favor, visite nossa Política de Cookies ou a seção de Cookies de nossa Política de Privacidade.</p>

                <h3>Uso de Seus Dados Pessoais</h3>
                <p>A Empresa pode usar Dados Pessoais para os seguintes propósitos:</p>
                <ul>
                    <li>
                        <p><strong>Para fornecer e manter nosso Serviço</strong>, incluindo monitorar o uso do nosso Serviço.</p>
                    </li>
                    <li>
                        <p><strong>Para gerenciar Sua Conta:</strong> para gerenciar seu registro como usuário do Serviço. Os Dados Pessoais que você fornece podem lhe dar acesso a diferentes funcionalidades do Serviço que estão disponíveis para você como usuário registrado.</p>
                    </li>
                    <li>
                        <p><strong>Para a execução de um contrato:</strong> o desenvolvimento, conformidade e cumprimento do contrato de compra dos produtos, itens ou serviços que você comprou ou de qualquer outro contrato conosco através do Serviço.</p>
                    </li>
                    <li>
                        <p><strong>Para contatá-lo:</strong> para contatá-lo por email, chamadas telefônicas, SMS ou outras formas equivalentes de comunicação eletrônica, como notificações push de aplicativos móveis relacionadas a atualizações ou comunicações informativas relacionadas às funcionalidades, produtos ou serviços contratados, incluindo as atualizações de segurança, quando necessário ou razoável para sua implementação.</p>
                    </li>
                    <li>
                        <p><strong>Para fornecer a você</strong> notícias, ofertas especiais e informações gerais sobre outros bens, serviços e eventos que oferecemos que são similares àqueles que você já comprou ou solicitou, a menos que você tenha optado por não receber tais informações.</p>
                    </li>
                    <li>
                        <p><strong>Para gerenciar suas solicitações:</strong> para atender e gerenciar suas solicitações para nós.</p>
                    </li>
                    <li>
                        <p><strong>Para transferências de negócios:</strong> podemos usar suas informações para avaliar ou conduzir uma fusão, desinvestimento, reestruturação, reorganização, dissolução ou outra venda ou transferência de alguns ou todos os nossos ativos, seja como uma empresa em funcionamento ou como parte de um processo de falência, liquidação ou procedimento semelhante, no qual Dados Pessoais mantidos por nós sobre nossos usuários do Serviço estão entre os ativos transferidos.</p>
                    </li>
                    <li>
                        <p><strong>Para outros propósitos</strong>: podemos usar suas informações para outros propósitos, como análise de dados, identificação de tendências de uso, determinação da eficácia de nossas campanhas promocionais e para avaliar e melhorar nosso Serviço, produtos, serviços, marketing e sua experiência.</p>
                    </li>
                </ul>
                <p>Podemos compartilhar suas informações pessoais nas seguintes situações:</p>
                <ul>
                    <li><strong>Com Provedores de Serviço:</strong> Podemos compartilhar suas informações pessoais com Provedores de Serviço para monitorar e analisar o uso do nosso Serviço, para contatá-lo.</li>
                    <li><strong>Para transferências de negócios:</strong> Podemos compartilhar ou transferir suas informações pessoais em conexão com, ou durante negociações de, qualquer fusão, venda de ativos da Empresa, financiamento ou aquisição de toda ou parte de nosso negócio para outra empresa.</li>
                    <li><strong>Com Afiliadas:</strong> Podemos compartilhar suas informações com nossas afiliadas, caso em que exigiremos que essas afiliadas honrem esta Política de Privacidade. Afiliadas incluem nossa empresa matriz e quaisquer outras subsidiárias, parceiros de joint venture ou outras empresas que controlamos ou que estão sob controle comum conosco.</li>
                    <li><strong>Com parceiros de negócios:</strong> Podemos compartilhar suas informações com nossos parceiros de negócios para oferecer a você certos produtos, serviços ou promoções.</li>
                    <li><strong>Com outros usuários:</strong> quando você compartilha informações pessoais ou interage de outra forma nas áreas públicas com outros usuários, tais informações podem ser visualizadas por todos os usuários e podem ser distribuídas publicamente fora. Se você interagir com outros usuários ou se registrar através de um Serviço de Mídias Sociais de Terceiros, seus contatos no Serviço de Mídias Sociais de Terceiros podem ver seu nome, perfil, fotos e descrição de sua atividade. Da mesma forma, outros usuários poderão visualizar descrições de sua atividade, se comunicar com você e visualizar seu perfil.</li>
                    <li><strong>Com seu consentimento</strong>: Podemos divulgar suas informações pessoais para qualquer outro propósito com seu consentimento.</li>
                </ul>

                <h3>Retenção de Seus Dados Pessoais</h3>
                <p>A Empresa reterá seus Dados Pessoais apenas pelo tempo necessário para os propósitos estabelecidos nesta Política de Privacidade. Reteremos e usaremos seus Dados Pessoais na medida necessária para cumprir nossas obrigações legais (por exemplo, se formos obrigados a reter seus dados para cumprir leis aplicáveis), resolver disputas e fazer cumprir nossos acordos e políticas legais.</p>
                <p>A Empresa também reterá Dados de Uso para fins de análise interna. Dados de Uso geralmente são retidos por um período de tempo mais curto, exceto quando esses dados são usados para fortalecer a segurança ou para melhorar a funcionalidade do nosso Serviço, ou quando somos legalmente obrigados a reter esses dados por períodos de tempo mais longos.</p>

                <h3>Transferência de Seus Dados Pessoais</h3>
                <p>Suas informações, incluindo Dados Pessoais, são processadas nos escritórios operacionais da Empresa e em quaisquer outros locais onde as partes envolvidas no processamento estão localizadas. Isso significa que essas informações podem ser transferidas para — e mantidas em — computadores localizados fora do seu estado, província, país ou outra jurisdição governamental onde as leis de proteção de dados podem diferir das do seu jurisdição.</p>
                <p>Seu consentimento com esta Política de Privacidade seguido da sua submissão de tais informações representa sua concordância com essa transferência.</p>
                <p>A Empresa tomará todas as medidas razoavelmente necessárias para garantir que seus dados sejam tratados de forma segura e de acordo com esta Política de Privacidade e nenhuma transferência de seus Dados Pessoais ocorrerá para uma organização ou país, a menos que existam controles adequados em vigor, incluindo a segurança de seus dados e outras informações pessoais.</p>

                <h3>Excluir Seus Dados Pessoais</h3>
                <p>Você tem o direito de excluir ou solicitar que ajudemos a excluir os Dados Pessoais que coletamos sobre você.</p>
                <p>Nosso Serviço pode lhe dar a capacidade de excluir certas informações sobre você de dentro do Serviço.</p>
                <p>Você pode atualizar, alterar ou excluir suas informações a qualquer momento ao fazer login em sua Conta, se tiver uma, e visitar a seção de configurações de conta que permite gerenciar suas informações pessoais. Você também pode nos contatar para solicitar acesso, corrigir ou excluir qualquer informação pessoal que você nos forneceu.</p>
                <p>Por favor, note, no entanto, que podemos precisar reter certas informações quando temos uma obrigação legal ou base legal para fazê-lo.</p>

                <h3>Divulgação de Seus Dados Pessoais</h3>
                <h4>Transações Comerciais</h4>
                <p>Se a Empresa estiver envolvida em uma fusão, aquisição ou venda de ativos, seus Dados Pessoais poderão ser transferidos. Forneceremos aviso antes de seus Dados Pessoais serem transferidos e se tornarem sujeitos a uma Política de Privacidade diferente.</p>

                <h4>Força de Trabalho</h4>
                <p>Em certas circunstâncias, a Empresa pode ser obrigada a divulgar seus Dados Pessoais se exigido por lei ou em resposta a solicitações válidas por autoridades públicas (por exemplo, um tribunal ou uma agência governamental).</p>

                <h4>Outras exigências legais</h4>
                <p>A Empresa pode divulgar seus Dados Pessoais na boa-fé de que tal ação é necessária para:</p>
                <ul>
                    <li>Cumprir uma obrigação legal</li>
                    <li>Proteger e defender os direitos ou propriedade da Empresa</li>
                    <li>Prevenir ou investigar possíveis irregularidades em conexão com o Serviço</li>
                    <li>Proteger a segurança pessoal dos Usuários do Serviço ou do público</li>
                    <li>Proteger contra responsabilidade legal</li>
                </ul>

                <h3>Segurança de Seus Dados Pessoais</h3>
                <p>A segurança de seus Dados Pessoais é importante para nós, mas lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger seus Dados Pessoais, não podemos garantir sua segurança absoluta.</p>

            </>
        ),
    },
    {
        title: "Privacidade das Crianças:",
        description: (
            <>
                <p>Nosso Serviço não é dirigido a ninguém com menos de 13 anos de idade. Não coletamos informações pessoalmente identificáveis de ninguém nesta faixa etária. 
                    Se você é um pai ou tutor e está ciente de que seu filho nos forneceu Dados Pessoais, por favor, entre em contato conosco. Se nos tornarmos cientes de que coletamos Dados Pessoais de alguém com menos de 13 anos sem verificação de consentimento parental, tomaremos medidas para remover essas informações de nossos servidores.
                </p>
                <p>Se precisarmos depender do consentimento como base legal para processar suas informações e seu país exigir consentimento de um pai, poderemos exigir o consentimento deste tutor antes de coletar e usar essas informações.</p>
            </>
        ),
    },
    {
        title: "Links para Outros Sites:",
        description: (
            <>
                <p>Nosso Serviço pode conter links para outros sites que não são operados por nós. Se você clicar em um link de terceiros, será direcionado para o respectivo site. Recomendamos fortemente que você revise a Política de Privacidade de cada site que visitar.</p>
                <p>Não temos controle sobre outros sites e não assumimos nenhuma responsabilidade pelo conteúdo, políticas de privacidade ou práticas de qualquer site ou serviço de terceiros.</p>
            </>
        ),

    },
    {
        title: "Alterações a Esta Política de Privacidade:",
        description: (
            <>
                <p>Podemos atualizar nossa Política de Privacidade de tempos em tempos e publicaremos a nova nesta página.</p>
                <p>Informaremos você por e-mail e/ou por um aviso destacado em nosso Serviço, antes que a mudança se torne efetiva e faremos a alteração da data de "Última atualização" no topo desta Política de Privacidade.</p>
                <p>Você é aconselhado a revisar esta Política de Privacidade periodicamente para quaisquer mudanças. As mudanças a esta Política de Privacidade são efetivas quando são publicadas nesta página.</p>
            </>
        ),
    },
    {
        title: "Contate-Nos:",
        description: (
            <>
                <p>
                    A Meca Importações está comprometida em atender suas solicitações e esclarecer qualquer dúvida relacionada 
                    a esta Política de Privacidade. Nosso objetivo é garantir a transparência no tratamento dos seus dados pessoais.
                </p>
                <p>
                    Caso tenha alguma pergunta ou precise de mais informações, você pode entrar em contato com nossa equipe 
                    através dos canais abaixo:
                </p>
                <ul>
                    <li>
                        <p>Email: <a href="mailto:politica.privacidade@mecaimportacoes.com.br">politica.privacidade@mecaimportacoes.com.br</a></p>
                    </li>
                    <li>
                        <p>
                            Website:{" "}
                            <a 
                                href="https://www.mecaimportacoes.com.br/contato" 
                                rel="external nofollow noopener" 
                                target="_blank"
                            >
                                www.mecaimportacoes.com.br/contato
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>Telefone: 11 97071-8680</p>
                    </li>
                </ul>
                <p>
                    Após receber sua solicitação, nossa equipe irá analisá-la e responder em um prazo adequado, 
                    buscando solucionar dúvidas ou questões relacionadas ao tratamento dos seus dados pessoais. 
                    A Meca Importações está comprometida em respeitar seus direitos em conformidade com as leis 
                    de proteção de dados vigentes.
                </p>
            </>
        ),
    },];

    const [expandedPolicies, setExpandedPolicies] = useState([]); // Array para rastrear seções expandidas

    const userToggle = (indexPolicies) => {
        setExpandedPolicies((prev) => {
            const newState = [...prev];
            newState[indexPolicies] = !newState[indexPolicies]; // Alterna o estado da seção
            return newState;
        });
    };


     //ANIMAÇÃO DE FADEIN DO CONTEÚDO
     const sectionsRefs = [useRef(null), useRef(null)];
     const [hasAppeared, setHasAppeared] = useState([false, false]);

     const onScreen = sectionsRefs.map((ref, index) => {
        const isVisible = useOnScreen(ref, "2000px");
        if(isVisible && !hasAppeared[index]){
            setHasAppeared(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
            })
        }
        return hasAppeared[index] || isVisible;
     })
     //ANIMAÇÃO DE FADEIN DO CONTEÚDO


    return(
        <div className="main-privacidade">
            <Helmet>
                {/* JSON-LD para schema.org */}
                <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "PrivacyPolicy",
                    "url": "https://www.mecaimportacoes.com.br/privacidade",
                    "name": "Política de Privacidade",
                    "description": "Descrição completa da Política de Privacidade da Meca Importações.",
                    "dateModified": "2025-01-20"
                }
                `}
                </script>

                {/* Metadados para SEO e redes sociais */}
                <title>Política de Privacidade | Meca Importações</title>
                <meta name="description" content="Confira a Política de Privacidade da Meca Importações e saiba como protegemos seus dados e informações pessoais." />
                <meta name="keywords" content="Meca Importações, política de privacidade, proteção de dados, segurança, privacidade, dados pessoais, transparência, termos de uso, Componentes, Componentes eletrônicos, Distribuição, Importação, Importação de componentes eletrônicos" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Política de Privacidade | Meca Importações" />
                <meta property="og:description" content="Confira a Política de Privacidade da Meca Importações." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mecaimportacoes.com.br/privacidade" />
            </Helmet>
            <section 
                className={`section-privacidade ${onScreen[0] ? 'visible' : ''}`}
                ref={sectionsRefs[0]}
            >
                <h1>Política de Privacidade</h1>
                <p className="p-privacidade">Última atualização: 20 de Janeiro de 2025 <span>Versão 1.0</span></p>

                <p>A Meca Importações tem como compromisso, proteger sua privacidade.</p>
                <p>Nossa política de privacidade, descreve procedimentos sobre coleta, uso e divulgação de suas informações quando você utiliza nossos serviços e informa sobre seus direitos de privacidade e como a lei o protege.</p>
                <p>Usamos seus dados pessoais para fornecer e melhorar nossos serviços. Ao utilizá-los, você concorda com a coleta e uso de informações de acordo com esta Política de Privacidade.</p>
                <p>A coleta e o uso das suas informações pessoais serão limitados aos termos sob os quais você concedeu sua autorização, sempre em conformidade com a legislação aplicável.</p>
            </section>
            <section 
                className={`section-privacidade2 ${onScreen[1] ? 'visible' : ''}`}
                ref={sectionsRefs[1]}
            >
                {policies.map((policies, indexPolicies) => (
                    <div key={indexPolicies}>
                        <button
                            className="div-title-content-privacidade"
                            onClick={() => userToggle(indexPolicies)}
                            aria-expanded={!!expandedPolicies[indexPolicies]}
                        >
                                <h2>{policies.title}</h2>

                            {/* Ícone de + ou - dependendo do estado */}
                            <span style={{
                                fontSize: '1.8rem',
                                position: 'absolute',
                                left: '10px',
                                top: '0px', 
                                color: '#fff',
                            }}>
                                {expandedPolicies === indexPolicies ? "-" : "+"}
                            </span>
                        </button>

                        {/* Exibe a descrição se o indicador estiver expandido */}
                        <div
                            className={`collapsible-content ${
                                expandedPolicies[indexPolicies] ? "expanded" : ""
                            }`}
                            style={{
                                overflow: "hidden",
                                transition: "max-height 0.8s ease-in-out",
                                maxHeight: expandedPolicies[indexPolicies] ? "10000px" : "0",
                            }}>
                            <div className="div-content-privacidade">
                                <p style={{fontSize:'1rem'}}>{policies.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            

        </div>
    )
}

export default Privacidade;