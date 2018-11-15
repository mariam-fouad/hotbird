import ThemeReducer from './ThemeReduce';
const reducer= (state={},action)=>{
    return {
        ThemeReducer:ThemeReducer(state.ThemeReducer,action),
    };
  }
export default reducer;