import React from 'react'
import './tableHead.css';
import TableBody from '../tableBody/tableBody'

const tableHead = (props) => {
  return(
      <div>
        <table>
          <thead>
            <tr>
              {props.headings.map((heading,key) => <th key={key}>{heading}</th>)}
            </tr>
          </thead>
            <TableBody cartItems={props.cartItems} onRemove={(itemId) => props.onRemove(itemId)}/>
        </table>
      </div>
      )
}

export default tableHead
