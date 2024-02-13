import { Button } from '@mui/material';

const DeleteEventButton = ({element, onDeleteSuccess}) => {

    const handlClick = async() => {
        console.log("Delete event with ID: " + element)
        try {
            const response = await fetch(`https://yourapi.com/events/${element}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer yourAuthToken',
                },
            });

            if (!response.ok) throw new Error('Failed to delete');

            console.log("Delete event with ID: " + element);
            // refresh data
            onDeleteSuccess()
        } catch (error){
            console.error("Error deleting event:", error);
        }

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