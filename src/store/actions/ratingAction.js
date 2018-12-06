import {
    ADD_RATING,
} from './actionTypes';

export const addRating = (hotelID ,hotelName , rate , rateMessage)=>{
    return {
        type:ADD_RATING,
        hotelID: hotelID,
        hotelName:hotelName,
        rate:rate,
        rateMessage:rateMessage,
    }
};
