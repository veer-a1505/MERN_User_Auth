import React , { useMemo } from 'react'
import styled from 'styled-components'
import { Columns  } from './Columns'
import { useTable } from 'react-table'
import ReactTable from 'react-table'
import Mock_Data from './MOCK_DATA.json'
import './table.css'
import { usePagination } from 'react-table'


const Wrapper = styled.div`
    width : 100%;
    display : flex;
    flex-direction : row;
`



function Table() {

    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => Mock_Data, [])

    const tableInstance = useTable(
        {
        columns,
        data},
        usePagination
        )
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        pageCount,
        state,
        previousPage,
        prepareRow
     } = tableInstance  

     const { pageIndex } = state
    return (
        <Wrapper>
        <table {...getTableProps}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {
                                            column.render('Header')
                                        }
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => (
                                     <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))
                                }
                            </tr>
                        )
                    })
                }
                <tr>
                </tr>
            </tbody>
            <div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex  + 1} of { pageOptions.length}
                    </strong>
                </span>
                <span>
                    | Go to page : {' '}
                    <input type='number' defaultValue={pageIndex + 1} onChange={ e => {
                        const pageNumber = e.target.value ? Number(e.target.value) -1 : 0;
                        gotoPage(pageNumber)
                    }} />
                </span>
                <button onClick={() => gotoPage(0)} disabled=   {!canPreviousPage}>
                    {'<<'}
                </button>                
                <button onClick={() => previousPage()}  disabled={!canPreviousPage}>Previous</    button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
                </button>
            </div>
        </table>
        </Wrapper>
    )
}

export default Table
