
import { mediaQueries } from "../Layout";

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
