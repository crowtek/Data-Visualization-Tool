import { Button } from '@mui/material';

const DeleteEventButton = ({element}) => {

    const handlClick = () => {
        console.log("Delete event with ID: " + element)
    }

    return (
        <Button 
            variant="outlined"
            color="error"
            onClick={handlClick}
        >
            Delete
        </Button>
    )
}

export default DeleteEventButton;