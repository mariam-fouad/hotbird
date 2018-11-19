const initialState = {
   themes:[
       {
           colorPrimar:"#180b38",
           colorSecondary:"#d5877f",
           colorSecondaryTrans:"#df8873ad",
           colorSecondaryTrans2:"#944e51ba"
       },
       {
        colorPrimar:"#1b1f16",
        colorSecondary:"#a6dfd0",
        colorSecondaryTrans:"#a6dfd08c",
        colorSecondaryTrans2:"#89afa9a6"
       },
       {
        colorPrimar:"#030303",
        colorSecondary:"#f5bc53",
        colorSecondaryTrans:"#f5bc53a8",
        colorSecondaryTrans2:"#b3935a"
       },
       {
        colorPrimar:"#272103",
        colorSecondary:"#6e8a45",
        colorSecondaryTrans:"#4c6922ba",
        colorSecondaryTrans2:"#3e5320ad"
       }
    ],

    selectedTheme:0,
  };

  const reducer = (state=initialState,action)=>{
    switch (action.type) {
        default:return state;
    }
  }


export default reducer;