export function formatPrice(price) {
  return Number(price).toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
  });
}
