require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Master from './components/Master';
import CreateItem from './components/CreateItem';
import DisplayItem from './components/DisplayItem';
import EditItem from './components/EditItem';

import PropTypes from 'prop-types';

class RouteComponent extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Master}>
                    <Route path="/add-item" component={CreateItem} />
                    <Route path="/display-item" component={DisplayItem} />
                    <Route path="/edit/:id" component={EditItem} />
                </Route>    
            </Router>
        );
    }
}

render(<RouteComponent />, document.getElementById('example'));