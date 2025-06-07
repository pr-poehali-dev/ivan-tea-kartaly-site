import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PaymentData {
  amount: number;
  method: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  cardholderName?: string;
  phoneNumber?: string;
}

interface PaymentProcessorProps {
  amount: number;
  onSuccess: () => void;
  onCancel: () => void;
}

const PaymentProcessor = ({
  amount,
  onSuccess,
  onCancel,
}: PaymentProcessorProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("card");
  const [processing, setProcessing] = useState(false);
  const [paymentData, setPaymentData] = useState<PaymentData>({
    amount,
    method: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    phoneNumber: "",
  });

  const paymentMethods = [
    { id: "card", name: "Банковская карта", icon: "CreditCard" },
    { id: "sbp", name: "СБП", icon: "Smartphone" },
    { id: "yandex", name: "Яндекс.Деньги", icon: "Wallet" },
    { id: "qiwi", name: "QIWI", icon: "Zap" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({ ...prev, [name]: value }));
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setPaymentData((prev) => ({ ...prev, cardNumber: formatted }));
  };

  const handlePayment = async () => {
    setProcessing(true);

    // Имитация обработки платежа
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setProcessing(false);
    onSuccess();
  };

  return (
    <Card className="bg-black/80 border-red-800/30">
      <CardHeader>
        <CardTitle className="text-white text-center flex items-center justify-center gap-2">
          <Icon name="CreditCard" className="text-green-400" size={24} />
          Оплата заказа
          <span className="text-green-400">😊</span>
        </CardTitle>
        <div className="text-center">
          <Badge className="bg-green-600 text-white text-lg px-4 py-2">
            {amount.toLocaleString()} ₽
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Выбор способа оплаты */}
        <div>
          <label className="block text-white mb-3">Способ оплаты</label>
          <div className="grid grid-cols-2 gap-3">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => setSelectedMethod(method.id)}
                className={`p-3 rounded-md border-2 transition-all flex items-center gap-2 ${
                  selectedMethod === method.id
                    ? "border-green-400 bg-green-400/10"
                    : "border-red-800/30 bg-black/40 hover:border-red-600/50"
                }`}
              >
                <Icon
                  name={method.icon as any}
                  className="text-green-400"
                  size={20}
                />
                <span className="text-white text-sm">{method.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Форма для банковской карты */}
        {selectedMethod === "card" && (
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">Номер карты</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full p-3 bg-black/40 border border-red-800/30 rounded-md text-white focus:border-green-400 focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2">Срок действия</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={paymentData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full p-3 bg-black/40 border border-red-800/30 rounded-md text-white focus:border-green-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength={3}
                  className="w-full p-3 bg-black/40 border border-red-800/30 rounded-md text-white focus:border-green-400 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white mb-2">
                Имя владельца карты
              </label>
              <input
                type="text"
                name="cardholderName"
                value={paymentData.cardholderName}
                onChange={handleInputChange}
                placeholder="IVAN PETROV"
                className="w-full p-3 bg-black/40 border border-red-800/30 rounded-md text-white focus:border-green-400 focus:outline-none"
                required
              />
            </div>
          </div>
        )}

        {/* Форма для СБП */}
        {selectedMethod === "sbp" && (
          <div>
            <label className="block text-white mb-2">Номер телефона</label>
            <input
              type="tel"
              name="phoneNumber"
              value={paymentData.phoneNumber}
              onChange={handleInputChange}
              placeholder="+7 (999) 123-45-67"
              className="w-full p-3 bg-black/40 border border-red-800/30 rounded-md text-white focus:border-green-400 focus:outline-none"
              required
            />
          </div>
        )}

        {/* Кнопки */}
        <div className="flex gap-3 pt-4">
          <Button
            onClick={onCancel}
            variant="outline"
            className="flex-1 border-red-800/30 text-white hover:bg-red-900/20"
          >
            Отмена
          </Button>
          <Button
            onClick={handlePayment}
            disabled={processing}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
          >
            {processing ? (
              <div className="flex items-center gap-2">
                <Icon name="Loader2" className="animate-spin" size={16} />
                Обработка...
              </div>
            ) : (
              "Оплатить"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentProcessor;
