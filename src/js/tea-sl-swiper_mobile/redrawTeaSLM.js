export default class RedrawTeaSLM {
    constructor(Swiper, slider) {
        this.slider = slider;
        this.Swiper = Swiper;
        this.spaceBetween = null;
    }

    controllType() {
        const href = location.href;
        if(href.indexOf('pyramid') !== -1) {
            console.log(href.indexOf('pyramid'))
            this.spaceBetween = 16;
        } else if(href.indexOf('dellipack') !== -1) {
            console.log('dellipack')
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
                    slidesPerView: 1.5,
                    spaceBetween: this.spaceBetween,
                }
            }   
        })
    }
}
