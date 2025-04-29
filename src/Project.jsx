import './css/index.css';
import { useState , useEffect } from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from './components/AppRoutes';
import CookieBanner from './components/CookieBanner';
import { BrowserRouter } from 'react-router-dom';
import Whatsapp from './components/Whatsapp';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './UI/LoadingScreen';
import AlertDay from './components/AlertDay';


function Project(){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Espera o DOM e todos os recursos (imagens, fontes) carregarem completamente
        const handleLoad = () => setIsLoading(false);

        // Timeout de segurança
        const safetyTimer = setTimeout(() => setIsLoading(false), 5000); // 3 segundos
    
        // Adiciona o listener para o evento onload
        window.addEventListener('load', handleLoad);
    
        // Remove o listener quando o componente desmontar
        return () => {
            clearTimeout(safetyTimer); // Limpa o timeout
            window.removeEventListener('load', handleLoad);
          };
      }, []);
    
    return(
        <>
            {isLoading ? (
            <LoadingScreen /> // Usa o componente separado para loading
            ) : (
                <BrowserRouter>
                    <ScrollToTop />
                    <Header />
                    <main>
                        <AppRoutes />
                    </main>
                    <AlertDay />
                    <CookieBanner />
                    <Whatsapp />
                    <Footer />
                </BrowserRouter>
            )}
        </>
    )
}


export default Project;