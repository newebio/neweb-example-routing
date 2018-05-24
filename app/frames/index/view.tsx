import { Component } from "neweb";
import html = require("./template.html");
class IndexView extends Component<{}> {
    public getTemplate() {
        return html;
    }
}
export default IndexView;
