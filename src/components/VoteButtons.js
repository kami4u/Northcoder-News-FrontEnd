import React from 'react';

class VoteButtons extends React.Component {
  constructor (props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
}
  render () {
    return (
      <span className="column is-narrow rows">
        <a className="is-success is-small"
          onClick={this.clickHandler.bind(null,'up')}>
          <i className="fa fa-chevron-up row" />
        </a>
        <a className="is-danger is-small"
          onClick={this.clickHandler.bind(null,'down')}>
          <i className="fa fa-chevron-down row" />
        </a>
      </span> 
    );
  }
  clickHandler (e) {
    this.props.voteHandler(this.props.id, e);
  }
}
export default VoteButtons;