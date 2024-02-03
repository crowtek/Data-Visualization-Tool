export const mediaQueries = {
    small: "@media (max-width: 600px)",
    medium: "@media (max-width: 900px)",
    large: "@media (max-width: 1400px)",
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
    [mediaQueries.medium]: {
        height:"100%",
        maxWidth:"100vw",
        overflow:"unset"
    }
})

export const dashboardGrid = () => ({
    display:"grid", 
    gridTemplateColumns:"repeat(12, 1fr)",
    gridTemplateRows:"repeat(6, 1fr)",
    gap:"10px",
    height:"100%",
    [mediaQueries.medium]: {
        gridTemplateColumns:"repeat(4, 1fr)",
        gridTemplateRows:"repeat(12, 1fr)",
        "& > div": {
            gridColumn: "span 4",
            gridRow:"span 2",
        },
        "& > div.smallGrid": {
            gridColumn: "span 1",
            gridRow:"span 1",
        }
    },

}); 