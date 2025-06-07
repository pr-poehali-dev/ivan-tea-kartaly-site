import { useState, useEffect } from "react";

interface TimeGateProps {
  children: React.ReactNode;
}

const TimeGate = ({ children }: TimeGateProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const currentDay = now.getDate();

      // Сайт работает с 1 по 7 число каждого месяца
      const isAvailable = currentDay >= 1 && currentDay <= 7;

      setIsOpen(isAvailable);
      setLoading(false);
    };

    checkAvailability();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-red-900 flex items-center justify-center">
        <div className="text-green-400 text-xl">Загрузка...</div>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-red-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 text-2xl animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              😊
            </div>
          ))}
        </div>

        <div className="text-center z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Kartaly</h1>
          <p className="text-green-400 mb-2">Магазин временно закрыт</p>
          <p className="text-white/80">
            Мы работаем только с 1 по 7 число каждого месяца
          </p>
          <p className="text-red-400 mt-4">Возвращайтесь в начале месяца!</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default TimeGate;
