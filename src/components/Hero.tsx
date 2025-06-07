const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Smileys */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-3xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            😊
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="flex items-center justify-center mb-6">
          <span className="text-green-400 text-6xl mr-4">😊</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white">Kartaly</h1>
          <span className="text-green-400 text-6xl ml-4">😊</span>
        </div>

        <p className="text-xl md:text-2xl text-green-400 mb-2">
          Премиальный Иван-чай
        </p>
        <p className="text-lg text-white/80 mb-8 max-w-md mx-auto">
          Натуральный копорский чай высшего сорта. Работаем ограниченно - только
          одну неделю в месяц
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Посмотреть каталог
          </button>
          <button className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
