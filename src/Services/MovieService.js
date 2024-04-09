import axios from "axios";

class MovieService {
    static fetchMovie() {
        return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2e2bd5af3c145e2610682d4044cc66e5");
    }
}

 export default MovieService;