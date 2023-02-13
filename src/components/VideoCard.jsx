import React from 'react'
import { Link } from 'react-router-dom'
import {Typography, Card, CardContent, CardMedia} from "@mui/material"
import { CheckCircle } from '@mui/icons-material'
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from "../utils/constants"

const VideoCard = ({video:{id:{videoId}, snippet}}) => {
  return (
    <Card className='videoCard' sx={{ width: { xs: '100%', sm: '358px', md: "320px"}, boxShadow:'none' , borderRadius:0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia className='videoCard-img'  sx={{ width: { xs: '100%', sm: '358px', md:"320px"}, height: 180 }} alt={snippet?.title} image={snippet?.thumbnails?.high?.url} />
        </Link>
        <CardContent sx={{backgroundColor:"#1e1e1e", height:"106px"}}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Typography variant='subtitle1' sx={{color:"white", fontWeight:"bold"}}>
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
              </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
              <Typography variant='subtitle2' sx={{ display:"flex", alignItems: "center", color:"gray", fontWeight:"bold"}}>
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle color='gray' sx={{ fontSize:"12px" ,ml:"5px"}} />
              </Typography>
          </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard