import React, {Component} from 'react';
import VoteButtons from './VoteButtons';

class ArticleCard extends Component {
    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this); 
    }
    render () {
        return (<div className='container'>
                    <div className='box'>
                    <article className='media'>
                        <div className='media-left'>
                        Votes:{this.props.votes}
                            <VoteButtons 
                                id={this.props.comment_id}
                                voteHandler={this.props.voteHandler}
                            />
                            
                        </div>
                        <div className='media-content'>
                                <div className='content'>
                                    <h3 className='title is-3' >{this.props.title}</h3>
                                </div>
                        </div>
                        <div className="level is-mobile">
                            <a className="is-danger is-small"
                                onClick={this.deleteComment.bind(null, this.props.comment_id)}>
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </a>
                        </div>
                    </article>
                    </div>
                 </div>);
    }
    deleteComment(id) {
        this.props.deleteHandler(id);
    }
}

export default ArticleCard;