import React from "react";
import { motion } from "framer-motion";

// Images
import Namiot from "../../images/gdzie/namiot.svg"

const info = [
    {   name: 'Program', 
        background:'bg-pink-2', 
        delay: 0.1,
        title:"Program / Programa",
        infoProgram: [
            {
                time:'09:00',
                activity:'Zbiórka',
                delay: 0.1,
            },
            {
                time:'09:30',
                activity:'Wycieczka',
                delay: 0.2,
            },
            {
                time:'13:00',
                activity:'Obiad',
                delay: 0.3,
            },
            {
                time:'17:00',
                activity:'Ognisko',
                delay: 0.4,
            },
        ],
    },
];

const Program = () => {

    return (
        <div id="program" 
        className='w-full h-full grid gap-0 grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
            {/* PROGRAM */}
            {info.map((info) => (
                <div key={info.activity}
                className={`${info.background}
                w-full h-full flex flex-col justify-center px-14
                py-24 xs:py-24 sm:py-24 md:py-14 lg:py-20 xl:py-24 2xl:py-24`}>
                    <div className="w-auto m-auto">
                        <motion.p
                        className={`text-2xl font-medium pb-10`}
                        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            damping: 10,
                            stiffness: 70,
                            restDelta: 0.001,
                            delay: `${info.delay}`,
                        }}>
                            {info.title}
                        </motion.p>
                        {info.infoProgram.map((i) => (
                            <motion.p
                            className={`text-2xl font-medium pb-3`}
                            initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                damping: 10,
                                stiffness: 70,
                                restDelta: 0.001,
                                delay: `${i.delay}`,
                            }}>
                                <span className="font-extralight">{i.time} — </span>
                                <span className="font-medium">{i.activity}</span>
                            </motion.p>
                        ))}
                    </div>
                </div>
            ))}

            {/* IMAGE */}
            <div className='w-full h-full bg-lime p-14 flex flex-col justify-center m-auto'>
                <motion.img
                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 70,
                    restDelta: 0.001,
                    delay: 0.2,
                }}
                alt='DMB' className="w-auto h-full" src={Namiot}
                />
            </div>
        </div>                
    )
}

export default Program;