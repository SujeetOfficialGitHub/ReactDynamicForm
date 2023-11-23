import { Box, Stack, Typography } from '@mui/joy'
import React from 'react'
import CstInput from '../../Components/ControlledForm/CstInput'
import { useState } from 'react'
import CstButton from '../../Components/CstButton'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [formData, setFormData] = useState([
        { id: 2, label: 'Email', value: '' },
        { id: 4, label: 'Password', value: '' },
    ])
    const handleInputChange = (id, value) => {
        setFormData((prevFormData) =>
            prevFormData.map((field) => (field.id === id ? { ...field, value } : field))
        );
    };
    const validateField = (value) => {
        // Add your validation logic here
        return value.trim() !== ''; // Example: Field should not be empty
    };

    return (
        <Box>
            <Stack
             direction="column"
             spacing={4}
             maxWidth={500}
             margin="30px auto"
            >
                <Typography  level='h2' textAlign="center">Login</Typography>
                {formData.map((field) => (
                    <CstInput
                        key={field.id}
                        id={field.id}
                        label={field.label}
                        value={field.value}
                        onChange={handleInputChange}
                        validate={validateField}
                    />
                ))}
                <CstButton 
                    title="Login"
                />
                <Typography>Dont' have an account <Link to="/signup">signup here</Link></Typography>
            </Stack>
        </Box>
    )
}

export default Signup
