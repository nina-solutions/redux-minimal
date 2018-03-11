import React from"react";
import UserListElement from "./UserListElement";
import {connect} from "react-redux";
import {Pagination, Table} from "react-bootstrap";
import UserDelete from "./UserDelete";
import {push} from "react-router-redux"


class UserList extends React.Component {

  /**
   * constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  render () {
    // pagination
    const ppage = 5;
    const pages = Math.ceil(this.props.users.length / ppage);

    const current_page = this.props.page;

    const start_offset = (current_page - 1 ) * ppage;
    let start_count = 0;

    let paginations = [];
    for (let number = 1; number <= pages; number++) {
      paginations.push(
        <Pagination.Item active={number === current_page} key={number} data-page={number}>{number}</Pagination.Item>
      );
    }


    //render
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
              if (i >= start_offset && start_count < ppage) {
                start_count++;
                return (<UserListElement key={user.id} user={user}/>)
              }
            })
          }
          </tbody>
        </Table>

        <Pagination className='users-pagination pull-right' bsSize="medium" onClick={this.changePage}>
          {paginations}
        </Pagination>

        <UserDelete/>
      </div>
    );
  }

  changePage(e) {
    const page = e.target.dataset.page;
    this.props.dispatch(push('/?page='+page));
  }
}

// Export the connected class
function mapStateToProps(state) {
  return ({
    users: state.users.list,
    page: Number(state.routing.locationBeforeTransitions.query.page || 1)
  })
}
export default connect(mapStateToProps) (UserList);
