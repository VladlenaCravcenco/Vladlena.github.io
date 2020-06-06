document.onmousemove = function(event){
    let x = event.x -4;
    let y = event.y -4;
    console.log(x + ' ' + y);
    document.querySelector('.y-1').style.transform = 'rotate('+57.2958 * arcctg(x,y) + 'deg)';
    document.querySelector('.y-3').style.transform = 'rotate(' + 57.2958 * arcctg(x - 12, y) + 'deg)';
    function arcctg(x,y) {
        if(x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
        if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
        if (x < 0 && y < 0) return Math.PI + Math.atan(y / x);
        if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
    }
}

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom-top', // defines which position of the element regarding to window should trigger the animation

});



$(function(){

        $('.slider__inner').slick({
            prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
            infinite: false,
        });






});

const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors){
    anchor.addEventListener("click",function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

jquery(document).ready(function ($){
    $("#lightgallery").lightgallery({
        mode:'Fade',
        speed:500,
        preload:1
    });
});
