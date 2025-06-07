import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "card",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки заказа
    alert("Заказ отправлен! Мы свяжемся с вами в ближайшее время 😊");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-black/60 border-red-800/30">
          <CardHeader>
            <CardTitle className="text-white text-center flex items-center justify-center gap-2">
              <span className="text-green-400">😊</span>
              Оформить заказ
              <span className="text-green-400">😊</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div>
                <label className="block text-white mb-2">Способ оплаты</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full p-3 bg-black/40 border border-red-800/30 rounded-md text-white focus:border-green-400 focus:outline-none"
                >
                  <option value="card">Банковская карта</option>
                  <option value="cash">Наличные при получении</option>
                  <option value="transfer">Банковский перевод</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
              >
                Оформить заказ 😊
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;
