import React, {useState} from 'react'
export default function TextForm(props) {
    const handlUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    };
    const handlLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    };
    const handleOnChange = (event) =>{
        setText(event.target.value);
    };
    const [text, setText] = useState ('');
  return (
      <>
    <div className="container">
        <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" id="myBox" onChange = {handleOnChange} rows="8" value = {text}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick = {handlUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2" onClick = {handlLowClick}>Convert To Lowercase</button>
    </div>

    <div className="container my-4">
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
