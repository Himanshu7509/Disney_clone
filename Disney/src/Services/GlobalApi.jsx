import axios from "axios";

const movieBasedUrl="https://api.themoviedb.org/3"
const api_key='cfe60619c6162456006c58dd74dcf5ec'
const movieByGenreBaseURL="https://api.themoviedb.org/3/discover/movie?api_key=cfe60619c6162456006c58dd74dcf5ec";
//https://api.themoviedb.org/3/trending/movie/day?api_key=cfe60619c6162456006c58dd74dcf5ec
const getTrendingVideos = axios.get(`${movieBasedUrl}/trending/movie/day?api_key=${api_key}`);
const getMovieByGenreId = (id) => axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default{
    getTrendingVideos,
    getMovieByGenreId
}