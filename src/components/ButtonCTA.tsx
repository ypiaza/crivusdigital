import { Link } from 'react-scroll'
import logoClean from '/crivus.svg'

const ButtonCTA = () => {
  return (
    <Link to='contato'>
      <button className="flex items-center justify-center gap-3 bg-[#57C690] text-[#fafafa] py-4 hover:shadow-2xl shadow-black/50 px-12 text-[1.1rem] cursor-pointer rounded font-bold brightness-95 scale-3d transform-3d hover:brightness-100 scale-95 hover:scale-105 transition-all duration-300">Fale com a gente <img className='w-4' src={logoClean} /></button>
    </ Link>
  )
}

export default ButtonCTA
