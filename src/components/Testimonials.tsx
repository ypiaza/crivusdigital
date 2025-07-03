import { testimonials } from "../data/testimonial"

const Testimonials = () => {
  return (
    <div className="h-80 grid grid-cols-3 items-center w-full">
        {testimonials.map((item) => 
            <div className="max-w-[20rem] p-8 bg-[#57C690] rounded shadow-2xl shadow-black/30">
                <img src={item.photo} />
                <p className="font-semibold text-white text-justify mt-3">{item.message}</p>
                <p className="text-white italic text-justify mt-3">{item.name}</p>
            </div>
        )}
    </div>
  )
}

export default Testimonials