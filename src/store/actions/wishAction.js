import {
    REMOVE_WISH_HOTEL,
    ADD_WISH_HOTEL
} from './actionTypes';

export const removeWishHotel = (hotelID)=>{
    return {
        type:REMOVE_WISH_HOTEL,
        hotelID: hotelID,
    }
}

export const addWishHotel = (hotelID , hotelName)=>{
    return {
        type:ADD_WISH_HOTEL,
        hotelName: hotelName,
        id:hotelID,
    }
}