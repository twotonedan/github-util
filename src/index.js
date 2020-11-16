import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import reducer from './redux/reducers'
import rootSaga from './redux/sagas'
import PullRequestView from './containers/pullRequestView'
import DetailView from './containers/detailView'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={PullRequestView}/>
        <Route path="/details" component={DetailView}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
