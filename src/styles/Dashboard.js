
export const boxStyle = (colors) => ({
    display:"flex", 
    alignItems:"center", 
    justifyContent:"center", 
    border:"2px solid gray",
    borderRadius:"5px",
    background:`${colors.primary[400]}`,
    overflow:"auto",
    "@media (max-width: 900px)" : {
        overflow:"unset"
    }
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
        letterSpacing:"0.7px",
        "@media (max-width: 900px)" : {
            display: "none",
        }
    },
    "@media (max-width: 900px)" : {
        gridColumn: "span 3",
        gridRow: "span 1",
        ".hiddeOnMobile": {
            display:"none",
        }
    }
});
