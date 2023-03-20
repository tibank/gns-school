import React, { FC } from 'react';
import styled from 'styled-components';

interface IColumnHeaderProps {
  title: string;
  width: number;
}

interface IDivStyledProps {
  width: number;
}

const Div = styled.div`
  font-size: 2 rem;
  font-weight: bold;
  color: white;
  background-color: lightseagreen;
  text-align: center;
  padding: 1vh 1vw;
  width: ${(props: IDivStyledProps) => (props.width ? props.width : 10)}vw;
`;

export const ColumnHeader: FC<IColumnHeaderProps> = ({ title, width }) => {
  return <Div width={width}>{title}</Div>;
};
