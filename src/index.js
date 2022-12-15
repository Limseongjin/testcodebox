import React from "react";
import ReactDOM from "react-dom";
import { Button, TextField } from "@material-ui/core";

import UserFormClass from "./components/UserFormClass";
import UserFormFunction from "./components/UserFormFunction";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React Hooks - UserForm</h1>
      <h2>Using this.state</h2>
      <UserFormClass />
      <h2>Using setState()</h2>

      <UserFormFunction />
      <Button variant="text">버튼1</Button>
      <TextField>ddd</TextField>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
