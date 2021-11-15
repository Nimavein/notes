import React from "react";
import Note from "../note/Note";
import { Divider } from "../noteForm/NoteForm.styles";
import { NotesWrapper, YourNotesText } from "./Notes.styles";

const Notes = ({ notes, setNotes }) => {
  return (
    <>
      {notes.length > 0 && (
        <>
          <YourNotesText>Your notes</YourNotesText>
          <Divider />
        </>
      )}

      <NotesWrapper>
        {notes.map((note) => {
          return (
            <Note key={note.id} note={note} setNotes={setNotes} notes={notes} />
          );
        })}
      </NotesWrapper>
    </>
  );
};

export default Notes;
