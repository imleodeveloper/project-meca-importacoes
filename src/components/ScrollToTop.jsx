import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Rola para o topo
    }, [pathname]); // Executa toda vez que o caminho muda

    return null;
};

export default ScrollToTop;