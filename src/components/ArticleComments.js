import React, {Component} from 'react';
import request from 'axios';
import {ROOT} from '../../config';
import CommentCard from './CommentCard';
import AddComment from './AddComment';
import Id from 'uuid';

class ArticleComments extends Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: [],
            text: ''
        };
       this.voteHandler = this.voteHandler.bind(this);
       this.inputHandler = this.inputHandler.bind(this);
       this.submitHandler = this.submitHandler.bind(this);
    }
    componentDidMount () {
        request.get(`${ROOT}/articles/${this.props.match.params.article_id}/comments`)
            .then((res) => {
                this.setState({comments: res.data.comments});
            })
            .catch((error) => {console.log(error);});
    }
    render () {
        return (<div>
                    
                    {this.state.comments.map((comment) => {
                        return <CommentCard
                        comment_id={comment._id}
                        title={comment.body}
                        votes={comment.votes}
                        key={comment._id}
                        voteHandler={this.voteHandler}
                    />;
                    })}
            
                    <div>
                        <AddComment 
                            text={this.state.text}
                            inputHandler={this.inputHandler}
                            submitHandler={this.submitHandler}
                        /> 
                    </div> 
                </div>);
    }
    voteHandler (id,e) {
        request.put(`${ROOT}/comments/${id}?vote=${e}`);
        let newData = Object.assign([], this.state.comments);
        const index = this.state.comments.findIndex((e) => {return e._id === id;});
        e === 'up' ? newData[index].votes++ : e === 'down' ? newData[index].votes-- : newData[index].votes;
        this.setState({comments: newData});
    }
    inputHandler (e) {
        const text = e.target.value;
        this.setState({
            text: text
        });
    }

    submitHandler (e) {
        e.preventDefault();
        request.post(`${ROOT}/articles/${this.props.match.params.article_id}/comments`,{'comment': e.target.children[0].value});
        const newComment = {votes: 0, _id: [Id()], body: e.target.children[0].value};
        const comments = Object.assign([], this.state.comments);
        comments.push(newComment);    
        this.setState({comments});
    }
}

export default ArticleComments;