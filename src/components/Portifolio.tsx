import { projects } from "../data/portifolio"
import background from '../assets/background-projetos.jpg'

const Portifolio = () => {
    return (
        <div className="relative h-[99vh] flex items-center justify-evenly flex-col bg-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${background})`
            }}
        >

            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* Foto de cottonbro studio: https://www.pexels.com/pt-br/foto/natureza-textura-plantar-planta-4429283/ */}

            <div className="z-10">
                <h2 className="text-4xl font-bold text-[#fafafa]">Projetos já enraizados</h2>
            </div>
            <div className="grid grid-cols-3 gap-5 z-10 cursor-pointer">
                {projects.map((item) => 
                    <div className="h-[15rem] w-[18rem] flex flex-col items-center justify-between bg-[#fafafa] rounded shadow hover:scale-3d hover:scale-110 hover:shadow-2xl hover:z-10 transition-all duration-300">
                        <img className="h-[70%] max-w-full shadow" src={item.img} alt={item.name} />
                        <div className="h-[30%] flex items-center justify-center">
                            <p className="font-semibold text-[#161616]">{item.name}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portifolio