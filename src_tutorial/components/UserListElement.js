import React from"react";
import {Button, Glyphicon} from "react-bootstrap";

/**
 * User List Element component
 */
export default class UserListElement extends React.Component {
  /**
   *
   * @returns {*}
   */
  render () {
    const user = this.props.user;

    return <tr key={user.id}>
      <td>#{user.id}</td>
      <td>{user.username}</td>
      <td>{user.job}</td>
      <td>
        <a href={'user-edit/' + user.id}>
          <Button bsSize="xsmall">Edit <Glyphicon glyph="edit"/></Button></a>
      </td>
      <td>
        <Button bsSize="xsmall" data-id={user.id}>Delete <Glyphicon glyph="remove-circle"/></Button></td>
    </tr>
  }
}

// make sure user is passed to this compoment
UserListElement.propTypes = {
  user: React.PropTypes.object.isRequired
};
