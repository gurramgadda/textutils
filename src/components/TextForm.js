import { getByPlaceholderText } from "@testing-library/react";
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //Use setText function to change the state
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase","success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared the Text","success");
  };
  const handleCopyText =()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard","success")
  };
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces","success")
  }
  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter your Text"
            value={text}
            onChange={handleOnChange}
            id="TextBox"
            rows="8"
            style = {{backgroundColor : props.mode === 'dark'? 'lightgrey':'white' ,resize : 'none'}}
          ></textarea>
        </div>
        <button disabled={text.split(/\s+/).filter((element)=>{return element != 0}).length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.split(/\s+/).filter((element)=>{return element != 0}).length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.split(/\s+/).filter((element)=>{return element != 0}).length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.split(/\s+/).filter((element)=>{return element != 0}).length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>
          Copy Text
        </button>
        <button disabled={text.split(/\s+/).filter((element)=>{return element != 0}).length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" mode = {props.mode} >
        <h3>Your text summary</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element != 0}).length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element != 0}).length} Minutes Read</p>
        <div className="container my-3">
          <h3>Preview</h3>
          <p>{text.length >0 ? text:"Enter text in the above box to preview here"}</p>
        </div>
      </div>
    </>
  );
}
