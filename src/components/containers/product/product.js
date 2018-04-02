import React ,{Component} from 'react'
// importing third party modules
import { connect } from 'react-redux'
// importing required Components
import * as actions from '../../../actions'
import Item from '../../item/item'
class Product extends Component{
//  life cycle methods
  componentDidMount(){
    this.props.onFetchItems()
  }
  render(){
    const {items} = this.props
    return(
      <div className="parent-item">
            <Item items={items? items: []}
                  clicked={(itemId)=>this.props.onAddToCartEnabled(itemId)}
                  addItem={(itemId) => this.props.onAddItemHandler(itemId)}
                  removeItem={(itemId) => this.props.onRemoveItemHandler(itemId)}
             />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onFetchItems: () => dispatch(actions.fetchItems()),
    onAddToCartEnabled: (itemId) => dispatch(actions.addToCart(itemId)),
    onAddItemHandler: (itemId) => dispatch(actions.addItem(itemId)),
    onRemoveItemHandler: (itemId) => dispatch(actions.removeItem(itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
