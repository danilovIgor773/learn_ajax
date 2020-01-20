import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom';

import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {


    render () {

        

        return (
            <div className="Blog">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={{
                            pathname: 'new-post',
                            hash: '#submit',
                            search: '?param=1'
                        }}>New Post</Link></li>
                    </ul>
                </nav>
                {/* {<Route path='/' exact render={() => <h1>Home test!</h1>}></Route>
                <Route path='/' render={() => <h1>Home test2!</h1>}></Route>} */}
                <Route path='/' exact component={Posts}></Route>
                <Route path='/new-post' component={NewPost}></Route>
            </div>
        );
    }
}

export default Blog;