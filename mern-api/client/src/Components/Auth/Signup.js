import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../media/iconfinder_8_3898372.svg'


const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`
const Form = styled.form`
    display: block;
    margin : 0 auto;

`
const Inuput = styled.input`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0.75em 1em;
    width : 20em;
    margin-bottom : 1em;
`

const Button = styled.button`
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding : 0.5em 2em;
    display: flex;
    cursor: pointer;
    overflow : hidden;    
`

const Text = styled.text`
    margin : 1em auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
` 
const LinkToSignup = styled.a`
    margin : 1em auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    text-decoration : none;
    color : blue; 

    &:hover {
        text-decoration : underline;
    }
`


function Signup() {
    const [user, setUser] = useState({
        username : '',
        email : '',
        organization_Name : '',
        password : ''
    })

    const handleInputChange = (event) => {
        const  { name , value }  = event.target
        setUser({...user, [name] : value })
    }
    
    const handleSubmit = (event) => {
        const newUser = {
            username : user.username,
            email : user.email,
            organization_Name : user.organization_Name,
            password : user.password
        }   
        console.log(newUser)

        setUser({
            username : '',
            email : '',
            organization_Name : '',
            password : ''
            
        })

        event.preventDefault()


    }    


    return (
        <Wrapper>
            <Logo className='app-logo'></Logo>
            <Form onSubmit={handleSubmit}>
                <Inuput 
                type = 'text'
                placeholder = 'Username'
                name  = 'username'
                value = {user.username}
                onChange={handleInputChange}
                required
                />
                <Inuput 
                type = 'email'
                placeholder = 'Email'
                name  = 'email'
                value = {user.email}
                onChange={handleInputChange}
                required             
                />
                <Inuput 
                type = 'text'
                placeholder = 'Organization Name'
                name = 'organization_Name'
                value = {user.organization_Name}
                onChange={handleInputChange}   
                required          
                />                
                <Inuput 
                type = 'password'
                placeholder = 'password'
                name = 'password'
                value = {user.password}
                onChange={handleInputChange}
                required             
                />                
                <Button type='submit'>Signup</Button>
                <Text>Or</Text>
                <LinkToSignup href='/login'>Signin</LinkToSignup>                        
            </Form>
        </Wrapper>
    )
}

export default Signup
