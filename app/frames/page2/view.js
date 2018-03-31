"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class default_1 extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("h5", null, "Page2"),
            React.createElement("a", { href: "#", onClick: (e) => {
                    e.preventDefault();
                    this.props.navigate("/parent_?f0_test=Bye");
                } }, "Go to index"));
    }
}
exports.default = default_1;
