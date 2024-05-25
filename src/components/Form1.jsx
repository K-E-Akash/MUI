import React, { useState } from 'react';
import '../styles/Home.css' // Assuming styles for non-MUI elements
import styled from 'styled-components';
import { TextField, Button, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';

// Styled Components (Consider using MUI's built-in styles for simplicity)
const StyledTextField = styled(TextField)`
// Write Your Styles here
`;

export default function Form1() {
    
    const [Email, setEmail] = useState('');
    const [Details, setDetails] = useState('');
    const [Rate, setRate] = useState('')
    const [EmailError, setEmailError] = useState(false)

    async function updateData(Email, Details, Rate) {
        try {
          const response = await fetch("http://localhost:8000/Reviews", {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({ Email, Details, Rate })
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json(); // Potential for further processing
          console.log("Data updated successfully:", data); // Optional for logging
      
        } catch (error) {
          console.error("Error updating data:", error);
        }
      }
      

    const handleChange = async (e) => {
        e.preventDefault();

        if (Email == '') {
            setEmailError(true)
        } else setEmailError(false)

        if (Email && Rate) {
            await updateData(Email, Details, Rate);
        }

        setEmail('')
        setDetails('')
        setRate('')
    };

    return (
        <>
            <form onSubmit={handleChange} noValidate>
                <StyledTextField
                    onChange={(e) => setEmail(e.target.value)}
                    variant='outlined'
                    label='Enter email'
                    color='grey'
                    required
                    fullWidth
                    error={EmailError}
                    sx={{
                        mb: 1
                    }}
                />

                <StyledTextField
                    onChange={(e) => setDetails(e.target.value)}
                    variant='outlined'
                    label='Enter message'
                    color='grey'
                    fullWidth
                    multiline
                    rows={4}
                    sx={{
                        mb: 2
                    }}
                />

                <FormControl
                    sx={{
                        display: 'Block',
                        marginBottom: 3
                    }}>
                    <FormLabel variant='h6' >Rating us helps to improve -</FormLabel>

                    <RadioGroup value={Rate} onChange={(e) => {setRate(e.target.value)}}>
                        <FormControlLabel value='excellent' control={<Radio />} label='Excellent' />
                        <FormControlLabel value='verygood' control={<Radio />} label='Very Good' />
                        <FormControlLabel value='good' control={<Radio />} label='Good' />
                        <FormControlLabel value='average' control={<Radio />} label='Average' />
                    </RadioGroup>

                </FormControl>

                <Button type='submit' variant='contained'>
                    Submit
                </Button>
            </form>
        </>
    );
}
