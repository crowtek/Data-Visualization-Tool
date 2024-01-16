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
    padding:"20px",
})