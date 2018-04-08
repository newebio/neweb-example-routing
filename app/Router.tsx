import { ClassicRouter, MatchedRoute, PageRouteByFrame, PageRouteWithParent } from "neweb";

export default class Router extends ClassicRouter {
    public onInit() {
        const parentMiddleware = {
            parentFrame: "parent", params: (_: any, context: any) => ({
                test: context.params.test,
            }),
        };
        this.addRoute(MatchedRoute({ path: "/" },
            PageRouteWithParent(parentMiddleware, PageRouteByFrame({ frameName: "index" }))));
        this.addRoute(MatchedRoute({ path: "/page2" },
            PageRouteWithParent(parentMiddleware, PageRouteByFrame({ frameName: "page2" }))));
        this.addRoute(MatchedRoute({ path: "/post/:name" },
            PageRouteWithParent(parentMiddleware, PageRouteByFrame({ frameName: "post" }))));
    }
}
