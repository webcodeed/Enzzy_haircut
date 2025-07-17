import Header from "./Header"
import React, { useState } from 'react';
import { 
  Scissors, 
  Zap, 
  Sparkles, 
  Palette, 
  Home, 
  Star,
  Clock,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
      {
      id: 1,
      title: "Haircut",
      desc: "Fresh cuts that speak style. Whether you want a low cut, classic taper, or something sharp and trendy, we tailor every haircut to your vibe. Clean finishes. Confident looks. Always on point.",
      icon: <Scissors className="w-6 h-6" />,
      duration: "30-45 min",
      featured: true
    },
    {
      id: 2,
      title: "Beard Trim",
      desc: "Your beard deserves as much attention as your cut. Whether it's a full beard sculpt or a subtle shape-up, we'll keep your facial game on point.",
      icon: <Zap className="w-6 h-6" />,
      price: "From ₦1,500",
      duration: "20-30 min"
    },
    {
        id: 3,
        title: "Line Up",
        desc: "Crisp hairlines. Razor-sharp edges. Our line ups redefine clean grooming. Ideal for that picture-perfect finish.",
        icon: <Sparkles className="w-6 h-6" />,
      price: "From ₦1,000",
      duration: "15-20 min"
    },
    {
      id: 4,
      title: "Clean Shave",
      desc: "Smooth. Precise. Professional. Get a straight-razor shave that leaves your skin fresh, even, and camera-ready.",
      icon: <Star className="w-6 h-6" />,
      price: "From ₦2,000",
      duration: "25-35 min"
    },
    {
        id: 5,
      title: "Full Hair Transformation",
      desc: "Ready for a bold new look? From long to low, classic to creative, this is the service for those who want to stand out.",
      icon: <Sparkles className="w-6 h-6" />,
      price: "From ₦5,000",
      duration: "60-90 min",
      featured: true
    },
    {
      id: 6,
      title: "Hair Care",
      desc: "Healthy hair is stylish hair. We provide scalp treatments, conditioning, and hair care routines that keep your cut fresh and your hair thriving.",
      icon: <Star className="w-6 h-6" />,
      price: "From ₦3,000",
      duration: "45-60 min"
    },
    {
      id: 7,
      title: "Dye Application",
      desc: "From subtle tones to bold colors, our dye services are perfect for clients looking to level up their style. We apply with precision to protect your hair while achieving standout results.",
      icon: <Palette className="w-6 h-6" />,
      price: "From ₦4,000",
      duration: "90-120 min"
    },
    {
        id: 8,
        title: "Modern Styling",
        desc: "Not sure what cut suits you? Our barbers stay ahead of style trends to craft modern looks that fit your face, your vibe, and your lifestyle.",
        icon: <Sparkles className="w-6 h-6" />,
      price: "From ₦3,500",
      duration: "45-60 min"
    },
    {
      id: 9,
      title: "Home Service",
      desc: "Can't make it to the shop? No problem. Enzzy Cutz offers professional grooming right at your doorstep in Abeokuta. Same quality. Same precision. More convenience.",
      icon: <Home className="w-6 h-6" />,
      price: "From ₦8,000",
      duration: "60-90 min",
      featured: true
    }
  ];
  
  return (
      
      <>
      <Header
          word={`Making Our Clients Look and Feel Their Best`}
          boolean={true}
      />
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-500/20"></div>
        <div className="relative container mx-auto px-4 py-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <CheckCircle className="w-4 h-4 mr-2 text-yellow-400" />
                <span>Professional Barbers</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <CheckCircle className="w-4 h-4 mr-2 text-yellow-400" />
                <span>Premium Products</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <CheckCircle className="w-4 h-4 mr-2 text-yellow-400" />
                <span>Home Service Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-pointer ${
                service.featured 
                  ? 'border-yellow-400/50 bg-gradient-to-br from-yellow-400/10 to-amber-500/10' 
                  : 'border-white/10 hover:border-white/20'
              }`}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              {service.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center text-black">
                  {service.icon}
                </div>
                <ChevronRight className={`w-5 h-5 text-white/40 transition-transform duration-200 ${
                  selectedService === service.id ? 'rotate-90' : ''
                }`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed mb-6 text-sm">
                {service.desc}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-white/60">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{service.duration}</span>
                  </div>
              </div>
              
              {selectedService === service.id && (
                <div className="mt-6 pt-6 border-t border-white/20">
                  <button className="w-full bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800 text-black py-3 rounded-xl font-semibold hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200">
                            <a target="blank" rel="noopener noreferrer" className="py-3 px-15" href="https://wa.me/2348071029309?text=Hello%2C%20I%27d%20like%20to%20schedule%20an%20appointment.%20I%27m%20">
                                Book This Service
                            </a>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-yellow-400/10 to-amber-500/10 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Elevate Your Style?
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Book your appointment today and experience the Enzzy Cutz difference. 
              Quality cuts, professional service, and a vibe that feels like home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-800 text-black rounded-xl text-lg font-bold hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600 transform transition-all duration-200 shadow-2xl hover:shadow-yellow-400/25">
              <a target="blank" rel="noopener noreferrer" className=" whitespace-nowrap py-3 px-10 inline-flex items-center justify-center" href="https://wa.me/2348071029309?text=Hello%2C%20I%27d%20like%20to%20schedule%20an%20appointment.%20I%27m%20">
                                Book Your Cut
                            </a>
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-200">
              <a
                            href="tel:+2347073334128"
                            rel="noopener noreferrer"
                            className="whitespace-nowrap py-3 px-8 inline-flex items-center justify-center"
                        >
                            Call Us: +234 707 333 4128
                        </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServicesPage;