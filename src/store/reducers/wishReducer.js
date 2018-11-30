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

const removeWishHotel =(state, hotelID)=>{
    const hotelsWishList = [...state.wishList];
    let index;
    for (let i =0 ;i<hotelsWishList.length;i++)
    {
        if (hotelsWishList[i].id===hotelID)
        {
            index=i;
            break;
        }
    }

    hotelsWishList.splice(index, 1);
    return {
        ...state,
        wishList:hotelsWishList
    };

}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.REMOVE_WISH_HOTEL: return removeWishHotel(state, action.hotelID);
        default:return state;
    }
  }


export default reducer;