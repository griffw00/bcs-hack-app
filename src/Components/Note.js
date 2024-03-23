// A note will contain a header which is passed as a prop
// The header is just the text from the PDF
// Probably need a button that adds a new item to the list, this can be your text

import React from "react";

function Note({ text }) {
  return (
    <div className="notes-div">
      <h1>{text}</h1>
      <button classname="add-note"></button>
    </div>
  );
}

export default Note;
