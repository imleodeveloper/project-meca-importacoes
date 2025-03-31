import { Routes, Route } from "react-router-dom";



import Home from "./Pages/Home";
/* PAGES */
import Privacidade from "./Pages/Menu-Empresa/Privacidade";
import SobreNos from "./Pages/Menu-Empresa/SobreNos";
import Contato from "./Pages/Contato";
import Obrigado from "./Pages/Obrigado";
import Especializacao from "./Pages/Menu-Solucoes/Especializacao";
import Services from "./Pages/Menu-Solucoes/Services";
import Blog from "./Pages/Blog";
import Processos_De_Importacao from "./Pages/Menu-Blog/Processos_De_Importacao";
/* PAGES */

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>

                {/* PAGES */}
                    {/* SUB MENU EMPRESA*/}
                    <Route path="/empresa/privacidade" element={<Privacidade />}/>
                    <Route path="/empresa/sobre-nos" element={<SobreNos />}/>
                    {/* SUB MENU EMPRESA*/}                 

                    <Route path="/contato" element={<Contato />}/>
                    {/* AGRADECIMENTO DO FORMULÁRIO */}
                    <Route path="/contato/obrigado" element={<Obrigado />} />
                     {/*AGRADECIMENTO DO FORMULÁRIO */}

                    {/* SUB MENU SOLUÇÕES */}
                    <Route path="/solucoes/especializacao" element={<Especializacao />} />
                    <Route path="/solucoes/servicos" element={<Services />} />                   
                    {/* SUB MENU SOLUÇÕES */}


                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/processos-de-importacao" element={<Processos_De_Importacao />} />

                {/* PAGES */}

        </Routes>
    )
}

export default AppRoutes;