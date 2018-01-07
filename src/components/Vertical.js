import React from "react";

let Vertical = props => {
    return (
  <div>
    <a onClick={() => props.onClick(props.vertical)}>
      {props.vertical.Name}
    </a>
  </div>
)};
export default Vertical;
