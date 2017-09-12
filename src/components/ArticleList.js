import React, {Component} from 'react';
import request from 'axios';
import {ROOT} from '../../config';
import ArticleCard from './ArticleCard';

class ArticleList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            articles: []
        };
        this.voteHandler = this.voteHandler.bind(this);
    }
    componentDidMount () {
        request.get(`${ROOT}/topics/${this.props.match.params.articleName}/articles`)
            .then((res) => {
                this.setState({articles: res.data.articles});
            })
            .catch((error) => {console.log(error);});
    }
    componentWillReceiveProps (nextProps) {
        if (this.props.match.params.articleName !== nextProps.match.params.articleName) {
            request.get(`${ROOT}/topics/${nextProps.match.params.articleName}/articles`)
            .then((res) => {
                this.setState({articles: res.data.articles});
            })
            .catch((error) => {console.log(error);});
        }
    }
    render () {
        return (<div >
              {this.state.articles.map((article) => {
                return <ArticleCard
                article_id={article._id}
                title={article.title}
                votes={article.votes}
                key={article.title}
                voteHandler={this.voteHandler}
                    />;
        })}  
        </div>);
    }
    voteHandler (id,e) {
        let newData = Object.assign([], this.state.articles);
        const index = this.state.articles.findIndex((e) => {return e._id === id;});
        e === 'up' ? newData[index].votes++ : e === 'down' ? newData[index].votes-- : newData[index].votes;
        this.setState({articles: newData});
    }
}

export default ArticleList;