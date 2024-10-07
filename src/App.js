import {Component} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import ActiveContext from './context/ActiveContext'

// Replace your code here
class App extends Component {
  state = {isActive: false}

  getActiveId = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    return (
      <BrowserRouter>
        <ActiveContext.Provider
          value={{
            isActive: {isActive},
            getActiveId: this.getActiveId,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <protectedRoute exact path="/trending" component={Trending} />
            <protectedRoute exact path="/gaming" component={Gaming} />
            <protectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </ActiveContext.Provider>
      </BrowserRouter>
    )
  }
}
export default App
