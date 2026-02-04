const products = [
  { name: "Laptop", price: 80000, category: "Electronics" },
  { name: "Phone", price: 40000, category: "Electronics" },
  { name: "Watch", price: 10000, category: "Accessories" },
  { name: "Tablet", price: 25000, category: "Electronics" },
];

function calculateCart(products) {
  let discountAndVatPrice = [];
  for (const product of products) {
    let discountPrice = 0;
    let productsOjb = {};
    for (let key in product) {
      productsOjb[key] = product[key];
    }
      const discount = product.price * 10;
      const result = discount / 100;
      const totalPrice = product.price - result;
      const vatPrice = totalPrice * 5;
      const resultVat = vatPrice / 100;
      discountPrice = totalPrice + resultVat;
   
    productsOjb.finalPrice = discountPrice;
    discountAndVatPrice.push(productsOjb);
  }
  return discountAndVatPrice;
}

const result = calculateCart(products);
console.log(result);
