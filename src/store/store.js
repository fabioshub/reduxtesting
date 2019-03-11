import { createStore } from 'redux';
import { mainreducer } from '../reducers/reducer.js'
import axios from 'axios';
const initialState = {
    currentpage: 1,
    data: axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=dbb619d6178c8ecdfc83dc6e69d51737&language=en-US&page=1`)
    .then(data => data.data)
}

export const store = createStore(mainreducer, initialState);

