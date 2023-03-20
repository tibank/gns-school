import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { AlertButton } from '../style/AlertButton';
import styles from './ErrorMessage.module.css';

interface IErrorMessageProps {
  children: React.ReactNode;
}

const ErrorContent = styled.div`
  position: relative;
  background: lightcoral;
  border-radius: 1rem;
  border: 0.2rem solid indianred;
  height: 10vh;
  min-height: 5vh;
  width: 30vw;
  margin: auto;
  padding: 2rem;
  display: flex;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-direction: column;
  justify-content: space-between;
`;

const DivButton = styled.div`
  margin: 1.5rem 0;
`;

export const ErrorMessage: FC<IErrorMessageProps> = ({ children }) => {
  const errorWindow = useRef<HTMLDivElement>(null);

  const hiddenMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('close click');
    const style = errorWindow.current?.style;
    if (style) {
      style.display = 'none';
    }
  };

  return (
    <div ref={errorWindow} className={`${styles.errorLayer}`}>
      <ErrorContent>
        <div>{children}</div>
        <DivButton>
          <AlertButton onClick={hiddenMessage}>OK</AlertButton>
        </DivButton>
      </ErrorContent>
    </div>
  );
};
