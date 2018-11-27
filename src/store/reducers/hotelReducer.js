const initialState = {
    hotels:[
        {
            id:0,
            name:"Costa Hotel",
            location:"San Jose, Costa Rica",
            rate:7.2,
            imagesFolder:"/costa",
            services:["wifi","forest-view","breakfast","shower"],
            
        },
        {
            id:1,
            name:"Polonia",
            location:"Amsterdam, Netherlands",
            rate:9.1,
            imagesFolder:"/Polonia",
            services:["wifi","parking","breakfast","gym","shower"],
            
        },
        {   id:2,
            name:"Sun Shine",
            location:"Oia, Greece",
            rate:8.5,
            imagesFolder:"/sunshine",
            services:["wifi","sea-view","bath"],
            
        },
        {   
            id:3,
            name:"Taj-in",
            location:"taj mahal, india",
            rate:7.9,
            imagesFolder:"/tajin",
            services:["wifi","parking","airport shuttle","shower"],
        },
        {
            id:4,
            name:"Paradise",
            location:"Maafushi, Maldives",
            rate:9.2,
            imagesFolder:"/paradise",
            services:["sea-view","private pool","bath"],
        },
        {
            id:5,
            name:"Mountain House",
            location:"British columbia, Canada",
            rate:7.8,
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