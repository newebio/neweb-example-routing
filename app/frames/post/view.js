"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const operators_1 = require("rxjs/operators");
class IndexView extends neweb_1.Component {
    getTemplate() {
        return `<div><h5>Post<element name="postName"></element></h5>
            <a type="neweb-link" href="/?test=John">Go to index</a>
        </div>`;
    }
    beforeMount() {
        this.addElement("postName", new neweb_1.TextNode({
            value: this.props.params.pipe(operators_1.map((value) => value.name)),
        }));
    }
}
exports.default = IndexView;
