import React, { Fragment, useContext } from "react";
import { Dialog, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { NavHashLink } from 'react-router-hash-link';

// CONTEXT
import { NavBarContext } from '../../context/NavBarContext';

const navigation = {
    pages: [
        { name: "DMB'23", href: '/#top', icon:'', target:'_self' },
        { name: 'Co?', href: '/#co', icon:'', target:'_self' },
        { name: 'Gdzie?', href: '/#gdzie', icon:'', target:'_self' },
        { name: 'Kiedy?', href: '/#kiedy', icon:'', target:'_self' },
    ],
    social: [
        { name: 'Instagram', icon: <FontAwesomeIcon icon={faInstagram} />, href: 'instagram.com/harcerstwoargentyna/'},
        { name: 'Facebook', icon: <FontAwesomeIcon icon={faFacebookSquare} />, href: 'facebook.com/harcerstwo.argentyna/'},
    ],
}

const NavBar = () => {

    const { open, setOpen} = useContext(NavBarContext);

    return (
            <>
                {/* Mobile menu */}
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden xl:hidden" onClose={setOpen}>
                        <Transition.Child as={Fragment} >
                            <Dialog.Overlay className="fixed inset-0 bg-green-2" />
                        </Transition.Child>
                        <Transition.Child as={Fragment} 
                        enter="transition ease-in-out duration-400 transform" 
                        enterFrom="-translate-x-full" enterTo="translate-x-0" 
                        leave="transition ease-in-out duration-300 transform" 
                        leaveFrom="translate-x-0" leaveTo="-translate-x-full">
                            <div className="relative w-full bg-green-2 shadow-xl p-5 flex flex-col overflow-y-auto">
                                <div className="pt-5 pb-10 flex justify-start">
                                    <button type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-white " onClick={() => setOpen(false)}>
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="text-center flex flex-col space-y-10 align-middle inline-block m-auto">
                                    {navigation.pages.map((page) => (
                                        <div key={page.name} >
                                            <NavHashLink to={page.href} className="block text-white text-3xl xs:text-3xl sm:text-2xl lg:text-3xl" onClick={() => setOpen(false)}> 
                                                {page.name}
                                            </NavHashLink>
                                        </div>
                                    ))}
                                    {navigation.social.map((page) => (
                                        <div key={page.name}>
                                        <a href={"https://" + page.href} className="block text-white text-xl xs:text-xl sm:text-xl lg:text-xl" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                                            {page.icon}
                                        </a>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>
    
                {/* Desktop menu */}
                <header className="fixed w-full top-0 py-8 px-12 z-40 text-xl xs:text-xl sm:text-xl lg:text-xl ">
                    <nav aria-label="Top" className="mx-auto">
                        <div className="h-16 flex justify-between align-middle">
                            <div className="hidden lg:flex lg:block lg:self-stretch flex justify-between space-x-12">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} >
                                        <NavHashLink smooth to={page.href} className="flex items-center text-white border-b border-transparent hover:border-solid hover:border-b hover:border-white" onClick={() => setOpen(false)}> 
                                            {page.name}
                                        </NavHashLink>
                                    </div>
                                ))}
                            </div>
                            <div className="hidden lg:flex lg:block lg:self-stretch flex justify-between space-x-8">
                                {navigation.social.map((page) => (
                                    <div key={page.name}>
                                        <a href={"https://" + page.href} className="block text-white" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                                            {page.icon}
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <button type="button" className="flex bg-transparent p-2 rounded-md text-white lg:hidden" onClick={() => setOpen(true)}>
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </nav>
                </header>
        </>
    )
}

export default NavBar;