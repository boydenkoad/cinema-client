import { ICinemaHall } from "./cinemaHall.interface";
import { IMovie } from "./movie.interface";

interface SessionMovieId extends Pick<IMovie,'id'>{

}

export interface ISession{
    id:number
    date:string
    movieId:number
    price:number
    time:string
    cinemaHall:number
}