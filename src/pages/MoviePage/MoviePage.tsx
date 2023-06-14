import classNames from "classnames";
import { Calendar } from "../../components/Calendar/Calendar";
import { Day } from "../../components/Day/Day";
import MovieSessionTimeList from "../../components/MovieSessionTimeList/MovieSessionTimeList";
import { Link, useParams } from "react-router-dom";
import { useCalendar } from "../../app/useCalendar";
import Video from "../../components/Video/Video";
import { movieService } from "../../services/movie.service";

import "./MoviePage.scss";
interface MoviePageProps {
  className?: string;
}

export const MoviePage: React.FC<MoviePageProps> = ({ className }) => {
  const { dateId, getNextDay, handleChangeUrl} = useCalendar();
  const {slug,date} = useParams()
  const movie = movieService.getMovieBySlug(slug||'')

  const sessions = movieService.getMovieSessions(date||getNextDay(0),slug||'')

  
  if(!movie) return <div>Page not found</div>
  

  return (
    <div className={classNames("MoviePage", className)}>
      <div className="MoviePage__title">
        <h3>{movie.name}</h3>
      </div>
      <div className="MoviePage__columns">
        <div className="MoviePage__columns__left">
          <img src={movie.poster} alt="" />
        </div>
        <div className="MoviePage__columns__right">
          <div className="MoviePage__calendar">
            <Link to={getNextDay(0)}>
              <Day nextDay={0} className="SessionPage__calendar-block__days__element"/>
            </Link>
            <Link to={getNextDay(1)}>
              <Day toDay={dateId} nextDay={1} className="SessionPage__calendar-block__days__element"/>
            </Link>
            <Link to={getNextDay(2)}>
              <Day toDay={dateId} nextDay={2} className="SessionPage__calendar-block__days__element"/>
            </Link>
            <Link to={getNextDay(3)}>
              <Day toDay={dateId} nextDay={3} className="SessionPage__calendar-block__days__element"/>
            </Link>
            <Link to={getNextDay(4)}>
              <Day toDay={dateId} nextDay={4} className="SessionPage__calendar-block__days__element"/>
            </Link>
            <Calendar onClickHandle={handleChangeUrl}/>
          </div>
          <MovieSessionTimeList session={sessions}/>
          <div className="MoviePage__description">
            {movie.description}
          </div>
          <div className="MoviePage__movie-info">
            <div className="MoviePage__movie-info__el">
              <div>Режиссер</div>
              <div>{movie.producer}</div>
            </div>
            <div className="MoviePage__movie-info__el">
              <div>В ролях</div>
              <div> {movie.actors}</div>
            </div>
            <div className="MoviePage__movie-info__el">
              <div className="MoviePage__movie-info__el__name">Продолжительность</div>
              <div className="MoviePage__movie-info__el__data"> {movie.duration} мин</div>
            </div>
            <div className="MoviePage__movie-info__el">
              <div className="MoviePage__movie-info__el__name">Страна</div>
              <div className="MoviePage__movie-info__el__data">{movie.country}</div>
            </div>
          </div>
          <div className="MoviePage__trailer">
          <h3>Трейлер</h3>
          <Video src={movie.trailer}/>
        </div>
        </div>
      </div>
    </div>
  );
};
