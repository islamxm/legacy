import Swiper, {Pagination} from 'swiper';

export const revSlider = () => {

    const sl = new Swiper('.rev__body', {
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 0,
        centeredSlides: false,
        modules: [Pagination],
        pagination: {
            el: '.pag',
            type: 'bullets',
            bulletClass: 'pag__item',
            bulletActiveClass: 'pag__item_active',
            currentClass: '.pag__item_current',
            clickable: true,
            dynamicBullets: true,
        },

        breakpoints: {
            1050: {
                slidesPerView: 3,
                spaceBetween: 80,
                centeredSlides: true,
                initialSlide: 1,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 20,
                initialSlide: 0,
                centeredSlides: false
            },

            
            

        }
    })
}