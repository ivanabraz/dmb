import React from "react";
import { motion } from "framer-motion";

// Images
import Kapelusz from "../../images/co/kapelusz.svg"
import Ziemia from "../../images/co/ziemia.svg"
import Pokoj from "../../images/co/pokoj.svg"
import Golab from "../../images/co/golab.svg"

const info = {
    images: [
        { name: 'Robert Baden-Powell`', src:`${Kapelusz}`, background:'bg-pink-1', delay: 0.1, text: false},
        { name: 'Robert Baden-Powell1', src:`${Ziemia}`, background:'bg-blue-1', delay: 0.15, text: false},
        { name: 'Robert Baden-Powell2', src:`${Pokoj}`, background:'bg-lime', delay: 0.1, text: false},
        { name: 'Robert Baden-Powell3', src:`${Golab}`, background:'bg-orange-2', delay: 0.15, text: false},
    ],
    text: [
        {name: 'Text', background:'bg-green-2', class:'',
        title:"Hasło / Lema",
        textPl:'"Nasz świat, nasza bezpieczna przyszłość. Środowisko i pokój"',
        textEs:'"Nuestro mundo, nuestro futuro. Medio ambiente y paz"',
        },
    ],
}

const Haslo = () => {

    return (
            <div id='haslo' className="w-full h-full grid gap-0
            grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <div className='flex items-center justify-center	
                grid gap-0 grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                    {info.images.map((i) => (
                        <div key={i.name} className={`${i.background} w-full h-full flex items-center justify-center p-0`}>
                            <motion.img
                            initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                damping: 10,
                                stiffness: 70,
                                restDelta: 0.001,
                                delay: `${i.delay}`,
                            }}
                            alt={i.name} className="w-full h-full" src={i.src}
                            />
                        </div>
                    ))}
                </div>
                {info.text.map((i) => (
                    <div key={i.name} className={`${i.background} ${i.class} flex items-center justify-center h-full w-full`}>
                        <motion.div
                        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            damping: 10,
                            stiffness: 70,
                            restDelta: 0.001,
                            delay: 0.2,
                        }}
                        className="w-auto h-full flex flex-col justify-center text-center 
                        py-24 xs:py-24 sm:py-24 md:py-14 lg:py-20 xl:py-24 2xl:py-24
                        px-14
                        ">
                            <p className="text-2xl font-medium">
                                {i.title}
                            </p>
                            <p className="text-3xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl
                            pt-10">
                                {i.textPl}
                            </p>
                            <p className="text-2xl pt-5">
                                {i.textEs}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
    )
}

export default Haslo;