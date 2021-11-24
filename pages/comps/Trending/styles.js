import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h5`
    color: gray;
`

export const Item = styled.div`
    border-radius: 8px;
    min-height: 140px;
    position: relative; 
    background: cyan;
    flex: 1;

    margin-right: 5px;
    margin-left: 5px;
    padding: 10px; 

    display: flex; 
    flex-direction: column;
    justify-content: flex-end;

    ${props => `background-image: url(${props.src})`};
`

export const ItemTitle = styled.h4`
    color: white;
    font-style: bold;
    margin-bottom: 0;
`

export const Author = styled.h3`
    color: white;
    font-style: bold;
    margin-bottom: 0;
`

export const Account = styled.h6`
    color: white;
    margin-bottom: 0;
`