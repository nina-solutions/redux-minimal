import React from"react";

import UserList from '../components/UserList';

/**
 * Homepage component
 */
export default class Home extends React.Component {

  /**
   * Render
   *
   * @returns {*}
   */
  render() {
    return (
      <div>
        <UserList/>
      </div>
    )
  }
}
