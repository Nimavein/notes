import styled from "styled-components";

export const NotesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
  gap: 12px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  } ;
`;

export const YourNotesText = styled.p`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 18px;
  margin-top: 12px;
`;
