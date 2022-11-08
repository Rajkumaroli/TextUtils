import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  //For to convert uppercase
  const upperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted Upper Case", "success");
  };

  //For to convert Lowercase
  const lowerCase = () => {
    const newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Text Converted Lower Case", "success");
  };
  //For clear All text
  const clearText = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Clear all text..", "success");
  };
  //For copy Text
  const copyText = ()=>{
    const text = document.getElementById("textValue");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text is copy....", "success");
  }
  //For Remove Extra Space
  const spaceRemove = ()=>{
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Remove...", "success");
  }

  //Handle onchage() Event here
  const changeHandle = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h2>{props.heading}</h2>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Enter the text below:
            </label>
            <textarea
              className="form-control"
              style={props.mode=='light' ? {backgroundColor:"#fff",color:"black"}:{backgroundColor:"#16003B",color:"#fff"}}
              id="textValue"
              value={text}
              onChange={changeHandle}
              rows="8"
            ></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-4" onClick={upperCase}>
              Convert Uppercase
            </button>
            <button disabled={text.length===0} className="btn btn-primary my-4 mx-3" onClick={lowerCase}>
              Convert Uppercase
            </button>
            <button disabled={text.length===0} className="btn btn-primary my-4 mx-3" onClick={clearText}>
              Clear Text
            </button>
            <button disabled={text.length===0} className="btn btn-primary my-4 mx-3" onClick={copyText}>
              Copy Text
            </button>
            <button disabled={text.length===0} className="btn btn-primary my-4 mx-3" onClick={spaceRemove}>
              Extra Space Remove
            </button>
          </div>
        </div>

        <div className="container">
          <h2>Your Text Summary</h2>
          <p>
            Total words {text.split(" ").filter((e1)=>e1.length!==0).length} and Total Character {" "}
            {text.length} and Consume {0.008 * text.split(" ").filter((e1)=>e1.length!==0).length} Minutes for Read text
          </p>
          <h2>Preview:</h2>
          <p>{text=='' ? "Nothing to Preview.........." : text}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
