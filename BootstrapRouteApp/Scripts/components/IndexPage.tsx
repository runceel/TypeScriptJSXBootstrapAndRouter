import * as React from 'react';
import {Link} from 'react-router';

export default class IndexPage extends React.Component<{}, {}> {
    render() {
        return (
            <Link to='/page1/10'>/page1/10</Link>
        );
    }
}
