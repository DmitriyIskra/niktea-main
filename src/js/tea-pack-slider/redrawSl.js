export default class RedrawSl {
    constructor(el) {
        this.el = el;
        this.wrSlides = this.el.querySelector('.tea-sl__wr-slide-list');
        this.controllButtons = this.el.querySelectorAll('.tea-sl__wr-button');
        // коллекция слайдов
        this.allSlides = this.wrSlides.children;

        this.widthSlide = null;
        this.offsetSlides = null;
        // сколько слайдов показывать
        this.amountShowSlides = 3;
        // общее количество слайдов
        this.totalSlides = this.wrSlides.children.length;
        this.viewport = null;

        this.prevSlide = null;
        this.centerSlide = null;
        this.nextSlide = null;

        this.counterPrevSlide = 0;
        this.counterCenterSlide = 1;
        this.counterNextSlide = 2;
        this.counterMove = 0;
        this.maxMove = null;
    }

    initSlider() {
        if(this.totalSlides <= this.amountShowSlides) {
            [...this.controllButtons].forEach( item => item.style.display = 'none');
            return;
        }

        this.viewport = innerWidth;
        const widthWrSlides = this.wrSlides.offsetWidth;
        const widthSlidePX = widthWrSlides / this.amountShowSlides;
        this.widthSlide = (widthSlidePX / this.viewport) * 100;
        this.offsetSlides = this.widthSlide;

        for(let i = 0; i < this.totalSlides; i += 1) {
            this.allSlides[i].style.width = `${this.widthSlide}vw`;
            this.allSlides[i].dataset.num = i;
        }
        
        this.prevSlide = this.allSlides[0];
        this.centerSlide = this.allSlides[1];
        this.nextSlide = this.allSlides[2];

        this.prevSlide.classList.add('tea-sl__slide-item-prev');
        this.centerSlide.classList.add('tea-sl__slide-item-center');
        this.nextSlide.classList.add('tea-sl__slide-item-next');

        
    }

    moveNext() {
        this.counterMove += 1; 
        
        // находим следующий элемент
        this.prevSlide = this.prevSlide.nextElementSibling;
        this.prevSlide.classList.add('tea-sl__slide-item-prev');

        // удаляем у старого элемента класс, находим новый след. 
        // назначаем класс
        this.centerSlide.classList.remove('tea-sl__slide-item-center');
        this.centerSlide = this.centerSlide.nextElementSibling;
        this.centerSlide.classList.add('tea-sl__slide-item-center');

        // удаляем у старого элемента класс, находим новый след. 
        // назначаем класс
        this.nextSlide.classList.remove('tea-sl__slide-item-next');
        this.nextSlide = this.nextSlide.nextElementSibling;
        this.nextSlide.classList.add('tea-sl__slide-item-next');

        this.wrSlides.style.transition = 'all 0.4s ease';
        this.wrSlides.style.transform = `translateX(-${this.offsetSlides * this.counterMove}vw)`;

        this.wrSlides.addEventListener('transitionend', () => {
            // берем значение дата атрибута у нынешнего предъидущего
            let num = this.prevSlide.dataset.num;

            // убираем класс у элемента который ушел налево
            const el = this.prevSlide.previousElementSibling;
            el.classList.remove('tea-sl__slide-item-prev');

            // если слайдер пролистнулся значит num будет всегда 1
            if(+num === 1) {
                this.wrSlides.style.transition = '';

                this.wrSlides.append(this.allSlides[0]);

                this.wrSlides.style = `transform: translateX(-${0}vw);`;

                // переназначаем элементам порядковый номер
                for(let i = 0; i < this.totalSlides; i += 1) {
                    this.allSlides[i].dataset.num = i;
                }

                this.counterMove = 0;
            }
        }, {once: true})
    }

    movePrev() {
        console.log('move prev');

        this.wrSlides.style.transition = '';

        this.wrSlides.prepend(this.allSlides[this.totalSlides - 1]);

        this.wrSlides.style.transform = `translateX(-${this.offsetSlides}vw)`;

        

        setTimeout( () => {
            // находим предъидущий элемент
            this.prevSlide.classList.remove('tea-sl__slide-item-prev');
            this.prevSlide = this.prevSlide.previousElementSibling;
            this.prevSlide.classList.add('tea-sl__slide-item-prev');
            // удаляем у старого элемента класс, находим новый след. 
            // назначаем класс
            this.centerSlide.classList.remove('tea-sl__slide-item-center');
            this.centerSlide = this.centerSlide.previousElementSibling;
            this.centerSlide.classList.add('tea-sl__slide-item-center');
            // удаляем у старого элемента класс, находим новый след. 
            // назначаем класс
            this.nextSlide = this.nextSlide.previousElementSibling;
            this.nextSlide.classList.add('tea-sl__slide-item-next');

            this.wrSlides.style.transition = 'all 0.4s ease';
            this.wrSlides.style.transform = `translateX(-0vw)`;

            this.wrSlides.addEventListener('transitionend', () => {
                const el = this.nextSlide.nextElementSibling;
                el.classList.remove('tea-sl__slide-item-next');

                // переназначаем элементам порядковый номер
                for(let i = 0; i < this.totalSlides; i += 1) {
                    this.allSlides[i].dataset.num = i;
                }

                this.counterMove = 0;
            }, {once: true})
        })
    }
}