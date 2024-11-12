import {React} from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import MyTextField from './forms/MyTextField';



const Create = () => {
    return (
        <div>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    widht: '100%',
                    margin: '10px auto',
                }}
            >
                <Typography sx={{margin: '10px'}} variant="h3">Create Records</Typography>

            </Box>

            <Box>
                <MyTextField label="Title" placeholder="Enter the title please"/>
            </Box>
        
            

        </div>
    );
};

export default Create;