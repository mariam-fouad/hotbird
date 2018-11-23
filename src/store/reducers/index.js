import themeReducer from './themeReduce';
import hotelReducer from './hotelReducer';
const reducer= (state={},action)=>{
    return {
        themeReducer:themeReducer(state.themeReducer,action),
        hotelReducer:hotelReducer(state.hotelReducer,action),
    };
  }
export default reducer;