import React, {Component} from 'react';
import request from 'axios';
import {ROOT} from '../../config';
import {Link} from 'react-router-dom';

class AllTopics extends Component {
    constructor (props) {
        super(props);
        this.state = {
            topics: []
        };
    }
    componentDidMount () {
        request.get(`${ROOT}/topics`)
            .then((res) => {
                this.setState({topics: res.data.topics});
            })
            .catch((error) => {console.log(error);});
    }
    render () {
        return (<div >
             {this.state.topics.map((topic, i) => {
                return <div key={i}><h1><Link to={`/topics/${topic.title.toLowerCase()}`}>{topic.title}</Link></h1></div>;
        })} 
        </div>);
    }
}

export default AllTopics;