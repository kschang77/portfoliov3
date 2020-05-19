import React from "react";


function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container myjumbo">{props.children}
        {/* <h3>console.log('Hello')</h3>
        <h3>Self = Kasey Chang</h3>
        <h3>Status = "multi-phasic computer expert"</h3>
        <h3>Summary = ["fullstack developer", "IT support specialist", "data/base engineer", "other", "contact"... ]</h3> */}

        <h3 className="typewriter">Hello there. Let me introduce myself.</h3>
      </div>
    </div>
  )
}

export default Jumbotron;