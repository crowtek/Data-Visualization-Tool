import { mediaQueries } from "../Layout"

export const ErfassungLayout = () => ({
    display:"flex",
    flexWrap:"wrap",
    gap:"20px",
    padding:"20px",
    [mediaQueries.small]:{
        padding:"5px",
        gap:"10px",
        justifyContent:"space-evenly"
    }
})

export const OverviewBoxStyle = (colors) => ({
    height:"20vh",
    width:"20vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"column",
    gap:"20px",

    border: "2px solid gray",
    borderRadius: "5px",
    background: colors.primary[400],
    overflow:"auto",
    cursor:"pointer",
    transition:"all 0,4s ease-in-out",

    "&:hover": {
        background:colors.blueAccent[700]
    },
    "& > svg":{
        height: "60px",
        width: "60px",
    },
    "& > p":{
        fontSize:"20px",
        fontWeight:"bold",
    },

})