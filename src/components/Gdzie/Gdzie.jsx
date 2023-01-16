import React from "react";
import { motion } from "framer-motion";

// Images
import Robert from "../../images/co/robert.svg"

const info = {
    images: [
        { name: 'Robert Baden-Powell`', src:`${Robert}`, background:'bg-blue-2', delay: 0.2, text: false},
        { name: 'Robert Baden-Powell1', src:`${Robert}`, background:'bg-blue-2', delay: 0.2, text: false},
        { name: 'Robert Baden-Powell2', src:`${Robert}`, background:'bg-blue-2', delay: 0.2, text: false},
        { name: 'Robert Baden-Powell3', src:`${Robert}`, background:'bg-blue-2', delay: 0.2, text: false},
    ],
    text: [
        {name: 'Text1', background:'bg-green-2', class:'', delay: 0.4, text: true,
        title:"Hasło / Lema",
        textPl:"Nasz świat, nasza bezpieczna przyszłość. Środowisko i pokój",
        textEs:"Nuestro mundo, nuestro futuro. Medio ambiente y paz",
        },
    ],
}

const Gdzie = () => {

    return (
            <div id="gdzie" className="w-full h-full grid gap-0
            grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <div className={`${info.images.background} flex items-center justify-center	
                grid gap-0 grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2`}>
                    {info.images.map((i) => (
                        <motion.img
                        key={i.name}
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
                    ))};
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
                    </div>
                ))};
            </div>
    )
}

export default Gdzie;