import React from "react";
import * as ReactLeaflet from "react-leaflet";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
import SweetAlert from 'react-bootstrap-sweetalert';
import skilltexts from "./skilltexts.json";
import renderHTML from 'react-render-html'

const { Popup } = ReactLeaflet;

export default function MarkerPopup({ open, setOpen, id }) {

  var state = {
    skilltexts
  }

  function handleClick(id) {
    let sk = skilltexts.find(skilltext => skilltext.id === id)
    // console.log("handleClick called ", sk)

    this.setState({ alert: this.getSkillNotes(sk.skill, sk.notes) })

  };

  function getSkillNotes(skill, notes) {
    return < SweetAlert
      hideOverlay
      title={skill}
      info
      onConfirm={() => this.hideAlert()}
    >
      <div>
        {renderHTML(notes)}
      </div>
    </SweetAlert >
  }

  function hideAlert() {
    console.log("hiding alert")
    this.setState({
      alert: null
    })
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Popup autoPan={false}>

      <Modal
        show={open}
        onHide={handleClose.bind(this)}
        centered
        backdrop="static"
        size="lg"
      >
        <h3>{id}</h3>
        <p>Blah blah blah blah blah.</p>
        <p>Blah blah blah blah blah.</p>
        <p>Blah blah blah blah blah.</p>
        <p>Blah blah blah blah blah.</p>
        <Button onClick={handleClose.bind(this)}>Close</Button>
      </Modal>
    </Popup>
  );
}
