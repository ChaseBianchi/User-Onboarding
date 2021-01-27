import React from 'react'

export default function User(props){
    const {key, userData} = props

    return (
        <div>
            <h3>{userData.name}</h3>
            <p>{userData.email}</p>
        </div>
    )
}