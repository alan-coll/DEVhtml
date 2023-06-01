var slide =document.getElementsByClassName('slide');
var currentSlide=0;

function ShowSlide(){
 slides[currentSlide].style.display = 'none';
 currentSlide = (currentSlide + 1) % slides.length;
 slides[currentSlide].style.display = 'block';

 setInterval(ShowSlide,3000);
}


