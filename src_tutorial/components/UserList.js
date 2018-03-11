import React from"react";
import UserListElement from "./UserListElement";
import {connect} from "react-redux";

class UserList extends React.Component {
  render () {
    return (
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Job</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {
          this.props.users.map((user, i) => {
            return (<UserListElement key={user.id} user={user}/>)
          })
        }
        </tbody>
      </table>
    );
  }
}

// Export the connected class
function mapStateToProps(state) {
  return ({
    users: state.users
  })
}
export default connect(mapStateToProps) (UserList);
