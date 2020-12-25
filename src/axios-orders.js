import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-57220-default-rtdb.firebaseio.com/'
});

export default instance;