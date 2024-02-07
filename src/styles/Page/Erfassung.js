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

export const OverviewBoxStyle = () => ({
    height:"25vh",
    width:"25vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"column",
    gap:"20px",

    border: "2px solid gray",
    borderRadius: "5px",
    background: "#1F2A40",
    overflow:"auto",
    cursor:"pointer",
    transition:"all 0,4s ease-in-out",

    "&:hover": {
        background:"#33466b"
    },
    "& > svg":{
        height: "80px",
        width: "80px",
    },
    "& > p":{

        fontSize:"22px",
        fontWeight:"bold",
    },

})