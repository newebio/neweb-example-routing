import { IViewProps, Link } from "neweb";
import React = require("react");
import { red } from "./../../styles/main";

export default class extends React.Component<IViewProps<any, any>, {}> {
    public render() {
        return <div><h5 style={{ ...red }}> Index</h5>
            <Link href="/page2?test=Hello">Page2</Link>
        </div>;
    }
}
