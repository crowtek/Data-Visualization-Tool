import { useState, useMemo } from "react";
import { Box,Typography,Modal,useTheme ,Table, TableCell, TableBody, TableRow,TableHead} from "@mui/material";
import { tokens } from "../../../theme";

const CustomerList = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const ModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        padding: 20,
        display:"flex",
        flexDirection:"column",
        gap: 5,
        maxHeight:"70vh",
        overflow:"auto",
    };

    const handleClose = () => {
        props.setOpenModal(false)
    }

    return (
        <Modal open={props.openModal} onClose={handleClose} >
            <Box className="custom-scrollbar" style={ModalStyle} sx={{backgroundColor:"background.paper", width:"auto"}}>
                <Typography mb={1} variant="h3">Customer Data (from Fetched Api)</Typography>
                <Table sx={{border:"solid 0.5px",borderColor:colors.primary[300], borderRadius:"10px"}}>
                    <TableHead>
                        <TableRow >
                            <TableCell></TableCell>
                            <TableCell sx={{fontSize:"20px"}}>Name</TableCell>
                            <TableCell sx={{fontSize:"20px"}}>Phone Number</TableCell>
                            <TableCell sx={{fontSize:"20px"}}>Address</TableCell>
                            <TableCell sx={{fontSize:"20px"}}>Email Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        props.customerList.map((customer, key) => {
                            return (
                            <TableRow key={key}>
                                <TableCell><img src={customer.picture.thumbnail} style={{borderRadius:"25px"}} alt={customer.name.first}/></TableCell>
                                <TableCell>{customer.name.first + " " +customer.name.last}</TableCell>
                                <TableCell>{customer.cell}</TableCell>
                                <TableCell>
                                    {customer.location.country + " "+
                                    customer.location.street.name+ " " + customer.location.street.number}
                                </TableCell>
                                <TableCell>{customer.email} </TableCell>
                            </TableRow>)
                        })
                    }
                    </TableBody>
                </Table>
            </Box>
        </Modal>
    )
}
export default CustomerList;