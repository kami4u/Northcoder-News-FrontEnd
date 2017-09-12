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
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        <button type="submit">Add</button>
      </form>
        // <div id='comment-form' className='container' >
        //     <form className="media-content"
        //         onSubmit={this.handleSubmit}>
        //         <div className="field" >
        //             <label className="label">New comment</label>
        //             <div className="control">
        //                 <textarea className="textarea" placeholder="Add your comment"
        //                     onChange={this.handleChange}></textarea>
        //             </div>
        //         </div>
        //         <div className="field is-grouped">
        //             <div className="control">
        //                 <button className="button is-primary">Submit</button>
        //             </div>
        //         </div>
        //         </form>
        // </div>
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