"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
class Router extends neweb_1.ClassicRouter {
    onInit() {
        const parentMiddleware = {
            parentFrame: "parent", params: (_, context) => ({
                test: context.params.test,
            }),
        };
        this.addRoute(neweb_1.MatchedRoute({ path: "/" }, neweb_1.PageRouteWithParent(parentMiddleware, neweb_1.PageRouteWithAfterLoad({
            afterLoad: (page) => {
                page.title = "IndexPage";
            },
        }, neweb_1.PageRouteByFrame({ frameName: "index" })))));
        this.addRoute(neweb_1.MatchedRoute({ path: "/page2" }, neweb_1.PageRouteWithParent(parentMiddleware, neweb_1.PageRouteWithAfterLoad({
            afterLoad: (page) => {
                page.title = "Page2";
            },
        }, neweb_1.PageRouteByFrame({ frameName: "page2" })))));
        this.addRoute(neweb_1.MatchedRoute({ path: "/post/:name" }, neweb_1.PageRouteWithParent(parentMiddleware, neweb_1.PageRouteByFrame({ frameName: "post" }))));
    }
}
exports.default = Router;
