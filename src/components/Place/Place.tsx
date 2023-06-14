import React, { FC } from "react";
import classNames from "classnames";
import "./Place.scss";

export interface IPlace {
  number: number;
  allow: boolean;
  className?: string;
  onClickHandler: (row:number,number: number) => void;
  check: boolean;
  row:number
}

const Place: FC<IPlace> = React.memo(
  ({ allow, className, onClickHandler, check ,row,number}) => {
    return (
      <button
        className={classNames('Place',
         check ? 'Place__check' : '', !allow ? 'Place__disabled' : '',className 
        )}
        onClick={() => onClickHandler(row,number)}
        disabled={!allow}
      >
        {number}
      </button>
    );
  }
);
export default Place;
