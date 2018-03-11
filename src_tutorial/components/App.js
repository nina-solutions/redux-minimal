import React from"react";
import UserList from "./UserList";

/**
 *
 */
export default class App extends React.Component {

  /**
   *
   * @param props
   */
  constructor(props){
    super(props);

    // build users list
    const users = [];
    for (let i=1; i < 10; i++) {
      users.push({
        id: i,
        username: "JK " + i,
        job: "Emp " + i
      });
    }

    this.state = {
      users: users
    }
  }

  /**
   *
   * @returns {UserList}
   */
  render() {
    return (<UserList users={this.state.users}/>);

  }
}
