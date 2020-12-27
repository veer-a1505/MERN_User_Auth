import React from 'react'
import * as AiIcons from 'react-icons/ai'
import styled from 'styled-components'




const Wrapper = styled.div`
    border : 5px solid black;
    width : 20%;
`
const UnorderList = styled.ul`
    list-style : none;
`

const List = styled.li`
    border : 1px solid;
    padding : 1rem 1rem;
    color :black;
    display : flex;
    justify-content : center;
    align-items : center;
`

const SpanIcon = styled.span`
    display : grid;
    flex : 30%;
    place-items : center;
    float : none;

`
const SpanTitle = styled.span`
    display : grid;
    flex : 70%;
`


function Sidebar() {
    return (
        <Wrapper>
            <UnorderList>
                <List>
                    <SpanIcon><AiIcons.AiOutlineUser /></SpanIcon>
                    <SpanTitle>User</SpanTitle>
                </List>
                <List>
                    <SpanIcon><AiIcons.AiOutlineSetting /></SpanIcon>
                    <SpanTitle>Setting</SpanTitle>
                </List>
                <List>
                    <SpanIcon><AiIcons.AiOutlineLogout /></SpanIcon>
                    <SpanTitle>Logout</SpanTitle>
                </List>
            </UnorderList>
        </Wrapper>
    )
}

export default Sidebar
