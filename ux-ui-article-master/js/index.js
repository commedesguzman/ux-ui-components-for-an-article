////STACKED CAROUSEL//////

/*
let $photos = document.querySelector('.container')


$photos.addEventListener('click', (event) => {
    $photos.classList.toggle('carousel_slide')
})
*/

rollBtn.addEventListener (`click`, (event) => {

  document.querySelector(`.carousel`).style.display = ("block");

})  

var randomNum = 1;

document.querySelector(`.carousel_container`).innerHTML = (`<img id="carousel_slide${randomNum}" class="carousel-image" src="img/beignet1.jpg" alt="beignet${randomNum}">
`);

document.getElementById('up').addEventListener('click', function() {
if ( randomNum !== 6 ) {
  randomNum++;
  document.querySelector(`.carousel_container`).innerHTML = (`<img id="carousel_slide${randomNum}" class="carousel-image" src="img/beignet6.jpg" alt="beignet${randomNum}">
`);
}
})


document.getElementById('down').addEventListener('click', function() {
if ( randomNum !== 1 ) {
  randomNum--;
  document.querySelector(`.carousel_container`).innerHTML = (`<img id="carousel_slide${randomNum}" class="carousel-image" src="img/beignet1.jpg" alt="beignet${randomNum}">
`);
}

})


////INFINITE SCROLLING//////
  

let winH = document.documentElement.clientHeight
    let docH = document.documentElement.scrollHeight
    let winY = window.scrollY
    let maxY = docH - winH
  
    if (winY >= maxY) {
      // You have definitely hit the bottom
  
      // Add new content when we hit the bottom
      document.querySelector('#carousel').innerHTML += `
      <ul class="recipe">
      <li>1 cup lukewarm water</li>
      <li>1/4 cup sugar (granulated)</li>
      <li>1/2 teaspoon salt</li>
      <li>1 large egg, room temperature and beaten</li>
      <li>2 tablespoons butter, softened</li>
      <li>1/2 cup evaporated milk</li>
      <li>4 cups flour (bread flour or all-purpose)</li>
      <li>3 teaspoons instant active dry yeast</li>
      <li>Vegetable oil for deep frying</li>
      <li>Powdered sugar for dusting</li>
  </ul>
        `
    }
 
  
  
  window.addEventListener('load', theStateOfTheInterface)
  window.addEventListener('scroll', theStateOfTheInterface)
  window.addEventListener('resize', theStateOfTheInterface)
  


  ///Progress Bar///

let $doc = document.documentElement
let $win = window
let $container = document.querySelector('.myProgress')
let $bar = document.querySelector('.myBar')


window.addEventListener('scroll', event =>{

  let progress = document.querySelector('.myBar');
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;
  let scrolled = window.scrollY;

  if (scrollable > 0){
    percentageScrollable = Math.ceil(scrolled / scrollable * 100);

  }

  progress.style.width = `$(percentageScrolled)%`;

  console.log(percentageScrolled);

})


