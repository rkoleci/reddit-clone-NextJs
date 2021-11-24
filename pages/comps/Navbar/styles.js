import styled from 'styled-components'

export const Container = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
` 

export const Input = styled.input`
    flex: 1;
    font-size: 14px;
    background-color: #aaaaaa20;
    padding: 5px;

    &:hover {
        border: 1px solid blue;
        cursor: pointer;
    }
    &:active {
        border: 1px solid blue;
        cursor: pointer; 
    }
`

export const Inline = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Button = styled.div`
    border-radius: 20px;
    color: ${props => props.blue ? 'white' : 'blue'};
    background-color: ${props => props.blue ? 'blue' : 'white'};
    border: ${props => !props.blue ? '1px solid blue' : 'none'};

    cursor: pointer;
    padding: 5px 10px;
    margin-right: 10px;
    margin-left: 10px;
`