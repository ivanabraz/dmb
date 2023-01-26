import React from "react";

const Map = () => {  
    const title = "Maciaszkowo";

    return (
        <div className="googlemap">
            <iframe 
                className="google-iframe"
                title={title.toString()}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13138.894336535826!2d-58.6039187!3d-34.5858601!3m2!1i10[56%]!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe058ac64ac68d691!2sConvento%20de%20los%20padres%20franciscanos%20de%20Polonia%2C%20Misi%C3%B3n%20Polaca%20(Maciaszkowo)!5e0!3m2!1ses!2sar!4v1674741023565!5m2!1ses!2sar" 
                frameBorder="0" 
                style={{border:0}} 
                allowFullScreen
                aria-hidden="false" 
                tabIndex="0" 
            />
        </div>
    )
}

export default Map;