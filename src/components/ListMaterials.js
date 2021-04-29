import React from 'react'
import styled from 'styled-components/native'


export const ListMaterials = styled.View`
    flex : 1;
    width : 100%;

`;

export const Container = styled.View`
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

export const ContC= styled.Text`
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
    margin-left : ${props => props.margin ? '20px' : '0px'}
    
`





export default ({ data }) =>{
    return (
        <Container>
            <ListMaterials>
                <WraperCont>
                    <Codigo>{data.codigo}</Codigo>
                    <Tom>{data.tom}</Tom>
                </WraperCont>
                <WraperCont>
                    <Nome>{ data.nome }</Nome>
                </WraperCont>
                <WraperCont>
                    <Label>Pallets A : </Label>
                        <ContA>{data.palletsA}</ContA>
                    <Label margin={true}>Caixas A : </Label>
                        <ContA>{data.caixasA}</ContA>
                </WraperCont>
                <WraperCont>
                    <Label>Pallets C : </Label>
                        <ContC>{data.palletsC}</ContC>
                    <Label margin={true}>Caixas C : </Label>
                        <ContC>{data.caixasC}</ContC>
                </WraperCont>
            </ListMaterials>
        </Container>
    )
}

// id, nome, tom, palletsA, caixasA, palletsC, caixasC