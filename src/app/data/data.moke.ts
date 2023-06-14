import { IMovie } from "../../models/movie.interface"
import avatarPoster from '../../assets/avatar.jpg'
import spiderManPoster from '../../assets/spider-man.jpg'
import { ISession } from "../../models/session.interface"

export const data={
    
}


export const movies:IMovie[] = [
    {   
        id:1,
        name:'Автар: Путь воды',
        rating:6,
        slug:'avatar-the-way-of-water',
        actors:'Сигурни Уивер, Сэм Уортингтон, Зои Салдана',
        country:'США',
        genre:'Приключения',
        duration:200,
        poster:avatarPoster,
        description:`Захватывающее приключение «Аватар: Путь воды» Кэмерона возвращает
        зрителя в невероятный мир планеты Пандора и возводит
        кинематографический опыт до невиданных доселе высот.
        
        Прошло больше десяти лет с момента событий первого фильма. Новый эпизод фантастической саги «Аватар: Путь воды» начинает повествование о приключениях семьи Салли — Джейка, Нейтири и их детей. Испытания, выпавшие на их долю, битвы, в которых им предстоит сразиться, и трагедии, которые им предстоит пережить — ради спасения друг друга они готовы ко всему.`,
        producer:'Джеймс Кэмерон',
        trailer:'https://www.youtube.com/embed/o5F8MOz_IDw'

    },
    {   
        id:2,
        name:'Человек-паук: Паутина вселенных',
        rating:16,
        genre:'Фантастика',
        description:`Майлз Моралес возвращается в следующей главе оскароносной саги о Человеке-Пауке – «Человек-Паук: Паутина вселенных». После воссоединения с Гвен Стейси дружелюбный сосед Человек-Паук попадает из Бруклина в Мультивселенную. Там он встречает команду Паучков, защищающих само её существование. Пытаясь справиться с новой угрозой, Майлз сталкивается с Пауками из других вселенных. Настаёт момент, когда ему необходимо решить, что значит быть героем, спасающим тех, кого любишь больше всего.`,
        slug:'spider-man',
        actors:'Шамеик Мур, Хейли Стайнфелд, Оскар Айзек, Джейк Джонсон',
        country:'США',
        duration:200,
        poster:spiderManPoster,
        producer:'Джеймс Кэмерон',
        trailer:'https://www.youtube.com/embed/shW9i6k8cB0'
},
]


export const sessions:ISession[]=[
    {
        cinemaHall:1,
        id:1,
        date:'12-06-2023',
        movieId:1,
        price:100,
        time:'9:30'
    },
    {
        cinemaHall:1,
        id:2,
        date:'12-06-2023',
        movieId:1,
        price:100,
        time:'12:30'
    },
    {
        cinemaHall:1,
        id:3,
        date:'12-06-2023',
        movieId:1,
        price:100,
        time:'15:30'
    },
    {
        cinemaHall:1,
        id:4,
        date:'12-06-2023',
        movieId:1,
        price:100,
        time:'18:30'
    },
    {
        cinemaHall:2,
        id:5,
        date:'13-06-2023',
        movieId:1,
        price:100,
        time:'9:00'
    },
    {
        cinemaHall:2,
        id:6,
        date:'13-06-2023',
        movieId:1,
        price:100,
        time:'12:30'
    },
    {
        cinemaHall:2,
        id:7,
        date:'13-06-2023',
        movieId:2,
        price:100,
        time:'16:30'
    },
    {
        cinemaHall:2,
        id:8,
        date:'13-06-2023',
        movieId:1,
        price:100,
        time:'18:30'
    },
    {
        cinemaHall:1,
        id:9,
        date:'13-06-2023',
        movieId:2,
        price:100,
        time:'21:00'
    },
    {
        cinemaHall:1,
        id:10,
        date:'12-06-2023',
        movieId:2,
        price:100,
        time:'16:30'
    },
    {
        cinemaHall:2,
        id:11,
        date:'12-06-2023',
        movieId:1,
        price:100,
        time:'18:30'
    },
    {
        cinemaHall:2,
        id:12,
        date:'14-06-2023',
        movieId:2,
        price:100,
        time:'21:00'
    },
]

