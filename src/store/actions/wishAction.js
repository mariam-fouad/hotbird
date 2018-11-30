import {REMOVE_WISH_HOTEL} from './actionTypes';

export const removeWishHotel = (hotelID)=>{
    return {
        type:REMOVE_WISH_HOTEL,
        hotelID: hotelID,
    }
}