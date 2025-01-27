'use client'
import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '../images/sign.png'

interface HandleScrollToDiv {
    (targetedRef: string): void;
}

interface NavbarProps {
    handleScrollToDiv: HandleScrollToDiv; // Accepts a function of type HandleScrollToDiv
}

const Navbar: React.FC<NavbarProps> = ({ handleScrollToDiv }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed w-full z-10 gradient nav">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Home</span>
                        <Image
                            alt=""
                            width={1800}
                            height={1500}
                            src={logo}
                            className="h-8 w-full"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <p className="text-sm font-semibold leading-6 text-gray-100 cursor-pointer" onClick={() => handleScrollToDiv("experienceRef")}>
                        Experience
                    </p>
                    <p className="text-sm font-semibold leading-6 text-gray-100 cursor-pointer" onClick={() => handleScrollToDiv("educationRef")}>
                        Education
                    </p>
                    <p className="text-sm font-semibold leading-6 text-gray-100 cursor-pointer" onClick={() => handleScrollToDiv("projectsRef")}>
                        Projects
                    </p>
                    <p className="text-sm font-semibold leading-6 text-gray-100 cursor-pointer" onClick={() => handleScrollToDiv("skillsRef")}>
                        Skills
                    </p>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a onClick={() => handleScrollToDiv("contactRef")} className="text-sm font-semibold leading-6 text-gray-100 cursor-pointer" >
                        Contact <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            {/* MOBILE VIEW : HAMBURGER MENU */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden gradient">
                <div className="fixed inset-0 z-10 gradient" />
                <DialogPanel className="gradient nav fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                alt=""
                                width={800}
                                height={500}
                                src={logo}
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-100"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <p className="text-md font-semibold leading-6 text-gray-100 cursor-pointer py-2" onClick={() => { handleScrollToDiv("experienceRef"); setMobileMenuOpen(false) }}>
                                    Experience
                                </p>
                                <p className="text-md font-semibold leading-6 text-gray-100 cursor-pointer py-2" onClick={() => { handleScrollToDiv("educationRef"); setMobileMenuOpen(false) }}>
                                    Education
                                </p>
                                <p className="text-md font-semibold leading-6 text-gray-100 cursor-pointer py-2" onClick={() => { handleScrollToDiv("projectsRef"); setMobileMenuOpen(false) }}>
                                    Projects
                                </p>
                                <p className="text-md font-semibold leading-6 text-gray-100 cursor-pointer py-2" onClick={() => { handleScrollToDiv("skillsRef"); setMobileMenuOpen(false) }}>
                                    Skills
                                </p>
                            </div>
                            <div className="py-6">
                                <p className="text-md font-semibold leading-6 text-gray-100 cursor-pointer py-2" onClick={() => { handleScrollToDiv("contactRef"); setMobileMenuOpen(false) }}>
                                    Contact
                                </p>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default Navbar