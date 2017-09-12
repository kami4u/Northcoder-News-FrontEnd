import React, {Component} from 'react';
import request from 'axios';
import {ROOT} from '../../config';
import {NavLink} from 'react-router-dom';
import '../css/AllTopics.css';

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
        return (
            <nav className="navbar">
                    <div className="navbar-brand">
                        <p className="navbar-item">Northcoder News</p>
                    </div>
                    <div className='navbar-brand'>
                        {this.state.topics.map((topic,i) =>
                            <NavLink key={i}
                                to={`/topics/${topic.title.toLowerCase()}/articles`}>
                                <a className='button is-primary'>{topic.title}</a>
                            </NavLink>
                        )}
                    </div>
            
            </nav>
        );
    }
}

export default AllTopics;