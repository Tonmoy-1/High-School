const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/school-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Welcome to SCMC
        </h1>
        <p className="text-lg text-gray-300 mt-3">Empowering Future Leaders</p>
        <button className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300">
          Explore Our School
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
