import { IViewProps, Link } from "neweb";
import React = require("react");

export default class extends React.Component<IViewProps<any, any>, {}> {
    public render() {
        return <div><h5>Post {this.props.params.name}</h5>
            <Link href="/?test=John">Go to index</Link>
        </div>;
    }
}
