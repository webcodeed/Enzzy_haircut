function Home() {
  return ( 
    <header className='w-full h-screen bg-[url("https://i.ibb.co/Df11cN6V/imgi-7-KH-FWBarber-Shop-2-A8-A9959.jpg")] bg-center' >
<div className="bg-gradient-to-r from-black/60 to-black/60 w-full h-screen flex flex-col space-y-20 items-center justify-center">
<div className=" max-w-9/10 md:max-w-7/10 lg:max-w-6/10 font-playfair text-5xl md:text-6xl lg:text-6xl text-gray-100">
  <h2 className="text-center leading-tight">Where Precision Meets Style.<br />Classic cuts, clean fades, premium care.</h2>
</div>
  <button className="hover:bg-yellow-600 py-5 bg-yellow-500 font-serif text-black text-2xl font-semibold rounded-xl shadow-md active:scale-90 transition-all duration-300" >
    <a className="py-5 px-8" href="/">Book Now</a>
  </button>
</div>
    </header>
   );
}

export default Home;