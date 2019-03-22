import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Facebook, Google, Twitter, Mail } from "react-social-sharing";

class Share extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };
  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Share
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Share</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Facebook link={window.location.href} />
            <Google link={window.location.href} />
            <Twitter link={window.location.href} />
            <Mail link={window.location.href} />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Share;
