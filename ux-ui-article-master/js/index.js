////STACKED CAROUSEL//////

/*
let $photos = document.querySelector('.container')


$photos.addEventListener('click', (event) => {
    $photos.classList.toggle('carousel_slide')
})
*/

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
  