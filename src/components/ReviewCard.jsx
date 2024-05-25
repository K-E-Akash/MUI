import { DeleteOutlined } from '@mui/icons-material'
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'

const ReviewCard = ({ data, handleDelete }) => {
    return (
        <>
            <Card elevation={2}>
                <CardHeader
                    action={
                        <IconButton onClick={() => {handleDelete(data.id)}}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={data.Email}
                    subheader={data.Rate}
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        {data.Details == '' ? 'NA' : data.Details}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default ReviewCard