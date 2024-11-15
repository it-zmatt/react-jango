import React from 'react';
import { Box, Typography } from '@mui/material';
import MyTextField from './forms/MyTextField';
import MyDatePicker from './forms/MyDatePicker';
import MyMultiline from './forms/MyMultiline';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Dayjs from 'dayjs';
import MyAxios from './Axios';


const Create = () => {
    const defaultValues = {
        title: '',
        date: Dayjs().format('YYYY-MM-DD'),
        description: '',
    };
    const {control, handleSubmit} = useForm();

    const submission = (data) => {
        const MyDate = Dayjs(data.date).format('YYYY-MM-DD');
        MyAxios.post('projects/', {
            title: data.title,
            created: MyDate,  
            description: data.description, 
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

    };


    return (
        <div>
            <Box>
                <Typography sx={{ margin: '10px' }} variant="h3">Create Records</Typography>
            </Box>
            <form onSubmit={handleSubmit(submission)}>
                <Box
                    sx={
                    { display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '40vw',
                        margin: 'auto',
                    }
                    }
                    >
                    <MyTextField 
                        label="Title"
                        placeholder="Enter the title please"
                        name="title"
                        control={control}
                        margin="10px"
                        width="100%"
                    />
                    <MyDatePicker
                        label="Date" 
                        name="date" 
                        control={control} 
                        margin="10px"
                        width="100%"
                    />
                    <MyMultiline 
                        label="Description" 
                        placeholder="Enter the description please" 
                        name="description" 
                        control={control} 
                        margin="10px"
                        width="100%"
                        rows={4}
                    />

                    <Button 
                    sx={{ margin: '10px', width: '100%' }}
                    variant="contained" type="submit">Submit</Button>  

                </Box>
            </form>
        </div>
    );
};

export default Create;