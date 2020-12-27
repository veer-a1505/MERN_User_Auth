import React from 'react'
import styled from 'styled-components'
import '../index.css'
import {  useHistory} from 'react-router-dom';

const Wrapper = styled.div`
    margin : 0 auto;
    width : 100%;
    overflow : hidden;
    padding : 1em;
    text-align : center;
    justify-content : center;
`
const Title = styled.p`
    color :black;
    border : 1px solid red;
    border-radius : 0.5em;
    padding : 3em;
    font-family : sans-serif;
    font-size: 1.5em;
`

const Button = styled.button`
    padding : 1em 1em;
    width : 12em;
    margin : 0.5em 1em; 
    background : #ABB2B9;
    border : none;
    color : black;
    outline : none;
    border-radius : 0.25em;
    &:hover{
        cursor: pointer;
        background : #ddd;

    }
`



function Home() {
    let history = useHistory()
    return (
        <Wrapper>
            <Title>
                React application with user authentication
            </Title>
            <Button onClick={ () => history.push('/login')}>Login</Button>
            <Button onClick={ () => history.push('/register')}>Register</Button>
        </Wrapper>
    )
}

export default Home
