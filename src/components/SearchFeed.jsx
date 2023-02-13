import React, {useState, useEffect} from 'react'
import {Box, Stack, Typography} from "@mui/material"
import {Sidebar, Videos} from "./"
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromApi'

const Feed = () => {
  const [videos, setVideos]= useState([])
  const {searchTerm} = useParams()

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  },[searchTerm])
  return (
    <Box sx={{overflowY:"auto"}}>
      <Typography variant='h4' sx={{color:"white" , fontWeight:"bold" ,ml:"20px", mb:"20px"}}>{searchTerm} <span style={{color:"#F31503"}}>videos</span> </Typography>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
      <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default Feed