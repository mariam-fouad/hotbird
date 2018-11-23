const initialState = {
    hotels:[
        {
            id:0,
            name:"Costa Hotel",
            location:"San Jose, Costa Rica",
            rate:7.2,
            imagesFolder:"/costa",
            services:["wifi","forest-view","breakfast"],
            
        },
        {
            id:1,
            name:"Polonia",
            location:"Amsterdam, Netherlands",
            rate:9.1,
            imagesFolder:"/Polonia",
            services:["wifi","parking","breakfast","gym"],
            
        },
        {   id:2,
            name:"Sun Shine",
            location:"Oia, Greece",
            rate:8.5,
            imagesFolder:"/sunshine",
            services:["wifi","sea-view"],
            
        },
        {   
            id:3,
            name:"Taj-in",
            location:"taj mahalm, india",
            rate:7.9,
            imagesFolder:"/jajin",
            services:["wifi","parking","airport shuttle"],
        },
        {
            id:4,
            name:"Paradise",
            location:"Maafushi, Maldives",
            rate:9.2,
            imagesFolder:"/paradise",
            services:["sea-view","private pool"],
        },
        {
            id:5,
            name:"Mountain House",
            location:"British columbia, Canada",
            rate:7.8,
            imagesFolder:"/mountainhouse",
            services:["wifi","lake-view","mountain-view"],
        },
        {
            id:6,
            name:"Mountain House",
            location:"British columbia, Canada",
            rate:7.8,
            imagesFolder:"/mountainhouse",
            services:["wifi","lake-view","mountain-view"],
        },
    ],
  };

  const reducer = (state=initialState,action)=>{
    switch (action.type) {
        default:return state;
    }
  }


export default reducer;