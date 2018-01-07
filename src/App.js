import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Vertical from "./components/Vertical";
import Category from "./components/Category";
import Course from "./components/Course";
import { connect } from "react-redux";
import * as Actions from "./actions/Actions";

class App extends Component {
  setVertical(vertical) {
    const dispatch = this.props.dispatch;
    dispatch(Actions.setCurrentVertical(vertical));
  }
  setCategory(Category) {
    const dispatch = this.props.dispatch;
    dispatch(Actions.setCurrentCategory(Category));
  }
  render() {
    return (
      <div className="App">
        {this.props.verticals.map(vertical => (
          <Vertical
            key={vertical.Id}
            vertical={vertical}
            onClick={vertical => {
              this.setVertical(vertical);
            }}
          />
        ))}
        {this.props.filteredCategories &&
          this.props.filteredCategories.map(category => (
            <Category
              key={category.Id}
              category={category}
              onClick={category => {
                this.setCategory(category);
              }}
            />
          ))}
        {this.props.filteredCourses.map(course => (
          <Course key={course.Id} name={course.Name} />
        ))}
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    verticals: state.verticals.all,
    currentVertical: state.verticals.currentVertical,
    categories: state.categories.all,
    currentCategory: state.categories.currentCategory,
    filteredCategories: state.categories.filteredCategories,
    filteredCourses: state.courses.filteredCourses,
    currentCourse: state.courses.currentCourse
  };
};
export default connect(mapStateToProps)(App);
