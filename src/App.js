import { React, useState }from 'react';
import './App.css';
import PDFViewer from './Components/pdfview';

function App() {

  const [highlighted, setHighlighter] = useState(null); 


  return (
    <div className="App">

      <PDFViewer pdfUrl="./pdfs/Review-1.pdf"></PDFViewer>

    </div>
  );
}

export default App;
