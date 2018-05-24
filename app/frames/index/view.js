"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const html = require("./template.html");
class IndexView extends neweb_1.Component {
    getTemplate() {
        return html;
    }
}
exports.default = IndexView;
