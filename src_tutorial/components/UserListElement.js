import React from"react";

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
      <td><a href={'user-edit/' + user.id}>Edit</a></td>
      <td><button data-id={user.id}>Delete</button></td>
    </tr>
  }
}

// make sure user is passed to this compoment
UserListElement.propTypes = {
  user: React.PropTypes.object.isRequired
};
