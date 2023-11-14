import styled from 'styled-components';

export const ContItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const ContP = styled.p`
  font-size: 18px;
`;
export const ContBtn = styled.button`
  border-radius: 6px;
  align-items: center;
  background-color: gray;
  border: 0;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 16px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  max-height: 26px;
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
    background-image: linear-gradient(
      144deg,
      #af40ff,
      rgb(91, 66, 243) 50%,
      #00ddeb
    );
  }
`;
