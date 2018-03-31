import { IViewProps } from "neweb";
import React = require("react");

export default class extends React.Component<IViewProps<any, any>, {}> {
    public render() {
        return <div><h5>Page2</h5>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                this.props.navigate("/parent_?f0_test=Bye");
            }}>Go to index</a>
        </div>;
    }
}
