import ButtonCta from "./ButtonCta"

function BottomCta() {
  return ( 
    <div className="bg-gradient-to-r from-yellow-400/10 to-amber-500/10 backdrop-blur-sm border-t border-white/10">
                    <div className="container mx-auto px-4 py-10 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Ready To Look Your Best?
                            </h2>
                            <p className="text-lg text-white/80 mb-8">
                                Join thousands of satisfied clients who trust
                                Enzzy Cutz for their grooming needs
                            </p>

                            <ButtonCta item={"Book Your Appointment"}/>
                        </div>
                    </div>
                </div>
   );
}

export default BottomCta;