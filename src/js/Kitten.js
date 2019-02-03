export class Kitten {
  constructor(cat) {
    this.cat = cat;
    this.colors = [
      "#D3E8FF", "#FDE9E4", "#CDF5D4", "#EFE1DA", "#ECF4E0", "#FAEEFA", "#EEE9E8", "#D9F5CB", "#DFDFFA", "#FAF4CF"
    ]
  }
  getMarkup() {
    const cat = this.cat;
    const hashNumber = Math.abs(this._hashCode(cat.name));
    const arrayNumber = hashNumber % this.colors.length;
    const catColor = this.colors[arrayNumber];
    const auction = cat.auction;
    const exactPrice = auction.current_price / 100000000000000000;
    let price;
    if (exactPrice.toString().charAt(4) !== '') {
      price = exactPrice.toFixed(3);
    } else {
      price = exactPrice.toFixed(2);
    }
    let cooldown = cat.status.cooldown_index;
    let category;
    if (cooldown < 2) {
      category = 'Fast';
    } else if (cooldown < 3) {
      category = 'Swift';
    } else if (cooldown < 5) {
      category = 'Snappy';
    } else if (cooldown < 7) {
      category = 'Brisk';
    } else if (cooldown < 10) {
      category = 'Plodding';
    } else if (cooldown < 11) {
      category = 'Slow';
    } else if (cooldown < 13) {
      category = 'Sluggish';
    } else if (cooldown >= 13) {
      category = 'Catatonic';
    }
    if (cat.name === null) {
      cat.name = '-----';
    }
    return `
<div class="wrapp1">
        <div class="card-cat">
            <div class="card-cat-container" style="background-color: ${catColor}">
                <div class="card-cat-container__price"><img class="tag" alt="p" src="images/tag.svg"> for sale = ${price}
      </div>
                <img class="card-container-cat__image-cat" alt="cat" src="${
      cat.image_url
      }">
            </div>
            <div class="card-cat__id"> # ${cat.id}</div>
            <div class="card-cat__name">name ${cat.name}</div>
            <div class="card-cat__category"><img class="paw" alt="p" src="images/paw.svg"> ${category}</div>
            <div class="cat-add-to-cart">
							<button class="button see-more">More Details</button>
              <button class="button add-to-cart" data-id=${cat.id}>Add to Cart</button>
            </div>
        </div>
</div>
        `;
  }
  _hashCode(stringValue) {
    var hash = 0, i, chr;
    if (!stringValue || stringValue.length === 0) return hash;
    for (i = 0; i < stringValue.length; i++) {
      chr = stringValue.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
	};
	getOneMarkup() {
    const cat = this.cat;
    const hashNumber = Math.abs(this._hashCode(cat.name));
    const arrayNumber = hashNumber % this.colors.length;
    const catColor = this.colors[arrayNumber];
    const auction = cat.auction;
    const exactPrice = auction.current_price / 100000000000000000;
    let price;
    if (exactPrice.toString().charAt(4) !== '') {
      price = exactPrice.toFixed(3);
    } else {
      price = exactPrice.toFixed(2);
    }
    let cooldown = cat.status.cooldown_index;
    
    return `
<div class="wrapp1">
        <div class="card-cat">
            <div class="card-cat-container" style="background-color: ${catColor}">
                <div class="card-cat-container__price"><img class="tag" alt="p" src="images/tag.svg"> for sale = ${price}
      </div>
                <img class="card-container-cat__image-cat" alt="cat" src="${
      cat.image_url
      }">
            </div>
            <div class="card-cat__id"> # ${cat.id}</div>
            <div class="card-cat__name">name ${cat.name}</div>
            <div class="cat-add-to-cart">
			
              <button class="button add-to-cart" data-id=${cat.id}>Add to Cart</button>
            </div>
        </div>
</div>
        `;
	}
	getKittenOneMarkup() {
   
      const kitten = new Kitten(cat);
      return kitten.getMarkup();
    
      
	}
 
}