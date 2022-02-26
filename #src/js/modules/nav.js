export const nav = () => {
    const els = document.querySelectorAll('.header__main_nav_list_item');

    if(els.length >= 0) {

        els.forEach(el => {
            el.addEventListener('click', (e) => {
                els.forEach(i => {
                    i.classList.remove('active');
                })
                e.currentTarget.classList.add('active');
            })
        })
    }
}