import * as actionTypes from '../actions/actionTypes';
const initialState = {
    wishList :[
        {
            hotelName: "Paradise",
            id:4
        },
        {
            hotelName: "Mountain House",
            id:5
        }
    ]
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        default:return state;
    }
  }


export default reducer;