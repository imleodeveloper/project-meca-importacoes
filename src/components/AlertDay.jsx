import { useEffect, useState } from 'react';
import '../css/index.css';

function AlertDay(){

    const [isAlert, setIsAlert] = useState(true);

    useEffect(() => {
        const now = new Date();
        const dateLimit = new Date('2025-05-04T23:59:59');

        if (now > dateLimit){
            setIsAlert(false);
        }
    }, []);

    const userClose = () => {
        setIsAlert(false);
    };

    return(


        isAlert && (
            <div className="alert-container">
                <div className="alert-banner">
                    <div className="alert-content">
                        <p
                            style={{
                                textTransform: 'uppercase',
                                textAlign: 'center',
                                fontWeight: '700',
                                color: '#000',
                                margin: 0,
                            }}
                        >Comunicado</p>
                        <span
                            style={{
                                width: '70%',
                                height: '20px',
                                background: '#0059ff',
                                borderRadius: '50px',

                            }}
                        ></span>
                        <p
                            style={{
                                textAlign: 'center',
                                color: '#000',
                                padding: '10px 0px',
                                margin: 0,
                                
                            }}
                        >
                            Devido ao feriado de <strong>1° de maio</strong> (dia do trabalho) não teremos atendimento nos dias <strong>01/05 e 02/05.</strong>
                        </p>
                        <p
                            style={{
                                textAlign: 'center',
                                color: '#000',
                            }}
                        >
                            Retornaremos no <strong>dia 05/05.</strong><br />
                            Bom feriado a todos!
                        </p>
                    </div>
                    <div className='icon-alert'>
                        <i className="mdi mdi-alert"></i>
                    </div>
                    <button onClick={userClose} className="close-alert">
                        <i className="mdi mdi-close"></i>
                    </button>
                </div>
            </div>
        )

    )
};

export default AlertDay;