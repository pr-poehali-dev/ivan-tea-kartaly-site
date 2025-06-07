import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SiteSettings = () => {
  const currentSettings = {
    timeGate: {
      workingDays: "1-7 число каждого месяца",
      currentStatus: "Активен",
    },
    design: {
      colorScheme: "Черно-красный с зелеными акцентами",
      mainIcon: "😊",
      backgroundAnimation: "Плавающие смайлики",
    },
    products: {
      totalCount: 4,
      priceRange: "450₽ - 1200₽",
      categories: "Иван-чай разных видов",
    },
    payment: {
      methods: ["Банковская карта", "Наличные", "Банковский перевод"],
      defaultMethod: "Банковская карта",
    },
    performance: {
      animations: "Включены",
      responsive: "Адаптивный дизайн",
      framework: "React + TypeScript",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <span className="text-green-400">😊</span>
            Настройки сайта Kartaly
            <span className="text-green-400">😊</span>
          </h1>
          <p className="text-white/80">
            Все параметры и конфигурация вашего сайта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Временные ограничения */}
          <Card className="bg-black/60 border-red-800/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                ⏰ Режим работы
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-3">
              <div>
                <span className="text-green-400">Период работы:</span>{" "}
                {currentSettings.timeGate.workingDays}
              </div>
              <div>
                <span className="text-green-400">Статус:</span>{" "}
                {currentSettings.timeGate.currentStatus}
              </div>
              <Button className="bg-green-600 hover:bg-green-700 w-full">
                Изменить расписание
              </Button>
            </CardContent>
          </Card>

          {/* Дизайн и тема */}
          <Card className="bg-black/60 border-red-800/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                🎨 Дизайн и тема
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-3">
              <div>
                <span className="text-green-400">Цветовая схема:</span>{" "}
                {currentSettings.design.colorScheme}
              </div>
              <div>
                <span className="text-green-400">Основная иконка:</span>{" "}
                {currentSettings.design.mainIcon}
              </div>
              <div>
                <span className="text-green-400">Анимация фона:</span>{" "}
                {currentSettings.design.backgroundAnimation}
              </div>
              <Button className="bg-green-600 hover:bg-green-700 w-full">
                Настроить дизайн
              </Button>
            </CardContent>
          </Card>

          {/* Товары и каталог */}
          <Card className="bg-black/60 border-red-800/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                📦 Товары
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-3">
              <div>
                <span className="text-green-400">Количество:</span>{" "}
                {currentSettings.products.totalCount} товара
              </div>
              <div>
                <span className="text-green-400">Ценовой диапазон:</span>{" "}
                {currentSettings.products.priceRange}
              </div>
              <div>
                <span className="text-green-400">Категории:</span>{" "}
                {currentSettings.products.categories}
              </div>
              <Button className="bg-green-600 hover:bg-green-700 w-full">
                Управление товарами
              </Button>
            </CardContent>
          </Card>

          {/* Способы оплаты */}
          <Card className="bg-black/60 border-red-800/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                💳 Оплата
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-3">
              <div>
                <span className="text-green-400">Способы оплаты:</span>
                <ul className="mt-2 space-y-1">
                  {currentSettings.payment.methods.map((method, index) => (
                    <li key={index} className="text-sm">
                      • {method}
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 w-full">
                Настроить оплату
              </Button>
            </CardContent>
          </Card>

          {/* Производительность */}
          <Card className="bg-black/60 border-red-800/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                ⚡ Производительность
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-3">
              <div>
                <span className="text-green-400">Анимации:</span>{" "}
                {currentSettings.performance.animations}
              </div>
              <div>
                <span className="text-green-400">Адаптивность:</span>{" "}
                {currentSettings.performance.responsive}
              </div>
              <div>
                <span className="text-green-400">Технологии:</span>{" "}
                {currentSettings.performance.framework}
              </div>
              <Button className="bg-green-600 hover:bg-green-700 w-full">
                Оптимизация
              </Button>
            </CardContent>
          </Card>

          {/* Дополнительные настройки */}
          <Card className="bg-black/60 border-red-800/30 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                ⚙️ Дополнительные настройки
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                >
                  Сменить логотип
                </Button>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                >
                  Контактная информация
                </Button>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                >
                  SEO настройки
                </Button>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                >
                  Резервная копия
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg">
            Вернуться на главную 😊
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SiteSettings;
