const Assignment4 = () => {
  const products = [
    { name: "Laptop", price: 1200, available: true },
    { name: "Phone", price: 800, available: false },
    { name: "Tablet", price: 400, available: true },
  ];
  const availableProducts = products.filter((product) => {
    return product.available == true;
  });

  return (
    <div>
      <div>Filter Products by Availability</div>
      <button>Idewhtei baraa</button>
      <button>duussan baraa</button>

      {availableProducts.map((product) => {
        return (
          <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Assignment4;
