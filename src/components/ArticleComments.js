import React, {Component} from 'react';
import request from 'axios';
import {ROOT} from '../../config';
import CommentCard from './CommentCard';

class ArticleComments extends Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: []
        };
       this.voteHandler = this.voteHandler.bind(this);
    }
    componentDidMount () {
        request.get(`${ROOT}/articles/${this.props.match.params.article_id}/comments`)
            .then((res) => {
                this.setState({comments: res.data.comments});
            })
            .catch((error) => {console.log(error);});
    }
    render () {
        return (<div >
              {this.state.comments.map((comment) => {
                return <CommentCard
                comment_id={comment._id}
                title={comment.body}
                votes={comment.votes}
                key={comment._id}
                voteHandler={this.voteHandler}
                    />;
        })}  
        </div>);
    }
    voteHandler (id,e) {
        request.put(`${ROOT}/comments/${id}?vote=${e}`);
        let newData = Object.assign([], this.state.comments);
        const index = this.state.comments.findIndex((e) => {return e._id === id;});
        e === 'up' ? newData[index].votes++ : e === 'down' ? newData[index].votes-- : newData[index].votes;
        this.setState({comments: newData});
    }
}

export default ArticleComments;