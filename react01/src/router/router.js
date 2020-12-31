import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";

// import App from '../App'
import Admin from '../pages/admin/Admin'

import Login from '../pages/Login/Login'


class Router extends React.Component {
    render() {
        return (
                    <BrowserRouter>
                        <Switch>
                            {/*<Route exact path="/home" component={Home} />*/}
                            <Route path="/login" component={Login} />
                            {/*<Route path="/home/ui/buttons" component={But} />*/}
                            {/*<Route path="/index" component={Index} />*/}

                            <Route path="/" component={Admin} />
                        </Switch>
                    </BrowserRouter>
        )
    }
}


export default Router;
