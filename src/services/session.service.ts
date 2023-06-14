import {sessions} from '../app/data/data.moke'
import {movieService} from '../services/movie.service'

export const sessionService={
    getSessions(date:string){
        const m = movieService.getMovies()
        const s = sessions.filter(el=>el.date === date)
        const moviesSessionAll = m.map((movie)=>(
            {
                id:movie.id,
                name:movie.name,
                poster:movie.poster,
                rating:movie.rating,
                slug:movie.slug,
                genre:movie.genre,
                sessions:s.filter(el=>el.movieId === movie.id)
            }
        ))
        
        const moviesSessions = moviesSessionAll.filter((m)=>m.sessions.length > 0)
                    

        return moviesSessions
    }
}