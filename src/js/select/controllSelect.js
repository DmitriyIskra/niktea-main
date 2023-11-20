export default class ControllSelect {
    constructor(draw) {
        this.draw = draw;

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    init() {
        this.registerEvents();
    }

    registerEvents() {
        this.draw.select.addEventListener('mouseover', this.onMouseOver);
        this.draw.select.addEventListener('mouseout', this.onMouseOut);

        this.draw.select.addEventListener('mouseenter', this.onMouseEnter);
        this.draw.select.addEventListener('mouseleave', this.onMouseLeave);

        document.addEventListener('click', this.onClick);
    }

    onClick(e) {
        // закрытие select если клик прошел мимо
        if(!e.target.closest('.result-search__select') && this.draw.state === true) {
            this.draw.openCloseSelect();

            return;
        }

        // работа селект если был выбор какого
        // либо пункта
        if(e.target.matches('.result-search__select-item')) {
            if(!e.target.matches('.result-search__select-item_active')) {
                this.draw.change(e.target);
                this.draw.openCloseSelect();
                return;
            }
        }

        // открытие закрытие без выбора пункта по клику на селект
        if(e.target.closest('.result-search__select')) {
            this.draw.openCloseSelect();
        }
    }
 
    // Эти событие подсвечивают соответствующиq item селекта
    onMouseOver(e) {
        // подсветка item только не активного, значит
        // может работать только при открытом селект
        if(e.target.matches('.result-search__select-item')) {
            if(!e.target.matches('.result-search__select-item_active')) {
                this.draw.mouseEnter(e.target);
            }
        }
    }

    // Эти событие подсвечивают соответствующиq item селекта
    onMouseOut(e) {
        // убирает подсветку item только не активного, значит
        // может работать только при открытом селект
        if(e.target.matches('.result-search__select-item')) {
            if(!e.target.matches('.result-search__select-item_active')) {
                this.draw.mouseLeave(e.target);
            }
        }
    }

    // подсвечиваю блок со стрелочкой, не всплывает
    // и срабатывает один раз 
    onMouseEnter(e) {
        if(e.target.closest('.result-search__select')) {
            this.draw.mouseEnter();
        }
    }

    // подсвечиваю блок со стрелочкой, не всплывает
    // и срабатывает один раз 
    onMouseLeave(e) {
        if(e.target.closest('.result-search__select')) {
            this.draw.mouseLeave();
        }
    }
}

// debugger;