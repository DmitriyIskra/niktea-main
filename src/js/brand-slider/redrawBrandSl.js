export default class RedrawBrandSl {
    constructor(el) {
        this.el = el;
        this.wrSlides = this.el.querySelector('.brand-sl__wr-slide-list');
        this.controllButtons = this.el.querySelectorAll('.brand-sl__wr-button');
        this.images = this.wrSlides.querySelectorAll('.brand-sl__image');
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

        // для transition
        this.animateDuration = 0.4; 
        this.timingFunc = 'linear';

        this.counterPrevSlide = 0;
        this.counterCenterSlide = 1;
        this.counterNextSlide = 2;
        this.counterMove = 0;
        this.maxMove = null;
        this.stop = null;
    }

    initSlider() {

        // если количество слайдов меньше чем разрешенное для показа
        // убираем элементы управления
        if(this.totalSlides <= this.amountShowSlides) {
            [...this.controllButtons].forEach( item => item.style.display = 'none');
            this.el.classList.add('brand-sl__unactive');

            return;
        }

        // Задаем ширину видимой части слайдера
        this.viewport = innerWidth;
        const widthWrSlides = this.wrSlides.offsetWidth;
        const widthSlidePX = widthWrSlides / this.amountShowSlides;
        // ширина одного слайда во vw
        this.widthSlide = (widthSlidePX / this.viewport) * 100;
        this.offsetSlides = this.widthSlide;

        // задаем ширину слайду
        for(let i = 0; i < this.totalSlides; i += 1) {
            this.allSlides[i].style.width = `${this.widthSlide}vw`;
            this.allSlides[i].dataset.num = i;
        }
        
        // сохраняем активные слайды центральный и боковые
        this.prevSlide = this.allSlides[0];
        this.centerSlide = this.allSlides[1];
        this.nextSlide = this.allSlides[2];

        // назначаем классы активным слайдам
        this.prevSlide.classList.add('brand-sl__slide-item-prev');
        this.centerSlide.classList.add('brand-sl__slide-item-center');
        this.nextSlide.classList.add('brand-sl__slide-item-next');
        
    }

    moveNext() {
        if(this.stop) {
            return;
        }
        
        this.counterMove += 1; 
        
        // находим следующий элемент
        this.prevSlide = this.prevSlide.nextElementSibling;
        this.prevSlide.classList.add('brand-sl__slide-item-prev');

        // удаляем у старого элемента класс, находим новый след. 
        // назначаем класс
        this.centerSlide.classList.remove('brand-sl__slide-item-center');
        this.centerSlide = this.centerSlide.nextElementSibling;
        this.centerSlide.classList.add('brand-sl__slide-item-center');

        // удаляем у старого элемента класс, находим новый след. 
        // назначаем класс
        this.nextSlide.classList.remove('brand-sl__slide-item-next');
        this.nextSlide = this.nextSlide.nextElementSibling;
        this.nextSlide.classList.add('brand-sl__slide-item-next');

        this.wrSlides.style.transition = `all ${this.animateDuration}s ${this.timingFunc}`;
        this.wrSlides.style.transform = `translateX(-${this.offsetSlides * this.counterMove}vw)`;

        this.wrSlides.addEventListener('transitionend', () => {
            // берем значение дата атрибута у нынешнего предъидущего
            let num = this.prevSlide.dataset.num;

            // убираем класс у элемента который ушел налево
            const el = this.prevSlide.previousElementSibling;
            el.classList.remove('brand-sl__slide-item-prev');

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
        
        this.stop = true;

        setTimeout( () => this.stop = false, (this.animateDuration + 0.1) * 1000 );
        
    }

    movePrev() {
        if(this.stop) {
            return;
        }

        this.wrSlides.style.transition = '';

        this.wrSlides.prepend(this.allSlides[this.totalSlides - 1]);

        this.wrSlides.style.transform = `translateX(-${this.offsetSlides}vw)`;

        

        setTimeout( () => {
            // находим предъидущий элемент
            this.prevSlide.classList.remove('brand-sl__slide-item-prev');
            this.prevSlide = this.prevSlide.previousElementSibling;
            this.prevSlide.classList.add('brand-sl__slide-item-prev');
            // удаляем у старого элемента класс, находим новый след. 
            // назначаем класс
            this.centerSlide.classList.remove('brand-sl__slide-item-center');
            this.centerSlide = this.centerSlide.previousElementSibling;
            this.centerSlide.classList.add('brand-sl__slide-item-center');
            // удаляем у старого элемента класс, находим новый след. 
            // назначаем класс
            this.nextSlide = this.nextSlide.previousElementSibling;
            this.nextSlide.classList.add('brand-sl__slide-item-next');

            this.wrSlides.style.transition = `all ${this.animateDuration}s ${this.timingFunc}`;
            this.wrSlides.style.transform = `translateX(-0vw)`;

            this.wrSlides.addEventListener('transitionend', () => {
                const el = this.nextSlide.nextElementSibling;
                el.classList.remove('brand-sl__slide-item-next');

                // переназначаем элементам порядковый номер
                for(let i = 0; i < this.totalSlides; i += 1) {
                    this.allSlides[i].dataset.num = i;
                }

                this.counterMove = 0;
            }, {once: true})
        })

        this.stop = true;

        setTimeout( () => this.stop = false, (this.animateDuration + 0.1) * 1000 );
    }
}