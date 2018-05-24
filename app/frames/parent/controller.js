"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const rxjs_1 = require("rxjs");
class default_1 extends neweb_1.FrameController {
    constructor() {
        super(...arguments);
        this.data = {
            counter: new rxjs_1.Subject(),
        };
        this.i = 100;
    }
    onInit() {
        setInterval(() => {
            this.data.counter.next(++this.i);
        }, 1000);
    }
}
exports.default = default_1;
