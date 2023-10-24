export default class RedrawAboutBrand {
    constructor(Swiper, Pagination, Navigation, slider, wrText) {
        this.slider = slider;
        this.Swiper = Swiper;
        this.Pagination = Pagination;
        this.Navigation = Navigation;
        
        this.wrText = wrText;
        this.shortText = this.wrText.querySelector('.about-brand__wr-text-short');
        this.fullText = this.wrText.querySelector('.brand__description--text_full');
    }
 
    initSwiper() {
        new this.Swiper(this.slider, {
            modules:[this.Navigation, this.Pagination],
            navigation: {
                nextEl: ".about-brand__button-next-icon",
                prevEl: ".about-brand__button-prev-icon",
            },
            pagination: {
                el: '.swiper-pagination',  
                clickable: true
            },
            initialSlide: 1,
            centeredSlides: true,
            loop: true,
            breakpoints: {
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 50
                },
                375: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                }
            }
            
        })
    }

    activeFullText() {
        const heightShortText = this.shortText.offsetHeight;
        this.shortText.classList.add('about-brand__wr-text-short_unactive');

        this.fullText.classList.add('brand__description--text_full_active');
        this.fullText.style.height = `${heightShortText}px`;

        const heightFullText = [...this.fullText.children].reduce( (acc, el) => {
            return acc += el.offsetHeight;
        }, 0);
        
        // Расчтываем сумму gap у родительского элемента
        const gap = parseFloat(getComputedStyle(this.fullText).gap);
        const gapSumm = gap * this.fullText.children.length;
        console.log('height', heightFullText + gapSumm)

        setTimeout( () => {
            this.startAnimation(heightFullText + gapSumm);
        });
    }

    startAnimation(height) {
        this.fullText.style.height = `${height}px`;
    }
}