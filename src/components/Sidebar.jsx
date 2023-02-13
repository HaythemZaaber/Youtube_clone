import React from 'react'
import { Stack } from '@mui/system'
import { categories } from '../utils/constants'

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack direction="row" sx={{flexDirection:{md:"column"}, height:"95%", overflowY:"auto"}}>
        {categories.map((category, index)=>{
            const {name, icon}= category
            console.log(name)
            return <button key={index} onClick={()=>{setSelectedCategory(name)}} className='category-btn' style={{background:name===selectedCategory && "#FC1503", color:"white"}}>
              <span style={{color: name!== selectedCategory && "red", marginRight:"15px"}}>{icon}</span>
              <span style={{opacity:name===selectedCategory ? "1": "0.8"}}>{name}</span>
            </button>
        })}
    </Stack>
  )
}

export default Sidebar