


export const mediaQueries = {
    small: "@media (max-width: 600px)",
    medium: "@media (max-width: 900px)",
    laptop: "@media (max-width: 1400px)",
    large: "@media (max-width: 1540px)",
};

  
export const headerStyle = () => ({
    height:"8vh",
    display:"flex", 
    alignItems:"center", 
    justifyContent:"flex-end", 
    padding:"20px",
    [mediaQueries.medium]:{
        padding:"20px",
    }
});

export const containerStyle = () => ({
    height:"92vh",
    maxWidth:"96vw",
    padding:"20px",
    overflow:"hidden",
    [mediaQueries.laptop]: {
        height:"100%",
        maxWidth:"100vw",
        overflow:"unset"
    }
})

export const dashboardGrid = (colors) => ({
    display:"grid", 
    gridTemplateColumns:"repeat(12, 1fr)",
    gridTemplateRows:"repeat(6, 1fr)",
    gap:"10px",
    height:"100%",
    "& > div":{
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center", 
        border:"2px solid gray",
        borderRadius:"5px",
        background:`${colors.primary[400]}`,
        overflow:"auto",
        [mediaQueries.laptop] : {
            overflow:"unset"
        }
    },
    ".WeeklyOverview":{
        gridColumn: "span 7",
        gridRow:"span 4",
        "& > div":{
            display:"flex",
            justifyContent:"center"
        },
        [mediaQueries.large] : {
            display:"none"
        },
    },
    ".smallGrid":{
        gridColumn: "span 3",
        gridRow:"span 1",
        "svg":{
            fontSize: "30px"
        },
    },
    ".red":{
        color: colors.redAccent[400],
        "svg":{
            color:colors.redAccent[400]
        }
    },

    ".green":{
        color: colors.greenAccent[400],
        "svg":{
            color:colors.greenAccent[400]
        }
    },

    ".blue":{
        color: colors.blueAccent[400],
        "svg":{
            color:colors.blueAccent[400]
        }
    },
    [mediaQueries.laptop]: {
        gridTemplateColumns:"repeat(4, 1fr)",
        gridTemplateRows:"repeat(12, 1fr)",
        "& > div": {
            gridColumn: "span 4",
            gridRow:"span 2",
        },
        "& > div.smallGrid": {
            gridColumn: "span 1",
            gridRow:"span 1",
        },
        "& > div.bigGrid": {
            gridColumn: "span 4",
            gridRow:"span 8",
        }
    },

}); 