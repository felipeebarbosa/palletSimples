import React from 'react';
import styled from 'styled-components/native';

export const Label = styled.Text`
    font-size : ${(props) => props.size};
    font-weight : ${(props) => (props.bold ? 'bold' : 'normal')};
    margin-left : 10px;
    margin-right : ${(props) =>
      props.marginRight ? props.marginRight : '60px'};
    margin-bottom : 15px;
    color : ${(props) => (props.color ? '#4D4C4C' : '#ff6767')}

`;

export default ({ size, label, bold, color, marginRight }) => {
  return (
    <Label marginRight={marginRight} size={size} color={color} bold={bold}>
      {label}
    </Label>
  );
};
