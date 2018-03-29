import { IViewProps } from "neweb-core";
import React = require("react");

export default class extends React.Component<IViewProps<any, any>, {}> {
    public render() {
        return <div><h5>Layout</h5>
            {this.props.children}
        </div>;
    }
}
