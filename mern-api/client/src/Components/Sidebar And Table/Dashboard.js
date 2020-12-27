import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Table from './Table/Table'
import styled from 'styled-components'

const Wrapper = styled.div`
    width : 100%;
    display : flex;
    flex-direction : row;
    flex-direction : row;
`

function Dashboard() {
    return (
        <Wrapper>
            <Sidebar />
            <Table />
        </Wrapper>
    )
}

export default Dashboard
