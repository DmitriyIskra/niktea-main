export default class RedrawReadMore {
    constructor(el) {
        this.el = el;

        this.wrText = this.el.querySelector('.catalog__wr-text');
        this.amountInitPar = 3
        this.allParagraphs = this.wrText.children;
        this.readMore = this.el.querySelector('.catalog__read-more');

        this.currentState = false; // false - скрыто, true - раскрыто
    }

    initStartState() {
        let totalHeight = 0;

        for(let i = 0; i < this.amountInitPar; i += 1) {
            totalHeight += this.allParagraphs[i].offsetHeight;
        }

        const gap = parseFloat(getComputedStyle(this.wrText).gap);
        const totalGap = gap * (this.amountInitPar - 1);

        this.wrText.style.height = `${totalHeight + totalGap}px`;
    }

    controllState() {
        console.log('work')
        if(this.currentState) {
            this.initStartState();

            this.currentState = false;

            return;
        }

        let totalHeight = 0;
        this.currentState = true;

        for(let i = 0; i < this.allParagraphs.length; i += 1) {
            totalHeight += this.allParagraphs[i].offsetHeight;
        }

        const gap = parseFloat(getComputedStyle(this.wrText).gap);
        const totalGap = gap * (this.allParagraphs.length - 1);

        this.wrText.style.height = `${totalHeight + totalGap}px`;
    }
}