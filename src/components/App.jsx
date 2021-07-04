import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function submitNote(note) {
    console.log("called me?");
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
    console.log(notes);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={submitNote} />
      {notes.map((anItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            onClicked={deleteNote}
            title={anItem.title}
            content={anItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
