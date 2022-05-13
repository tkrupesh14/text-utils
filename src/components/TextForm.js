import React, {useState} from 'react'
export default function TextForm(props) {



    const handlUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success");
      };
      const handlLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success");
      };
      const handleCopyClick = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied", "success");
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
<button className="btn btn-primary mx-2 my-1" disabled = {text.length===0} onClick = {handlUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2 my-1" disabled = {text.length===0} onClick = {handlLowClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2 my-1" disabled = {text.length===0} onClick={handleCopyClick}>Copy Text</button>
    </div>

    <div className="container my-4" style = {{color:props.mode=== 'dark'? 'white':'#000a29'}}>
        <h1>Your Text Summery</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : 'nothing to preview'}</p>
    </div>
    </>
  )
}
