const products = [
  { name: "Airpods", category: "Electronics", price: 299.99, inventory: 18 },
  { name: "Graphic T-Shirt", category: "Clothing", price: 35, inventory: 128 },
  { name: "Oreos", category: "Food", price: 12.5, inventory: 33 },
  { name: "tissues", category: "Household", price: 3.99, inventory: 30 },
  { name: "Ballpoint Pens", category: "School/Office", price: 2.99, inventory: 200 }
];

  for (const p of products) {
  let discountRate = 0;

  switch (p.category) {
    case "Electronics":
      discountRate = 0.2;
      break;
    case "Clothing":
      discountRate = 0.15;
      break;
    case "Food":
    case "Household":
      discountRate = 0.1;
      break;
    default:
      console.log("No discount for you!!");
  }

  p.discountedPrice = p.price * (1 - discountRate);
}

console.log(products)
