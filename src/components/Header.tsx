import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-black/80 backdrop-blur-sm border-b border-red-800/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-green-400 text-xl">😊</span>
            <h1 className="text-2xl font-bold text-white">Kartaly</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#catalog"
              className="text-white hover:text-green-400 transition-colors"
            >
              Каталог
            </a>
            <a
              href="#about"
              className="text-white hover:text-green-400 transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-white hover:text-green-400 transition-colors"
            >
              Контакты
            </a>
            <Button className="bg-green-600 hover:bg-green-700">
              Корзина (0)
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-full h-0.5 bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`}
              />
              <span
                className={`block w-full h-0.5 bg-white mt-1 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-full h-0.5 bg-white mt-1 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-800/30">
            <nav className="flex flex-col space-y-4">
              <a
                href="#catalog"
                className="text-white hover:text-green-400 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#about"
                className="text-white hover:text-green-400 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-white hover:text-green-400 transition-colors"
              >
                Контакты
              </a>
              <Button className="bg-green-600 hover:bg-green-700 w-fit">
                Корзина (0)
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
