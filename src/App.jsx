import { useState } from "react";
import NoteForm from "./components/noteForm/NoteForm";
import Notes from "./components/notes/Notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  return (
    <>
      <NoteForm setNotes={setNotes} notes={notes} />
      <Notes notes={notes} setNotes={setNotes} />
    </>
  );
};

export default App;
