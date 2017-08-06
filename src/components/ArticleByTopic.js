import React, {Component} from 'react';
import request from 'axios';
import {ROOT} from '../../config';

class ArticleByTopic extends Component {
    constructor (props) {
        super(props);
        this.state = {
            articles: []
        };
    }
    componentDidMount () {
        request.get(`${ROOT}/topics/${this.props.match.params.articleName}/articles`)
            .then((res) => {
                this.setState({articles: res.data.articles});
            })
            .catch((error) => {console.log(error);});
    }
    render () {
        return (<div >
              {this.state.articles.map((article, i) => {
                return <div key={i}>{article.title}</div>;
        })}  
        </div>);
    }
}

export default ArticleByTopic;