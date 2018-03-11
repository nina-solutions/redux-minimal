import React from"react";
import {Button, Glyphicon} from "react-bootstrap";
import {connect} from "react-redux";

/**
 * User List Element component
 */
class UserListElement extends React.Component {

  /**
   * constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.modalDeleteShow = this.modalDeleteShow.bind(this);
  }
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
        <Button
          bsSize="xsmall"
          data-id={user.id}
          data-username={user.username}
          onClick={this.modalDeleteShow}>Delete <Glyphicon glyph="remove-circle"/>
        </Button></td>
    </tr>
  }

  /**
   * Prompt to delete user
   * @param event
   */
  modalDeleteShow (event) {
    const id = Number(event.target.data.id);
    const username = event.target.data.username;
    this.props.dispatch({
      type: 'users.modalDeleteShow',
      id: id,
      username: username
    })
  }
}

// make sure user is passed to this compoment
UserListElement.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default connect()(UserListElement);
