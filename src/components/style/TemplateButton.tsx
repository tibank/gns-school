import styled from 'styled-components';

interface IButton {
  bcgColor: string;
  color: string;
}

export const TemplateButton = styled.button<IButton>`
  background-color: ${(props) => props.bcgColor};
  border: none;
  border-radius: 1rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 0.2em;
  margin: 0.5em;
  outline: none;
  padding: 0.2em 0;
  transition: 0.2s;
  user-select: none;
  width: 8vw;
  height: 4vh;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: none;
  }
`;
