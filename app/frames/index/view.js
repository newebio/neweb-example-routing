"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const React = require("react");
class default_1 extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("h5", null, "Index"),
            React.createElement(neweb_1.Link, { href: "/page2?test=Hello" }, "Page2"));
    }
}
exports.default = default_1;
