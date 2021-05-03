import React from 'react';
import styled from 'styled-components/native';

export const InputText = styled.TextInput`
    width : ${(props) => props.width};
    height : 45px;
    background-color : #fff;
    border-radius : 5px;
    padding-left : 20px;
    margin-bottom : 30px;
    margin-right: ${(props) => (props.marginRight ? '25px' : '0px')}
    margin-left: ${(props) => (props.marginLeft ? '25px' : '0px')}

`;

export default ({
  width,
  marginRight,
  marginLeft,
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <InputText
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      marginRight={marginRight}
      marginLeft={marginLeft}
      width={width}></InputText>
  );
};
