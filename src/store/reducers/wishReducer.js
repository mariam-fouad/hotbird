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

const getHotelID = (hotelList , id )=>{
    for (let i =0 ;i<hotelList.length;i++)
    {
        if (hotelList[i].id===id)
        {
           return i;
        }
    }

    return -1;
}
const removeWishHotel =(state, hotelID)=>{
    const hotelsWishList = [...state.wishList];
    let index = getHotelID(hotelsWishList,hotelID);

    hotelsWishList.splice(index, 1);
    return {
        ...state,
        wishList:hotelsWishList
    };

}

const addWishHotel = (state, id , hotelName)=>{
    const hotelsWishList = [...state.wishList];
    const newHotel = {
        hotelName: hotelName,
            id:id
    };

    if (getHotelID(hotelsWishList,id)!==-1){ //return the same state if the hotel already exist
        return state;
    }
    hotelsWishList.push(newHotel);

    return {
        ...state,
        wishList:hotelsWishList
    };
}
const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.REMOVE_WISH_HOTEL: return removeWishHotel(state, action.hotelID);
        case actionTypes.ADD_WISH_HOTEL : return addWishHotel(state, action.id, action.hotelName);
        default:return state;
    }
  }


export default reducer;