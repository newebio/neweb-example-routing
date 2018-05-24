"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
class default_1 extends neweb_1.FrameController {
    constructor() {
        super(...arguments);
        this.data = {
            title: "Page2 title",
            postId: Math.random(),
        };
    }
}
exports.default = default_1;
