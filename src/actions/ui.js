import * as actionTypes from './actionTypes'
// returning headings statically in future change to dynamic
export const fetchUIHeadings = () => dispatch => {
  let headings = ["Item", "Quantity", "Total Rs"];
  dispatch({type:actionTypes.FETCH_UI_HEADINGS, payload:headings})
}
