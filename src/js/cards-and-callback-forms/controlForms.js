export default class ControlForms {
    constructor(draw, Imask) {
        this.draw = draw;
        this.Imask = Imask;

        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    init() {
        this.registerEvents();

        const mask = new this.Imask(this.draw.formPhoneMobile, {
            mask: '+{7} (000) 000-00-00',
            lazy: false, 
            placeholderChar: '_',           
        })

        // this.draw.formPhoneMobile.value = '+7 (___) ___-__-__';
    }

    registerEvents() {
        this.draw.mobile.addEventListener('click', this.onClick);
        this.draw.desc.addEventListener('click', this.onClick);
 
        [...this.draw.inputsMobile].forEach( el => {
            el.addEventListener('focus', this.onFocus);
            el.addEventListener('blur', this.onBlur)
        })
    }

    onClick(e) { 

        // ------ MOBILE

        // переключение карточек зависти от data атрибутов проставленных в html

        if(e.target.closest('.contacts__wr-card-address-title')) {
            const el = e.target.closest('.contacts__wr-card-address-title');

            if(el.hasAttribute('data-open')) {
                this.draw.changeCard(el.dataset.open);
            }
        }

        // открываем форму
        if(e.target.closest('.contacts__wr-icon-button-callback')) {
            const el = e.target.closest('.contacts__wr-icon-button-callback');
            this.draw.changeCard(el.dataset.open);
            // this.draw.openFormCallback();
        }

        // закрываем форму
        if(e.target.closest('.contacts__wr-card-address-close-icon')) {
            const el = e.target.closest('.contacts__wr-card-address-close-icon');
            this.draw.changeCard(el.dataset.open);
            // this.draw.closeFormCallback();
        }

        // закрываем поле success mobile
        if(e.target.closest('.contacts__form-sended-close-icon')) {
            const el = e.target.closest('.contacts__form-sended-close-icon');
            this.draw.changeCard(el.dataset.open);
            // this.draw.closeSuccessMobile();
        }

        if(e.target.closest('.contacts__address-button-submit')) {
            const el = e.target.closest('.contacts__address-button-submit')
            this.draw.getDataMobile(el.dataset.open);
        }

        // при клике в поле отмеченное как невалидное
        // оно очистится и снимется невалидность
        if(e.target.closest('.contacts__address-form-input')) {
            this.draw.removeNoValidMobile(e.target);
        }

        // если чекбокс отмечен как невалидный
        // при его отметке снимаем класс невалидности  идlabel
        // окпашивается в стандартный цвет
        if(e.target.closest('.contacts__address-form-checkbox-label')) {
            const checkbox = e.target.previousElementSibling;
            if(checkbox.matches('.contacts__form-input_no-valid')) {
                this.draw.removeNoValidMobile(checkbox);
            }
        }


        // ------ ДЕСКТОП
        if(e.target.closest('.button--submit')) {
            this.draw.getDataDesc();
        }

        if(e.target.closest('.close-form')) {
            this.draw.closeFormDesc();
        }

        if(e.target.closest('.contacts__form-sended-close-icon')) {
            this.draw.closeSuccessDesc();
        }

        

        
    }

    onFocus(e) {
        console.log('focus')

        this.draw.removeValueMobile(e.target);
    }

    onBlur(e) {
        console.log('blur')

        this.draw.addValueMobile(e.target);
    }
}