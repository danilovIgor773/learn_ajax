import axios from 'axios';

const testInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

testInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM TEST INSTANCE';
export default testInstance;