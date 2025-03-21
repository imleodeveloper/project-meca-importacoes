import { useState , useEffect } from 'react';
import '../../css/index.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



function Contato(){

    const [formData, setFormData] = useState({
        CEP: '',
        Estado: '',
        Cidade: '',
        Endereço: '',
    });

    const [isFieldsVisible, setFieldsVisible] = useState(false); // Estado para controlar a visibilidade dos campos ENDEREÇO, BAIRRO, ESTADO
    const [cepInput, setCepInput] = useState(''); // Valor do campo CEP, para evitar sobrescrever
    
    const handleCepChange = (e) => {
        const cep = e.target.value.replace(/\D/g, '');// Remove caracteres não numéricos
        setCepInput(cep); // Atualiza apenas o valor do input

        if(cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((data) => {
                if(!data.erro){
                    setFormData({
                        ...formData,
                        Estado: data.uf || '',
                            Cidade: data.localidade || '',
                            Endereço: `${data.logradouro || ''} ${data.bairro || ''}`,
                    });
                    setFieldsVisible(true); // Torna os campos visíveis quando o CEP for válido
                } else {
                    alert('CEP não encontrado!');
                    setFieldsVisible(false); // Se o CEP for inválido, mantém os campos ocultos
                }
            })
            .catch(() => {
                alert('Erro ao buscar o CEP.');
                setFieldsVisible(false); // Caso haja erro na requisição, mantém os campos ocultos
            });
        }else{
            setFieldsVisible(false); // Se o CEP não tiver 8 dígitos, mantém os campos ocultos
        }
    };
    useEffect(() => {
        // Evita que o CEP digitado seja sobrescrito após o preenchimento
        setFormData((prevState) => ({
            ...prevState,
            CEP: cepInput
        }));
    }, [cepInput]); // Quando o valor do input CEP mudar, só atualiza o estado se necessário

    useEffect(() => {
        // Adicionar o script do reCAPTCHA dinamicamente
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    
        // Limpeza do script quando o componente for desmontado
        return () => {
          document.body.removeChild(script);
        };
      }, []);

      const handleSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);

        try{
            await fetch('https://formsubmit.co/contato@mecaimportacoes.com.br', {
                method: 'POST',
                body: formData,
            });
            window.location.href = 'https://www.mecaimportacoes.com.br/contato/obrigado';
        } catch(error) {
            alert('Erro ao enviar o formulário');
        }
      };
    return(
        <div className='mainContato'>
            <Helmet>
                {/* JSON-LD para schema.org */}
                <script type="application/ld+json">
                    {`
                    {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "url": "https://www.mecaimportacoes.com.br/contato",
                    "name": "Meca Importações",
                    "description": "Entre em contato com a Meca Importações para esclarecer suas dúvidas, fazer perguntas ou obter mais informações sobre nossos produtos e serviços.",
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
                            "https://www.instagram.com/mecaimportacoes"
                        ]
                    }        

                    
                    `}
                </script>

                {/* Metadados para SEO e redes sociais */}
                <title>Contato | Meca Importações</title>
                <meta property="og:title" content="Contato | Meca Importações" />
                <meta property="og:description" content="Entre em contato com a Meca Importações para mais informações sobre nossos produtos e serviços." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mecaimportacoes.com.br/contato" />
            </Helmet>
            <article>
                <section className='section-form'>
                    <div className='titleForm'>
                        <h1>Formulário para Contato</h1>
                    </div>
                    
                                            {/* LEMBRAR DE CRIPTOGRAFAR EMAIL */}
                    <form name="formContato" onSubmit={handleSubmit} id="formContato">                         
                        <div className="div-input-form">
                            <input 
                                type="text" 
                                name="Nome" 
                                required 
                                placeholder=" " 
                                className="input-text-form"
                            />
                            <label htmlFor="Nome" className="label-form">Nome completo</label>                                                   
                        </div>

                        <div className="div-input-form">                        
                            <input 
                                type="email" 
                                name="Email" 
                                required 
                                placeholder=" "
                                className="input-text-form"
                            />
                            <label htmlFor="Email" className="label-form">Email</label>
                        </div>
                        
                        <div className="div-input-form">                        
                            <input 
                                type="tel" 
                                name="Telefone" 
                                required 
                                placeholder=" "
                                className="input-text-form"
                            />
                            <label htmlFor="Telefone" className="label-form">Telefone</label>
                        </div>

                        <div className="div-input-form">                        
                            <input  
                                type="text"                                 
                                name="CEP" 
                                placeholder=" "
                                className="input-text-form"
                                value={cepInput} // Usa o estado local para o campo CEP
                                onChange={handleCepChange}
                            />
                            <label htmlFor="CEP" className="label-form">CEP</label>
                        </div>

                        {/* Campos de Estado, Cidade e Endereço aparecem apenas quando o CEP é válido */}
                        {isFieldsVisible && (
                            <>
                                <div className="div-input-form">
                                    <input
                                        type="text"
                                        name="Estado"
                                        placeholder=" "
                                        className="input-text-form"
                                        value={formData.Estado}
                                        readOnly
                                    />
                                    <label htmlFor="Estado" className="label-form">Estado</label>
                                </div>

                                <div className="div-input-form">
                                    <input
                                        type="text"
                                        name="Cidade"
                                        placeholder=" "
                                        className="input-text-form"
                                        value={formData.Cidade}
                                        readOnly
                                    />
                                    <label htmlFor="Cidade" className="label-form">Cidade</label>
                                </div>

                                <div className="div-input-form">
                                    <div className='input-group'>
                                        <input
                                            type="text"
                                            name="Endereço"
                                            placeholder=" "
                                            className="input-text-form endereco"
                                            value={formData.Endereço}
                                            readOnly
                                            />
                                            <label htmlFor="Endereco" className="label-form">Endereço</label>
                                        <input
                                            type="number"
                                            name="Número"
                                            placeholder=" "
                                            className="input-text-form numero"
                                            required
                                            />
                                            <label htmlFor="Número" className="label-form numero">Número</label>
                                        
                                    </div>
                                </div>

                                    
                                    
                            </>
                        )}
                        <div className="div-input-form">                        
                            <input 
                                type="text" 
                                name="Empresa" 
                                placeholder=" "
                                className="input-text-form"
                            />
                            <label htmlFor="Empresa" className="label-form">Sua empresa (site)</label>
                        </div>

                        <div className="div-input-form">
                            <textarea name="Mensagem" placeholder=" " rows="5" required className="input-text-form">
                            </textarea>
                            <label htmlFor="Mensagem" className="label-form">Mensagem</label>
                        </div>                         

                        <div className="div-checkbox-form">
                            <input type="checkbox" id="checkbox-send-form" name="Aceite da Política de Privacidade" required />
                            <label htmlFor="checkbox-send-form" id="label-checkbox-form">Declaro que li e aceito a <Link to="/empresa/privacidade" target="_blank" className="link-checkbox-form">Política de Privacidade.</Link></label>
                        </div>      

                        <div className="div-input-form">
                            <button type="submit" id="send">Enviar</button>
                        </div>

                        <div className="g-recaptcha" data-sitekey="6Lca0rgqAAAAANxrLPCITjxhf9MNuaXle-1H85id" required></div>
                                

                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://www.mecaimportacoes.com.br/contato/obrigado" />
                        <input type="hidden" name="_subject" value="Novo contato via formulário para Meca Importações"/>
                        <input type="hidden" name="_template" value="table"/>
                        <input type="hidden" name="_headers" value="Cache-Control: no-cache, no-store, must-revalidate" />

                        

                    </form>
                </section>
                <section className="section-contato-info">
                        <h2>fale conosco</h2>
                        <div className='section-contato-info2'>
                            <div className='p-contato'>
                                <p>
                                    Estamos sempre à disposição! Se precisar de ajuda ou informações, não hesite em entrar em contato.
                                </p>
                            </div>
                            <div className='info-contato'>
                                <a href="https://wa.me/5511970718680" target='_blank' rel='noopener noreferrer' className="link-contato">
                                    <div>
                                        <h3>whatsapp</h3>
                                        <p>+55 (11) 97071-8680</p>
                                    </div>
                                </a>
                                <a href="tel:+5511970718680" target='_blank' rel='noopener noreferrer'className="link-contato">
                                    <div>
                                        <h3>telefone</h3>
                                        <p>+55 (11) 97071-8680</p>
                                    </div>
                                </a>   
                                <a 
                                    href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwje-Of3qvWKAxVyppUCHSQoICsQ8gF6BAgfEAI&url=%2Fmaps%2Fplace%2FR.%2BReg.%2BFeij%25C3%25B3%2C%2B166%2B-%2BCentro%2C%2BDiadema%2B-%2BSP%2C%2B16480-025%2Fdata%3D!4m2!3m1!1s0x94ce44faa05f3f9f%3A0x6b1abed836e9c196%3Fsa%3DX%26ved%3D1t%3A242%26ictx%3D111&usg=AOvVaw0dJPTJ55P05B9yoE1I8_Fg&opi=89978449" 
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                    className="link-contato"
                                >   
                                    <div>
                                        <h3>ENDEREÇO</h3>
                                        <p>Rua Regente Feijó, 166 - CEP: 09910-770, Diadema - SP</p>
                                    </div>
                                </a> 
                                <a 
                                    href="mailto:contato@mecaimportacoes.com.br" 
                                    className="link-contato"
                                >
                                    <div>
                                        <h3>E-MAIL</h3>
                                        <p>contato@mecaimportacoes.com.br</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                </section>

            </article>
        </div>
    )
}

export default Contato;