import React from 'react'

function Form(props) {
    return (
        <div>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            {props.isRegistered === false && <input type="password" placeholder="Confirm password"/>}
            <button>{props.isRegistered? "Login" : "Register"}</button>
        </div>
    )
}

export default Form
