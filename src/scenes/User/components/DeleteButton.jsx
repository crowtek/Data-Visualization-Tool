import React, { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useTheme } from '@mui/material/styles';
import { tokens } from "../../../theme";

const UserTrModal = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [open, setOpen] = useState(false);

    const deleteUser = useCallback(() => {
        const apiUrl = 'api-url';

        fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // authentication headers
            },
            body: JSON.stringify({ userId: props.userId }),
        })
            .then(response => {
                if (response.ok) {
                    // Request was successful, rerender
                    setOpen(false);
                } else {
                    console.error('Error deleting user:', response.status, response.statusText);
                }
            })
            .catch(error => {
                console.error('Network error:', error);
            });
    }, [props.userId]);

    return (
        <Button onClick={deleteUser}>
            <DeleteOutlineOutlinedIcon sx={{ color: colors.grey[500] }} />
        </Button>
    );
}

export default UserTrModal;
