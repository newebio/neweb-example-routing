import { FrameController } from "neweb";
export default class extends FrameController<any, any, any> {
    protected i = 100;
    public getInitialData() {
        return this.i;
    }
    public onInit() {
        setInterval(() => {
            this.emit(++this.i);
        }, 1000);
    }
}
