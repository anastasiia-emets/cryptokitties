//function random_bg_color() {
//  var x = Math.floor(Math.random() * 256);
//  var y = Math.floor(Math.random() * 256);
// var z = Math.floor(Math.random() * 256);
// var bgColor = "rgb(" + x + "," + y + "," + z + ")";
// return bgColor;
//}

//style="background-color: ${random_bg_color()}"
//style="background-color: ${catColor}">${cat.name}"
function getCat(cat) {
  const hashNumber = Math.abs(hashCode(cat.name));
  const arrayNumber = hashNumber % colors.length;
  const catColor = colors[arrayNumber];

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
        </div>
</div>
        `;

};



function getcats(cats) {
  return cats.map(cat => getCat(cat))
    .join('');
}


let loader = document.getElementById('loader');
loader.classList.add('loader_opened');
fetch('https://ma-cats-api.herokuapp.com/api/cats?&per_page=12')
  .then((response) => {
    return response.json();
  })
  .then(
    function (cats) {
      setTimeout(function () {
        document.querySelector('.wrapp').insertAdjacentHTML("afterbegin", getcats(cats.cats));
        loader.classList.remove('loader_opened');
      }, 2000);
    }
  );

 // const newcat=getcats(cats);


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
  'lightblue',
  'orange',
  'blue',
  'green'
]




