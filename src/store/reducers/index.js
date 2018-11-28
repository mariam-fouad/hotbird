import themeReducer from './themeReduce';
import hotelReducer from './hotelReducer';
import wishReducer from './wishReducer';
const reducer= (state={},action)=>{
    return {
        themeReducer:themeReducer(state.themeReducer,action),
        hotelReducer:hotelReducer(state.hotelReducer,action),
        wishReducer:wishReducer(state.wishReducer,action),
    };
  }
export default reducer;