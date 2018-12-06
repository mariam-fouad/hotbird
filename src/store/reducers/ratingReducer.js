import * as actionTypes from '../actions/actionTypes';
const initialState = {
   rating:[
       {
            id:2,
            hotelName:"Sun Shine",
            rate:4,
            rateMessage:"Enjoy the sea view and the warm sun. Great hoilday I recommend it",
       },
       {
            id:4,
            hotelName:"Paradise",
            rate:5,
            rateMessage:"As it name suggest a ture paradise in earth. Definitely going again",
        },

   ]
  };


  const reducer = (state=initialState,action)=>{
    switch (action.type) {
        default:return state;
    }
  }


export default reducer;