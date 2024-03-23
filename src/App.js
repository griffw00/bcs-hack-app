import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  return <NotesList notes={notes} address={address} text={text} />;
}

export default App;
