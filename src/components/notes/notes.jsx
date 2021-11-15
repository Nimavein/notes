import React from "react";
import Note from "../note/Note";
import { NotesWrapper } from "./Notes.styles";

const Notes = ({ notes }) => {
  return (
    <NotesWrapper>
      {notes.map((note) => {
        return <Note key={note.title} note={note} />;
      })}
    </NotesWrapper>
  );
};

export default Notes;
