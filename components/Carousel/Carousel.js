/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel(){
  //Create HTML
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  carousel.innerHTML = `<div class="left-button"> < </div>
  <img src="./assets/carousel/mountains.jpeg">
  <img src="./assets/carousel/computer.jpeg">
  <img src="./assets/carousel/trees.jpeg">
  <img src="./assets/carousel/turntable.jpeg">
  <div class="right-button"> > </div>`;
  const leftButton = carousel.querySelector('.left-button');
  const rightButton = carousel.querySelector('.right-button');
  const imgArr = Array.from(carousel.querySelectorAll('img'));
  imgArr.forEach((img, i)=>{
    img.style.zIndex = imgArr.length-i;
  })
  let currentIndex = imgArr.length*20;
  imgArr[0].style.display = 'block';
  leftButton.addEventListener('click', event=>{
    let currentSlide = currentIndex % (imgArr.length);
    console.log(currentSlide);
    let width = imgArr[currentSlide]
    function edge(num){
      if(num==imgArr.length) return 0;
      return num;
    }
    TweenMax.fromTo(imgArr[currentSlide], 0.3,{x:0, display:'block'}, {x:-imgArr[currentSlide].offsetWidth, display:'none'});
    TweenMax.fromTo(imgArr[edge(currentSlide+1)], 0.3,{x:imgArr[currentSlide].offsetWidth, display:'none'}, {x:0, display:'block'});
    currentIndex+=1;
  })
  rightButton.addEventListener('click', event=>{
    let currentSlide = Math.abs(currentIndex % (imgArr.length));
    console.log(currentSlide);
    let width = imgArr[currentSlide]
    function edge(num){
      if(num==-1) return imgArr.length-1;
      return num;
    }
    TweenMax.fromTo(imgArr[currentSlide], 0.3,{x:0, display:'block'}, {x:imgArr[currentSlide].offsetWidth, display:'none'});
    imgArr[currentSlide].style.zIndex = imgArr.length-1;
    TweenMax.fromTo(imgArr[edge(currentSlide-1)], 0.3,{x:-imgArr[currentSlide].offsetWidth, display:'none'}, {x:0, display:'block'});
    imgArr[edge(currentSlide-1)].style.zIndex = imgArr.length;
    currentIndex-=1;
  })
  console.log(imgArr);
  return carousel;
}
document.querySelector('.carousel-container').append(createCarousel());