export default class RedrawTeaSLM {
    constructor(Swiper, slider) {
        this.slider = slider;
        this.Swiper = Swiper;
        this.spaceBetween = null;

        this.slides = this.slider.querySelectorAll('.swiper-slide');
        this.amountSlides = this.slides.length;
        this.slidesPerView = this.amountSlides <= 3 ? 1 : 1.5;
    }

    controllType() {
        const href = location.href;
        if(href.indexOf('pyramid') !== -1) {
            this.spaceBetween = 16;
        } else if(href.indexOf('dellipack-tea-pot') !== -1) {
            this.spaceBetween = 16;
        } else if(href.indexOf('dellipack') !== -1) {
            this.spaceBetween = 0;
        } else if(href.indexOf('top-selection') !== -1) {
        this.spaceBetween = 0;
        }
    } 

    render() {
        new this.Swiper(this.slider, {
            initialSlide: 2,
            centeredSlides: true,
            loop: true,
            breakpoints: {
                375: {
                    slidesPerView: this.slidesPerView,
                    spaceBetween: this.spaceBetween,
                }
            }   
        })
    }
}
