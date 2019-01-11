function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}



function getCat(cat) {
    return `
<div class="wrapp1">
        <div class="card-cat">
            <div class="card-cat-container" style="background-color: ${random_bg_color()}">
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
    
fetch('https://ma-cats-api.herokuapp.com/api/cats?&per_page=12')
  .then(
    function (response) {
      response.json().then(function (cats) {
        document.querySelector('.wrapp').insertAdjacentHTML("afterbegin", getcats(cats.cats));
      });
    }
  );
 
 
 
