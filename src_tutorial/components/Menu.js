import React from"react";
import UserList from "./UserList";
import {Glyphicon, Nav, NavItem} from "react-bootstrap";
import {IndexLinkContainer} from "react-router-bootstrap";

/**
 *
 */
export default class Menu extends React.Component {


  /**
   *
   * @returns {UserList}
   */
  render() {
    return (<Nav bsStyle="pills">
      <IndexLinkContainer to="/">
        <NavItem>Home</NavItem>
      </IndexLinkContainer>
      <IndexLinkContainer to="/user-edit">
        <NavItem>Add User <Glyphicon glyph="plus-sign"/></NavItem>
      </IndexLinkContainer>
    </Nav>);

  }
}
