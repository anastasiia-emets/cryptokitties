
function getCat(cat) {
  const hashNumber = Math.abs(hashCode(cat.name));
  const arrayNumber = hashNumber % colors.length;
  const catColor = colors[arrayNumber];
  let imageAdress = cat.image_url;
  let catName;
  if (cat.name){
      catName = cat.name;
  } else {catName = "- - - - -"}
  let catId = cat.id;
  let catCategory = function () {
      let status = cat.status.cooldown_index;
      if(status < 2){return "Fast"}
      else if (status < 3){return "Swift"}
      else  if (status < 5){return "Snappy"}
      else  if (status < 7){return "Brisk"}
      else  if (status < 10){return "Plodding"}
      else  if (status < 11){return "Slow"}
      else  if (status < 13){return "Sluggish"}
      else  if (status >= 13){return "Catatonic"}
  };
 


  return `
<div class="wrapp1">
        <div class="card-cat">
            <div class="card-cat-container" style="background-color: ${catColor}">
                <div class="card-cat-container__price">for sale = ${
    cat.price
    }</div>
                <img class="card-container-cat__image-cat" alt="cat" src="${
    cat.img_url
    }">
            </div>
            <div class="card-cat__id">id #${cat.id}</div>
            <div class="card-cat__name">name ${cat.name}</div>
            <div class="card-cat__category">category ${cat.category}</div>
            <div class="cat-add-to-cart">
              <a rel="import" href="import/../cat.html" class="button see-more">More Details</a>
              <a href="#0" class="button add-to-cart" data-id=${cat.id}>Add to Cart</a>
            </div>
        </div>
</div>
        `;

};



function getcats(cats) {
  return cats.map(cat => getCat(cat))
    .join('');
}

document.addEventListener("DOMContentLoaded", async function (event) {
  let loader = document.getElementById('loader');
  loader.classList.add('loader_opened');
  const response = await fetch('https://ma-cats-api.herokuapp.com/api/cats?&per_page=12');

  const cats = await response.json();
 
  setTimeout(function () {
    document.querySelector('.wrapp').insertAdjacentHTML("afterbegin", getcats(cats.cats));
    loader.classList.remove('loader_opened');
  }, 2000);
}
);





function hashCode(stringValue) {
  var hash = 0, i, chr;
  if (stringValue.length === 0) return hash;
  for (i = 0; i < stringValue.length; i++) {
    chr = stringValue.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const colors = [
  "#D3E8FF", "#FDE9E4", "#CDF5D4", "#EFE1DA", "#ECF4E0", "#FAEEFA", "#EEE9E8", "#D9F5CB", "#DFDFFA", "#FAF4CF"
]





document.querySelector(".cats-options__search input").addEventListener("focus", function () {
  
  document.querySelector(".cats-options__search-options").classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  if(e.target.closest(".cats-options")) return;
 
});

var Cart = (function($) {
  "use strict";
  
  
  var catsEl = document.querySelector(".wrapp"),
      cartEl =     document.querySelector(".shopping-cart-list"),
      catsQuantityEl = document.querySelector(".cats-quantity"),
      emptyCartEl = document.querySelector(".empty-cart-btn"),
      cartCheckoutEl = document.querySelector(".cart-checkout"),
      totalPriceEl = document.querySelector(".total-price");
  
 
   var cats=getcats();
      var catsInCart = [];
  
  
  var generateCartList = function() {
    
    cartEl.innerHTML = "";
    
    catsInCart.forEach(function(item) {
      var li = document.createElement("li");
      li.innerHTML = `${item.quantity} ${item.cat.name} - $${item.cat.price * item.quantity}`;
      cartEl.appendChild(li);
    });
    
    catsQuantityEl.innerHTML = catsInCart.length;
    
    generateCartButtons()
  }
  
  
 
  var generateCartButtons = function() {
    if(catsInCart.length > 0) {
      emptyCartEl.style.display = "block";
      cartCheckoutEl.style.display = "block"
      totalPriceEl.innerHTML = "$ " + calculateTotalPrice();
    } else {
      emptyCartEl.style.display = "none";
      cartCheckoutEl.style.display = "none";
    }
  }
  
  
  var setupListeners = function() {
    catsEl.addEventListener("click", function(event) {
      var el = event.target;
      if(el.classList.contains("add-to-cart")) {
       var elId = el.dataset.id;
       addToCart(elId);
      }
    });
    
    emptyCartEl.addEventListener("click", function(event) {
      if(confirm("Are you sure?")) {
        catsInCart = [];
      }
      generateCartList();
    });
  }
  
  
  var addToCart = function(id) {
    var obj = cats[id];
    if(catsInCart.length === 0 || catFound(obj.id) === undefined) {
      catsInCart.push({cat: obj, quantity: 1});
    } else {
      catsInCart.forEach(function(item) {
        if(item.cat.id === obj.id) {
          item.quantity++;
        }
      });
    }
    generateCartList();
  }
  
  
  
  var catFound = function(catId) {
    return catsInCart.find(function(item) {
      return item.cat.id === catId;
    });
  }

  var calculateTotalPrice = function() {
    return catsInCart.reduce(function(total, item) {
      return total + (item.cat.price *  item.quantity);
    }, 0);
  }
  

  var init = function() {
    getcats(cats);
    setupListeners();
  }
  
  return {
    init: init
  };
  
 
})(jQuery);

Cart.init();
function nextPage() {
  document.querySelector(".page-navigation__prev").classList.remove("disabled");
  pageOffset += 12;
  document.querySelector(".loader").classList.toggle("hidden");
  getCats(`https://api.cryptokitties.co/v2/kitties?offset=${pageOffset}&limit=${pageLimit}&parents=false&authenticated=false&include=${pageInclude}${pageSearch}&orderBy=${pageOrderBy}&orderDirection=${pageOrderDirection}&total=true`);
}

function prevPage() {
  if (pageOffset === 0) return;
  pageOffset -= 12;
  if (pageOffset === 0){
      document.querySelector(".page-navigation__prev").classList.add("disabled");
  }
  document.querySelector(".loader").classList.toggle("hidden");
  getCats(`https://api.cryptokitties.co/v2/kitties?offset=${pageOffset}&limit=${pageLimit}&parents=false&authenticated=false&include=${pageInclude}${pageSearch}&orderBy=${pageOrderBy}&orderDirection=${pageOrderDirection}&total=true`);
}