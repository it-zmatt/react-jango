import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';



const MyMultiline = (props) => {
    const {label, placeholder, name, control, width, margin, rows} = props;

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
                id="outlined-multiline-static"
                label={label}
                placeholder={placeholder}
                multiline
                rows={rows}
                variant="outlined"
                onChange={onChange}
                value={value}
        />
        )
        }
        />






        
    );
};

export default MyMultiline;