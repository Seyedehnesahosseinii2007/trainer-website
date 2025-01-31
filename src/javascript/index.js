/* for my slider*/
var slideIndex = 1;
showDivs(slideIndex);
/* next slide */
function plusDivs(n) {
    showDivs(slideIndex += n);
}
/* previous slide */

function currentDiv(n) {
    showDivs(slideIndex -= n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}

document.addEventListener('DOMContentLoaded', function () {
    const partOne = document.querySelector('.part-one-for-new-collection');
    const partTwo = document.querySelector('.part-two-for-new-collection');

    function handleScroll() {
        const collectionSection = document.querySelector('.collection');
        const collectionPosition = collectionSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (collectionPosition < screenPosition) {
            partOne.classList.remove('hidden');
            partTwo.classList.remove('hidden');
            partOne.classList.add('animate-slide-in-left');
            partTwo.classList.add('animate-slide-in-right');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
});
