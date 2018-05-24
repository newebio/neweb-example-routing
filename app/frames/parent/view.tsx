import { Component, Dynamic, Text } from "neweb";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

class ParentView extends Component<{
    data: {
        counter: Observable<string>;
    };
    children: {
        children: Component<any>;
    };
    params: Observable<{
        test?: string;
    }>;
}> {
    beforeInit() {
        this.addElement("ticker", new Text({
            value: this.props.data.counter,
        }));
        this.addElement("children", new Dynamic({
            component: this.props.children.children,
        }));
        this.addElement("params", new Text({
            value: this.props.params.pipe(map((params) => params.test ? params.test : "NoParams")),
        }));
    }
    getTemplate() {
        return `<div><h5>Layout::<element name="params"></element></h5>
        <strong name="ticker"></strong>
        <div name="children"></div>
        </div>`;
    }
}
export default ParentView;
