import React from 'react'
import {Route, Switch} from 'react-router'
import {ROUTES} from '../App'

const ContentRouter = () => {
    return (
        <Switch>
            {ROUTES.map(route => {
                const {key, path, exact, component} = route;
                return (
                    <Route
                        key={key}
                        path={path}
                        exact={exact}
                        component={component}
                    />
                );
            })}
        </Switch>
    )
}

export default ContentRouter