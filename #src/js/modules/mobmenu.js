export const mobmenu = () => {


    const btn = document.querySelector('.header__mob_burger');
    const menu = document.querySelector('.mobmenu');
    const close = document.querySelector('.mobmenu__head_close');


    const navItems = document.querySelectorAll('[data-nav]');

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