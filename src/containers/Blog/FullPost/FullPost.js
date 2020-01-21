import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount(){
        console.log(this.props);        
        this.loadData();
    }

    //To solve the problem when clicking on one of posts loaded in /posts page to show a fullPost, we need to use componentDidUpdate() to 
    //click handler work properly and show the fullPost by given id. loadData separated method to be used both in componentDidMount and
    //componentDidUpdate

    componentDidUpdate(){
        this.loadData();
    }

    loadData () {
        if(this.props.match.params.id){
            //Here we check if the data was not loaded yet or data was loaded but the id doesnt match with a choosen one...
            //And now in the equality check we also compare to the id taken from url params (roter-related props) and dynamically convert it to Number!
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)){
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({loadedPost: response.data})
                })
            }            
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
                alert(`Your post by id # ${this.props.match.params.id} was succesfully deleted!`);               
            })
    } 

    render () {
        
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if(this.props.match.params.id){
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;