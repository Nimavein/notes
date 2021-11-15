import React, { useEffect, useState } from "react";
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

const NoteForm = ({ setNotes, notes }) => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    let submitSuccessfulTimer = setTimeout(
      () => setIsSubmitSuccessful(false),
      4000
    );
    return () => {
      clearTimeout(submitSuccessfulTimer);
    };
  }, [isSubmitSuccessful]);

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
    setIsSubmitSuccessful(true);
    setNotes([...notes, data]);
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
            <NoteFormOption value="">Select color</NoteFormOption>
            {colorsToSelect.map((color) => {
              return (
                <NoteFormOption value={color.code} key={color.name}>
                  {color.name}
                </NoteFormOption>
              );
            })}
          </NoteFormSelect>
        </FormEntry>
        <NoteFormSubmitButton isSubmitSuccessful={isSubmitSuccessful}>
          {isSubmitSuccessful ? "Successfully created" : "Create"}
        </NoteFormSubmitButton>
      </StyledNoteForm>
    </CreateNoteSectionWrapper>
  );
};

export default NoteForm;
