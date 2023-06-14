import { ISession } from "./session.interface"

export interface IMovieSessionCard{
    id:number,
    name:string
    rating:number
    poster:string
    slug:string
    genre:string
    sessions:ISession[],
}