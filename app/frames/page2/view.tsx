import { IViewProps, Link } from "neweb";
import React = require("react");

export default class extends React.Component<IViewProps<any, any>, {}> {
    public render() {
        return <div><h5>Page2</h5>
            <Link href={"/post/post" + this.props.data.postId + "?test=Bye"}>Go to index</Link>
        </div>;
    }
}
