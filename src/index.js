import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer/reducers.js'
import NavBar from './navbar'
import Home from './home'
import Rule from './rule'
import Normal from './normal'
import Free from './free'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './css/index.css';


const store = createStore(reducer)

render(
    <Provider store = {store}>
        <NavBar />
        <Router>
            <Routes>
                <Route>
                    <Route exact path={"/"} element={<Home />}/>
                    <Route exact path={"/home"} element={<Home />}/>
                    <Route exact path={"/rule"} element={<Rule />}/>
                    <Route exact path={"/normal"} element={<Normal />}/>
                    <Route exact path={"/free"} element={<Free />}/>
                    <Route render={() => <h1>Not found!</h1>} />
                </Route>
            </Routes>
        </Router>
    </Provider>,
    document.getElementById('root')
)