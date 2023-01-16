import React from "react";
import { motion } from "framer-motion";

// Images
import Robert from "../../images/co/robert.svg"
import Olave from "../../images/co/olave.svg"
import Namiot from "../../images/co/namiot.svg"
import Chusta from "../../images/co/chusta.svg"

const info = [
    { name: 'Robert Baden-Powell', src:`${Robert}`, background:'bg-blue-3', class:'', delay: 0.2, text: false},
    { name: 'Text1', background:'bg-green-2', class:'', delay: 0.4, text: true,
    title:"Co to jest? / Qué es?",
    textPl:"PL → 22 lutego to dzień upamiętniający urodziny Roberta i Olave Baden-Powell. To dzięki parze Naczelnych Skautów ludzie z całego globu od ponad stu lat nawiązują ze sobą i ze światem skautowe więzi.",
    textEs:"ES → El 22 de febrero se conmemora el cumpleaños de Robert y Olave Baden-Powell. Es gracias a un par de Jefes Scouts que personas de todo el planeta han forjado durante más de un siglo lazos escultistas entre sí y con el mundo.",
    },
    { name: 'Olave Baden-Powell', src:`${Olave}`, background:'bg-orange-1', class:'', delay: 0.5, text: false},
    { name: 'Text2',  background:'bg-red', class:'', delay: 0.3,
    title:"",
    textPl:"PL → Dzień Myśli Braterskiej jest właśnie po to, by te więzi wzmocnić jeszcze bardziej; by naprawdę poczuć, że wszyscy jesteśmy częścią jednego ruchu, a wszelkie podziały są tylko pozorne.",
    textEs:"ES → El Día del Pensamiento Fraterno es precisamente para estrechar aún más estos lazos; para sentir realmente que todos formamos parte de un mismo movimiento y que cualquier división es sólo aparente.",
    },
    { name: 'Namiot', src:`${Namiot}`, background:'bg-yellow', class:'', delay: 0.5, text: false},
    { name: 'Chusta', src:`${Chusta}`, background:'bg-blue-3', class:'', delay: 0.5, text: false},
]

const Co = () => {

    return (
            <div id="co" className="w-full h-full grid gap-0
                        grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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
                                className="w-auto h-full flex flex-col justify-center p-14"
                            >
                                <p className="text-2xl font-medium">
                                    {i.title}
                                </p>
                                <p className="text-base pt-10">
                                    {i.textPl}
                                </p>
                                <p className="text-base pt-5">
                                    {i.textEs}
                                </p>
                            </motion.div>
                            }
                    
                </div>
            ))}
                
            </div>
    )
}

export default Co;