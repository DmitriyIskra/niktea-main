export default class RedrawSelect {
    constructor(select, cards, recipes) {
        this.select = select;
        this.cards = cards;
        this.recipes = recipes;

        // Обертка элементов селекта и два элемнта селекта
        this.list = this.select.querySelector('.result-search__select-list_back');
        this.items = [...this.select.querySelectorAll('.result-search__select-item')];
        this.activeItem = this.items.find(item => item.matches('.result-search__select-item_active'));

        // Обертка стрелок и стрелки
        this.wrArrows = this.select.querySelector('.result-search__select-icon');
        this.arrowIcons = this.select.querySelectorAll('.result-search__select-icon-svg');
        this.activeArrow = this.arrowIcons[0];

        // состояние элемента открыт/закрыт
        this.state = false;

        // высота select в закрытом положении
        // вычисляется динамически
        this.heightVW =  null;
    }

    openCloseSelect() {
        // открываем select
        if(!this.state) {
            const height = this.list.offsetHeight;
            this.heightVW = height / innerWidth * 100;

            this.list.style = `height: ${this.heightVW * 2}vw;`;

            this.items.forEach( item => {
                item.style = `flex-basis: 50%;`;
                item.matches('.result-search__select-item_active') ?
                item.style.cursor = 'default' :
                item.style.cursor = 'pointer';
            });

            this.wrArrows.style = `background-color: #00FEB2;`;

            this.activeArrow.classList.remove('result-search__select-svg_active');
            this.activeArrow = this.arrowIcons[1];
            this.activeArrow.classList.add('result-search__select-svg_active');

            this.state = true;

            return;
        }

        // закрываем select
        this.list.style = `height: ${this.heightVW}vw;`;
        this.list.style = `cursor: pointer;`;
 
        this.items.forEach( item => {
            item.style = `flex-basis: 100%; cursor: pointer;`
        });

        this.wrArrows.style = ``;

        this.activeArrow.classList.remove('result-search__select-svg_active');
        this.activeArrow = this.arrowIcons[0];
        this.activeArrow.classList.add('result-search__select-svg_active');

        this.state = false;
    }

    change(el) {
        // меняем активный item в select
        this.activeItem.classList.remove('result-search__select-item_active');
        this.activeItem = el;
        this.activeItem.classList.add('result-search__select-item_active');
        
        if( el.dataset.type === 'recipes' ) {
            this.cards.classList.remove('result-search__content_active');
            this.recipes.classList.add('result-search__content_active');

            return;
        }

        this.cards.classList.add('result-search__content_active');
        this.recipes.classList.remove('result-search__content_active');
    }

    mouseEnter(el) {
        // передан может быть только не активный item селекта
        // значит селект открыт и фон стрелки уже подкрашен
        if(el) {
            el.style.color = '#00FEB2';

            return;
        }

        // если в параметре пусто
        if(!this.state) this.wrArrows.style = `background-color: #00FEB2;`;
    }

    mouseLeave(el) {
        // передан может быть только не активный item селекта
        // значит селект открыт и фон стрелки уже подкрашен
        if(el) {
            el.style.color = '';

            return;
        }

        // если в параметре пусто
        if(!this.state) this.wrArrows.style = ``;
    }

}
// при клике берем актуальную высоту каждый раз и меняем

// debugger;