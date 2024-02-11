
import { mediaQueries } from "../Layout";

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
    ".chartGrid":{
        gridColumn: "span 3",
        gridRow:"span 2",
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
    ".statBox":Statbox(colors),
    ".dashboardList":List(colors),
    ".dashboardList-container":ListGrid(colors),
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
    },

}); 


const Statbox = (colors) => ({
    width:"100%",
    padding: "15px",
    overflow:"hidden",

    ".statBox-title":{
        display:"flex",
        justifyContent:"space-between",
        alignContent:"center",
        fontSize:"22px",
        fontWeight:"bold",
        "svg":{
            fontSize:"30px",
            color: colors.primary[300]
        },
        [mediaQueries.laptop]:{
            display:"none",
        },
        [mediaQueries.medium]:{
            display:"none",
        },  
    },
    
    ".statBox-subtitle":{
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        fontSize:"22px",
        fontWeight:"bold",
        gap:2,

        "svg":{
            fontSize:"30px",
        },
        [mediaQueries.laptop]:{
            fontSize:"18px",
        },
        [mediaQueries.medium]:{
            justifyContent:"center",
            fontSize:"15px",
            gap:1,
            margin:"5px"
        },  
    },


})

export const List = (colors) => ({
    "& .MuiTableCell-root" : {
        fontSize: 16,
        fontWeight: "bold",
        whiteSpace: "nowrap",
        [mediaQueries.laptop] : {
            fontSize: 14
        }
    },
    "& .incomingTimeCell": {
        color:`${colors.blueAccent[300]}`,
        letterSpacing:"0.7px",
        [mediaQueries.medium] : {
            display: "none",
        }
    },
    [mediaQueries.laptop] : {
        gridColumn: "span 4",
        gridRow: "span 1",
        ".hiddeOnMobile": {
            display:"none",
        }
    }
});

export const ListGrid = () => ({
    gridColumn: "span 5",
    gridRow:"span 4",
    [mediaQueries.large] : {
        gridColumn: "span 12",
    },
    [mediaQueries.laptop]: {
        gridColumn: "span 4",
        gridRow:"span 8",
        
    },
});

