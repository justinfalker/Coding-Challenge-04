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
      discountRate = 0
  }

  p.discountedPrice = p.price * (1 - discountRate);
}

console.log(products)

const customerType = "Student"; 

let additionalDiscount = 0;

if (customerType === "Student") {
  additionalDiscount = 0.05;
} else if (customerType === "Senior") {
  additionalDiscount = 0.07;
} else {
  additionalDiscount = 0;
}

console.log("Customer Type:", customerType);
console.log("Extra Discount: ", additionalDiscount);

for (let customerNumber = 1; customerNumber <= 3; customerNumber++) {
  let subtotal = 0;

  for (const p of products) {
    if (p.inventory > 0) {
      subtotal += p.discountedPrice;
      p.inventory -= 1; 
    }
  }

  let total = subtotal * (1 - additionalDiscount);

  console.log(
    `Customer #${customerNumber} Total Cost: $${total.toFixed(2)}`
  );
}

const oneProduct = products[2]; 

console.log("\n--- One Product (Oreos) ---");
for (const key in oneProduct) {
  console.log(`${key}: ${oneProduct[key]}`);
}

console.log("\n------ Updated Product Info after Inventory Update -----")

for (const p of products) {
  console.log("\nProduct:");

  for (const [key, value] of Object.entries(p)) {
    console.log(`${key}: ${value}`);
  }

  console.log("-----");
}
