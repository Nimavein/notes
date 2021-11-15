import React from "react";
import {
  NoteDescription,
  NoteTitle,
  NoteWrapper,
  NoteButtons,
  NoteEditButton,
  NoteDeleteButton,
} from "./Note.styles";

const Note = ({ note, setNotes, notes }) => {
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  console.log(note);
  return (
    <NoteWrapper noteColor={note.color}>
      <NoteTitle>{note.title}</NoteTitle>
      <NoteDescription>{note.description}</NoteDescription>
      <NoteButtons>
        <NoteEditButton>Edit</NoteEditButton>
        <NoteDeleteButton onClick={() => deleteNote(note.id)}>
          Delete
        </NoteDeleteButton>
      </NoteButtons>
    </NoteWrapper>
  );
};

export default Note;
