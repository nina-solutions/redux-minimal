import React from"react";
import UserListElement from "./UserListElement";
import {connect} from "react-redux";
import {Table} from "react-bootstrap";
import UserDelete from "./UserDelete";


class UserList extends React.Component {
  render () {
    return (
      <div>
        <Table bordered hover responsive striped>
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
        </Table>

        <UserDelete/>
      </div>
    );
  }
}

// Export the connected class
function mapStateToProps(state) {
  return ({
    users: state.users.list
  })
}
export default connect(mapStateToProps) (UserList);
