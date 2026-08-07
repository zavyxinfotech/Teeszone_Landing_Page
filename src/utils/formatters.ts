/**
  Price calculator based on garment base price and order quantity
 */
export function calculateBulkPrice(basePrice: number, quantity: number): {
  unitPrice: number;
  totalPrice: number;
  discountPercentage: number;
  savings: number;
} {
  let discount = 0;
  if (quantity >= 500) {
    discount = 0.55;
  } else if (quantity >= 250) {
    discount = 0.45;
  } else if (quantity >= 100) {
    discount = 0.35;
  } else if (quantity >= 50) {
    discount = 0.22;
  } else if (quantity >= 25) {
    discount = 0.12;
  }

  const unitPrice = basePrice * (1 - discount);
  const totalPrice = unitPrice * quantity;
  const standardTotal = basePrice * quantity;
  const savings = standardTotal - totalPrice;

  return {
    unitPrice: Number(unitPrice.toFixed(2)),
    totalPrice: Number(totalPrice.toFixed(2)),
    discountPercentage: Math.round(discount * 100),
    savings: Number(savings.toFixed(2))
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}
