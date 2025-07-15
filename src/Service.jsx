import Header from "./Header"
import image1 from "./assets/images/logo-top.png"

function Service() {
    const services = [
        {
            title: "Haircut",
            desc: "Fresh cuts that speak style. Whether you want a low cut, classic taper, or something sharp and trendy, we tailor every haircut to your vibe. Clean finishes. Confident looks. Always on point.",
        },
        {
            title: "Beard Trim",
            desc: "Your beard deserves as much attention as your cut. Whether it’s a full beard sculpt or a subtle shape-up, we’ll keep your facial game on point.",
        },
        {
            title: "Line Up",
            desc: "Crisp hairlines. Razor-sharp edges. Our line ups redefine clean grooming. Ideal for that picture-perfect finish.",
        },
        {
            title: "Clean Shave",
            desc: "Smooth. Precise. Professional. Get a straight-razor shave that leaves your skin fresh, even, and camera-ready.",
        },
        {
            title: "Full Hair Transformation",
            desc: "Ready for a bold new look? From long to low, classic to creative, this is the service for those who want to stand out.",
        },
        {
            title: "Hair Care",
            desc: "Healthy hair is stylish hair. We provide scalp treatments, conditioning, and hair care routines that keep your cut fresh and your hair thriving.",
        },
        {
            title: "Dye Application",
            desc: "From subtle tones to bold colors, our dye services are perfect for clients looking to level up their style. We apply with precision to protect your hair while achieving standout results.",
        },
        {
          title: "Modern Styling",
          desc: "Not sure what cut suits you? Our barbers stay ahead of style trends to craft modern looks that fit your face, your vibe, and your lifestyle.",
        },
        {
            title: "Home Service",
            desc: "Can’t make it to the shop? No problem. Enzzy Cutz offers professional grooming right at your doorstep in Abeokuta. Same quality. Same precision. More convenience.",
        },
    ]
    return (
        <>
            <Header
                word={`Making Our Clients Look and Feel Their Best`}
                boolean={true}
            />
            <section className="bg-neutral-700 text-gray-100 w-full min-h-screen">
                <div className=" p-5 text-center">
                  <div className=" space-y-10 my-10">
                    <img
                                                    className=" mx-auto "
                                                    src={image1}
                                                    alt="image of top of logo"
                                                />
                    <h2 className="font-playfair font-bold text-5xl"> Services</h2>
                  </div>
                  <div className="space-y-12 grid grid-cols-1 md:grid-cols-2">
                    {services.map((item, index) => (
                      <div className="space-y-2" key={index}>
                          <h2 className="font-playfair font-bold text-3xl ">
                            {item.title}
                          </h2>
                          <p className=" font-serif text-xl text-center mx-auto sm:max-w-5/6 lg:max-w-6/10 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <button className="hover:bg-gradient-to-b hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600 py-5 bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800 font-serif text-black text-2xl font-semibold rounded-xl shadow-md active:scale-90 transition-all duration-300 my-20">
                        <a className="py-5 px-8" href="/">
                            Book Your Cut Now
                        </a>
                    </button>
                    </div>
            </section>
        </>
    )
}

export default Service
