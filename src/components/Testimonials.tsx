import { testimonials } from "../data/testimonial"
import ButtonCTA from "./ButtonCTA"

const Testimonials = () => {
  return (
    <div className="h-[99vh] flex flex-col items-center justify-evenly">
      <h2 className="text-4xl font-bold mb-10 text-[#57C690]">Pronto pra enraizar sua marca também?</h2>


      <div className="grid grid-cols-3 items-center place-items-center-safe w-full">
        {testimonials.map((item) =>
          <div className="max-w-[20rem] p-8 bg-[#57C690] rounded shadow-xl shadow-black/10">
            <p className="font-semibold text-white text-justify">"{item.message}"</p>
            <div className="flex items-center gap-2 mt-3">
              <img className="w-[3rem] rounded-full" src={item.photo} />
              <p className="text-white italic text-justify mt-3">{item.name}</p>
            </div>
          </div>
        )}
      </div>

      <ButtonCTA />
    </div>
  )
}

export default Testimonials