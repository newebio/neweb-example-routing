"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class default_1 extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("h5", null,
                "Layout ",
                this.props.params ? this.props.params.test : null,
                " ",
                this.props.data),
            this.props.children);
    }
}
exports.default = default_1;
