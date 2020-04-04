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
      document.querySelector('.content').innerHTML += `
    <article class="content">
      <h1>BEIGNETS</h1>
            <p>
                The word beignet (pronounced ben-YAY) comes from the early Celtic word bigne meaning “to raise.”  It is also French for “fritter.” Beignets, a New Orleans specialty, are fried, raised pieces of yeast dough, usually about 2 inches in diameter or 2 inches square.  After being fried, they are sprinkled with sugar or coated with various icings.

                Beignets have been associated with Mardi Gras in France since at least the 16th century, and many recipes for beignets appear in French works around the same time.
            </p>
      </article>
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


