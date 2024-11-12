import React from 'react';
import {AdapterDayjs} from '@mui/lab/AdapterDayjs';
import {LocalizationProvider} from '@mui/lab/LocalizationProvider';
import {DatePicker} from '@mui/lab/DatePicker';
import { Controller } from 'react-hook-form';


const MyDatePicker = (props) => {
    const {label, placeholder, name, control} = props;
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>

<Controller
        name = {name}
        control={control}
        render={({ 
            field: { onChange, value, name },
            fieldState: { error },
            formState,
         }) => (
            <DatePicker label={label} />
        )
        }
        />


        
        
        
        </LocalizationProvider>
    );
};

export default MyDatePicker;