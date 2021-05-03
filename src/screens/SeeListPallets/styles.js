import React from 'react';
import styled from 'styled-components/native';




export const Message = styled.Text`
    color : #545454;
    font-size : 20px
    margin : 0px auto;
    margin-top : ${props => props.marginTop}
`;

export const Container = styled.SafeAreaView`
    flex : 1;
    background-color : #F3F3F3
`;
export const AreaView = styled.View`
    flex : 1;
    margin-top : 10px;
    justify-content : center;
    margin-left : 36px;
    margin-right : 36px;
    margin-bottom : 5px
    background-color : #fff;
    border-radius : 10px;
    padding : 20px
    
`;

export const AreaViewList = styled.FlatList.attrs({
  contentContainerStyle: { paddinHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`
    flex : 1;
`;



export const ListMaterials2 = styled.View`
    flex : 1;
    width : 100%;

`;

export const Container2 = styled.View`
    flex : 1;
    border-radius : 10px;
    background-color : #fff
    width : 100%;
    padding : 20px

`;

export const Codigo = styled.Text`
    font-size : 25px;
    font-weight : bold;
`;

export const WraperCont = styled.View`
    flex-direction : row;
    margin-bottom : 5px;
    justify-content: ${props => props.space ? 'space-between' : 'space-between' };
`;

export const Tom = styled.Text`
    font-size : 25px;
    font-weight : bold;
    margin-left : 30px
`;

export const ContA = styled.Text`
    font-size : 20px;
    color : #545454
    font-weight : bold
`;

export const ContC = styled.Text`
    font-size : 20px;
    color : #545454
    font-weight : bold
`;

export const Nome = styled.Text`
    font-size : 20px;
    color : #545454
`;

export const Label = styled.Text`
    font-size : 20px;
    color : #545454;
    margin-left : ${(props) => (props.margin ? '20px' : '0px')}
    
`;

export const Trash = styled.TouchableOpacity`

`

export const ViewSVG = styled.View`
 
`


