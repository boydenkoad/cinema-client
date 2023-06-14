import classNames from "classnames";
import "./ChoosePlacePage.scss";
import { useEffect, useState } from "react";
import Place, { IPlace } from "../../components/Place/Place";

interface ChoosePlacePageProps {
  className?: string;
}

export const ChoosePlacePage: React.FC<ChoosePlacePageProps> = ({
  className,
}) => {
  const [rows, setRows] = useState([
    [
      { row: 1, number: 1, allow: true, check: false },
      { row: 1, number: 2, allow: false, check: false },
      { row: 1, number: 3, allow: true, check: false },
      { row: 1, number: 4, allow: true, check: false },
      { row: 1, number: 5, allow: true, check: false },
      { row: 1, number: 6, allow: true, check: false },
      { row: 1, number: 7, allow: true, check: false },
      { row: 1, number: 8, allow: true, check: false },
      { row: 1, number: 9, allow: true, check: false },
      { row: 1, number: 10, allow: true, check: false },
      { row: 1, number: 11, allow: true, check: false },
      { row: 1, number: 12, allow: true, check: false },
      { row: 1, number: 13, allow: true, check: false },
      { row: 1, number: 14, allow: true, check: false },
    ],
    [
      { row: 2, number: 1, allow: true, check: false },
      { row: 2, number: 2, allow: false, check: false },
      { row: 2, number: 3, allow: true, check: false },
      { row: 2, number: 4, allow: true, check: false },
      { row: 2, number: 5, allow: true, check: false },
      { row: 2, number: 6, allow: true, check: false },
      { row: 2, number: 7, allow: true, check: false },
      { row: 2, number: 8, allow: true, check: false },
      { row: 2, number: 9, allow: true, check: false },
      { row: 2, number: 10, allow: true, check: false },
      { row: 2, number: 11, allow: true, check: false },
      { row: 2, number: 12, allow: true, check: false },
      { row: 2, number: 13, allow: true, check: false },
      { row: 2, number: 14, allow: true, check: false },
    ],
    [
      { row: 3, number: 1, allow: false, check: false },
      { row: 3, number: 2, allow: true, check: false },
      { row: 3, number: 3, allow: true, check: false },
      { row: 3, number: 4, allow: true, check: false },
      { row: 3, number: 5, allow: true, check: false },
      { row: 3, number: 6, allow: true, check: false },
      { row: 3, number: 7, allow: true, check: false },
      { row: 3, number: 8, allow: true, check: false },
      { row: 3, number: 9, allow: true, check: false },
      { row: 3, number: 10, allow: true, check: false },
      { row: 3, number: 11, allow: true, check: false },
      { row: 3, number: 12, allow: true, check: false },
      { row: 3, number: 13, allow: true, check: false },
      { row: 3, number: 14, allow: true, check: false },
    ],
    [
      { row: 4, number: 1, allow: false, check: false },
      { row: 4, number: 2, allow: true, check: false },
      { row: 4, number: 3, allow: true, check: false },
      { row: 4, number: 4, allow: true, check: false },
      { row: 4, number: 5, allow: true, check: false },
      { row: 4, number: 6, allow: true, check: false },
      { row: 4, number: 7, allow: true, check: false },
      { row: 4, number: 8, allow: true, check: false },
      { row: 4, number: 9, allow: true, check: false },
      { row: 4, number: 10, allow: true, check: false },
      { row: 4, number: 11, allow: true, check: false },
      { row: 4, number: 12, allow: true, check: false },
      { row: 4, number: 13, allow: true, check: false },
      { row: 4, number: 14, allow: true, check: false },
    ],
  ]);



  const [chosenPlace, setChosenPlace] = useState<any[]>([]);

  const choosePlace = (row: number, number: number) => {
    const newArray = rows.map((r) =>
      r.map((el) => {
        if (el.row === row && el.number === number) {
          if(!el.check){
            setChosenPlace(prev=>[...prev,{...el,check:true}])
          }else{
            const newChosenPlace = chosenPlace.map(el=>el.number === number && el.row===row ? {...el,check:!el.check}:el)
            const filetArray = newChosenPlace.filter(el=>el.check)
            setChosenPlace(filetArray)
          }
          return { ...el, check: !el.check };
        } else {
          return el;
        }
      })
      
    );
    setRows(newArray);
  };

  return (
    <div className={classNames("ChoosePlacePage", className)}>
      <div className="ChoosePlacePage__container">
      <div className="ChoosePlacePage__screen">Экран</div>
      {rows.map((el, index) => (
        <div className="ChoosePlace__row" key={index}>
          <span>{index + 1}</span>
          <div className="ChoosePlace__row__list">
            {el.map((el, index) => (
              <Place
              className="ChoosePlace__row__el"
                key={el.number}
                row={el.row}
                allow={el.allow}
                check={el.check}
                number={el.number}
                onClickHandler={choosePlace}
              />
            ))}
          </div>
          <span>{index + 1}</span>
        </div>
      ))}
      </div>
      <div className="ChoosePlacePage__chosenPlaces">
        <div>
          {/* {chosenPlace.map(el=><PlaceListElement place={el.number} row={el.row}></PlaceListElement>)}s */}
          </div>
             
            <div className="chosenPlaces__btn"><button>Продолжить</button></div>
      </div>
    </div>
  );
};
