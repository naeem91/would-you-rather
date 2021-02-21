import React from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import retrieveInitialData from '../actions/shared'
import SignInPage from './SignInPage'
import HomePage from './HomePage'
import NavBar from './NavBar'
import QuestionDetailPage from './QuestionDetailPage'
import NewQuestionPage from './NewQuestionPage'
import Leaderboard from './Leaderboard'
import PageNotFound from './PageNotFound'

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(retrieveInitialData())
  }
  render(){
    return (
      <Router>
        <React.Fragment>
          <Container maxWidth='md'>
            <LoadingBar />
            <NavBar />
            {
              this.props.loading ? <div></div>
              : !(this.props.authUser) ? <SignInPage />
              : <Switch>
                  <Route path='/' exact component={ HomePage } />
                  <Route path='/questions/:question_id' component={ QuestionDetailPage } />
                  <Route path='/add' component={ NewQuestionPage } />
                  <Route path='/leaderboard' component={ Leaderboard } />
                  <Route path="*" component={ PageNotFound } />
                </Switch>
            }
          </Container>
        </React.Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authUser, users}){
  return {
    authUser,
    loading: Object.keys(users).length === 0
  }
}

export default connect(mapStateToProps)(App)
