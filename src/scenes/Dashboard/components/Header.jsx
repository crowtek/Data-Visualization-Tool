import { useState } from "react";
import { Box,Button,useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import Header from "../../../components/Header";
import CustomerList from "./CustomerList";



const DashboardHeader = () => {
    const [customerList, setCustomerList] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleShowCustomerList = () => {
        fetch("https://randomuser.me/api/?results=20")
        .then((res) =>  {
            return res.json()
        })
        .then((data)=> {
            console.log(data.results)
            setCustomerList(data.results)
            setOpenModal(true)
        })

    }

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Header title="Dashboard" />

            <Button sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "16px",
                letterSpacing: "0.7px",
                fontWeight: "bold",
                padding: "10px 20px",
            }}
            onClick={handleShowCustomerList}
            >
                <RecentActorsIcon sx={{ mr: "10px" }} />
                Customer List 
            </Button>
            <CustomerList openModal={openModal} setOpenModal={setOpenModal} customerList={customerList}/>
       </Box>
    )
}
export default DashboardHeader;