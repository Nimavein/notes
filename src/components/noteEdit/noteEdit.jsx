import React from "react";
import {
  NoteEditFormWrapper,
  EditNoteText,
  StyledEditForm,
  EditFormEntry,
  EditNoteFormLabel,
  EditNoteFormInput,
  EditNoteFormSelect,
  EditNoteFormOption,
  EditNoteFormSubmitButton,
  EditNoteFormCancelButton,
  EditButtonsWrapper,
} from "./NoteEdit.styles";
import { useForm } from "react-hook-form";
import { Divider } from "../noteForm/NoteForm.styles";

const NoteEdit = ({ notes, setNotes, note, setIsEditFormVisible }) => {
  const { register, handleSubmit, reset } = useForm();

  const editNote = (id) => {
    // const editedNote = notes.find((note) => note.id === id)
    // console.log(editedNote);
  };

  const colorsToSelect = [
    { name: "Bisque", code: "#FFE4C4" },
    { name: "Brown", code: "#A52A2A" },
    { name: "Cadet Blue", code: "#5F9EA0" },
    { name: "Coral", code: "#FF7F50" },
    { name: "Crimson", code: "#DC143C" },
    { name: "Dark Blue", code: "#00008B" },
    { name: "Dark Magenta", code: "#8B008B" },
    { name: "Gold", code: "#FF8C00" },
    { name: "Dark Sea Green", code: "#8FBC8F" },
  ];

  const onSubmit = (data) => {
    const editedNote = {
      title: data.title,
      description: data.description,
      color: data.color,
      id: note.id,
    };
    const editedNotes = notes.map((mapNote) =>
      note.id === mapNote.id ? editedNote : note
    );
    setNotes(editedNotes);
    reset();
    console.log(notes);
  };

  return (
    <NoteEditFormWrapper>
      <EditNoteText>Edit note</EditNoteText>
      <Divider />
      <StyledEditForm onSubmit={handleSubmit(onSubmit)}>
        <EditFormEntry>
          <EditNoteFormLabel>Title</EditNoteFormLabel>
          <EditNoteFormInput
            placeholder="Enter title"
            {...register("title")}
            name="title"
            required
          />
        </EditFormEntry>
        <EditFormEntry>
          <EditNoteFormLabel>Description</EditNoteFormLabel>
          <EditNoteFormInput
            placeholder="Enter description"
            {...register("description")}
            name="description"
            required
          />
        </EditFormEntry>
        <EditFormEntry>
          <EditNoteFormLabel>Note color</EditNoteFormLabel>
          <EditNoteFormSelect {...register("color")} name="color" required>
            <EditNoteFormOption value>Select color</EditNoteFormOption>
            {colorsToSelect.map((color) => {
              return (
                <EditNoteFormOption value={color.code} key={color.name}>
                  {color.name}
                </EditNoteFormOption>
              );
            })}
          </EditNoteFormSelect>
        </EditFormEntry>
        <EditButtonsWrapper>
          <EditNoteFormSubmitButton type="submit">
            Edit
          </EditNoteFormSubmitButton>
          <EditNoteFormCancelButton onClick={() => setIsEditFormVisible(false)}>
            Cancel
          </EditNoteFormCancelButton>
        </EditButtonsWrapper>
      </StyledEditForm>
    </NoteEditFormWrapper>
  );
};

export default NoteEdit;
