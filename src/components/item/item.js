import React from  'react'
// importing clss
import './item.css'
const item = (props) => {
  return(
    <div className="parent-item-container">
      {props.items.map((item,key)=> {
        return(
                <div className="item-container" key={key}>
                  <div className="item-img-container">
                    <img src={item.imgSrc} alt={item.brandName} />
                  </div>
                  <div className="item-details">
                    <p>{item.brandName}</p>
                    <p>{item.productName}</p>
                    <p>{item.packingDetail}</p>
                    <p>{`Rs: ${item.price}`}</p>
                  </div>
                  {item.addToCartStatus? (<div className="button-container">
                                    <button onClick={() =>props.removeItem(item.id)}>-</button>
                                    <button>{(item.quantity > 0)? `${item.quantity} in cart`  : 'Add To Cart' }</button>
                                    <button onClick={() => props.addItem(item.id)}>+</button>
                                 </div>) :
                                 <button
                                    onClick={() => props.clicked(item.id)}>
                                    Add To Cart
                                </button> }
                </div>
              )
       })}
     </div>
  )
}

export default item
