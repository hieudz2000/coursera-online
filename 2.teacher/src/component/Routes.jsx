import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { Courses } from '../pages/Courses'
import { CreateCourse } from '../pages/CreateCourse'
import Customers from '../pages/Customers'
import Dashboard from '../pages/Dashboard'
import OrderHistory from '../pages/OrderHistory'
export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/customers" component={Customers} />
            <Route path="/courses" component={Courses} />
            <Route path="/create-course" exact component={CreateCourse}/>
            <Route path="/create-course/:id" component={CreateCourse}/>
            <Route path="/order-history" component={OrderHistory} />
        </Switch>
    )
}
