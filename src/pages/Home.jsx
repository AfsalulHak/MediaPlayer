import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import Catogory from '../components/Catogory'
import View from '../components/View'






function Home() {

   const [addVideoResponse,setAddVideoResponse]=useState("")
   const [deleteVideoResponseFromCat,setDeleteVideoResponseFromCat]=useState("")
    const [deleteVideoResponseFromDrag,setDeleteVideoResponseFromDrag]=useState("")

  return (
  <>
     <div className='container-fluid my-5 d-flex justify-content-between w-100'>
       <div className='d-flex justify-content-start w-50'>
         <Add setAddVideoResponse={setAddVideoResponse}/>
       </div>
       <div className='d-flex justify-content-end w-50'>
         <Link to={'/history'} className='text-warning text-decoration-none fs-5'> Watch History</Link>
       </div>
     </div>

      <div className='container-fluid  d-flex flex-md-row flex-lg-row my-5 '>
        <div className='col-lg-6 col-md-6 col-sm-6 p-0 '>
        <h3 style={{color:'violet'}}>All videos</h3>
        <View addVideoResponse={addVideoResponse} 
        deleteVideoResponseFromCat={deleteVideoResponseFromCat}
        setDeleteVideoResponseFromDrag={setDeleteVideoResponseFromDrag}/>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 p-0'>
        <Catogory setDeleteVideoResponseFromCat={setDeleteVideoResponseFromCat}  
        deleteVideoResponseFromDrag={deleteVideoResponseFromDrag}/>
        </div>


      </div>
  </>
  )
}

export default Home
