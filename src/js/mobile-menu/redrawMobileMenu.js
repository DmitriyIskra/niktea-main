export default class RedrawMobileMenu {
    constructor(menu) {
        this.menu = menu;

        // продолжительность анимации
        // устанавливается в методе открытия меню
        this.duration = 0.2;

        // указывается в методе анимации открытия
        this.paddingTop = 3.2;
        this.paddingBottom = 3.2;
    }

    openMenu() {
        this.menu.style = `transition: all ${this.duration}s linear;`

        this.menu.classList.add('header__wr-mobile-menu_active');

        setTimeout( () => this.animateOpenMobileMenu());
    }

    closeMenu() {
        this.animateCloseMobileMenu();

        setTimeout( () => {
            this.menu.classList.remove('header__wr-mobile-menu_active');
        }, this.duration * 1000);

        
    }

    animateOpenMobileMenu() {
        const heightChild = this.menu.children[0].offsetHeight;
        const heightInVw = heightChild / innerWidth * 100;
        this.menu.style.paddingTop = `${this.paddingTop}vw`;
        this.menu.style.paddingBottom = `${this.paddingBottom}vw`;

        const heightMenu = heightInVw + this.paddingTop + this.paddingBottom;
        this.menu.style.height = `${heightMenu}vw`;
    }

    animateCloseMobileMenu() {
        this.menu.style.paddingTop = `0`;
        this.menu.style.paddingBottom = `0`;
        this.menu.style.height = `0`;
    }
}