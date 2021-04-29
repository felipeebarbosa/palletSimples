import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Logo = styled.View`
    flex-direction : row;
    margin-left : 36px;
    margin-top : 30px;
`;

export const NameTitle = styled.Text`
    
    font-size : 30px;
    font-weight : bold;
    color : #4D4C4C;

`;
export const Icon = styled.TouchableOpacity`
    width : 24px;
    height : 24px
    margin-right : 5px
`;

export default ({ title, funcao }) => {
  return (
    <Logo>
      <NameTitle>
        <Icon onPress={funcao}>
          <Ionicons name="chevron-back" margin={20} size={24} color="#000" />
        </Icon>
        {title}
      </NameTitle>
    </Logo>
  );
};
