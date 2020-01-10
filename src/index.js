import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

//It is also possible to set defaults using axios for url to be used in http/ specify headers, content-type etc...
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(config => {
    console.log(config);    
    return config;
},
    error => {
        console.log('[Error]',error); //Rises when there is no internet connection
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(config => {
    console.log(config);
    return config;    
}, error => {
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
