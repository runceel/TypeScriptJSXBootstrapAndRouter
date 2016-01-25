import * as React from 'react';
import * as ReactDOM from 'react-dom';
import IndexPage from './components/IndexPage';
import Page1 from './components/Page1';
import {Navbar, Nav, NavItem, Grid, Row, Col} from 'react-bootstrap';
import {Router, Route, IndexRoute, RouteComponentProps} from 'react-router';
import * as history from 'history';

const pageMap = [
    { href: '/', label: 'Index', indexOnly: true },
    { href: '/page1', label: 'Page1', indexOnly: false },
];

interface AppState {
    activeHref: string;
}

class App extends React.Component<RouteComponentProps<{}, {}>, AppState> {

    private hisotryToken: Function;

    constructor(props: RouteComponentProps<{}, {}>) {
        super(props);
        this.state = { activeHref: '/' };
    }

    private handleSelect(key: number, href: string) {
        this.props.history.push(href);
    }

    componentDidMount() {
        this.hisotryToken = this.props.history.listen(() => {
            var activeHref = '';
            pageMap.forEach(map => {
                if (this.props.history.isActive(map.href, null, map.indexOnly)) {
                    activeHref = map.href;
                }
            });
            this.setState({
                activeHref: activeHref
            } as AppState);
        });
    }

    componentWillUnmount() {
        this.hisotryToken();
    }

    render() {
        let navItems = pageMap.map(x => <NavItem href={x.href}>{x.label}</NavItem>);
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <span>Route app!</span>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav activeHref={this.state.activeHref} onSelect={this.handleSelect.bind(this)}>
                        {navItems}
                    </Nav>
                </Navbar>
                <Grid>
                    <Row>
                        <Col md={12}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

var router = (
    <Router history={history.createHashHistory()}>
        <Route path='/' component={App}>
            <IndexRoute component={IndexPage} />
            <Route path='/page1'>
                <IndexRoute component={Page1} />
                <Route path=':id' component={Page1} />
            </Route>
        </Route>
    </Router>
);

ReactDOM.render(
    router,
    document.getElementById('content'));
