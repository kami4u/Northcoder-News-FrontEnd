import React from 'react';
// import '../css/CommentForm.css';

class AddComment extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    } 
    render () {
    return (
        <div className='container' >
                <p>Add new comment please!</p>
            <form onSubmit={this.handleSubmit}>
                <input className="textarea" onChange={this.handleChange} value={this.state.value} placeholder='Type new comment!'/>
                <button type="submit">Add</button>
            </form>
         </div>
            );
    }
    handleChange (e) {
        const value = e.target.value;
        this.setState({
          value: value
        });
      }
      handleSubmit (e) {
        this.props.submitHandler(e);
        this.setState({
          value: ''
        });
    }
}

export default AddComment;