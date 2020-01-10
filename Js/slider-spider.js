function Slider (selector, textSelector) {
    let sliderNode = document.querySelector(selector),
        sliderImagesNode = sliderNode.querySelector('.hero-picture-wrapper'),
        prevImagesNode = sliderNode.querySelector('.hero-picture-container-left-arrow'),
        nextImagesNode = sliderNode.querySelector('.hero-picture-container-right-arrow');

    let sliderTextNode = sliderNode.querySelector('.hero-picture-container-middle-wrapper'),
        textSlideSize = sliderTextNode.parentElement.offsetWidth;

    let currentSlideIndex = 0,
        imagesCount = sliderImagesNode.children.length,
        slideSize = sliderImagesNode.firstElementChild.offsetWidth;

    let fastScrollNode = sliderNode.querySelector('.hero-picture-fast_scroll')

    function nextSlide () {
        if (currentSlideIndex === imagesCount - 1){
            currentSlideIndex = 0;
        }
        else {
            currentSlideIndex++;
        }
    }

    function prevSlide () {
        if (currentSlideIndex === 0){
            currentSlideIndex = imagesCount - 1;
        }
        else {
            currentSlideIndex--;
        }
    }


    function __render () {
        sliderImagesNode.style.left = -currentSlideIndex * slideSize + 'px';
        sliderTextNode.style.left = -currentSlideIndex * textSlideSize + 'px';
        for (let i = fastScrollNode.children.length; i < imagesCount; i++){
            fastScrollNode.append(fastScrollNode.firstElementChild.cloneNode(true));
            fastScrollNode.children[i].setAttribute('data-slider_item', i);
        }
        fastScrollNode.style.left = fastScrollNode.parentElement.offsetWidth / 2 - fastScrollNode.offsetWidth / 2 + 'px';
        console.log(currentSlideIndex);
        fastScrollNode.children[currentSlideIndex].checked = true;
    }

    __render();

    prevImagesNode.onclick = function () {
        fastScrollNode.children[currentSlideIndex].checked = true;
        console.log(currentSlideIndex);
        prevSlide();
        __render();

    }

    nextImagesNode.onclick = function () {
        fastScrollNode.children[currentSlideIndex].checked = true;
        console.log(currentSlideIndex);
        nextSlide();
        __render();
    }
    
    fastScrollNode.onclick = function (e) {
        let link = e.target;
        if (link.tagName !== 'INPUT') {return}
        currentSlideIndex = +link.dataset['slider_item'];
        __render();
    }
}




