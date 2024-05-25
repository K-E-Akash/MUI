import { Box, Button, Typography, ButtonGroup, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import '../styles/Home.css'
import { amber } from '@mui/material/colors'
import Form1 from '../components/Form1'
import { useNavigate } from 'react-router-dom'

// Custom theme settings
const theme = createTheme({
    palette: {
        primary: {
            main: '#fefefe'
        },
        secondary: amber
    },
    typography: {
        fontFamily: 'Quicksand'
    }
})

export default function Home() {

    const navigate = useNavigate()

    return (
        <>
            {/* Page */}
            <Box
                sx={{
                    maxWidth: '100vw',
                    paddingRight: 10,
                    paddingBottom: 10
                }}
            >
                {/* Heading */}
                <Box>
                    <Typography variant='h1' align='center' gutterBottom >
                        Home Page
                    </Typography>
                </Box>

                {/* Typography */}
                <Box ml={20}>
                    <Typography variant='h4' ml={-10} my={5}>
                        Typography Component
                    </Typography>

                    <Typography variant='subtitle1' pt={3} >Subtitle 1</Typography>
                    <Typography variant='subtitle2' pt={3} >Subtitle 2</Typography>
                    <Typography variant='inherit' pt={3} >Inherit</Typography>
                    <Typography variant='overline' pt={3} >Overline</Typography> {/* Places text above the line */}
                    <Typography variant='body1' pt={3} >Body 1</Typography>
                    <Typography variant='body2' pt={3} >Body 2</Typography>
                    <Typography variant='button' pt={3} >Button</Typography> {/* Convetrs to Inline, Uppercase, No padding */}
                    <Typography variant='caption' pt={3} >Caption</Typography> {/* Convetrs to Inline, No padding */}
                </Box>

                {/* Buttons */}
                <Box ml={20}>
                    <Typography variant='h4' ml={-10} my={5}>
                        Button Component
                    </Typography>

                    <Box display='flex' flexDirection='row' gap={2}>
                        <Button variant="text" color="inherit">Text</Button>
                        <Button variant='outlined'>Outlined</Button>
                        <Button variant='contained'>Contained</Button>

                        <Button variant="contained" disableElevation>
                            Disable elevation
                        </Button>

                        <Button color="secondary">Secondary</Button>
                        <Button variant="contained" color="success">
                            Success
                        </Button>
                        <Button variant="outlined" color="error">
                            Error
                        </Button>

                        <Button variant="outlined" size="small">
                            Small
                        </Button>
                        <Button variant="outlined" size="medium">
                            Medium
                        </Button>
                        <Button variant="outlined" size="large">
                            Large
                        </Button>
                    </Box>

                    <ButtonGroup sx={{
                        m: 2
                    }}>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </Box>

                {/* Theme Styling */}
                <Box ml={20}>
                    <Typography variant='h4' ml={-10} my={5}>
                        Theme Styling
                    </Typography>

                    <ThemeProvider theme={theme}>
                        <Typography>
                            Click the button to Submit form -
                            <Button variant='contained' color='secondary' sx={{ ml: 2 }}>Submit</Button>
                            <Button variant='contained' color='primary' sx={{ ml: 2 }}>Cancel</Button>
                        </Typography>
                    </ThemeProvider>
                </Box>

                {/* Form */}
                <Box ml={20}>
                    <Typography variant='h4' ml={-10} my={5}>
                        Form
                    </Typography>
                    <Form1 />
                </Box>

                {/* Dashboard */}
                <Box ml={20}>
                    <Typography variant='h4' ml={-10} my={5}>
                        Dashboard
                    </Typography>
                    <Button variant='outlined' size='medium' onClick={() => { navigate('/Dashboard') }}>Visit</Button>
                </Box>
            </Box >
        </>
    )
}
