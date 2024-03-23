// Each NotesList will contain Notes component
// Need to pass in address as a prop
// Need to pass in data as a prop
// We need to map each note into an ul

import React from "react";

function NotesList({ notes, address, text }) {
  return <Note text={text} />;
}

export default NotesList;
