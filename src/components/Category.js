import React from "react";


let Category = props => (
  <div>
    <a onClick={() => props.onClick(props.category)}>{props.category.Name} </a>
  </div>
);

export default Category;