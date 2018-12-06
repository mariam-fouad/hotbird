const initialState = {
    hotels:[
        {
            id:0,
            name:"Costa Hotel",
            location:"San Jose, Costa Rica",
            rate:3.9,
            imagesFolder:"/costa",
            services:["wifi","forest-view","breakfast","shower"],
            
        },
        {
            id:1,
            name:"Polonia",
            location:"Amsterdam, Netherlands",
            rate:4.3,
            imagesFolder:"/Polonia",
            services:["wifi","parking","breakfast","gym","shower"],
            
        },
        {   id:2,
            name:"Sun Shine",
            location:"Oia, Greece",
            rate:4.5,
            imagesFolder:"/sunshine",
            services:["wifi","sea-view","bath"],
            
        },
        {   
            id:3,
            name:"Taj-in",
            location:"taj mahal, india",
            rate:3.6,
            imagesFolder:"/tajin",
            services:["wifi","parking","airport shuttle","shower"],
        },
        {
            id:4,
            name:"Paradise",
            location:"Maafushi, Maldives",
            rate:4.1,
            imagesFolder:"/paradise",
            services:["sea-view","private pool","bath"],
        },
        {
            id:5,
            name:"Mountain House",
            location:"British columbia, Canada",
            rate:4.0,
            imagesFolder:"/mountainhouse",
            services:["wifi","snow","mountain-view","bath"],
        },
    ],
  };

  const reducer = (state=initialState,action)=>{
    switch (action.type) {
        default:return state;
    }
  }


export default reducer;