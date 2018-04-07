import { IViewProps, NetworkStatusContext, SeansStatusContext } from "neweb";
import React = require("react");

export default class extends React.Component<IViewProps<any, any>, {}> {
    public render() {
        return <div>
            <div><SeansStatusContext.Consumer>
                {(status: string) => {
                    return <div>Status:{status ? status : ""}</div>;
                }}
            </SeansStatusContext.Consumer>
                <NetworkStatusContext.Consumer>
                    {(status: string) => {
                        return <div>Network status:{status ? status : ""}</div>;
                    }}
                </NetworkStatusContext.Consumer>
            </div>
            <h5>Layout {this.props.params ? this.props.params.test : null} {this.props.data}</h5>
            {this.props.children}
        </div>;
    }
}
