import React, {Component} from 'react';
import request from 'axios';
import {ROOT} from '../../config';
import {NavLink} from 'react-router-dom';

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
             {this.state.topics.map((topic,i) =>
                <NavLink key={i}
                    to={`/topics/${topic.title.toLowerCase()}/articles`}>
                    <li>
                    {topic.title}
                    </li>
                </NavLink>
            )}
        </div>);
    }
}

export default AllTopics;