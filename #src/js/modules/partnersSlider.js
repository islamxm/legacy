import Swiper from 'swiper';

export const partnersSlider = () => {

    const sl = new Swiper('.partners__body', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            1050: {
                slidesPerView: 4,
                spaceBetween: 80,
            },

            800: {
                slidesPerView: 3,
                spaceBetween: 30
            },

            500: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    })

}