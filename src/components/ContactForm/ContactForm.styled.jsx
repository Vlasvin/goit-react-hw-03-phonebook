import styled from 'styled-components';

export const Div = styled.div`
  margin-left: 40px;
`;

export const ContForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 340px;
  gap: 20px;
  border-radius: 6px;
  border: 1px solid #5b42f3;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const ContLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContInput = styled.input`
  border-radius: 6px;
  max-width: 160px;
  height: 20px;
`;
export const AddButton = styled.button`
  border-radius: 6px;
  align-items: center;
  border: 0;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  background-color: grey;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 16px;
  justify-content: center;
  line-height: 1em;
  max-width: 100px;
  min-width: 80px;
  padding: 6px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  &:active,
  &:hover {
    outline: 0;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  }
`;
