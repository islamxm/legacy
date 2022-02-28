export const mobmenu = () => {


    const btn = document.querySelector('.header__mob_burger');
    const menu = document.querySelector('.mobmenu');
    const close = document.querySelector('.mobmenu__head_close');


    const navItems = document.querySelectorAll('[data-nav]');
    const navLi = document.querySelectorAll('.mobmenu__nav_item');

    if(navLi.length > 0) {
        navLi.forEach(item => {
            item.addEventListener('click', () => {
                navLi.forEach(i => {
                    i.classList.remove('active');
                })
                item.classList.add('active');
            })
        })
    }
    if(navItems.length > 0) {
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.remove('active');
            })
        })
    }

    if(btn) {
        btn.addEventListener('click', () => {
            menu.classList.add('active');
        })

        close.addEventListener('click', () => {
            menu.classList.remove('active');
        })
    }
}