import Swiper, {Autoplay} from 'swiper';

export const partnersSlider = () => {

    const sl = new Swiper('.partners__body', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 5000
        },
        modules: [Autoplay],
        breakpoints: {
            1050: {
                slidesPerView: 4,
                spaceBetween: 80,
                autoplay: {
                    delay: 5000
                },
            },

            800: {
                slidesPerView: 3,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000
                },
            },

            500: {
                slidesPerView: 2,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000
                },
            }
        }
    })

}