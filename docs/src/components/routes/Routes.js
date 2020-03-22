import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;