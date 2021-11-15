import { useState } from "react";
import NoteForm from "./components/noteForm/NoteForm";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <>
      <NoteForm setSelectedColor={setSelectedColor} />
    </>
  );
};

export default App;
