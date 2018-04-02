import * as actionTypes from './actionTypes'
// returning headings statically in future change to dynamic
export const fetchItems = () => dispatch => {
  let items = [{
      id: 1,
      brandName: 'Nestle',
      productName: 'Maggi',
      packingDetail: '500gm pouch',
      price: 25,
      quantity: 0,
      imgSrc: require('../assets/images/maggi.jpg')
  },
  {
      id: 2,
      brandName: 'MTR',
      productName: 'Powder-Turmeric',
      packingDetail: '500gm pouch',
      price: 50,
      quantity: 0,
      imgSrc: require('../assets/images/turmeric-powder.jpg')

  },
  {
      id:3,
      brandName: 'Dakshins',
      productName: 'Biriyani Pulav - Masala',
      packingDetail: '100gm pouch',
      price: 78,
      quantity: 0,
      imgSrc: require('../assets/images/biriyani-pulavu-masala.jpg')

  },
  {
      id:4,
      brandName: 'Hindustan Unilever',
      productName: 'Pears',
      packingDetail: '125gm pakcet',
      price: 48,
      quantity: 0,
      imgSrc: require('../assets/images/pears.jpg')

  },
  {
      id:5,
      brandName: 'MTR',
      productName: 'Tamarind',
      packingDetail: '500gm pouch',
      price: 19,
      quantity: 0,
      imgSrc: require('../assets/images/tamarind.jpg')

  },
  {
      id:6,
      brandName: 'Dakshins',
      productName: 'Chilli Powder',
      packingDetail: '500gm',
      price: 27,
      quantity: 0,
      imgSrc: require('../assets/images/chilli-powder.jpg')

  }
  ];

  dispatch({type:actionTypes.FETCH_ITEMS, payload:items})
}
// updating Items add to cart buttons
export const addToCart = (itemId) => dispatch => {
  dispatch({type:actionTypes.ADD_TO_CART_ENABLED, payload:{status:true, itemId}})
  dispatch({type:actionTypes.ADD_ITEM, payload:{itemId} })
}
// adding Items
export const addItem = (itemId) => dispatch => {
  dispatch({type:actionTypes.ADD_ITEM, payload:{itemId} })
}
// removing items
export const removeItem = (itemId) => dispatch => {
  dispatch({type:actionTypes.REMOVE_ITEM, payload:{itemId} })
}
// remove cartItem
export const  removeCartItems = (itemId) => dispatch => {
  dispatch({type:actionTypes.REMOVE_CART_ITEMS, payload:{itemId,removeFromCart:true}})
}
