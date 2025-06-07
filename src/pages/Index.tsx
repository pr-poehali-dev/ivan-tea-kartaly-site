import TimeGate from "@/components/TimeGate";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import OrderForm from "@/components/OrderForm";

const Index = () => {
  return (
    <TimeGate>
      <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black">
        <Header />
        <Hero />
        <ProductCatalog />
        <OrderForm />

        <footer className="bg-black/80 border-t border-red-800/30 py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-green-400 text-2xl mr-2">😊</span>
              <span className="text-white text-xl font-bold">Kartaly</span>
              <span className="text-green-400 text-2xl ml-2">😊</span>
            </div>
            <p className="text-white/60">
              Премиальный Иван-чай • Работаем 1-7 числа каждого месяца
            </p>
          </div>
        </footer>
      </div>
    </TimeGate>
  );
};

export default Index;
