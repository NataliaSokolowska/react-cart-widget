export function formatPrice(price) {
  return Number(price).toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
  });
}

export function pluralizeForm(quantity) {
  return quantity > 4
    ? `${quantity} sztuk`
    : quantity === 1
    ? `${quantity} sztukę`
    : `${quantity} sztuki`;
}
