export default class ControllTeaSLM  {
    constructor(draw) {
        this.draw = draw;
    }
    
    init() {
        this.draw.controllType();
        this.draw.render();
    }
}
