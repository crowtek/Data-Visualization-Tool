import { mediaQueries } from "../Layout";

export const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:"flex",
    flexDirection:"column",
    gap: 5,
    ".modalContainer":{
        display:"flex",
        gap:2,
        [mediaQueries.medium]:{
            flexDirection:"column"
        }
    },
    [mediaQueries.medium]:{
        minWidth: "80vw",
    }
};