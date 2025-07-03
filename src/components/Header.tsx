import logo from '../assets/crivus-logo.svg'
import logoMobile from '../assets/crivus-logo-mobile.png'
import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { Link } from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='flex items-center justify-between p-4 md:px-10 md:py-4 bg-[#F9F9F9]'>
            <div className='flex items-center justify-center'>
                <img className='w-10 md:hidden' src={logoMobile} alt="logo" />
                <img className='w-24 hidden md:block' src={logo} alt="logo" />
            </div>

            <nav>
                <div className='relative'>
                    {/* Mobile */}
                    <button onClick={() => setIsOpen(true)} className={`md:hidden bg-[#161616] p-2 text-2xl rounded text-white ${isOpen ? 'hidden' : ''}`} ><BiMenu /></button>
                    <button onClick={() => setIsOpen(false)} className={`md:hidden bg-[#161616] p-2 text-2xl rounded text-white ${isOpen ? '' : 'hidden'}`} ><CgClose /></button>

                    <ul className={`absolute md:hidden right-0
                     rounded bg-[#161616]/80 text-[#F9F9F9] p-5 flex flex-col gap-4 font-semibold ${isOpen ? '' : 'hidden'}`}>
                        <li>Quem Somos</li>
                        <li>Portifólio</li>
                        <li>Depoimentos</li>
                    </ul>
                </div>

                <ul className='hidden md:flex md:gap-6 font-semibold cursor-pointer text-[#161616] '>
                    <li className='hover:text-[#57C690] transition-all duration-300'>
                        <Link
                        to='about'
                        smooth={true}
                        duration={500}
                        offset={1}>
                            Quem Somos
                        </Link>
                    </li>
                    <li className='hover:text-[#57C690] transition-all duration-300'>
                        <Link
                        to='portifolio'
                        smooth={true}
                        duration={500}
                        offset={1}>
                            Portifolio
                        </Link>
                    </li>
                    <li className='hover:text-[#57C690] transition-all duration-300'>
                        <Link
                        to='testimonials'
                        smooth={true}
                        duration={500}
                        offset={1}>
                            Depoimentos
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className='hidden md:block'>
                <button className='bg-[#161616] py-2 px-4 rounded font-semibold text-[#F9F9F9] hover:bg-[#57C690] hover:text-[#161616]/90 transition-all duration-300 cursor-pointer'>Entre em contato</button>
            </div>
        </div>
    )
}

export default Header