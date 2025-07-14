import { projects } from "../data/portifolio"

const Portifolio = () => {
    return (
        <div className="relative h-[99vh] grid grid-cols-2 justify-evenly flex-col">

            {/* Foto de cottonbro studio: https://www.pexels.com/pt-br/foto/natureza-textura-plantar-planta-4429283/ */}

            <div className="absolute inset-0"></div>

            <div className="grid grid-cols-2 items-center justify-center place-items-center p-10 gap-5 z-10 cursor-pointer">
                {projects.map((item) => 
                    <div className="max-w-[18rem] h-[15rem] flex flex-col items-center justify-between bg-[#fafafa] rounded shadow hover:scale-3d hover:scale-105 hover:shadow-2xl hover:z-10 transition-all duration-300">
                        <img className="h-[70%] max-w-full shadow" src={item.img} alt={item.name} />
                        <div className="h-[30%] flex items-center justify-center">
                            <p className="font-semibold text-[#161616]">{item.name}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="rounded-tl-[50%] flex items-center justify-evenly border-l-6 border-[#57C690] bg-white">
                <h2 className="text-5xl font-bold text-[#57C690]">Projetos já enraizados</h2>
            </div>
        </div>
    )
}

export default Portifolio