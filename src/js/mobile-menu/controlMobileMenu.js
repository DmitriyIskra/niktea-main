export default class ControlMobileMenu {
    constructor(iconOpen, draw) {
        this.draw = draw;
        this.iconOpen = iconOpen;

        this.onClick = this.onClick.bind(this);
    }

    init() {
        this.registerEvents();
    }

    registerEvents() {
        this.iconOpen.addEventListener('click', this.onClick)
        this.draw.menu.addEventListener('click', this.onClick)
    }

    onClick(e) {
        if(e.target.closest('.header__icon-menu_mobile')) {
            this.draw.openMenu();
        }

        if(e.target.closest('.header__mobile-menu-close')) {
            this.draw.closeMenu();
        }
    }
}