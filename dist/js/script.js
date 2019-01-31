class Kitten {
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
                <div class="card-cat-container__price">for sale = ${price}
      </div>
                <img class="card-container-cat__image-cat" alt="cat" src="${
      cat.image_url
      }">
            </div>
            <div class="card-cat__id">id #${cat.id}</div>
            <div class="card-cat__name">name ${cat.name}</div>
            <div class="card-cat__category">category ${category}</div>
            <div class="cat-add-to-cart">
              <a rel="import" href="import/../cat.html" class="button see-more">More Details</a>
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
}
class KittenList {
  constructor(cats) {
    this.cats = cats;
    document.addEventListener('click', (e) => {
      if (e.target.matches('.add-to-cart')) {
        card.add(/* Find cat by id */)
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

class ShoppingCart {
  constructor() {

  }
  // addToCart(id) {

  //   var obj = products[id];
  //   if (productsInCart.length === 0 || productFound(obj.id) === undefined) {
  //     productsInCart.push({ product: obj, quantity: 1 });
  //   } else {
  //     productsInCart.forEach(function (item) {
  //       if (item.product.id === obj.id) {
  //         item.quantity++;
  //       }
  //     });
  //   }
  //   generateCartList();


  // }
  // setupListeners() {

  //   productsEl.addEventListener("click", function (event) {
  //     var el = event.target;
  //     if (el.classList.contains("add-to-cart")) {
  //       var elId = el.dataset.id;
  //       addToCart(elId);
  //     }
  //   });

  //   emptyCartEl.addEventListener("click", function (event) {
  //     if (confirm("Are you sure?")) {
  //       productsInCart = [];
  //     }
  //     generateCartList();
  //   });
  // }
}

let pageOffset = 0;
let pageInclude = "sale";
let pageOrderBy = "current_price";
let pageOrderDirection = "asc";
let pageSearch = "";
async function loading_page() {
  let pageLimit = 12;
  let loader = document.getElementById('loader');
  loader.classList.add('loader_opened');
  const response = await fetch(`https://api.cryptokitties.co/v2/kitties?offset=${pageOffset}&limit=${pageLimit}${pageSearch}&parents=false&authenticated=false&include=${pageInclude}&orderBy=${pageOrderBy}&orderDirection=${pageOrderDirection}&total=true`);
  const cats = await response.json();

  const kittenlist = new KittenList(cats.kitties);
  let list = cats.kitties;

  setTimeout(function () {
    document.querySelector('.wrapp').innerHTML= kittenlist.getKittenMarkup();
    loader.classList.remove('loader_opened');
  }, 2000);

  document.querySelector('#search').addEventListener('submit', (event) => {
    event.preventDefault();
    const searchValue = document.querySelector('[name="search"]').value;
    var filteredCats;

    if (searchValue !== null) {
      filteredCats = list.filter((cat) => {
        return cat.name.toUpperCase().indexOf(searchValue.toUpperCase()) >= 0;
      });
    } else {
      filteredCats = list;
    }
    renderCats(filteredCats);
  });
  function renderCats(cats) {
    document.querySelector('.wrapp').innerHTML =
      cats.map(cat => {
        return `
          <div class="wrapp1">
            <div class="card-cat">
                <div class="card-cat-container">
                  <div class="card-cat-container__price">for sale = ${ cat.price}</div>
                  <img class="card-container-cat__image-cat" alt="cat" src="${cat.image_url}">             </div>
                <div class="card-cat__id">id #${cat.id}</div>
                <div class="card-cat__name">name ${cat.name}</div>
                <div class="card-cat__category">category ${cat.category}</div>
                <div class="cat-add-to-cart">
                  <a rel="import" href="import/../cat.html" class="button see-more">More Details</a>
                  <button class="button add-to-cart" data-id=${cat.id}>Add to Cart</button>             </div>
                </div>
          </div>
         ` })
        .join('');

  }

  document.querySelector('.snappy').addEventListener('click', (event) => {
   let SnappyCats;
   SnappyCats = list.filter((cat) => {
        return cat.category = 'Snappy';
      });
    renderCats(SnappyCats);
  });

  document.querySelector('.brisk').addEventListener('click', (event) => {
    let BriskCats;
    BriskCats = list.filter((cat) => {
         return cat.category = 'Brisk';
       });
     renderCats(BriskCats);
   });

   document.querySelector('.plodding').addEventListener('click', (event) => {
    let PloddingCats;
    PloddingCats = list.filter((cat) => {
         return cat.category = 'Plodding';
       });
     renderCats(PloddingCats);
   });

   document.querySelector('.slow').addEventListener('click', (event) => {
    let SlowCats;
    SlowCats = list.filter((cat) => {
         return cat.category = 'Slow';
       });
     renderCats(SlowCats);
   });

   document.querySelector('.sluggish').addEventListener('click', (event) => {
    let SluggishCats;
    SluggishCats = list.filter((cat) => {
         return cat.category = 'Sluggish';
       });
     renderCats(SluggishCats);
   });

   document.querySelector('.catatonic').addEventListener('click', (event) => {
    let CatatonicCats;
    CatatonicCats = list.filter((cat) => {
         return cat.category = 'Catatonic';
       });
     renderCats(CatatonicCats);
   });

   document.querySelector('.fast').addEventListener('click', (event) => {
    let FastCats;
    FastCats = list.filter((cat) => {
         return cat.category = 'Fast';
       });
     renderCats(FastCats);
   });


   document.querySelector('.shift').addEventListener('click', (event) => {
    let ShiftCats;
    ShiftCats = list.filter((cat) => {
         return cat.category = 'Shift';
       });
     renderCats(ShiftCats);
   });
}



document.addEventListener("DOMContentLoaded", loading_page);
[...document.getElementsByClassName("button_next")].forEach(button => button.addEventListener('click', () => {
  pageOffset += 12;

  loading_page();
}));

[...document.getElementsByClassName("button_prev")].forEach(button => button.addEventListener('click', () => {

  if (pageOffset === 0) return;
  pageOffset -= 12;
  loading_page();
}));









