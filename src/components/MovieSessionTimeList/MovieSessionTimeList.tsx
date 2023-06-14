import { FC } from "react";

import { MovieSessionTime } from "../MovieSessionTime/MovieSessionTime";
import "./MovieSessionTimeList.scss";
import { ISession } from "../../models/session.interface";

interface IMovieSessionTimeList {
  className?: string;
  session: ISession[];
}

const MovieSessionTimeList: FC<IMovieSessionTimeList> = ({
  session,
  className,
}) => {
  return (
    <div className="SessionTimeList">
      {session.length ? (
        session.map((s) => (
          <MovieSessionTime
            hall={s.cinemaHall}
            price={s.price}
            time={s.time}
            className="SessionTimeList__time"
          />
        ))
      ) : (
        <div className="SessionTimeList__time">Сеансов не найдено.</div>
      )}
    </div>
  );
};
export default MovieSessionTimeList;
