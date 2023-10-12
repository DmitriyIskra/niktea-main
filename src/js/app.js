import ControlMobileMenu from "./mobile-menu/controlMobileMenu";
import RedrawMobileMenu from "./mobile-menu/redrawMobileMenu";


const mobileMenu = document.querySelector('.header__wr-mobile-menu');

if(mobileMenu) {
    const iconOpen = document.querySelector('.header__icon-menu_mobile');
    
    const redrawMobileMenu = new RedrawMobileMenu(mobileMenu);
    const controlMobileMenu = new ControlMobileMenu(iconOpen, redrawMobileMenu);
    controlMobileMenu.init();
} 
