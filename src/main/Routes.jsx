  import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import WorkPlacesCrud from '../components/work-places/WorkPlacesCrud'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/work-places' component={WorkPlacesCrud} />
        <Redirect from='*' to='/' />
    </Switch>