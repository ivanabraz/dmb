import React from "react";

const HeroText = (HeroTextProps) => {
    return (
        <div className={`${HeroTextProps.backgroundColor} flex flex-row justify-center items-center text-center w-full h-[30vh] p-10 
        text-4xl xs:text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl`}>
            {HeroTextProps.title}
        </div>
    )
}

export default HeroText;