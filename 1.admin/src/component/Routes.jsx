import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Censorship } from '../pages/Censorship'
import User from '../pages/User'
import Dashboard from '../pages/Dashboard'
import { NotFoud } from '../pages/NotFoud'
import Analytics from '../pages/Analytics'
export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/users" component={User} />
            <Route path="/censorship" component={Censorship} />
            <Route path="/analytics" component={Analytics} />
            <NotFoud/>
        </Switch>
    )
}


