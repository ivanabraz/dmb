import React from "react";
import { motion } from "framer-motion";

// Images
import Kapelusz from "../../images/header/kapelusz.svg"
import D from "../../images/header/d.svg"
import M from "../../images/header/m.svg"
import Lilijka from "../../images/header/lilijka.svg"
import Golab from "../../images/header/golab.svg"
import B from "../../images/header/b.svg"
import Rok from "../../images/header/2023.svg"
import Wezel from "../../images/header/wezel.svg"

const images = [
    { name: 'Kapelusz', src:`${Kapelusz}`, background:'bg-orange-2', class:'', delay: 0.2},
    { name: 'D', src:`${D}`, background:'bg-blue-3', class:'', delay: 0.4},
    { name: 'M', src:`${M}`, background:'bg-pink-2', class:'', delay: 0.5},
    { name: 'Lilijka', src:`${Lilijka}`, background:'bg-green-2', class:'', delay: 0.3},
    { name: 'Golab', src:`${Golab}`, background:'bg-red', class:'xs:hidden sm:hidden md:hidden lg:flex xl:flex', delay: 0.5},
    { name: 'B', src:`${B}`, background:'bg-gray-2', class:'', delay: 0.5},
    { name: 'Rok', src:`${Rok}`, background:'bg-neutral-6', class:'', delay: 0.4},
    { name: 'Wezel', src:`${Wezel}`, background:'bg-purple-3', class:'xs:hidden sm:hidden md:hidden lg:flex xl:flex', delay: 0.2},
]

const Header = () => {
    return (
            <div className="w-full h-full grid gap-0
                        grid-cols-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                {images.map((i) => (
                    <div key={i.name} className={`${i.background} ${i.class} flex items-center justify-center h-full`}>
                        <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            damping: 10,
                            stiffness: 70,
                            restDelta: 0.001,
                            delay: `${i.delay}`,
                        }}

                        alt={i.name} className="w-auto h-full" src={i.src}/>
                    </div>
                ))}
            </div>
    )
}

export default Header;