import React, { Component } from "react";
import Vertical from "../components/Vertical";
import { connect } from "react-redux";
import { List } from "material-ui/List";
import PropTypes from "prop-types";

/**
 * Nested List of vertical x categories
 */
export class NestedList extends Component {
  
  static propTypes = {
    //** Array of vertical object */
    verticals: PropTypes.array.isRequired,
    //** Array of categories object */
    categories: PropTypes.array.isRequired
  }
  render() {
    return <List className="list">
        <h1>Course List</h1>
        <h5>Choose yours wisely</h5>

        {this.props.verticals.map(vertical => (
          <Vertical
            key={vertical.Id}
            vertical={vertical}
            nestedItems={this.props.categories.filter(
              category => category.Verticals === vertical.Id
            )}
          />
        ))}
      </List>;
  }
}



// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    verticals: state.verticals.all,
    categories: state.categories.all,
  };
};
export default connect(mapStateToProps)(NestedList);
