
import digestiveImage from "../Images/digestive system.png"
import React, { useState} from "react"
import "./anatomy.css";

export function Anatomy() {
    
    const [textBoxText, setTextBoxText] = useState("");
  const [textBoxText2, setTextBoxText2] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });



  function handleMouseLeave() { 
    setTextBoxText("");
    setTextBoxText2("");
  }


    function handleMouseEnterHeart() {
        setTextBoxText("Heart");
        setTextBoxText2("The Heart pumps blood throught out the body. It sends blood without oxygen to the lungs, and then gets the blood now with oxygen back from the lungs and sends it to the body");

    }

    function handleMouseEnterIntestines() {
        setTextBoxText("Intestines");
        setTextBoxText2("There are 2 intestine systems! The small intestine where alot of nutrients from your food is absorbed into the body, and the large intestine where the leftover food is turned into waste");

    }

    function handleMouseEnterLiver() {
        setTextBoxText("Liver");
        setTextBoxText2("The Liver is very important in making sure our body functions properly. It creates special proteins called enzymes that help break down food and help remove toxic chemicals that we might have eaten");
    }

    function handleMouseEnterLungs() {
        setTextBoxText("Lungs");
        setTextBoxText2("The Lungs take oxygen from the air we breathe in and give it to our red blood cells. They also remove carbon dioxide from our read blood cells when we breathe out");

    }

    function handleMouseEnterStomach() {
        setTextBoxText("Stomach");
        setTextBoxText2("The Stomach helps break down our food into a mush call chyme, which makes it easier for our body to absorb nutrients");
        
    }

    function handleMouseMove(event) {
        setMousePosition({ x: event.clientX, y: event.clientY });
    }

    function clickedBody() {

    }

    return (
        <div className="anatomy-container" onMouseMove={handleMouseMove}> {/* Apply CSS class for container */}
            

            <div className="title-container">
            <h1> Let's learn about the body!</h1>
            <p>Hover over a body system to learn more!!</p> 
            </div>
            <div className="textbox" style={{ top: mousePosition.y, left: mousePosition.x }}>
          {textBoxText}
        </div>
        <div className="textboxRight">{textBoxText2}</div>

            <div className="image-container"> {/* Apply CSS class for image container */}
            <img src={digestiveImage} width="326" height="600" alt="Inside Body" />
            <button
            onMouseEnter={handleMouseEnterLungs}
            onMouseLeave={handleMouseLeave}
            onClick={clickedBody} className="buttonlungs">Lungs</button>
            
            <button
            onMouseEnter={handleMouseEnterHeart}
            onMouseLeave={handleMouseLeave}
            onClick={clickedBody} className="buttonheart">Heart</button>

<button
            onMouseEnter={handleMouseEnterLiver}
            onMouseLeave={handleMouseLeave}
            onClick={clickedBody} className="buttonliver">Liver</button>

<button
            onMouseEnter={handleMouseEnterStomach}
            onMouseLeave={handleMouseLeave}
            onClick={clickedBody} className="buttonstomach">Stomach</button>



<button
            onMouseEnter={handleMouseEnterIntestines}
            onMouseLeave={handleMouseLeave}
            onClick={clickedBody} className="buttonintestines">Intestines</button>


            </div>

           
        </div>
    );
}


