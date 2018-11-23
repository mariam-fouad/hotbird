import * as actionTypes from '../actions/actionTypes';
const initialState = {
   themes:[
       {
           colorPrimary:"#180b38",
           colorSecondary:"#d5877f",
           colorSecondaryTrans:"#df8873ad",
           colorSecondaryTrans2:"#944e51ba"
       },
       {
        colorPrimary:"#1b1f16",
        colorSecondary:"#a6dfd0",
        colorSecondaryTrans:"#a6dfd08c",
        colorSecondaryTrans2:"#89afa9a6"
       },
       {
        colorPrimary:"#030303",
        colorSecondary:"#f5bc53",
        colorSecondaryTrans:"#f5bc53a8",
        colorSecondaryTrans2:"#b3935a"
       },
       {
        colorPrimary:"#272103",
        colorSecondary:"#6e8a45",
        colorSecondaryTrans:"#4c6922ba",
        colorSecondaryTrans2:"#3e5320ad"
       }
    ],

    selectedTheme:3,
  };

  const changeSelectedTheme = (state , themeIndex)=>{
      return {
          ...state,
          selectedTheme:themeIndex
      }
  }
  const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.SELECT_THEME: return changeSelectedTheme(state, action.selectTheme);
        default:return state;
    }
  }


export default reducer;