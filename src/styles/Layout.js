


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

