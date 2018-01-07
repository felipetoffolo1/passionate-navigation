import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Course from "../components/Course";
import NestedList from "../containers/NestedList";

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <NestedList />
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div className="cards">
              {this.props.filteredCourses.map(course => (
                <Course key={course.Id} course={course} />
              ))}
            </div>
          </MuiThemeProvider>
        </div>
      </MuiThemeProvider>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    filteredCourses: state.courses.filteredCourses,
  };
};
export default connect(mapStateToProps)(App);
