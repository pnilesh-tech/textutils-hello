import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }
    const handleloClick = () => {
      // console.log("lower case was clicked" + text);
      let newText= text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase","Success");
    }
    const handleclearClick = () => {
      // console.log("lower case was clicked" + text);
      let newText= " "
      setText(newText)
      props.showAlert("Text has been remved","Success");
    }
    const handlecopyClick = () =>{
      console.log("I am copy")
      var text=document.getElementById("MyBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copy to clipboard","Success");
     
    }
    const handleExtraSpaces = () =>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert(" extra spaces Remove","Success")

    }
    const handleOnChange = (event) => {
        console.log("onChange was clicked");
        // setText(Event.target.value);
      
        setText(event.target.value);
    }


  const[text, setText] = useState(" ");

  return (
    <>
    <div className="container" style= {{color:props.mode ==='dark'?'white':'#042743'}}>
    <h1>{props.heading} </h1>
    <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'#042743'}} id="MyBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleloClick}>convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear text</button>
    <button className="btn btn-primary mx-2" onClick={handlecopyClick}>Copy text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  
    </div>

    <div className="container my-3" style= {{color:props.mode ==='dark'?'white':'#042743'}}>
    <h2> Your text summmary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.lenth>0?text:"Enter here something to get preview"}</p>
    </div>
    </>
  )
}
