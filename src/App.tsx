import React from 'react'
import 'antd/dist/antd.css'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
    GenrePage,
    TodoPage,
    FeaturePage,
    DeveloperPage,
    PublisherPage,
    UserPage,
    GamePage,
    AddGamePage,
    EditGamePage,
    GameDetailsPage,
    SignInPage,
    LogoutPage,
} from './pages'
import { Layout } from './components'

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={SignInPage} />
                        <Route exact path="/games" component={GamePage} />
                        <Route
                            exact
                            path="/games/create"
                            component={AddGamePage}
                        />
                        <Route
                            exact
                            path="/games/update/:gameId"
                            component={EditGamePage}
                        />
                        <Route
                            exact
                            path="/games/details/:gameId"
                            component={GameDetailsPage}
                        />
                        <Route exact path="/users" component={UserPage} />
                        <Route
                            exact
                            path="/developers"
                            component={DeveloperPage}
                        />
                        <Route
                            exact
                            path="/publishers"
                            component={PublisherPage}
                        />
                        <Route exact path="/genres" component={GenrePage} />
                        <Route exact path="/features" component={FeaturePage} />
                        <Route exact path="/todos" component={TodoPage} />
                        <Route exact path="/logout" component={LogoutPage} />
                    </Switch>
                </Layout>
            </Router>
        </div>
    )
}

export default App
