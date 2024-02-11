
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
});

