import React ,{useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was Clicked"+text)
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = ()=>{
        // console.log("UpperCase was Clicked"+text)
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
        setText('');
    }
    const handleOnChange = (event)=>{
        // console.log("onchange")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // setText("newText");

    const handleCopy = ()=>{
        let typedText = document.getElementById('mybox');
        typedText.select();
        navigator.clipboard.writeText(typedText.value);

    }
    const removeExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

    }
  return (
   <>
   <div>
    <div className="mb-3">
        <h1 style={{color: props.clr==='light'?'white':'black'}}>{props.heading}</h1>
        <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="8"  style={{backgroundColor: props.clr==='light'?'grey':'white',color:props.clr==='light'?'white':'black',border:props.clr==='dark'?'1px solid black':'1px solid grey'}}></textarea>    
    </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear TextField</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.clr==='light'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Type Something in the textbox above to preview it here...."}</p>
    </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
}

