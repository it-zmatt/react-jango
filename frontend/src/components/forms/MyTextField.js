import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';


const MyTextField = (props) => {
    const {label, placeholder, name, control, margin, width} = props;
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
                sx={{width: {width}, margin: {margin}}}
                id="outlined-basic"
                label={label} 
                variant="outlined"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        )
        }
        />



    );
};

export default MyTextField;