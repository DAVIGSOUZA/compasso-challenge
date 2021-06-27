import React from 'react'
import HomePage from '../Pages/HomePage'
import ProfilePage from '../Pages/ProfilePage'
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <HomePage/>
        </Route>
        <Route exact path={'/:userName'}>
          <ProfilePage/>
        </Route>
        <Route>
          <HomePage/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes