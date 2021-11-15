import styled from "styled-components";

export const NoteEditFormWrapper = styled.section`
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 50%;
  text-align: left;
  margin-top: -200px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 100;
  padding: 20px;
  color: black;
  border-radius: 8px;
  box-shadow: 0 0 0 50vmax rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    width: 90%;
  } ;
`;

export const EditNoteText = styled.p`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 18px;
`;
export const StyledEditForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const EditFormEntry = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const EditNoteFormLabel = styled.label`
  font-weight: 600;
  font-size: 18px;
`;
export const EditNoteFormInput = styled.input`
  margin-top: 8px;
  height: 34px;
  text-indent: 8px;
`;
export const EditNoteFormSelect = styled.select`
  margin-top: 8px;
  height: 30px;
`;
export const EditNoteFormOption = styled.option``;

export const EditNoteFormSubmitButton = styled.button`
  padding: 12px;
  width: 50%;
  cursor: pointer;
  background-color: white;
  border: 1px solid black;

  &:hover {
    background-color: black;
    border: 1px solid white;
    color: white;
  }
`;
export const EditNoteFormCancelButton = styled(EditNoteFormSubmitButton)``;

export const EditButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 14px;
`;
