import React from 'react';
import AllTopics from './AllTopics';

class Nav extends React.Component {
  render () {
    return (
      <div>
        <AllTopics />
        {this.props.children}
      </div>
    );
  }
}

export default Nav;

