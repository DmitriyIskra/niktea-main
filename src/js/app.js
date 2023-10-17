import ControlMobileMenu from "./mobile-menu/controlMobileMenu";
import RedrawMobileMenu from "./mobile-menu/redrawMobileMenu";

import ControlForms from "./cards-and-callback-forms/controlForms";
import RedrawForms from "./cards-and-callback-forms/redrawForms";

import IMask from 'imask';

const mobileMenu = document.querySelector('.header__wr-mobile-menu');

if(mobileMenu) {
    const iconOpen = document.querySelector('.header__icon-menu_mobile');
    
    const redrawMobileMenu = new RedrawMobileMenu(mobileMenu);
    const controlMobileMenu = new ControlMobileMenu(iconOpen, redrawMobileMenu);
    controlMobileMenu.init();
} 



// РАБОТА ФОРМ ОБРАТНОЙ СВЯЗИ И КАРТОЧЕК МОБИЛКИ

const formDesctop = document.querySelector('.card--container--left');
const formMobile = document.querySelector('.contacts__cards-address-list_mobile');

if( formDesctop && formMobile ) {
    const redrawForms = new RedrawForms(formMobile, formDesctop);
    const controlForms = new ControlForms(redrawForms, IMask);
    controlForms.init();
}
