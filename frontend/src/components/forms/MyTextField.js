import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

const MyTextField = (props) => {
    const {label, placeholder, name, control} = props;
    return (

        <Controller
        name = {name}
        control={control}
        render={({ 
            field: { onChange, value, name },
            fieldState: { error },
            formState,
         }) => (
            <TextField 
                id="outlined-basic"
                label={label} 
                variant="outlined"
                placeholder={placeholder}
            />
        )
        }
        />



    );
};

export default MyTextField;