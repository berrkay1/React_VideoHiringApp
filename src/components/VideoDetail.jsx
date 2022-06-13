import React from 'react'
import { Paper } from '@mui/material'
import Typography from '@mui/material/Typography'


function VideoDetail() {
  return (
    <>
      <Paper elevation={6} style={{ height:'70%' }}>
        <iframe 
        width='100%'
        height='100%'
        src=""
        frameborder="0"
        />

      </Paper>
      <Paper elevation={6} style={{ padding: '15px' }}>
        <Typography variant="h4">
          title-channelTitle
        </Typography>
        <Typography variant="subtitle1">
          channelTitle
        </Typography>
      </Paper>
    </>
  )
}

export default VideoDetail