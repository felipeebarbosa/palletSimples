import React from 'react';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    width : 100%;
    height : 50px;
    background-color : #fff;
    margin-top : 20px;
    border-radius : 5px;
    justify-content: center;
    align-items : center
`;
export const TextButton = styled.Text`
    color : #4C4C4C
    font-size : 15px;
    font-weight : bold;
`;
export default ({ title, funcao }) => {
  return (
    <Button onPress={funcao}>
      <TextButton>{title}</TextButton>
    </Button>
  );
};