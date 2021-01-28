import React from 'react'
import styled from 'styled-components'

const FormStyled = styled.form`
    display: flex;
    flex-flow: column nowrap;
    width: 300px;
    height: auto;
    align-items: center;
    padding: 30px 0;
    h2 {
        background-color: rgb(255,255,255,.1);
        width: 250px;
        text-align: center;
        margin: 10px 25px;
    }
    input{
        width: 200px;
        margin-bottom: 5px;
    }
    button {
        width: 150px;
        border-radius: 5px
        position: absolute;
        left: 50%;
    }
    
`

export default function Form(params){
    const {formData, inputChange, formSubmit, disabled, errors} = params

    const onChange = evt => {
        const {name, value, type, checked} = evt.target;
        const useValue = type==='checkbox' ? checked : value;
        inputChange(name, useValue);
    }

    return (
            <FormStyled onSubmit={formSubmit}>
                <h2>Become a User</h2>
                <label htmlFor='name'>Name</label>
                <input onChange={onChange} type='text' id='name' name='name' value={formData.name}/>
                <label htmlFor='email'>Email</label>
                <input onChange={onChange} type='text' id='email' name='email' value={formData.email}/>
                <label htmlFor='password'>Password</label>
                <input onChange={onChange} type='text' id='password' name='password' value={formData.password}/>
                <label htmlFor='tos'>I accept Terms of Service</label>
                <input onChange={onChange} type='checkbox' id='tos' name='tos' checked={formData.tos}/>
                <br/>
                <button id='formBtn' disabled={disabled}>Create Account</button>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </FormStyled>
    )}