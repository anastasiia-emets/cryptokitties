
export class ShoppingCart {
  constructor() {
    this.catsInCart = [];
  }

  addToCart(cat) {
    this.catsInCart = this.catsInCart.push(cat);
    this.renderCart();
  }

  deleteToCard() {

  }

  renderCart() {
    document.querySelector('.cart').innerHTML = `
      <ul>
        <li></li
      </ul>
    `
  }
}