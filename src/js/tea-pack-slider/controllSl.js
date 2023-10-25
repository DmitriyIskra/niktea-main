export default class ControllSl {
    constructor(draw) {
        this.draw = draw;

        this.onClick = this.onClick.bind(this);
    }

    init() {
        this.draw.initSlider();
        this.registerEvents();
    }

    registerEvents() {
        this.draw.el.addEventListener('click', this.onClick);
    }

    onClick(e) {
        if(e.target.closest('.tea-sl__button-prev')) {
            this.draw.movePrev();
        }

        if(e.target.closest('.tea-sl__button-next')) {
            this.draw.moveNext()
        }
    }
}