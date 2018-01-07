import React from "react";
import { ListItem } from "material-ui/List";
import { connect } from "react-redux";
import * as Actions from "../actions/Actions";
import PropTypes from "prop-types";


/**
 * Category ui component
 * @param {*} props 
 */
let Category = props => {
  const itemStyles = {
    marginLeft: 24
  };

  return (
    <ListItem
      primaryText={props.category.Name}
      style={itemStyles}
      onClick={() => props.dispatch(Actions.setCurrentCategory(props.category))}
    />
  );
};
Category.propTypes = {
  //** The category object */
  category: PropTypes.object.isRequired
};
export default connect()(Category);
