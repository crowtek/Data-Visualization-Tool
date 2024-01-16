export const mediaQueries = {
    small: "@media (max-width: 600px)",
    medium: "@media (max-width: 868px)",
    large: "@media (max-width: 1124px)",
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
    overflow:"hidden"
})

export const dashboardGrid = () => ({
    display:"grid", 
    gridTemplateColumns:"repeat(12, 1fr)",
    gridAutoRows:"repeat(6, 1fr)",
    gap:"10px",
    height:"100%",
    [mediaQueries.medium]: {
        gridTemplateColumns:"1fr",
        gridAutoRows:"repeat(12, 1fr)",
    }
}); 