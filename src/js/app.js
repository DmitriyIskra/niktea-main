import ControlMobileMenu from "./mobile-menu/controlMobileMenu";
import RedrawMobileMenu from "./mobile-menu/redrawMobileMenu"; 

import ControlForms from "./cards-and-callback-forms/controlForms";
import RedrawForms from "./cards-and-callback-forms/redrawForms";

import ControllAboutBrand from "./about-brand/controll-about-brand";
import RedrawAboutBrand from "./about-brand/redraw-about-brand";

import ControllReadMore from "./catalog-read-more/controllReadMore";
import RedrawReadMore from "./catalog-read-more/redrawReadMore";

import ControllSl from "./tea-sl-slider/controllSl";
import RedrawSl from "./tea-sl-slider/redrawSl";

import ControllTeaSLM from "./tea-sl-swiper_mobile/controllTeaSLM";
import RedrawTeaSLM from "./tea-sl-swiper_mobile/redrawTeaSLM";

import ControllBrandSl from "./brand-slider/controlBrabndSl";
import RedrawBrandSl from "./brand-slider/redrawBrandSl";

import ControllSelect from "./select/controllSelect";
import RedrawSelect from "./select/redrawSelect";

import Swiper from "swiper";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import IMask from 'imask';
import ControllHeadSlider from "./header-slider/controllHeadSlider";
import RedrawHeadSlider from "./header-slider/redrawHeadSlider";

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


// РАБОТА СТРАНИЦЫ О БРЕНДЕ + SWIPER

const sliderAboutBrand = document.querySelector('.about-brand__swiper_mobile');

if(sliderAboutBrand) {
    const aboutBrandText = document.querySelector('.about-brand__wr-text');

    const redrawAboutBrand = new RedrawAboutBrand(Swiper, Pagination, Navigation, sliderAboutBrand, aboutBrandText);
    const controllAboutBrand = new ControllAboutBrand(redrawAboutBrand);
    controllAboutBrand.init();
}


// СЛАЙДЕР BRAND-SLIDER

const sliderBrand = document.querySelector('.brand-sl__wrapper');

if(sliderBrand) {
    const redrawBrandSl = new RedrawBrandSl(sliderBrand);
    const controllBrandSl = new ControllBrandSl(redrawBrandSl);
    controllBrandSl.init();
}



// СЛАЙДЕР ГЛАВНАЯ СТРАНИЦА ( МОБИЛЬНАЯ ВЕРСИЯ )

const indexSlider = document.querySelector('.header-index__swiper');

if(indexSlider) {
    const redrawHeadSlider = new RedrawHeadSlider(indexSlider, Swiper, Pagination);
    const controllHeadSlider = new ControllHeadSlider(redrawHeadSlider);
    controllHeadSlider.init();
}


// КАТАЛОГ READ MORE

const wrCatalogArticle = document.querySelector('.catalog__description-read-more');

if(wrCatalogArticle) {
    const redrawReadMore = new RedrawReadMore(wrCatalogArticle);
    const controllReadMore = new ControllReadMore(redrawReadMore);
    controllReadMore.init();
}

// SLIDER TEA  tea-sl

const sliderTea = document.querySelector('.tea-sl__wrapper');

if(sliderTea) {
    const redrawSl = new RedrawSl(sliderTea);
    const controllSl = new ControllSl(redrawSl);
    controllSl.init();
}


// SWIPER TEA MOBILE для нескольктх страниц

const swiperTeaSLM = document.querySelector('.tea-sl-swiper_mobile');

if(swiperTeaSLM) {
    const redrawTeaSLM = new RedrawTeaSLM(Swiper, swiperTeaSLM);
    const controllTeaSLM = new ControllTeaSLM(redrawTeaSLM);

    controllTeaSLM.init();
}


// SELECT результаты поиска

const select = document.querySelector('.result-search__select');

if(select) {
    const cards = document.querySelector('.result-search__tea-cards');
    const recipes = document.querySelector('.result-search__recipes');

    const redrawSelect = new RedrawSelect(select, cards, recipes);
    const controllSelect = new ControllSelect(redrawSelect);
    controllSelect.init();
}
