import React, { FC } from 'react';
import styled from 'styled-components';
import { TemplateButton } from './TemplateButton';

interface IAlertButton {
  children: React.ReactNode;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const Alert = styled(TemplateButton)`
  border: 0.2rem solid indianred;
`;
export const AlertButton: FC<IAlertButton> = ({ children, onClick }) => {
  return (
    <Alert onClick={onClick} color='white' bcgColor='indianred'>
      {children}
    </Alert>
  );
};
