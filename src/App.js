import React from "react";
import Testmap from "./Testmap.js"
import Wrapper from "./Wrapper";
import Row from "./Row";
import Col from "./Col";
import MyNavbar from "./MyNavbar";
import Jumbotron from "./Jumbotron";
import "./App.css";

export default function App() {

  return (
    <Wrapper>
      <MyNavbar />
      <Jumbotron />
      <Row>
        <Col size='8'>
          <div style={{ backgroundColor: "#000" }}>
            <Testmap />
          </div>
        </Col>
        <Col size='4' className="myjumbo text-wrap">
          <h3>console.log('Hello')</h3><br />
          <h3>Self = "Kasey Chang"</h3><br />
          <h3>Status = "multi-phasic<br /> computer expert"</h3><br />
          <h3>Skill_Summary = [<br />"fullstack developer",<br /> "IT support specialist",<br /> "data/base engineer",<br /> "other interests",<br /> "contact me"<br />... ]</h3></Col>
      </Row>
    </Wrapper>
  );
}
