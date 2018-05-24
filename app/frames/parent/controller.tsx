import { FrameController } from "neweb";
import { Subject } from "rxjs";
export default class extends FrameController<any, any, any, any> {
    public data = {
        counter: new Subject(),
    };
    protected i = 100;
    public onInit() {
        setInterval(() => {
            this.data.counter.next(++this.i);
        }, 1000);
    }
}
