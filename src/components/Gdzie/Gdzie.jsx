import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Map from "../Map/Map";

const info = [
    {
        name: 'Text1',
        background:'bg-blue-3',
        class:'',
        delay: 0.2,
        text: true,
        title:"Gdzie? / Dónde?",
        textPl:"Maciaszkowo",
        textEs:"Martín Coronado",
        adres1:"Juan Pablo II 2360, Martín Coronado",
        adres2:"Provincia de Buenos Aires",
    },
]

const Gdzie = () => {

    return (
            <div id="gdzie" className="w-full h-full text-center
            grid gap-0
            grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {info.map((i) => (
                    <div key={i.name}
                    className={`${i.background} ${i.class} flex items-center justify-center h-full`}>
                        <motion.div
                        className="w-auto h-full flex flex-col justify-center 
                        py-24 xs:py-24 sm:py-24 md:py-14 lg:py-20 xl:py-24 2xl:py-24
                        px-14"
                        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            damping: 10,
                            stiffness: 70,
                            restDelta: 0.001,
                            delay: `${i.delay}`,
                        }}>
                            <p className="text-2xl font-medium">
                                {i.title}
                            </p>
                            <FontAwesomeIcon icon={faLocationDot} className="pt-10 pb-5 text-4xl"/>
                            <p className="text-3xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
                                {i.textPl}
                            </p>
                            <p className="text-2xl font-extralight">
                                {i.textEs}
                            </p>
                            <p className="text-xl pt-14 font-extralight">
                                {i.adres1}
                            </p>
                            <p className="text-xl font-extralight">
                                {i.adres2}
                            </p>
                        </motion.div>
                    </div>
                ))}
                <Map/>
            </div>
    )
}

export default Gdzie;