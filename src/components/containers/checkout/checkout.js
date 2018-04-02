import React , {Component} from 'react'
//import third party modules
import { connect } from 'react-redux'
//css
import './checkout.css'
// import Components
import * as actions from '../../../actions'
import Aux from  '../../hoc/auxillary'
import Table from '../../ui/tableHead/tableHead'
import Item from '../../item/item'
class Checkout extends Component{
  // life cycle methods
  componentDidMount(){
    this.props.onUIHeadingsFetch()
  }
  render(){
    // destructuring from props
    const { headings, items } = this.props
    return(
      <Aux>
        <div className="checkout-container">
          <h4>Your Cart Summary</h4>
          <div className="cart-checkout-details">
            <div className="checkout-quantity">Items in Cart
              <p>{items.reduce((acc,obj) =>  acc+obj.quantity ,0 )}</p>
            </div>
            <div className="checkout-price">Total Price
              <p>{items.reduce((acc,obj) => { return acc+(obj.quantity * obj.price);},0 )}</p>
            </div>
          </div>
          <hr />
          {
            items === [] ?
                      null : ( items.reduce( (acc,obj) => acc+obj.quantity,0 ) >0 )?
                              <Table
                                headings={headings? headings : []}
                                cartItems ={items? items: []}
                                onRemove={(itemId) =>this.props.onRemoveCartItemHandler(itemId)}
                                />:
                                null
          }
        </div>
      </Aux>
    )
  }
}
// mapStateToProps
const mapStateToProps = state => {
  return {
    headings: state.ui.headings,
    items: state.items.items,
    addToCartStatus: state.items.addToCartStatus
  }
}
// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return{
    onUIHeadingsFetch: () => dispatch(actions.fetchUIHeadings()),
    onRemoveCartItemHandler: (itemId) => dispatch(actions.removeCartItems(itemId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
