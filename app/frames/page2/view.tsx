import { Component, Link } from "neweb";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
class IndexView extends Component<{
    data: {
        postId: Observable<string>;
    };
}> {
    public getTemplate() {
        return `<div><h5>Page2</h5>
            <a name="lnkPage2">Go to post</a>
        </div>`;
    }
    public beforeInit() {
        this.addElement("lnkPage2", new Link({
            href: this.props.data.postId.pipe(map((value) =>
                "/post/post" + value + "?test=Bye",
            )),
        }));
    }
}
export default IndexView;
