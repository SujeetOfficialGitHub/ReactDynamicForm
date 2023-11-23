import { Box, Stack, Typography } from '@mui/joy'
import React from 'react'
import CstInput from '../../Components/ControlledForm/CstInput'
import { useState } from 'react'
import CstButton from '../../Components/CstButton'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [formData, setFormData] = useState([
        { id: 1, label: 'Name', value: '' },
        { id: 2, label: 'Email', value: '' },
        { id: 3, label: 'Phone', value: '' },
        { id: 4, label: 'Password', value: '' },
        { id: 5, label: 'Confirm Password', value: '' },
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

    const handleSignup = () => {
        console.log(formData)
    }
    return (
        <Box>
            <Stack
                direction="column"
                spacing={3}
                maxWidth={500}
                margin="30px auto"
            >
                <Typography level='h2' textAlign="center">Create your account</Typography>
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
                    title="Sign up"
                    onClick={handleSignup}
                />
                <Typography>Already have an account <Link to="/login">login here</Link></Typography>
            </Stack>
        </Box>
    )
}

export default Signup
