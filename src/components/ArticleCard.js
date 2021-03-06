import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import VoteButtons from './VoteButtons';

class ArticleCard extends Component {
    render () {
        return (<div className='container'>
                    <div className='box'>
                    <article className='media'>
                        <div className='media-left'>
                        Votes:{this.props.votes}
                            <VoteButtons 
                                id={this.props.article_id}
                                voteHandler={this.props.voteHandler}
                            />
                            
                        </div>
                        <div className='media-content'>
                            <NavLink to={`/articles/${this.props.article_id}`}>
                                <div className='content'>
                                    <h3 className='title is-3' >{this.props.title}</h3>
                                </div>
                            </NavLink>
                        </div>
                    </article>
                    </div>
                 </div>);
    }
}

export default ArticleCard;