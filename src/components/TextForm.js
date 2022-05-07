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
    const handleCopyClick = () =>{
      navigator.clipboard.writeText(text);
      alert( text + ' Copied!')
    };
    const handleOnChange = (event) =>{
        setText(event.target.value);
    };
    const [text, setText] = useState ('');
  return (
      <>
    <div className="container" style = {{color:props.mode=== 'dark'? 'white':'#000a29'}}>
        <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" id="myBox" onChange = {handleOnChange} rows="8" value = {text} style = {{backgroundColor:props.mode=== 'dark'? '#000a29':'white', color:props.mode=== 'dark'? 'white':'#000a29'}}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick = {handlUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2" onClick = {handlLowClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
    </div>

    <div className="container my-4" style = {{color:props.mode=== 'dark'? 'white':'#000a29'}}>
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : 'Enter someting to preview here'}</p>
    </div>
    </>
  )
}
