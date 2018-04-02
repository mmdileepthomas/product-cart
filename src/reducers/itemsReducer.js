import * as actionTypes from '../actions/actionTypes'
export default (state={items:[], addToCartStatus: false, cartItems: []},action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS:
        return{
          ...state,
          items: action.payload
        }
      break;
    case actionTypes.ADD_TO_CART_ENABLED:
      return{
        ...state,
        items: state.items.map(obj => {
          if(obj.id === action.payload.itemId){
            return {...obj, addToCartStatus: action.payload.status}
          }
          return obj
        })
      }
    case actionTypes.ADD_ITEM:
      return{
        ...state,
        items: state.items.map(obj => {
            if(obj.id === action.payload.itemId){
              return {...obj, quantity: obj.quantity + 1, totalPrice: (obj.quantity + 1) * obj.price }
            }
            return obj
          })
      }
    case actionTypes.REMOVE_ITEM:
      return{
         ...state,
         items: state.items.map(obj => {
           if(obj.id === action.payload.itemId && obj.quantity > 0){
             return {...obj, quantity: obj.quantity -1 , totalPrice: (obj.quantity - 1) * obj.price}
           }
           return obj
         })
      }
    case actionTypes.REMOVE_CART_ITEMS:
    return{
      ...state,
      items: state.items.map(obj => {
        if(obj.id === action.payload.itemId){
          return {...obj, quantity:0,removeFromCart: action.payload.removeFromCart}
        }
        return obj
      })
    }
    default:
      return state
  }
}
