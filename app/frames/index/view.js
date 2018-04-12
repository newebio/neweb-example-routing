"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const React = require("react");
const main_1 = require("./../../styles/main");
class default_1 extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("h5", { style: Object.assign({}, main_1.red) }, " Index"),
            React.createElement(neweb_1.Link, { href: "/page2?test=Hello" }, "Page2"));
    }
}
exports.default = default_1;
