import React from"react";

import {Button, Col, Form, FormControl, FormGroup, Glyphicon, InputGroup, PageHeader} from 'react-bootstrap'
import {Field, reduxForm} from "redux-form";

/**
 * USerEdit component
 */
class UserEdit extends React.Component {

  /**
   * Render
   *
   * @returns {*}
   */
  render() {
    return (
      <div>
        <PageHeader>User Add/Edit</PageHeader>
        <Form horizontal>
          <Field name="username" component={UserEdit.renderUsername}/>
          <Field name="job" component={UserEdit.renderJob}/>
          <FormGroup>
            <Col smOffset={2} sm={2}>
              <Button type="submit">Save</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }

  /**
   * Render the field for username
   * @param props
   * @returns {*}
   */
  static renderUsername(props) {
    return (
      <FormGroup>
        <Col sm={2}>Username</Col>
        <Col sm={8}>
          <FormControl {...props.input} id='username' type="text" placeholder="Username"/>
        </Col>
      </FormGroup>
    )
  }

  /**
   * Render the field for job
   * @param props
   * @returns {*}
   */
  static renderJob(props) {
    return (
      <FormGroup>
        <Col sm={2}>Job</Col>
        <Col sm={8}>
          <InputGroup>
            <FormControl {...props.input} id='job' type="text" placeholder="Job"/>
            <InputGroup.Addon>
              <Glyphicon glyph="briefcase"/>
            </InputGroup.Addon>
          </InputGroup>
        </Col>
      </FormGroup>
    )
  }
}

//decorate the form component
export default UserEdit = reduxForm({
  form: 'user_edit'
})(UserEdit)
