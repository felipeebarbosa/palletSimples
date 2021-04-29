import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex : 1;
    background-color : #F3F3F3
`;

export const AreaView = styled.View`
    flex : 1;
    margin-top : 50px;
    justify-content : center;
    margin-left : 36px;
    margin-right : 36px;
    margin-bottom : 100px
`;
export const AreaInput = styled.View`
    flex-direction : row;
    justify-content : center;
    margin-bottom : 30px;
`;
export const SearchInput = styled.TextInput`
    width : 82%;
    height : 45px;
    border-radius : 5px;
    background-color : #fff;
    padding-left : 20px;
    font-size : 15px;
    
    
`;
export const SubmitSearch = styled.TouchableOpacity`
    width : 45px;
    height : 45px;
    background-color : #4C4C4C
    margin-left : 10px;
    border-radius : 5px;
    align-items : center;
    justify-content : center;

`;
