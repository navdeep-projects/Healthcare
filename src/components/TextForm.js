import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm( props) {
    const handlerClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.setAppAlert("Text Uppercase","success");
        document.title = "HealthCare - Uppercase";
    }

    const handlerloClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.setAppAlert("Text Lowercase","success");
        document.title = "HealthCare - Lowercase";
    }

    const handleronChange = (event) => {
        setText(event.target.value);
    }

    const handleRedundancy = ()=> { 
        let set1 = new Set(text.split(" "));          
        let newText = Array.from(set1).join(" ");
        setText(newText);
        props.setAppAlert("Duplicate Text removed.","success");
   }

    const [text,setText] = useState('Enter text here.');
    
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="my-3 form-control" value={text} onChange={handleronChange} id="mybox" rows="6" />
                </div>
                <p className="container my-3"></p>
                <button className="btn btn-primary mx-2 " onClick={handlerClick} >Convert to upper</button>
                <span>&nbsp;&nbsp;</span>
                <button className="btn btn-primary mx-2 " onClick={handlerloClick} >Convert to lower</button>
                <span>&nbsp;&nbsp;</span>
                <button className="btn btn-primary mx-2 " onClick={handleRedundancy} >Remove Redundant Words</button>
            </div>
            <div className="container my-3">
                <h1>Your test Summary</h1> 
                <p>{text.split(" ").length} words, {text.length} character</p>
                <p>{0.08*text.split(" ").length} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter some text in above text area  to preview"}</p>
            </div>
            
            
        </>
    )
   
}

TextForm.propTypes = {
    heading : PropTypes.string
}

TextForm.defaultProps = {
    heading : 'Enter Text to Analyze'
}