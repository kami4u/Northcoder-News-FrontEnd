import React, {Component} from 'react';
import Nav from './Nav';
import ArticlesByTopic from './ArticlesByTopic';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <Router>
        <Nav>
          <Switch>  
            <Route exact path='/topics' component={ArticlesByTopic}/>
            <Redirect exact from='/' to='/topics'/>
            <Route path='/topics/:articleName/articles' component={ArticlesByTopic}/>
            <Route component={NoMatch}/>
          </Switch>
        </Nav>
      </Router>
    );
  }
}

const NoMatch = ({location}) => (
  <div>
    <h3>Error 404 this <code>{location.pathname}</code> not found!</h3>
  </div>
);

export default App;