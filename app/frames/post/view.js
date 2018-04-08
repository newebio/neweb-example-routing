"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const React = require("react");
class default_1 extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("h5", null,
                "Post ",
                this.props.params.name),
            React.createElement(neweb_1.Link, { href: "/?test=John" }, "Go to index"));
    }
}
exports.default = default_1;
