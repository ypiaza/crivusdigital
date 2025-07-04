import  logoClean  from '../assets/logo-clean.svg'

const AboutUs = () => {
  return (
    <div className="h-[99vh] grid grid-cols-2">
      <div className="flex flex-col items-start justify-center px-16">
        <h2 className="text-4xl font-bold mb-10 text-[#57C690]">Quem Somos?</h2>
        <p className="max-w-2xl mx-auto text-[#161616] font-semibold text-[1.1rem] text-justify ">
          A Crivus nasceu para conectar negócios ao mundo digital de forma simples, eficiente e bonita.
          Somos apaixonados por criar sites que não só impressionam, mas também geram resultados.
          Cada projeto é pensado para entregar desempenho, identidade e confiança — tudo com um toque minimalista e tecnológico.
        </p>
        <p className="max-w-2xl mx-auto text-[#57C690] font-semibold text-[1.1rem] mt-10">
          Fundada por Yuri Piaza, desenvolvedor apaixonado por interfaces intuitivas e soluções digitais que fazem a diferença.
        </p>
      </div>

      <div className='flex items-center justify-center'>
        <img className='w-[15rem] transition-all duration-300' src={logoClean} alt="logo" />
      </div>
    </div>
  )
}

export default AboutUs