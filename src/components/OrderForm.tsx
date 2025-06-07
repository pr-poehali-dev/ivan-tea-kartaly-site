import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PaymentProcessor from "@/components/PaymentProcessor";
import Icon from "@/components/ui/icon";

const OrderForm = () => {
  const [currentStep, setCurrentStep] = useState<
    "form" | "payment" | "success"
  >("form");
  const [orderTotal] = useState(2500); // Примерная сумма заказа
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "card",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("payment");
  };

  const handlePaymentSuccess = () => {
    setCurrentStep("success");
  };

  const handlePaymentCancel = () => {
    setCurrentStep("form");
  };

  if (currentStep === "success") {
    return (
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-black/60 border-green-400/30">
            <CardContent className="text-center py-12">
              <div className="text-6xl mb-4">😊</div>
              <h2 className="text-white text-2xl font-bold mb-4">
                Заказ успешно оплачен!
              </h2>
              <p className="text-white/70 mb-6">
                Мы получили ваш платеж и начинаем подготовку заказа. В ближайшее
                время с вами свяжется наш менеджер.
              </p>
              <Button
                onClick={() => setCurrentStep("form")}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Оформить новый заказ
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (currentStep === "payment") {
    return (
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <PaymentProcessor
            amount={orderTotal}
            onSuccess={handlePaymentSuccess}
            onCancel={handlePaymentCancel}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-black/60 border-red-800/30">
          <CardHeader>
            <CardTitle className="text-white text-center flex items-center justify-center gap-2">
              <Icon name="ShoppingCart" className="text-green-400" size={24} />
              Оформить заказ
              <span className="text-green-400">😊</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2">Имя</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-black/40 border border-red-800/30 rounded-md text-white focus:border-green-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-black/40 border border-red-800/30 rounded-md text-white focus:border-green-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2">Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-black/40 border border-red-800/30 rounded-md text-white focus:border-green-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2">Адрес доставки</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 bg-black/40 border border-red-800/30 rounded-md text-white focus:border-green-400 focus:outline-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg flex items-center justify-center gap-2"
              >
                <Icon name="CreditCard" size={20} />
                Перейти к оплате • {orderTotal.toLocaleString()} ₽
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;
