import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Manager from './Pages/Manager'
import Create from './Pages/Create'
import Signature from './Pages/Signature'
import Details from './Pages/Details'

const App = () => {

  return (
    <Switch>
      <Route path='/manager' component={Manager} />
      <Route path='/create' component={Create} />
      <Route path='/signature' component={Signature} />
      <Route path='/details' component={Details} />
    </Switch>
  )
}

export default App
