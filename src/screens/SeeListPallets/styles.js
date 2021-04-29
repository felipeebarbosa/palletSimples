import React from 'react';
import styled from 'styled-components/native';

export const Message = styled.Text`
    color : #978B8B;
`;

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

export const AreaViewList = styled.FlatList.attrs({
    contentContainerStyle: { paddinHorizontal : 20}, 
    showsVerticalScrollIndicator: false,
})`
    flex : 1;
`;