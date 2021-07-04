import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [boool, setBoool] = useState(false);

  function expand() {
    setBoool(true);
  }

  function createNote(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function addNote(event) {
    event.preventDefault();
    console.log(note);

    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          type={boool ? "text" : "hidden"}
          onChange={createNote}
          value={note.title}
          name="title"
          placeholder="Title"
        />

        <textarea
          onClick={expand}
          onChange={createNote}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={boool ? "3" : "1"}
        />
        <Zoom in={boool ? true : false}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
