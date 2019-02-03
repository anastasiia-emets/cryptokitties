import { ShoppingCart } from './ShoppingCart.js';
import { Kitten } from './Kitten.js';
import { KittenList } from './KittenList.js';

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
	let shop = new ShoppingCart();
	let list = cats.kitties;

	setTimeout(function () {
		document.querySelector('.cats-info').innerHTML = kittenlist.getKittenMarkup();
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
		document.querySelector('.cats-info').innerHTML =
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
                  <a class="button see-more">More Details</a>
                  <button class="button add-to-cart" data-id=${cat.id}>Add to Cart</button>             </div>
                </div>
          </div>
         ` })
				.join('');

	}
	function MarkupPage(cat) {
	
		document.querySelector('.cat-info').innerHTML =
		 ` 
            <div class="card-oneCat">
                <div class="card-oneCat__container">               
									<img class="card-oneCat__container_img" alt="cat" src="${cat.image_url}">             
								</div>
                <div class="card-oneCat__id">id #${cat.id}</div>
                <div class="card-oneCat__name">name ${cat.name}</div>           
								<button class="card-oneCat__button add-to-cart" data-id=${cat.id}>Add to Cart</button>             							
            </div>
          
         `
	};


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
	
	
	document.addEventListener('click', (e) => {
		if (e.target.matches('.button-see-more')) {

			document.querySelector(".cats-info").classList.add('disable');	
			document.querySelector(".cats-options").classList.add('disable');	
			document.querySelector(".page-navigation").classList.add('disable');	
			document.querySelector(".cat-info").classList.add('block');
	
			const katId = e.target.dataset.id;
			console.log(katId);

			let katWithId;
			katWithId = list.filter((cat) => {
				return cat.id = katId;
			});
			MarkupPage(katWithId);
		}
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
