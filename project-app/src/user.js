import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
width: 250px;
height: 100px;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-around;
border: 4px dashed #5cceb7;
margin: 10px 30px;

`

export default function User(props){
    const {key, userData} = props


    
    return (
        <StyledDiv>
            <h5>{`Name: ${userData.name}`}</h5>
            <p>{`Email: ${userData.email}`}</p>
        </StyledDiv>
    )
}