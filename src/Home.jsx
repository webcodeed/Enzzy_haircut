import image1 from "./assets/images/logo-top.png"
import image2 from "./assets/images/logo-trans.png"
import SlideShow from "./SlideShow"
function Home() {
    const salonPrice = [
        {
            name: "Haircut(Barbing)",
            detail: "Clean, sharp, and personalized.",
            price: "5,000",
        },
        {
            name: "Line Up",
            detail: "Crisp hairlines and razor-defined edges.",
            price: "3,000",
        },
        {
            name: "Dye Application(Black)",
            detail: "Vibrant, lasting color to elevate your cut.",
            price: "2,000",
        },
        {
            name: "Hair Care",
            detail: "Deep cleanse for a fresh, scalp-ready start.",
            price: "1,000",
        },
    ]
    const homePrice = [
        {
            name: "Haircut(Barbing)",
            detail: "Clean, sharp, and personalized.",
            price: "10,000",
        },
        {
            name: "Line Up",
            detail: "Crisp hairlines and razor-defined edges.",
            price: "8,000",
        },
        {
            name: "Dye Application(Black)",
            detail: "Vibrant, lasting color to elevate your cut.",
            price: "5,000",
        },
        {
            name: "Hair Care",
            detail: "Deep cleanse for a fresh, scalp-ready start.",
            price: "5,000",
        },
    ]
    return (
        <>
            <header className="w-full h-screen bg-[url(/bg-1.jpg)] bg-center bg-fixed">
                <div className="bg-gradient-to-r from-black/60 to-black/60 w-full h-screen flex flex-col space-y-20 items-center justify-center">
                    <div className=" max-w-9/10 md:max-w-7/10 lg:max-w-6/10 font-playfair text-5xl md:text-6xl lg:text-6xl text-gray-100">
                        <h2 className="text-center leading-tight">
                            Where Precision Meets Style.
                            <br />
                            Classic cuts, clean fades, premium care.
                        </h2>
                    </div>
                    <button className="hover:bg-gradient-to-b hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600  py-5 bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800 font-serif text-black text-2xl font-semibold rounded-xl shadow-md active:scale-90 transition-all duration-300">
                        <a className="py-5 px-8" href="/">
                            Book Now
                        </a>
                    </button>
                </div>
            </header>

            <main>
                <section className="bg-black min-h-screen w-full flex flex-col items-center justify-center text-gray-100 py-5 ">
                    <h2 className="font-playfair font-bold text-5xl lg:text-6xl mb-20 lg:mb-15">
                        The Vibe
                    </h2>
                    <div className="text-gray-200 text-xl lg:text-2xl text-center max-w-5/6 lg:max-w-7/10 space-y-3 leading-relaxed  ">
                        <p>
                            At{" "}
                            <span className="text-yellow-300 font-semibold">
                                Enzzy Cutz
                            </span>
                            , you are a king, so every cut is personal. We blend
                            clean fades, beard trims, and fresh styles with a
                            vibe that feels like home. Our space is laid back,
                            our music’s always on, and the energy stays sharp.
                            Whether you're here for a quick shape-up or a full
                            transformation, you’ll leave feeling confident and
                            looking your best. We’re not just a barbershop in
                            Abeokuta, we’re a community. Pull up, relax, and
                            let’s elevate your style.{" "}
                        </p>
                    </div>
                    <button className="hover:bg-gradient-to-b hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600  py-5 bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800 font-serif text-black text-2xl font-semibold rounded-xl shadow-md active:scale-90 transition-all duration-300 mt-15 lg:mt-20">
                        <a className="py-5 px-8" href="/">
                            Book Your Cut Now
                        </a>
                    </button>
                </section>
                <section className=" relative bg-fixed bg-gradient-to-b from-neutral-700 via-black/95 to-neutral-700 w-full min-h-screen p-5">
                    <img
                        className=" absolute top-4/10 sm:top-3/10 left-1/10 md:left-2/10 lg:left-3/10 opacity-[0.2] w-8/10 md:w-6/10 lg:w-4/10"
                        src={image2}
                        alt="image of logo"
                    />
                    <div className="flex flex-col items-center justify-center text-gray-100 mx-auto sm:max-w-7/10 md:max-w-6/10 lg:max-w-5/10  ">
                        <div className="space-y-4">
                            <img
                                className=" mx-auto"
                                src={image1}
                                alt="image of top of logo"
                            />
                            <h2 className="font-cinzel text-center text-4xl lg:text-6xl">
                                Price List
                            </h2>
                        </div>
                        <h2 className=" mt-7 text-center text-yellow-400 font-bold text-2xl lg:text-3xl">
                            ENZZY CUTZ SALOON
                        </h2>
                        <div className=" my-5 space-y-15">
                            <div className=" space-y-2">
                                <h2 className="text-lg font-serif text-center font-semibold">
                                    ENZZY-(THE KING MAKER)
                                </h2>
                                {homePrice.map((item, index) => (
                                    <div
                                        className="flex justify-between items-center text-xl lg:text-2xl"
                                        key={index}
                                    >
                                        <h3 className="font-bold text-xl lg:text-2xl">
                                            {item.name}
                                        </h3>

                                        <p className="font-bold">
                                            {item.price}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className=" space-y-2">
                                <h2 className=" text-lg font-serif text-center font-semibold">
                                    HOME SERVICE
                                </h2>
                                {homePrice.map((item, index) => (
                                    <div
                                        className="flex justify-between items-center text-xl lg:text-2xl"
                                        key={index}
                                    >
                                        <h3 className="font-bold text-xl lg:text-2xl">
                                            {item.name}
                                        </h3>

                                        <p className="font-bold">
                                            {item.price}
                                        </p>
                                    </div>
                                ))}
                                <p className=" mt-5 text-lg font-semibold">
                                    <span className="font-black">NOTE:</span>{" "}
                                    THE PRICE VARIES BASED ON YOUR LOCATION AND
                                    IT MAY INCREASE ACCORDINGLY
                                </p>
                            </div>
                        </div>
                        <button className="hover:bg-gradient-to-b hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600  py-5 bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800 font-serif text-black text-2xl font-semibold rounded-xl shadow-md active:scale-90 transition-all duration-300 mt-15 mb-10 lg:mt-20">
                            <a className="py-5 px-8" href="/">
                                Book Now
                            </a>
                        </button>
                    </div>
                </section>
            </main>
{/* <Project/> */}
<SlideShow/>

        </>
    )
}

export default Home
