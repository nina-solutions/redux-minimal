import React from"react";
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";

/**
 * USerDelete Component
 */
class UserDelete extends React.Component {

  /**
   * Constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.modalDeleteHide = this.modalDeleteHide.bind(this);
    this.userDelete = this.userDelete.bind(this);
  }

  /**
   * Render
   *
   * @returns {*}
   */
  render() {
    return (
      <Modal show={this.props.modal_delete.show}>
        <Modal.Header>
          <Modal.Title>Are you sure to delete&nbsp;<strong>{this.props.modal_delete.username}</strong></Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={this.modalDeleteHide}>No</Button>
          <Button onClick={this.userDelete} bsStyle="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  /**
   * modalDeleteHide
   *
   * @param event
   */
  modalDeleteHide(event) {
    this.props.dispatch({
      type: 'users.modalDeleteHide'
    });
  }

  /**
   * userDelete
   *
   * @param event
   */
  userDelete(event) {
    // remove the user
    this.props.dispatch({
      type: 'users.delete',
      id: this.props.modal_delete.id
    });


    // then close the modal
    this.props.dispatch({
      type: 'users.modalDeleteHide'
    });
  }
}




/**
 * mapStateToProps export the connected class
 * @param state
 * @returns {{modal_delete: {show: boolean, id: number, username: string}}}
 */
function mapStateToProps(state) {
  // set the date for the user delet model
  let modal_delete = {
    show: false,
    id: 0,
    username: ''
  };
  if (state.users.modal && state.users.modal.list_delete) {
    modal_delete = state.users.modal.list_delete;
  }
  return {
    modal_delete: modal_delete
  };

}

export default connect(mapStateToProps) (UserDelete);
