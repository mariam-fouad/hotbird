import themeReducer from './themeReduce';
import hotelReducer from './hotelReducer';
import wishReducer from './wishReducer';
import ratingReducer from './ratingReducer';
const reducer= (state={},action)=>{
    return {
        themeReducer:themeReducer(state.themeReducer,action),
        hotelReducer:hotelReducer(state.hotelReducer,action),
        wishReducer:wishReducer(state.wishReducer,action),
        ratingReducer: ratingReducer (state.ratingReducer, action),
    };
  }
export default reducer;