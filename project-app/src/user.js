import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 300px;
    height: 100px;
    border: 5px dashed #5cceb7;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px;
`


export default function User(props){
    const {key, userData} = props

    return (
        
        <StyledDiv>
            <h4>{`Name: ${userData.name}`}</h4>
            <p>{`Email: ${userData.email}`}</p>
        </StyledDiv>
    )
}