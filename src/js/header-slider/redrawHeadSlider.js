export default class RedrawHeadSlider {
    constructor(wrSlider, Swiper, Pagination) {
        this.wrSlider = wrSlider;
        this.Swiper = Swiper;
        this.Pagination = Pagination;
    }

    initSwiper() {
        console.log(this.wrSlider)
        new this.Swiper(this.wrSlider, {
            modules:[this.Pagination],
            pagination: {
                el: '.swiper-pagination', 
                clickable: true
            },
            loop: true,
        })
    }
}