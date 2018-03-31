import { IViewProps } from "neweb";
import React = require("react");

export default class extends React.Component<IViewProps<any, any>, {}> {
    public render() {
        return <div><h5>Index</h5>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                this.props.navigate("/parent_page2?f0_test=Hello");
            }}>Page2</a>
        </div>;
    }
}
