import React, {Component} from 'react';
import VoteButtons from './VoteButtons';

class ArticleCard extends Component {
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
                    </article>
                    </div>
                 </div>);
    }
}

export default ArticleCard;