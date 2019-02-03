
import {Kitten} from './Kitten.js';
export class KittenList {
  constructor(cats) {
    this.cats = cats;
    document.addEventListener('click', (e) => {
      if (e.target.matches('.add-to-cart')) {
        cat.addToCart(сat);
      }
    });
  }
  getKittenMarkup(cats) {
    return this.cats.map(cat => {
      const kitten = new Kitten(cat);
      return kitten.getMarkup();
    })
      .join('');
	}

	
	
}
