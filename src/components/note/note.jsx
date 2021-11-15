import React, { useState } from "react";
import NoteEdit from "../noteEdit/NoteEdit";
import {
  NoteDescription,
  NoteTitle,
  NoteWrapper,
  NoteButtons,
  NoteEditButton,
  NoteDeleteButton,
} from "./Note.styles";

const Note = ({ note, setNotes, notes }) => {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = () => {
    setIsEditFormVisible(true);
  };

  console.log(note);
  return (
    <>
      {isEditFormVisible && (
        <NoteEdit
          note={note}
          setNotes={setNotes}
          notes={notes}
          setIsEditFormVisible={setIsEditFormVisible}
        />
      )}
      <NoteWrapper noteColor={note.color}>
        <NoteTitle>{note.title}</NoteTitle>
        <NoteDescription>{note.description}</NoteDescription>
        <NoteButtons>
          <NoteEditButton onClick={() => editNote()}>Edit</NoteEditButton>
          <NoteDeleteButton onClick={() => deleteNote(note.id)}>
            Delete
          </NoteDeleteButton>
        </NoteButtons>
      </NoteWrapper>
    </>
  );
};

export default Note;
