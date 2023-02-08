import React from "react";

const Map = () => {  
    const title = "Maciaszkowo";

    return (
        <div className="googlemap">
            <iframe 
                className="google-iframe"
                title={title.toString()}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13098.91293180002!2d-58.391819!3d-34.8379249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ee8f17fbb29a832!2sCentro%20Juvenil%20Polaco!5e0!3m2!1ses!2sar!4v1675819858722!5m2!1ses!2sar" 
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