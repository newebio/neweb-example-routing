import { IViewProps } from "neweb";
import React = require("react");

export default class extends React.Component<IViewProps<any, any>, {}> {
    public render() {
        return <div><h5>Layout {this.props.params ? this.props.params.test : null} {this.props.data}</h5>
            {this.props.children}
        </div>;
    }
}
