import React, { Component } from 'react';
import {Route, NavLink, Switch } from 'react-router-dom';

import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from '../Blog/FullPost/FullPost';
import './Blog.css';

class Blog extends Component {


    render () {       

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" exact activeClassName='my-active'
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}
                                    >Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                        pathname: '/new-post',
                                        hash: '#submit',
                                        search: '?param=1'
                                        }}
                                    >New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>        
                </header>
                
                {/* {<Route path='/' exact render={() => <h1>Home test!</h1>}></Route>
                <Route path='/' render={() => <h1>Home test2!</h1>}></Route>} */}
                <Switch>
                    <Route path='/' exact component={Posts}></Route>
                    <Route path='/new-post' component={NewPost}></Route>
                    <Route path='/:id' component={FullPost}></Route>
                </Switch>                
            </div>
        );
    }
}

export default Blog;