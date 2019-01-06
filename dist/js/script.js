
function cats(options){
    this.render = () =>{
        return`
        <div class="card-cat">
            <div class="card-cat-container">
                <div class="card-cat-container__price">for sale = ${options.price}</div>
                <img class="card-container-cat__image-cat" alt="cat" src="${options.img_url}">
            </div>
            <div class="card-cat__id">id #${options.id}</div>
            <div class="card-cat__name">name ${options.name}</div>
            <div class="card-cat__category">category ${options.category}</div>
        </div>
        
        `
    }
}
const cathtml=[
    {
      "id": 1,
      "name": "simon",
      "category": "fast",
      "price": 100,
      "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495636.svg",
      "available": true,
      "created_at": "2018-02-06T23:08:49.179Z",
      "updated_at": "2018-02-06T23:08:49.179Z"
    },
    {
      "id": 2,
      "name": "felix",
      "category": "fast",
      "price": 10000,
      "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495625.svg",
      "available": true,
      "created_at": "2018-02-06T23:08:49.186Z",
      "updated_at": "2018-02-06T23:08:49.186Z"
    },
    {
      "id": 3,
      "name": "luna",
      "category": "slow",
      "price": 2000,
      "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495622.svg",
      "available": true,
      "created_at": "2018-02-06T23:08:49.190Z",
      "updated_at": "2018-02-06T23:08:49.190Z"
    },
    {
      "id": 4,
      "name": "oliver",
      "category": "fast",
      "price": 9000,
      "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495619.svg",
      "available": true,
      "created_at": "2018-02-06T23:08:49.193Z",
      "updated_at": "2018-02-06T23:08:49.193Z"
    },
    {
      "id": 5,
      "name": "oreo",
      "category": "middle",
      "price": 100,
      "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495616.svg",
      "available": true,
      "created_at": "2018-02-06T23:08:49.197Z",
      "updated_at": "2018-02-06T23:08:49.197Z"
    },
    {
      "id": 6,
      "name": "molly",
      "category": "slow",
      "price": 3000,
      "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495613.svg",
      "available": true,
      "created_at": "2018-02-06T23:08:49.201Z",
      "updated_at": "2018-02-06T23:08:49.201Z"
    },
    {
      "id": 7,
      "name": "simba",
      "category": "fast",
      "price": 11000,
      "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495592.svg",
      "available": true,
      "created_at": "2018-02-06T23:08:49.205Z",
      "updated_at": "2018-02-06T23:08:49.205Z"
    },
    {
      "id": 8,
      "name": "jack",
      "category": "middle",
      "price": 5000,
      "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495579.svg",
      "available": true,
      "created_at": "2018-02-06T23:08:49.209Z",
      "updated_at": "2018-02-06T23:08:49.209Z"
    },
    {
      "id": 10,
      "name": "loki",
      "category": "fast",
      "price": 20000,
      "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/336916.svg",
      "available": true,
      "created_at": "2018-02-06T23:08:49.216Z",
      "updated_at": "2018-02-06T23:08:49.216Z"
    },
    {
      "id": 11,
      "name": "milo",
      "category": "slow",
      "price": 3500,
      "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/336916.svg",
      "available": true,
      "created_at": "2018-02-06T23:08:49.220Z",
      "updated_at": "2018-02-06T23:08:49.220Z"
    },
    {
      "id": 13,
      "name": "Homer",
      "category": "sub-zero",
      "price": 91233,
      "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/117910.svg",
      "available": true,
      "created_at": "2018-02-10T10:40:52.425Z",
      "updated_at": "2018-02-10T10:40:52.425Z"
    },
    {
      "id": 14,
      "name": "Johnathon",
      "category": "sub-zero",
      "price": 55740,
      "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/1000.svg",
      "available": true,
      "created_at": "2018-02-10T10:40:52.437Z",
      "updated_at": "2018-02-10T10:40:52.437Z"
    }
  ].map((catOptions) =>{
    const cat= new cats(catOptions);
    return cat.render()
})
document.querySelector('body').innerHTML=cathtml.join('');
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);

  document.body.querySelector(".card-cat-container").style.background = bgColor;
  }

random_bg_color();