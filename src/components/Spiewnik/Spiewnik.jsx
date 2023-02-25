import React, {useEffect, useRef} from "react";
import lottie from "lottie-web";
import animation from "./ognisko.json";

const Spiewnik = () => {
    let animationContainer = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animation
        });
        return () => anim.destroy();
        }, []);

    return (
        <div id="spiewnik" 
        className='w-full h-full grid gap-0 grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
            {/* OGNISKO */}
            <div className=' bg-orange-1
            w-full h-full flex flex-col justify-center px-14
            py-5' ref={animationContainer}>
            </div>

            {/* BUTTON */}
            <div className='py-[3em] xs:py-[3em] sm:py-[4em] md:py-0 w-full h-full bg-blue-3 flex flex-col justify-center m-auto text-center text-5xl'>
                <div className="margin-auto">
                    <p className="">
                        Śpiewnik
                    </p>
                    <a href="https://zhp-spiewnik.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <button className="border w-fit text-base m-auto px-4 py-2 rounded-full mt-10">
                            →
                        </button>
                    </a>
                </div>
            </div>
        </div>                
    )
}

export default Spiewnik;