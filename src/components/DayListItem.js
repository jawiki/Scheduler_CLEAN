import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

// export default function DayListItem(props) {
//   let dayClass = classNames("day-list__item", {
//     "day-list__item--selected": props.selected,
//     "day-list__item--full": !props.spots,
//   });

  
//   const spots = props.spots;
//   const formatSpots = (spots) => {
//     if (spots === 1) {
//       return "1 open spot remaining";
//     }
//     if (spots === 0) {
//       return "no spots remaining";
//     }
//     return `${spots} open spots remaining`;
//   };


//   return (
//     <li
//       className={dayClass}
//       onClick={() => props.setDay(props.name)}
//       selected={props.selected}
//       data-testid="day"
//     >
//       <h2 className="text--regular">{props.name}</h2>
//       <h3 className="text--light">{formatSpots(spots)}</h3>
//     </li>
//   );
// }

export default function DayListItem(props) {
  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}