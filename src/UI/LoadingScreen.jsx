import '../css/index.css';


const LoadingScreen = () => {
    return(
        <div id="loading-screen">
            <div className="spinner-loading">
                <div className="circle-loading"></div>
                <div className="logo-loading"></div>
            </div>
            <div className="loading-text">
                    <span>Loading</span><span className="dots">...</span>
            </div>
        </div>
    );
};

export default LoadingScreen;