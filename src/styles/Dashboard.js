
export const boxStyle = (colors) => ({
    display:"flex", 
    alignItems:"center", 
    justifyContent:"center", 
    border:"2px solid gray",
    borderRadius:"5px",
    background:`${colors.primary[400]}`,
    overflow:"auto"
});
  

export const List = (colors) => ({
    "& .MuiTableCell-root" : {
        fontSize: 16,
        fontWeight: "bold",
        whiteSpace: "nowrap",
        "@media (max-width: 1650px)" : {
            fontSize: 14
        }
    },
    "& .incomingTimeCell": {
        color:`${colors.blueAccent[300]}`,
        letterSpacing:"0.7px"
    }
});