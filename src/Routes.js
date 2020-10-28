import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import landing from './pages/landing'


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={landing}></Route>            </Switch>
        </BrowserRouter>
    )
}

export default Routes;