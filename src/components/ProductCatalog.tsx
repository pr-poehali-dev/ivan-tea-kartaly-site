import ProductCard from "./ProductCard";

const ProductCatalog = () => {
  const products = [
    {
      id: 1,
      name: "Классический Иван-чай",
      description: "Традиционный копорский чай с насыщенным вкусом",
      price: 450,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
      weight: "100г",
      inStock: true,
    },
    {
      id: 2,
      name: "Иван-чай с мятой",
      description: "Освежающий купаж с добавлением горной мяты",
      price: 520,
      image:
        "https://images.unsplash.com/photo-1597318236558-0b3d4b6e3d8b?w=400",
      weight: "100г",
      inStock: true,
    },
    {
      id: 3,
      name: "Иван-чай премиум",
      description: "Отборные листья высшего сорта",
      price: 680,
      image: "https://images.unsplash.com/photo-1558618666-fcdb5c0a2c70?w=400",
      weight: "50г",
      inStock: false,
    },
    {
      id: 4,
      name: "Подарочный набор",
      description: "Три вида чая в красивой упаковке",
      price: 1200,
      image: "https://images.unsplash.com/photo-1556909885-f2c03c51c31a?w=400",
      weight: "300г",
      inStock: true,
    },
  ];

  return (
    <section id="catalog" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Наш каталог 😊</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Выберите из нашей коллекции натурального Иван-чая высшего качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
