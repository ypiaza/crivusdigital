const AboutUs = () => {
  return (
    <div className="relative h-[99vh] grid grid-cols-2">

      <div className="absolute inset-0"></div>

      <div className="flex flex-col z-10 items-start justify-center bg-white px-16 rounded-br-[50%] border-r-6 border-[#57C690]">
        <h2 className="text-4xl font-bold mb-10 text-[#57C690]">Quem Somos?</h2>
        <p className="max-w-2xl mx-auto text-[#121212] font-semibold text-[1.1rem] text-justify ">
          A Crivus nasceu para conectar negócios ao mundo digital de forma simples, eficiente e bonita.
          Somos apaixonados por criar sites que não só impressionam, mas também geram resultados.
          Cada projeto é pensado para entregar desempenho, identidade e confiança — tudo com um toque minimalista e tecnológico.
        </p>
        <p className="max-w-2xl mx-auto text-[#57C690]font-semibold text-[1.1rem] mt-10">
          Fundada por Yuri Piaza, desenvolvedor apaixonado por interfaces intuitivas e soluções digitais que fazem a diferença.
        </p>
      </div>

      <div className='flex items-center justify-center'>
      </div>
    </div>
  )
}

export default AboutUs