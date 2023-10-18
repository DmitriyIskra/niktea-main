import ControlMobileMenu from "./mobile-menu/controlMobileMenu";
import RedrawMobileMenu from "./mobile-menu/redrawMobileMenu"; 

import ControlForms from "./cards-and-callback-forms/controlForms";
import RedrawForms from "./cards-and-callback-forms/redrawForms";

import ControllAboutBrand from "./about-brand/controll-about-brand";
import RedrawAboutBrand from "./about-brand/redraw-about-brand";

import Swiper from "swiper";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

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


// РАБОТА СТРАНИЦЫ О БРЕНДЕ

const sliderAboutBrand = document.querySelector('.about-brand__swiper');

if(sliderAboutBrand) {
    const aboutBrandText = document.querySelector('.about-brand__wr-text');

    const redrawAboutBrand = new RedrawAboutBrand(Swiper, Pagination, Navigation, sliderAboutBrand, aboutBrandText);
    const controllAboutBrand = new ControllAboutBrand(redrawAboutBrand);
    controllAboutBrand.init();
}
