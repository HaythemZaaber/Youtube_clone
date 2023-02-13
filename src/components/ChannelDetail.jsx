import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from "@mui/material"
import { fetchFromAPI } from '../utils/fetchFromApi'
import ChannelCard from './ChannelCard'
import Videos from './Videos'
import Loader from './Loader'


const ChannelDetail = () => {
  const {id} = useParams()
  const [channelDetails, setChannelDetails]= useState([])
  const [channelVideos, setChannelVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetails(data.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
    .then((data)=>setChannelVideos(data.items))
  },[id])

  if (channelDetails.length===0 || channelVideos.length === 0){
    return <Loader/>
  }

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex:10
        }} />
        <ChannelCard channel={channelDetails} marginTop="-96px" />
        <Box p={2} display="flex">
          <Box sx={{ mr: { sm: '100px' } }}/>
          <Videos videos={channelVideos} />
        </Box>
      </Box>  
    </Box>
  )
}

export default ChannelDetail