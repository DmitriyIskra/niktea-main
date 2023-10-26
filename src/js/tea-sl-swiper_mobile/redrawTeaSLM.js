export default class RedrawTeaSLM {
    #VAL
    constructor(Swiper, slider) {
        this.slider = slider;
        this.Swiper = Swiper;
    }

    render() {
        new this.Swiper(this.slider, {
            initialSlide: 2,
            centeredSlides: true,
            loop: true,
            breakpoints: {
                375: {
                    slidesPerView: 1.5,
                    spaceBetween: 16,
                }
            }   
        })
    }
}
