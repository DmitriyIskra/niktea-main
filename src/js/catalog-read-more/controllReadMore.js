export default class ControllReadMore {
    constructor(draw) {
        this.draw = draw;

        this.onClick = this.onClick.bind(this);
    }

    init() {
        this.draw.initStartState();

        this.registerEvents();
    }

    registerEvents() {
        this.draw.readMore.addEventListener('click', this.onClick);
    }

    onClick(e) {
        if(e.target.closest('.catalog__read-more')) {
            this.draw.controllState();
        }
    }
}