import React from 'react';
import './DayListItem.scss';
import classNames from "classnames";

export default function DayListItem(props) { 
  const {name, spots, selected, setDay} = props;

  const dayClass = classNames("day-list__item", 
  { "day-list__item--selected": selected,
    "day-list__item--full": spots === 0}
  )


  return (
    <li data-testid="day" className={dayClass} onClick={setDay}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light"> {`${spots ? spots : 'no'} ${spots === 1 ? 'spot' : 'spots'} remaining`}</h3>
    </li>
  );
}