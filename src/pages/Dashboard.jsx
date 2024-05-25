import { Typography, Button, Box, Stack, Paper, Grid } from '@mui/material'
import React, { useState } from 'react'
import ReviewCard from '../components/ReviewCard'

const Dashboard = () => {
    const [Reviews, setReviews] = useState([])
    const [reviewsLoaded, setReviewsLoaded] = useState(false);

    async function fetchdata() {
        setReviewsLoaded(true);

        const response = await fetch('http://localhost:8000/Reviews');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setReviews(data);
        console.log(Reviews);
    }

    async function handleDelete(id) {
        const response = await fetch('http://localhost:8000/Reviews/' + id, {
            method: 'DELETE'
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const allReviews = Reviews.filter(review => review.id != id)
        setReviews(allReviews)
    }

    return (
        <>
            <Box sx={{
                display: 'block'
            }}>
            <Typography variant='h3' sx={{
                mt: '5vw',
                ml: '5vw'
            }} gutterBottom>Dashboard</Typography>

            <Box sx={{
                mt: '6vh',
                ml: '10vw'
            }}>
                <Typography variant='h4' gutterBottom>Reviews</Typography>

                <Stack sx={{
                    my: '2vw',
                    mr: '10vw',
                    ml: 0,
                }}>
                    <Grid container spacing={2}>
                        {!reviewsLoaded && (
                            <Grid item xs={12}>
                                <Typography variant="body2" align="center">
                                    Click the button to see reviews
                                </Typography>
                            </ Grid>
                        )}
                        {reviewsLoaded && (
                            Reviews.map((review, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Paper><ReviewCard data={review} handleDelete={handleDelete} /></Paper>
                                    </Grid>
                                )
                            })
                        )}
                    </Grid>
                </Stack>

                <Button variant='contained' onClick={fetchdata} size='large' sx={{
                    mt: 3,
                }}>Fetch Reviews</Button>
            </Box >
            </Box>
        </>
    )
}

export default Dashboard