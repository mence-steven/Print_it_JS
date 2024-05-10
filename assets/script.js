const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
	
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotContainer =document.querySelector('.dots');

/***************** creation carousel *******************/
let currentIndex = 0 

function carousel(index) {
	if (index < 0 ){
		currentIndex = slides.length - 1;
	}
	else if (index >= slides.length){
		currentIndex = 0;
	}

	const slide = slides[currentIndex];
	bannerImg.src = `${slide.image}`
	document.querySelector("p").innerHTML = slide.tagLine
	activeDotSelected();
}
/***************** creation flèche *******************/
arrowLeft.addEventListener('click', () => {
	currentIndex --;
	carousel(currentIndex);
})
arrowRight.addEventListener('click', () => {
	currentIndex ++;
	carousel(currentIndex);
})
/***************** creation dots *******************//*
function createDots() {
    slides.forEach((slide, index) => {
        //const dot = document.createElement('img');
        dot.classList.add('dot');
        //dot.src = slide.image;
        //dot.alt = `slide ${index + 1}`;
        dot.addEventListener('click', () => {
            currentIndex = index;
            carousel(currentIndex);
        });
        dotContainer.appendChild(dot);
    });
}*/
function createDots() {
	for(let index = 0;
		index < slides.length; index++)
		{
		const dot = document.createElement("div");
		dot.classList.add("dot");

		if(index===0){
			dot.classList.add("dot_selected")
		}
		dotContainer.appendChild(dot)
	}
}
/***************** creation selecteur dot *******************/
function activeDotSelected() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}
createDots()
activeDotSelected()
carousel(currentIndex)