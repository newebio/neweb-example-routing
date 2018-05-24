import { Component, Text } from "neweb";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
class IndexView extends Component<{
    params: Observable<{
        name: string;
    }>;
}> {
    public getTemplate() {
        return `<div><h5>Post<element name="postName"></element></h5>
            <a type="neweb-link" href="/?test=John">Go to index</a>
        </div>`;
    }
    public beforeInit() {
        this.addElement("postName", new Text({
            value: this.props.params.pipe(map((value) => value.name)),
        }));
    }
}
export default IndexView;
