"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
class default_1 extends neweb_1.FrameController {
    constructor() {
        super(...arguments);
        this.i = 100;
    }
    getInitialData() {
        return this.i;
    }
    onInit() {
        setInterval(() => {
            this.emit(++this.i);
        }, 1000);
    }
}
exports.default = default_1;
