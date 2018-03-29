import { IViewProps } from "neweb-core";
import React = require("react");

export default class extends React.Component<IViewProps<any, any>, {}> {
    public render() {
        return <div><h5>Page2</h5>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                this.props.navigate("/parent_");
            }}>Go to index</a>
        </div>;
    }
}
