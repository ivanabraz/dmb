import React from "react";

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
    { name: 'Kapelusz', src:`${Kapelusz}`, background:'bg-orange-2', class:'', },
    { name: 'D', src:`${D}`, background:'bg-blue-3', class:'', },
    { name: 'M', src:`${M}`, background:'bg-pink-2', class:'', },
    { name: 'Lilijka', src:`${Lilijka}`, background:'bg-green-2', class:'', },
    { name: 'Golab', src:`${Golab}`, background:'bg-red', class:'xs:hidden sm:hidden md:flex lg:flex xl:flex', },
    { name: 'B', src:`${B}`, background:'bg-gray-2', class:'', },
    { name: 'Rok', src:`${Rok}`, background:'bg-neutral-6', class:'', },
    { name: 'Wezel', src:`${Wezel}`, background:'bg-purple-3', class:'xs:hidden sm:hidden md:flex lg:flex xl:flex', },
]



const Header = () => {
    return (
        <div className='bg-black w-full h-screen absolute top-0'>
            <div class="flex items-center justify-center w-full h-screen grid gap-0
                        grid-cols-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
                {images.map((i) => (
                    <div key={i.name} className={`${i.background} ${i.class} flex items-center justify-center h-full`}>
                        <img alt={i.name} className="w-auto h-full" src={i.src}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header;