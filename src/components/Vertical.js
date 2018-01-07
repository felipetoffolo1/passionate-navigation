import React from "react";
import { ListItem } from "material-ui/List";
import Category from "./Category";
import PropTypes from "prop-types";

/**
 * Vertical UI component
 * @param {*} props 
 */
let Vertical = props => (
  <ListItem
    primaryText={props.vertical.Name}
    primaryTogglesNestedList={true}
    nestedItems={props.nestedItems.map(category => (
      <Category key={category.Id} category={category} />
    ))}
  />
);

Vertical.propTypes = {
  //** The vertical object */
  vertical: PropTypes.object.isRequired,
  //** Array of categories object */
  nestedItems: PropTypes.array.isRequired
};

export default Vertical;
