import React, { Component } from "react";
import Testmap3 from "./Testmap3.js"
import Wrapper from "./Wrapper";
import Row from "./Row";
import Col from "./Col";
// import MyNavbar from "./MyNavbar";
import Jumbotron from "./Jumbotron";
import "./App.css";
import SweetAlert from 'react-bootstrap-sweetalert';
import skilltexts from "./skilltexts.json";
import renderHTML from 'react-render-html'

// import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.map2Element = React.createRef();
  }

  state = {}
  // state = {
  //   skilltexts
  // }


  handleClick = id => {
    let sk = skilltexts.find(skilltext => skilltext.id === id)
    console.log("handleClick called ", id)
    this.setState({
      alert: this.getSkillNotes(sk.skill, sk.notes),
    })
    this.map2Element.current.centerMapView2(id - 1)
  };

  getSkillNotes = (skill, notes) => (
    < SweetAlert
      hideOverlay
      title={skill}
      info
      onConfirm={() => this.hideAlert()}
    >
      <div>
        {renderHTML(notes)}
      </div>
    </SweetAlert >
  )

  hideAlert = () => {
    console.log("hiding alert")
    this.setState({
      alert: null
    })
  }

  render() {
    return (
      <Wrapper>
        {/* <MyNavbar /> */}
        <Jumbotron />
        <Row>
          <Col size='6'>
            <div style={{ backgroundColor: "#000" }}>
              <Testmap3 ref={this.map2Element} />
            </div>
          </Col>
          <Col size='6' className="myjumbo text-wrap">
            <h3>self.name = "Kasey Chang"</h3><br />
            <h3>self.legal_name = "Kuosheng Chang"</h3><br />
            <h3>self.status = "multi-phasic<br /> computer expert"</h3><br />
            <h3>self.skills = [<br /></h3>
            {skilltexts.map(skilltext => (
              <div key={skilltext.id}>
                {this.state.alert}
                <h3><a className="link" key={skilltext.id} onClick={() => this.handleClick(skilltext.id)}> {skilltext.skill} < br /></a></h3>
              </div>
            ))}
            <h3>... ]</h3><br />

            <h3><span onClick={() => this.handleClick(5)}>Something</span></h3>
          </Col>
        </Row>
      </Wrapper >
    );
  }
}

export default App;