import Swiper, {Pagination} from 'swiper';

export const teamSlider = () => {

    const slider = document.querySelector('.team__body');
    const sliderWr = document.querySelector('.team__body_wr');
    const slides = document.querySelectorAll('.team__body_item');


    

    if(window.innerWidth <= 1050) {

        slider.classList.add('swiper');
        sliderWr.classList.add('swiper-wrapper');
        slides.forEach(item => {
            item.classList.add('swiper-slide');
        })
        const sl = new Swiper('.team__body', {
            slidesPerView: 1,
            spaceBetween: 20,
            modules: [Pagination],
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
                700: {
                    slidesPerView: 2,
                    spaceBetween: 58,
                }
            }
        });
        
    }

    if(window.innerWidth > 1050) {

        slider.classList.remove('swiper');
        sliderWr.classList.remove('swiper-wrapper');
        slides.forEach(item => {
            item.classList.remove('swiper-slide');
            item.style.width = '';
            item.style.marginRight = '';
        })

        
    }


    window.addEventListener('resize', () => {
        if(window.innerWidth <= 1050) {

            slider.classList.add('swiper');
            sliderWr.classList.add('swiper-wrapper');
            slides.forEach(item => {
                item.classList.add('swiper-slide');
            })
            const sl = new Swiper('.team__body', {
                slidesPerView: 1,
                spaceBetween: 20,
                modules: [Pagination],
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
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 58,
                    }
                }
            });
            
        }
    
        if(window.innerWidth > 1050) {
    
            slider.classList.remove('swiper');
            sliderWr.classList.remove('swiper-wrapper');
            slides.forEach(item => {
                item.classList.remove('swiper-slide');
                item.style.width = '';
                item.style.marginRight = ''; 
            })
            
    
            
        }
    })
}