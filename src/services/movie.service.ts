import {movies,data,sessions} from '../app/data/data.moke'



export const movieService = {
    getMovies(){
        return movies
    },

    getMovieBySlug(slug:string){
        return movies.find(movie=>movie.slug === slug)
    },
    getMovieSessions(date:string,slug:string){
        const movie = this.getMovieBySlug(slug)
        return sessions.filter(ses=>ses.date === date && ses.movieId === movie?.id)
    },
}