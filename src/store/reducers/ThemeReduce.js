const initialState = {
   themes:[
       {
           colorPrimar:"#1c0c26",
           colorSecondary:"#d5877f"
       },
       {
        colorPrimar:"#2a4e05",
        colorSecondary:"#a6dfd0"
       },
       {
        colorPrimar:"#030303",
        colorSecondary:"#df884d"
       },
       {
        colorPrimar:"#58562b",
        colorSecondary:"#4a7d01"
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