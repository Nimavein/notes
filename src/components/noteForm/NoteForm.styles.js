import styled from "styled-components";

export const CreateNoteSectionWrapper = styled.section`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  } ;
`;

export const CreateNoteText = styled.p`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 18px;
`;

export const Divider = styled.hr`
  border: 1px solid gray;
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
`;

export const StyledNoteForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormEntry = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const NoteFormLabel = styled.label`
  font-weight: 600;
  font-size: 18px;
`;
export const NoteFormInput = styled.input`
  margin-top: 8px;
  height: 30px;
  text-indent: 8px;
`;
export const NoteFormSelect = styled.select`
  margin-top: 8px;
  height: 30px;
`;
export const NoteFormOption = styled.option``;
export const NoteFormSubmitButton = styled.button`
  margin-bottom: 14px;
  padding: 10px 16px;
  margin-left: auto;
  margin-top: 8px;
  border: black 1px solid;
  background: ${({ isSubmitSuccessful }) =>
    isSubmitSuccessful ? "black" : "none"};
  width: ${({ isSubmitSuccessful }) => (isSubmitSuccessful ? "100%" : "auto")};
  color: ${({ isSubmitSuccessful }) =>
    isSubmitSuccessful ? "white" : "black"};
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover {
    background: black;
    color: white;
  }
`;
