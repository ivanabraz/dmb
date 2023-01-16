import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

// Images
import Gwiadza from "../../images/kiedy/gwiazda.svg"
import Wezel from "../../images/kiedy/wezel.svg"

const info = [
    { name: 'Gwiadza', src:`${Gwiadza}`, background:'bg-gray-2', class:'', delay: 0.2, text: false},
    { name: 'Text1', background:'bg-purple-3', class:'', delay: 0.4, text: true,
    title:"Kiedy to jest? / Cuándo es?",
    textPl:"22 lutego - 10:00",
    textEs:"22 de febrero - 10:00",
    },
    { name: 'Wezel', src:`${Wezel}`, background:'bg-red', class:'', delay: 0.1, text: false},
]

const Kiedy = () => {

    return (
            <div id="kiedy" className="w-full h-full text-center
            grid gap-0
            grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                {info.map((i) => (
                    <div key={i.name} className={`${i.background} ${i.class} flex items-center justify-center h-full`}>
                        {i.text === false 
                        ?    <motion.img
                                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 70,
                                    restDelta: 0.001,
                                    delay: `${i.delay}`,
                                }}
                                alt={i.name} className="w-auto h-full" src={i.src}
                                />
                        :   <motion.div
                                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 70,
                                    restDelta: 0.001,
                                    delay: `${i.delay}`,
                                }}
                                className="w-auto h-full flex flex-col justify-center 
                                py-32 xs:py-32 sm:py-32 md:py-14 lg:py-20 xl:py-24 2xl:py-24
                                px-14
                                ">
                                <p className="text-2xl font-medium">
                                    {i.title}
                                </p>

                                <FontAwesomeIcon icon={faCalendarAlt} className="pt-10 pb-5 text-4xl"/>
                                <p className="text-3xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
                                    {i.textPl}
                                </p>
                                <p className="text-2xl font-extralight mt-5">
                                    {i.textEs}
                                </p>
                            </motion.div>
                            }
                    
                </div>
            ))}
                
            </div>
    )
}

export default Kiedy;