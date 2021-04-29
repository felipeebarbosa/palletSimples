import React from 'react';
import styled from 'styled-components/native';

export const Space = styled.View`
    width : ${(props) => props.width};
    height : ${(props) => props.height};
    background-color : ${(props) => props.color}; 
`;

export default ({ width, height, color }) => {
  return <Space width={width} height={height} color={color}></Space>;
};
