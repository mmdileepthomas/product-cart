import * as actionTypes from '../actions/actionTypes'
export default (state={headings:[]},action) => {
  switch (action.type) {
    case actionTypes.FETCH_UI_HEADINGS:
        return{
          ...state,
          headings: action.payload
        }
      break;
    default:
      return state
  }
}
