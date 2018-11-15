import themeReducer from './themeReduce';

const reducer= (state={},action)=>{
    return {
        themeReducer:themeReducer(state.themeReducer,action),
    };
  }
export default reducer;