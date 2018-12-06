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

  const findHotel = (ratingList , id)=>{
      //look for the hotel id
      for (let i=0 ;i<ratingList.length ;i++){
          if (ratingList[i].id ===id){
              return i;
          }
      }
      return -1;
  }
  const addRate = (state, id , hotelName ,rate , rateMessage)=>{

        const ratingList = [...state.rating];
        const hotelID = findHotel(ratingList,id);
        if(hotelID===-1){
            //add a new rating
            ratingList.push(
                {
                    id:id,
                    hotelName:hotelName,
                    rate:rate,
                    rateMessage:rateMessage,
                }
            );
        }
        else{
            //update an exist hotel review
            ratingList[hotelID]={
                    id:id,
                    hotelName:hotelName,
                    rate:rate,
                    rateMessage:rateMessage,
            }
        }

        //return the new state
        return {
            ...state,
            rating:ratingList
        };

  }
  const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.ADD_RATING : return addRate (state , action.hotelID,action.hotelName,action.rate,action.rateMessage);
        default:return state;
    }
  }


export default reducer;