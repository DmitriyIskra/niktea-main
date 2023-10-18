export default class ControllAboutBrand {
    constructor(draw) {
        this.draw = draw;

        this.onClick = this.onClick.bind(this);
    }

    init() {
        this.draw.initSwiper();

        this.registerEvents();
    }

    registerEvents() {
        this.draw.wrText.addEventListener('click', this.onClick);
    }

    onClick(e) {
        if(e.target.closest('.about-brand__read-more')) {
            this.draw.activeFullText();
        }
    }
}