import {
    ClassicRouter, IPage, MatchedRoute, PageRouteByFrame, PageRouteWithAfterLoad,
    PageRouteWithParent,
} from "neweb";

export default class Router extends ClassicRouter {
    public onInit() {
        const parentMiddleware = {
            parentFrame: "parent", params: (_: any, context: any) => ({
                test: context.params.test,
            }),
        };
        this.addRoute(MatchedRoute({ path: "/" },
            PageRouteWithParent(parentMiddleware, PageRouteWithAfterLoad({
                afterLoad: (page: IPage) => {
                    page.title = "IndexPage";
                },
            },
                PageRouteByFrame({ frameName: "index" })))));

        this.addRoute(MatchedRoute({ path: "/page2" },
            PageRouteWithParent(parentMiddleware, PageRouteWithAfterLoad({
                afterLoad: (page: IPage) => {
                    page.title = "Page2";
                },
            }, PageRouteByFrame({ frameName: "page2" })))));
        this.addRoute(MatchedRoute({ path: "/post/:name" },
            PageRouteWithParent(parentMiddleware, PageRouteByFrame({ frameName: "post" }))));
    }
}
