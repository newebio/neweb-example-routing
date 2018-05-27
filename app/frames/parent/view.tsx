import { Component, DynamicComponent, TextNode } from "neweb";
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
    beforeMount() {
        this.addElement("ticker", new TextNode({
            value: this.props.data.counter,
        }));
        this.addElement("children", new DynamicComponent({
            component: this.props.children.children,
        }));
        this.addElement("params", new TextNode({
            value: this.props.params.pipe(map((params) => params.test ? params.test : "NoParams")),
        }));
    }
    getTemplate() {
        return `<div><h5>Layout::<template name="params"></template></h5>
        <strong name="ticker"></strong>
        <div name="children"></div>
        </div>`;
    }
}
export default ParentView;
