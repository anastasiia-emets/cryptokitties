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

	document.querySelector('.see-more').addEventListener('click', (event) => {
		let catsl = document.querySelector(".cats-info");
		catsl.classList.add('disable');
		var catl = document.querySelector(".cat-info")
		catl.classList.add('block');
		document.querySelector('.cat-info').innerHTML = kitten.getKittenOneMarkup();

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







