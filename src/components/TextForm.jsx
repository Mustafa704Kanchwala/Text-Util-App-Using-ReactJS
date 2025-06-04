/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

function TextForm(props) {
    
    
    const [paragraph , setText] = useState("");

 
    const cnvrtUpprCase = ()=>{
        let upprText = paragraph.toUpperCase();
        setText(upprText);
        props.showAlert(" :Converted to upper-case successfully","success")
    }

    const cnvrtLwrCase = ()=>{
        let lwrText = paragraph.toLowerCase()
        setText(lwrText);
        props.showAlert(" :Converted to lower-case successfully" , "success");
    }

    const handleOnChange = ()=>{
        setText(event.target.value);
    }
    const clrText = ()=>{
        setText("");
        props.showAlert(" :Text cleared successfully" , "success");
    }
    const cpyText = ()=>{
        let newText = document.getElementById("pBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert(" :Text copied successfully" , "success");
    }
    const rmvSpaces = ()=>{
        let newText = paragraph.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" :Spaces removed successfully" , "success");
    }
    return (
        
        
        <>
        <div className="container"> 
            <label htmlFor="floatingTextarea">Paragraph:</label>

            <div className="mb-3">    
                <textarea className="form-control" value={paragraph} onChange={handleOnChange} id="pBox" placeholder='Enter something to read' rows={8}></textarea>
            </div>                
                <button className="btn btn-primary mx-1" onClick={cnvrtUpprCase} >Covert into Upper Case </button>
                <button className="btn btn-primary mx-1" onClick={cnvrtLwrCase}>Convert into Lower-case</button>
                <button className="btn btn-primary mx-1" onClick={clrText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={cpyText}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={rmvSpaces}>Remove Spaces</button>
                <hr />
            </div>

        <div className="container my-2">
            <h1>Your Paragraph summary:-</h1><br />
                <b>Characters:- </b>{paragraph.length} <br />
                <b>Words:- </b>{paragraph.split(" ").length - 1}<br />
                <b>Minutes to read </b>{0.008 * paragraph.split(" ").length} <br /><br /><hr />
                <h2>Preview:</h2>
                {paragraph}
        </div>
        
        </>
    )
}

export default TextForm
