import React from "react";
import * as ReactLeaflet from "react-leaflet";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
import SweetAlert from 'react-bootstrap-sweetalert';
import skilltexts from "./skilltexts.json";
import renderHTML from 'react-render-html'

const { Popup } = ReactLeaflet;

export default function MarkerPopup2({ position, skill, notes }) {

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

  return (
    <Popup autoPan={false}>
    </Popup>
  );
}
