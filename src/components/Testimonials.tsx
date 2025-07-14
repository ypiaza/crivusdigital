import { testimonials } from "../data/testimonial"

const Testimonials = () => {
  return (
    <div className="h-[99vh] flex flex-col items-center justify-evenly bg-white">
      <h2 className="text-4xl font-bold mb-10 text-[#57C690]">Pronto pra enraizar sua marca também?</h2>


      <div className="grid grid-cols-4 items-center justify-center place-items-center-safe w-full mb-13 px-15">
        {testimonials.map((item) =>
          <div className="max-w-[30rem] h-[15rem] p-8 bg-[#57C690] rounded hover:shadow-xl hover:shadow-black/10 brightness-95 hover:brightness-100 scale-95 flex flex-col items-center justify-between hover:scale-100 transition-all duration-300">
            <div className="w-full">
              <p className="font-semibold text-white text-justify">"{item.message}"</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <img className="w-[3rem] rounded-full" src={item.photo} />
              <p className="text-white italic text-justify mt-3">{item.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Testimonials