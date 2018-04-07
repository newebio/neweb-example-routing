"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const React = require("react");
class default_1 extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(neweb_1.SeansStatusContext.Consumer, null, (status) => {
                    return React.createElement("div", null,
                        "Status:",
                        status ? status : "");
                }),
                React.createElement(neweb_1.NetworkStatusContext.Consumer, null, (status) => {
                    return React.createElement("div", null,
                        "Network status:",
                        status ? status : "");
                })),
            React.createElement("h5", null,
                "Layout ",
                this.props.params ? this.props.params.test : null,
                " ",
                this.props.data),
            this.props.children);
    }
}
exports.default = default_1;
