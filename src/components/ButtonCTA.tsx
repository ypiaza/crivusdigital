import logoClean from '/crivus.svg'

const ButtonCTA = () => {
  return (
    <div>
      <button className="flex items-center justify-center gap-3 bg-[#57C690] text-[#fafafa] py-4 shadow-2xl shadow-black/50 px-12 text-[1.1rem] cursor-pointer rounded font-bold hover:brightness-90 transition-all duration-300">Solicitar orçamento <img className='w-4' src={logoClean} /></button>
    </div>
  )
}

export default ButtonCTA
