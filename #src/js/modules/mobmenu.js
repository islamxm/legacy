export const mobmenu = () => {


    const btn = document.querySelector('.header__mob_burger');
    const menu = document.querySelector('.mobmenu');
    const close = document.querySelector('.mobmenu__head_close');

    if(btn) {
        btn.addEventListener('click', () => {
            menu.classList.add('active');
        })

        close.addEventListener('click', () => {
            menu.classList.remove('active');
        })
    }
}