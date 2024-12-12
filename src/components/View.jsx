import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { addVideoAPI, getSingleCategoryAPI, getVideoAPI, updateCategoryAPI } from '../Services/allAPI'







function View({addVideoResponse,deleteVideoResponseFromCat,setDeleteVideoResponseFromDrag}) {
  
  const [allVideos,setAllVideos]=useState([])
  const [deleteVideoResponse,setdeleteVideoResponse]=useState("")
  // console.log(allVideos);
  
  useEffect(()=>{
    getAllVideos()
  },[addVideoResponse,deleteVideoResponse,deleteVideoResponseFromCat])


 const getAllVideos=async()=>{
   try{
    const result=await getVideoAPI()
    if(result.status>=200 && result.status<300){
      setAllVideos(result.data)
      
   }
  }
  catch(err){
    console.log(err);
    
  }
 } 

 const dragOverCategory=(e)=>{
  e.preventDefault()
 }
 const dropCategoryvideo=async(e)=>{
 const {videoDetails,categoryId} = JSON.parse(e.dataTransfer.getData("shareData"))
 
 console.log(`video details : ${videoDetails}, category id:${categoryId}`);
 
 try{

 const{data} = await getSingleCategoryAPI(categoryId)
 
 
 console.log(data);

 const updateCategoryAllVideos=data.allVideos.filter(item=>item.id!=videoDetails.id)
 console.log(updateCategoryAllVideos);
 
 const {id,categoryName}=data

 const response=await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updateCategoryAllVideos})
 console.log(response);
 setDeleteVideoResponseFromDrag(response)
 
 const result = await addVideoAPI(videoDetails)


 getAllVideos()
 

 

 }
 catch(err){
  console.log(err);
  
 }


 }


  return (
    <>
      <Row droppable={true} onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>dropCategoryvideo(e)} className='mt-5  gap-4  '>
      {
        allVideos?.length>0 ?
        allVideos.map(video=>(
          <Col lg={3} md={4} sm={6} xs={12}  key={video.id}>
          <Videocard videoDetails={video}
          setdeleteVideoResponse={setdeleteVideoResponse}
          deleteVideoResponseFromCat={deleteVideoResponseFromCat}
      
          />
       </Col>
        ))
       :
     <div className='text-danger text-center'>
      Nothing to display
     </div>
      }

      </Row>
    </>
  )
}

export default View
