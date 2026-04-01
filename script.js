// SLIDER VILLA FINAL

const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {

    const slidesContainer = slider.querySelector('.slides');
    const slides = slider.querySelectorAll('img');

    let index = 0;
    let interval;

    function startSlider(){
        interval = setInterval(() => {
            index++;

            if(index >= slides.length){
                index = 0;
            }

            slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        }, 3000);
    }

    function stopSlider(){
        clearInterval(interval);
    }

    // start auto
    startSlider();

    // pause saat hover (desktop)
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);

});
