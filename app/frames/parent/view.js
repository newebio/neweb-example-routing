"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const operators_1 = require("rxjs/operators");
class ParentView extends neweb_1.Component {
    beforeInit() {
        this.addElement("ticker", new neweb_1.Text({
            value: this.props.data.counter,
        }));
        this.addElement("children", new neweb_1.Dynamic({
            component: this.props.children.children,
        }));
        this.addElement("params", new neweb_1.Text({
            value: this.props.params.pipe(operators_1.map((params) => params.test ? params.test : "NoParams")),
        }));
    }
    getTemplate() {
        return `<div><h5>Layout::<element name="params"></element></h5>
        <strong name="ticker"></strong>
        <div name="children"></div>
        </div>`;
    }
}
exports.default = ParentView;
