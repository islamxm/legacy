import Swiper, {Navigation, Pagination} from 'swiper';

export const servSlider = () => {

    const sl = new Swiper('.serv__body', {
        
        spaceBetween: 20,
        slidesPerView: 1,
        
        
        modules: [Navigation, Pagination],
        pagination: {
            el: '.pag',
            type: 'bullets',
            bulletClass: 'pag__item',
            bulletActiveClass: 'pag__item_active',
            currentClass: '.pag__item_current',
            clickable: true,
            // dynamicBullets: true,
        },

        breakpoints: {
            1200: {
                spaceBetween: 60,
                slidesPerView: 3,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }


    })

}