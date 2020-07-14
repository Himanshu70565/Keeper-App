import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState("false");
  const [rows, setRows] = useState(1);

  const [note, setNote] = useState({ title: "", content: "" });

  function handleTitle(event) {
    let newTitle = event.target.value;
    setNote(prevValue => {
      return { title: newTitle, content: prevValue.content };
    });
  }

  function handleTextArea(event) {
    let newContent = event.target.value;
    setNote(prevValue => {
      return { title: prevValue.title, content: newContent };
    });
  }

  function handleClick(event) {
    props.onClicked(note);
    event.preventDefault();
  }

  function expander() {
    setExpanded("true");
    setRows(3);
  }

  return (
    <div>
      <form onSubmit={handleClick} className="create-note">
        {isExpanded === "true" ? (
          <input
            onChange={handleTitle}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        ) : null}

        <textarea
          onChange={handleTextArea}
          onClick={expander}
          name="content"
          placeholder="Take a note..."
          rows={rows}
          value={note.content}
        />
        <Zoom in={true}>
          <Fab type="submit">
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
