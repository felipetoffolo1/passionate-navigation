import React from "react";
import {Card, CardHeader} from 'material-ui/Card';
import PropTypes from "prop-types";

/**
 * Course ui component
 * @param {*} props 
 */
export const Course = props => (
  <Card>
    <CardHeader
      title={props.course.Name}
      subtitle={props.course.Author}
      avatar={`https://api.adorable.io/avatars/150/${props.course.Id}.png`}
    />
  </Card>
);
Course.propTypes = {
  //** The course object */
  course: PropTypes.object.isRequired
};

export default Course;