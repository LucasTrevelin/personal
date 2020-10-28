import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import landing from './pages/landing'
import landing2 from './pages/landing2'


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={landing}></Route>
                <Route path="/2" exact={true} component={landing2}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;