import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './Form'
import styled from 'styled-components'
import * as yup from 'yup'
import schema from './validation/formSchema'
import axios from 'axios';
import User from './user'


const AppDiv = styled.div`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
// justify-content: center;
color: white;
border: 1px solid black;
`
const UsersDisplay = styled.div`
  width: 80%;
  height: auto
  margin: 0 10%;
  display: flex;
  flex-flow: row wrap;
  align-items: space-between;
    justify-content: space-between;
`
// const Container = styled.div`
//     width: 80%;
//     height: auto;
//     border: 5px dashed grey;
//     display: flex;
//     flex-flow: row wrap;
//     align-items: space-evenly;
//     justify-content: space-evenly;
// `

const defaultData = {name: '',email: '', password: '', tos: false}
const initialFormErr = {name: '', email: '', password: '', tos: ''}
// {name: 'Your name', email: 'yours@email.com'}
function App() {
  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState(defaultData)
  const [formErr, setFormErr] = useState(initialFormErr)
  const [disabled, setDisabled] = useState(true)
  
  const getUsers = ()=>{
    axios.get(`https://reqres.in/api/users`).then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    getUsers()
  },[])

  const createNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser).then(res=>{
      setUsers([res.data, ...users]);
      setFormData(defaultData)
    })
    .catch(err=>console.log(err))
    debugger
  }

  const formSubmit = ()=>{
    const newUser = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
      tos: formData.tos,
    }
    createNewUser(newUser);
  }

  const inputChange = (name, value) =>{
    yup.reach(schema, name).validate(value).then(()=>{
      setFormErr({...formErr, [name]: ''})
    }).catch(err=>setFormErr({...formErr, [name]:err.errors[0]}))
    setFormData({...formData, [name]: value})
  }
  

  useEffect(()=>{
    schema.isValid(formData).then(valid=>{setDisabled(!valid)})
  },[formData])

console.log('users:', users);
  return (
    <AppDiv>
      <Form 
      formData={formData}
      formSubmit={formSubmit}
      inputChange={inputChange}
      disabled={disabled}
      errors={formErr}
      />
      <h2>Phone Book</h2>
     <UsersDisplay>
      {
      // useEffect(()=>{
      //   users===[]
      //   ? <div>Loading...</div>
      //   : users.map(userData=>{
      //     return (
      //       <User key={userData.id} userData={userData}/>
      //     )
      //   })
      // },[users])
      
      }
    </UsersDisplay>
    </AppDiv>
  );
}

export default App;
