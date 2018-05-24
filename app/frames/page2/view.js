"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const operators_1 = require("rxjs/operators");
class IndexView extends neweb_1.Component {
    getTemplate() {
        return `<div><h5>Page2</h5>
            <a name="lnkPage2">Go to post</a>
        </div>`;
    }
    beforeInit() {
        this.addElement("lnkPage2", new neweb_1.Link({
            href: this.props.data.postId.pipe(operators_1.map((value) => "/post/post" + value + "?test=Bye")),
        }));
    }
}
exports.default = IndexView;
