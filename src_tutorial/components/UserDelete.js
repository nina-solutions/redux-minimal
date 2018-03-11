import React from"react";
import {Button, Modal} from "react-bootstrap";

/**
 * USerDelete Component
 */
export default class UserDelete extends React.Component {

  /**
   * Render
   *
   * @returns {*}
   */
  render() {
    return (
      <Modal>
        <Modal.Header>
          <Modal.Title>Are you sure to delete <strong>useruser</strong></Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button>No</Button>
          <Button bStyle="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    )
  }

}
