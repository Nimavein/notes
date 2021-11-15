import React from "react";
import {
  StyledNoteForm,
  NoteFormInput,
  NoteFormLabel,
  NoteFormSubmitButton,
  NoteFormOption,
  NoteFormSelect,
  FormEntry,
  CreateNoteText,
  Divider,
  CreateNoteSectionWrapper,
} from "./NoteForm.styles";
import { useForm } from "react-hook-form";

const NoteForm = ({ setSelectedColor }) => {
  const { register, handleSubmit, reset } = useForm();

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
    setSelectedColor(data.color);
    console.log(data);
    reset();
  };

  return (
    <CreateNoteSectionWrapper>
      <CreateNoteText>Create new note</CreateNoteText>
      <Divider />
      <StyledNoteForm onSubmit={handleSubmit(onSubmit)}>
        <FormEntry>
          <NoteFormLabel>Title</NoteFormLabel>
          <NoteFormInput {...register("title")} name="title" required />
        </FormEntry>
        <FormEntry>
          <NoteFormLabel>Description</NoteFormLabel>
          <NoteFormInput
            {...register("description")}
            name="description"
            required
          />
        </FormEntry>
        <FormEntry>
          <NoteFormLabel>Note color</NoteFormLabel>
          <NoteFormSelect {...register("color")} name="color" required>
            <NoteFormOption>Select color</NoteFormOption>
            {colorsToSelect.map((color) => {
              return (
                <NoteFormOption value={color.code} key={color.name}>
                  {color.name}
                </NoteFormOption>
              );
            })}
          </NoteFormSelect>
        </FormEntry>
        <NoteFormSubmitButton>Submit</NoteFormSubmitButton>
      </StyledNoteForm>
    </CreateNoteSectionWrapper>
  );
};

export default NoteForm;
