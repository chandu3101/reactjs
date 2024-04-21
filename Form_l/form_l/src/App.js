import logo from './logo.svg';
import './App.css';
import React, { createElement } from 'react';

function App() {
  return createElement(
    "div",
    {},
    React.createElement("h1", {}, "Employee Details"),
    React.createElement(
      "form", {},
      React.createElement(
        "div", { className: "firstName" },
        React.createElement(
          "label", { className: "tagName" ,for:"fName"}, "First Name : "
        ),

        React.createElement(
          "input", { className: "inputForm",  id:"fName" },
        ),
      ),
      React.createElement(
        "div", { className: "lastName" },

        React.createElement(
          "label", { className: "tagName", for:"lName" }, "Last Name : "
        ),
        React.createElement(
          "input", { className: "inputForm", id:"lName" },
        )
      ),
      React.createElement(
        "div", { className: "chooseGender" },
       
        React.createElement(
          "input", { className: "inputForm",type:"radio", id:"male", value:"m", name:"abx" },
        ),
        React.createElement("label",{className: "tagName", for:"male"},"Male"),
        React.createElement(
          "input", { className: "inputForm",type:"radio", id:"female", value:"f", name:"abx" },
        ),
        React.createElement("label",{className: "tagName", for:"female"},"Female"),
      ),

      React.createElement(
        "div", {className : "empID"},
        React.createElement(
          "label", {className:"tagName", for:"emp"},"Employee ID : "
        ),
        React.createElement(
          "input", {className:"inputForm", type:"text", id:"emp"}
        ),
      ),

      React.createElement(
        "div", {className:"designation"},
        React.createElement(
          "label",{className:"tagName", for:"desig"}, "Designation : ",
          React.createElement(
            "input", {className:"inputForm", id:"desig"}
          ),
        )
      ),

      React.createElement(
        "div",{className:"empPhone"},
        React.createElement(
          "label", {className:"tagName", for:"pno"},"Phone No : ",
          React.createElement(
            "input", {className : "inputForm", id:"pno"}
          )
        )
      ),

      React.createElement(
        "div", {className:"btnSubmit"},
        React.createElement(
          "button", {className:"submit"}, "Save"
        )
      )
    )

  
  );
}

export default App;
