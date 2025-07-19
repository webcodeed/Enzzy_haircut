import BottomCta from "./BottomCta"
import Header from "./Header"
import { MapPin, Quote, Scissors, Heart, Zap } from "lucide-react"

const AboutPage = () => {
    // Values Item
    const values = [
        {
            icon: <Scissors className="w-6 h-6" />,
            title: "Precision",
            description:
                "Every cut is executed with meticulous attention to detail",
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Passion",
            description: "We love what we do and it shows in every service",
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Personality",
            description:
                "Each client gets a personalized experience tailored to their style",
        },
    ]

    // Location Item
    const areas = [
        "Panseke",
        " Odeda",
        "Asero",
        "Ibara",
        "Abeokuta Central",
        " Obada",
    ]

    return (
        <>
            {/* Hero Section  */}
            <Header
                word={"More Than Just a Haircut, It’s a Lifestyle"}
                boolean={true}
            />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
                {/* Main Title Section */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-500/20"></div>
                    <div className="relative container mx-auto px-4 py-10 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent leading-tight">
                                Our Story
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Main Story Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <div
                            className={`transform transition-all duration-1000`}
                        >
                            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                                    At{" "}
                                    <span className="text-yellow-400 font-semibold">
                                        Enzzy Cutz
                                    </span>
                                    , we believe every man deserves to walk out
                                    feeling brand new. Founded in the heart of
                                    Abeokuta, our barbershop blends precision,
                                    passion, and personality into every cut.
                                </p>
                                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                                    From clean fades to bold transformations,
                                    we're not just cutting hair, we're creating
                                    confidence. Whether you're headed to work, a
                                    wedding, or just out with the boys, you'll
                                    leave our chair looking sharp and feeling
                                    fresh.
                                </p>
                                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                    We proudly serve clients across Panseke,
                                    Asero, Ibara, and beyond. Our loyal
                                    customers keep coming back because we don't
                                    just follow trends,{" "}
                                    <span className="text-yellow-400 font-semibold">
                                        we set them
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                            What Sets Us Apart
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-yellow-400">
                                        {value.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="bg-gradient-to-r from-yellow-400/5 to-amber-500/5 backdrop-blur-sm border-y border-white/10">
                    <div className="container mx-auto px-4 py-20">
                        <div className="max-w-4xl mx-auto text-center">
                            <Quote className="w-12 h-12 text-yellow-400 mx-auto mb-8" />
                            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
                                "I started Enzzy Cutz to give guys more than
                                just a haircut. I wanted every client to leave
                                with confidence, style, and a reason to come
                                back."
                            </blockquote>
                            <div className="flex items-center justify-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                                    <span className="text-black font-bold text-lg">
                                        OE
                                    </span>
                                </div>
                                <div>
                                    <p className="text-white font-semibold">
                                        Oyeyemi Eniola
                                    </p>
                                    <p className="text-white/70 text-sm">
                                        Founder & Owner
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Areas */}
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                            Areas We Serve
                        </h2>
                        <p className="text-lg text-white/80 mb-8">
                            Proudly serving clients across Abeokuta and
                            surrounding areas
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {areas.map((area, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 text-white"
                                >
                                    <div className="flex items-center space-x-2">
                                        <MapPin className="w-4 h-4 text-yellow-400" />
                                        <address>{area}</address>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <BottomCta />
            </div>
        </>
    )
}

export default AboutPage
