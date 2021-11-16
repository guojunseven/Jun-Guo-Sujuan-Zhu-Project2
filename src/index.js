import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import reducer from './reducer/reducers.js'
import NavBar from './navbar'
import Home from './home'
import Rule from './rule'
import Normal from './normal'
import Free from './free'
import Advanced from './advanced'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './css/index.css';

// persist the redux state to persist storage
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['board', 'opponent', 'gameState', 'ships']
}
// wrap the reducer
const pReducer = persistReducer(persistConfig, reducer);
// wrap the store
const store = createStore(pReducer)

const persistor = persistStore(store)

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <NavBar />
            <Router>
                <Routes>
                    <Route>
                        <Route exact path={"/"} element={<Home />} />
                        <Route exact path={"/home"} element={<Home />} />
                        <Route exact path={"/rule"} element={<Rule />} />
                        <Route exact path={"/free"} element={<Free />} />
                        <Route exact path={"/normal"} element={<Normal />} />
                        <Route exact path={"/advanced"} element={<Advanced />} />
                        <Route render={() => <h1>Not found!</h1>} />
                    </Route>
                </Routes>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)