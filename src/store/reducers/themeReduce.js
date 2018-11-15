const initialState = {
   themes:[
       {
           colorPrimar:"#180b38",
           colorSecondary:"#d5877f",
           colorSecondaryTrans:"#d5877fa1"
       },
       {
        colorPrimar:"#1b1f16",
        colorSecondary:"#a6dfd0",
        colorSecondaryTrans:"#a6dfd08c"
       },
       {
        colorPrimar:"#030303",
        colorSecondary:"#f5bc53",
        colorSecondaryTrans:"##f5bc53a8"
       },
       {
        colorPrimar:"#3a3312",
        colorSecondary:"#6e8a45",
        colorSecondaryTrans:"#477407ba"
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