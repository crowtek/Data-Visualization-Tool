import { mediaQueries } from "../Layout";

export const EventListStyle = (colors) => ({
    display:"flex", 
    justifyContent:"flex-start",
    flexDirection:"column",
    gap:2, 
    flexGrow:0.8,
    backgroundColor:colors.primary[400],
    padding:"15px",
    borderRadius:"5px",
    ".eventList":{
        display:"flex", 
        justifyContent:"flex-start",
        flexDirection:"column",
        gap:2, 
    },
    ".eventList-item":{
        borderRadius:"5px",
    }
});
