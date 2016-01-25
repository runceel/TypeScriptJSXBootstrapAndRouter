import * as React from 'react';
import * as ReactRouter from 'react-router';

export default class Page1 extends React.Component<ReactRouter.RouteComponentProps<{}, { id: number }>, {}> {
    render() {
        return (
            <h1>Page1 {this.props.routeParams.id}</h1>
        );
    }
}
