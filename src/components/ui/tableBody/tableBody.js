import React from 'react';
import './tableBody.css'
const tableBody = (props) => {
  return(
    <tbody>
      {props.cartItems.map((item,key) => {
        if(item.quantity <=0 || item.removeFromCart){
          return(<tr key={key}></tr>)
        }
       return(<tr key={key}>
                <td>{`${item.brandName} ${item.productName}`}</td>
                <td>{item.quantity}</td>
                <td>{(item.quantity ===0)? 0 : item.price * item.quantity  }</td>
                <td>
                  <button className="btn-floating btn-large waves-effect waves-light red" onClick={() =>props.onRemove(item.id)}>
                    <i className="material-icons">delete</i>
                  </button>
                </td>
              </tr>
       )
     })}
    </tbody>
    )
}

export default tableBody
