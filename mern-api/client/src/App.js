import React from 'react'
import './App.css'
import Home from './Components/Layout/Home'
import { BrowserRouter ,  Route, Switch } from 'react-router-dom';
import Signin from './Components/Auth/Signin'
import Signup from './Components/Auth/Signup'



function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Signin}></Route>
        <Route exact path='/register' component={Signup}></Route>
      </Switch>
    </BrowserRouter>
  
    </>
  )
}

export default App
