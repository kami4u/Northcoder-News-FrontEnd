import React, {Component} from 'react';
import AllTopics from './AllTopics';
import ArticleByTopic from './ArticleByTopic';
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
        <div>
          <Switch>  
            <Route exact path='/topics' component={AllTopics}/>
            <Redirect exact from='/' to='/topics'/>
            <Route exact path='/topics/:articleName' component={ArticleByTopic}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
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