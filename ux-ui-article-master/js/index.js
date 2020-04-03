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
  document.querySelector(`.imageResult`).innerHTML = (`<img id="num${randomNum}" class="numVis" src="img/dice${randomNum}.svg" alt="num${randomNum}">
`);
}
})


document.getElementById('down').addEventListener('click', function() {
if ( randomNum !== 1 ) {
  randomNum--;
  document.querySelector(`.imageResult`).innerHTML = (`<img id="num${randomNum}" class="numVis" src="img/dice${randomNum}.svg" alt="num${randomNum}">
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
        <li class="carousel_slide">
          
        </li>
        `
    }
  }
  
  
  window.addEventListener('load', theStateOfTheInterface)
  window.addEventListener('scroll', theStateOfTheInterface)
  window.addEventListener('resize', theStateOfTheInterface)
  