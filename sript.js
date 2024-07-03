class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  toString() {
    return `Product(id=${this.id}, name=${this.name}, price=${this.price})`;
  }
}

class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }

  toString() {
    return `CartItem(product=${this.product.toString()}, quantity=${
      this.quantity
    }, totalPrice=${this.getTotalPrice()})`;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(cartItem) {
    this.items.push(cartItem);
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  getTotalItems() {
    return this.items.length;
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  displayCart() {
    this.items.forEach((item) => console.log(item.toString()));
    console.log(`Total Price: ${this.getTotalPrice()}`);
  }

  toString() {
    return `ShoppingCart(items=[${this.items
      .map((item) => item.toString())
      .join(", ")}], totalPrice=${this.getTotalPrice()})`;
  }
}
