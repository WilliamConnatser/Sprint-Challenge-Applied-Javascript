class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftButton = carousel.querySelector('.left-button');
        this.rightButton = carousel.querySelector('.right-button');
        this.carouselItems = carousel.querySelectorAll('img');
        this.carouselItems[0].style.display = 'block';
        this.currentItem = 0;

        this.leftButton.addEventListener('click', _ => this.changeItem(false));
        this.rightButton.addEventListener('click', _ => this.changeItem(true));
    }

    changeItem(goRight) {
        this.carouselItems[this.currentItem].style.display = 'none';
        if(goRight) {
            if(this.currentItem + 1 > this.carouselItems.length - 1) {
                this.currentItem = 0;
            } else {
                this.currentItem++;
            }
        } else {
            if(this.currentItem - 1 < 0) {
                this.currentItem = this.carouselItems.length - 1;
            } else {
                this.currentItem--;
            }
        }
        this.carouselItems[this.currentItem].style.display = 'block';
    }
}

let carousel = document.querySelectorAll('.carousel');

carousel.forEach(function(c){
    new Carousel(c);
});

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/