import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';



const MyMultiline = (props) => {
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
            id="outlined-multiline-static"
            label={label}
            multiline
            rows={4}
            defaultValue="Hello"
            variant="outlined"
        />
        )
        }
        />






        
    );
};

export default MyMultiline;