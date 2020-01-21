import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {


    render () {       

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/posts/" exact activeClassName='my-active'
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}
                                    >Posts
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
                
                {/* {<Route path='/' exact render={() => <h1>Home test!</h1>}></Route >
                <Route path='/' render={() => <h1>Home test2!</h1>}></Route>} */}
                <Switch>                    
                    <Route path='/new-post' component={NewPost}></Route>
                    <Route path='/posts' component={Posts}></Route> 
                    <Redirect from='/' to="/posts"/>           
                    {/* {<Route path='/' component={Posts} />}*/}
                </Switch>                
            </div>
        );
    }
}

export default Blog;