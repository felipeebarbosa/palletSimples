import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex : 1;
    background-color : #F3F3F3
`;

export const AreaView = styled.ScrollView`
    flex : 1;
    margin-top : 50px;
    margin-left : 36px;
    margin-right : 36px;
`;

export const AreaInput = styled.View`
    flex-direction : row;
    justify-content : center;
`;

export const AreaLabel = styled.View`
    flex-direction : row;
`;

export const SearchInput = styled.TextInput`
    width : 60%%;
    height : 45px;
    border-radius : 10px;
    background-color : #fff;
    padding-left : 20px;
    font-size : 15px;
    
    
`;

export const Column = styled.View`
    flex-direction : column;
    width : ${props => props.width};
    align-items : center;
`