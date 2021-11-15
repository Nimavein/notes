import styled from "styled-components";

export const NoteWrapper = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ noteColor }) => noteColor};
  border-radius: 6px;
`;

export const NoteTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const NoteDescription = styled.p``;

export const NoteButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 12px;
`;

export const NoteDeleteButton = styled.button`
  padding: 10px 16px;
  margin-left: auto;
  margin-top: 8px;
  border: none;
  background: white;
  width: 50%;
  color: black;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover {
    background: black;
    color: white;
  }
`;

export const NoteEditButton = styled(NoteDeleteButton)``;
