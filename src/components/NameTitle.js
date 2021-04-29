import React from 'react';
import styled from 'styled-components/native';

export const NameTitle = styled.Text`
    font-size : 30px;
    font-weight : bold;
    color : #4D4C4C;
    margin-top : 30px;
    margin-left : 36px;
`;

export default ({ title }) => {
  return <NameTitle>{title}</NameTitle>;
};
