import backgroundHero from '../assets/background.jpg'
import ButtonCTA from './ButtonCTA'

const QuemSomos = () => {
    return (
        <div className="relative grid grid-cols-2 h-[89vh] bg-center bg-cover bg-no-repeat" style={{
                    backgroundImage: `url(${backgroundHero})`
                }}>

                    {/* Foto de Mikhail Nilov: https://www.pexels.com/pt-br/foto/homem-pessoa-maos-pessoas-6894011/ */}

            <div className='absolute inset-0 bg-black/60'></div>

            <div className="flex items-start flex-col justify-evenly h-full p-10 z-10">
                <h1 className="text-6xl font-extrabold text-[#57C690]">Conecte seu negócio ao mundo digital!</h1>
                <h2 className="font-semibold text-[1.2rem] text-[#fafafa]">Desenvolvemos sites modernos, rápidos e feitos para transformar visitas em resultados.</h2>
                <ButtonCTA />
            </div>
        </div>
    )
}

export default QuemSomos