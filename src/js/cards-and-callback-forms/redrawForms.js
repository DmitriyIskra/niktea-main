export default class RedrawForms {
    constructor(mobile, desc) {
        // для мобильной версии
        this.mobile = mobile;
        this.formMobile = this.mobile.querySelector('.contacts__card-address-form');
        this.formPhoneMobile = this.formMobile.phone;
        this.formMailMobile = this.formMobile.email;
        this.formCityMobile = this.formMobile.city;
        this.formCheckPolicyMobile = this.formMobile.policy;
        // блок содержащий контакты для бизнесса
        this.cardContactsBus = this.mobile.querySelector('.contacts__wr-card-address-item_left');
        // блок содержащий контакты для дома
        this.cardContactsHome = this.mobile.querySelector('.contacts__wr-card-address-item_right');
        // блок содержащий форму
        this.cardFormMobile = this.mobile.querySelector('.contacts__wr-card-address-item-form');
        // окно с положительным результатом об отправке
        this.successMobile = this.mobile.querySelector('.contacts__wr-card-address-item-sended');
        // Коллекция инпутов
        this.inputsMobile = this.mobile.querySelectorAll('.contacts__address-form-input');
        // Крайняя активная карточка
        this.currentMobileCard = this.cardContactsBus;
        // Крайнее сохраненное значение value
        this.currentMobileValue = null;

        // для десктопной версии
        this.desc = desc;
        this.formDesc = this.desc.querySelector('.reg__group');
        this.formPhoneDesc = this.formDesc.phone;
        this.formMailDesc = this.formDesc.email;
        this.formCityDesc = this.formDesc.city;
        this.formCheckPolicyDesc = this.formDesc.checkpolicy;
        // блок содержащий форму
        this.cardFormDesc = this.desc.querySelector('.contacts__card--form');
        // окно с положительным результатом об отправке
        this.successDesc = this.desc.querySelector('.contacts__wr-form-sended-desc');
    }

    // DESCTOP
    
    getDataDesc() {
        const result = this.validationFormDesc();

        // показываем не заполненные поля
        if(!result) {
            this.formDesc.classList.add('was-validated');

            return;
        }

        this.formDesc.classList.remove('was-validated');


        const formData = new FormData(this.formDesc);

        console.log(formData);
        
        this.closeFormDesc();   

        this.showSuccessDesc();
    }

    closeFormDesc() {
        this.formDesc.reset();
        this.cardFormDesc.classList.remove('card__visible')
    }

    showSuccessDesc() {
        this.successDesc.classList.add('contacts__wr-form-sended-desc_active');
    }

    closeSuccessDesc() {
        this.successDesc.classList.remove('contacts__wr-form-sended-desc_active');
    }

    validationFormDesc() {
        const phone = this.formPhoneDesc.value;
        const mail = this.formMailDesc.value;
        const city = this.formCityDesc.value;
        const policy = this.formCheckPolicyDesc.checked;

        const result = phone && mail && city && policy ? true : false;
        
        return result;
    }


    // --------- MOBILE

    // Меняем активную карточку
    changeCard(type) {
        const el = this.mobile.querySelector(`[data-type="${type}"]`)

        this.currentMobileCard.classList.remove('contacts__wr-card-address-item_active');
        if(this.currentMobileCard.dataset.type === 'form') {
            this.resetMobileForm();
        }

        this.currentMobileCard = el;
        this.currentMobileCard.classList.add('contacts__wr-card-address-item_active');
    }

    // получаем данные формы и работаем с ними
    getDataMobile(type) {
        const result = this.validationFormMobile();

        if(!result.fill) {
            result.noFillEl.forEach( el => {
                el.classList.add('contacts__form-input_no-valid');
            });

            return;
        }

        const formData = new FormData(this.formMobile);
        console.log(formData)

        this.changeCard(type);
    }

    resetMobileForm() {
        const ckeckbox = this.formMobile.querySelector('.contacts__address-form-checkbox');
        this.removeNoValidMobile(ckeckbox);

        [...this.inputsMobile].forEach( el => this.removeNoValidMobile(el));

        this.formMobile.reset();
    }

    validationFormMobile() {
        // Не заполненные поля
        const noFillEl = [];

        let phone = null; 
        let mail = null; 
        let city = null; 
        let policy = this.formCheckPolicyMobile.checked;
        
        if(this.formPhoneMobile.value === '+7 (___) ___-__-__') {
            phone = false;
            noFillEl.push(this.formPhoneMobile);
        } else {
            phone = true;
        }

        if(this.formMailMobile.value === 'e-mail') {
            mail = false;
            noFillEl.push(this.formMailMobile);
        } else {
            mail = true;
        }

        if(this.formCityMobile.value === 'Укажите город') {
            city = false;
            noFillEl.push(this.formCityMobile);
        } else {
            city = true;
        }

        // проверяем все ли поля заполнены
        const fill = phone && mail && city && policy ? true : false;
   
        const result = {
            fill,
            noFillEl,
        }

        if(!policy) result.noFillEl.push(this.formCheckPolicyMobile);

        return result;
    }

    // убираем value при фокусе
    removeValueMobile(el) {
        this.currentMobileValue = el.value;
        el.value = '';
    }

    // добавляем value при blur если пусто
    addValueMobile(el) {
        console.log(this.currentMobileValue)
        if(!el.value) el.value = this.currentMobileValue;
    }

    // убирает класс невалидности с input или checkbox
    // если чекбокс отмечен как невалидный
    // при его отметке снимаем класс невалидности и label
    // окпашивается в стандартный цвет так как в css зависит от него
    removeNoValidMobile(el) {
        el.classList.remove('contacts__form-input_no-valid');
    }
}