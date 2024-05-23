function price(order) {
  // 가격 = 기본가격 - 수량할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscont = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  return basePrice - quantityDiscont + shipping;
}
