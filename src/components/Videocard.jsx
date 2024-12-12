import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addWatchHistoryAPI, deleteVideoAPI } from '../Services/allAPI';






function Videocard({videoDetails,setdeleteVideoResponse,insideCategory}) {
  // console.log(videoDetails);
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);

  const handleShow = async() => {
    
    
    const {caption,youtubeUrl}=videoDetails
    
    const localTime = new Date();
    const formattedDate = localTime.toLocaleString(); 
    console.log(formattedDate);
    

    
    const historyData={caption,youtubeUrl,formattedDate}

    try{
      await addWatchHistoryAPI(historyData)
    }catch(err){
      console.log(err);
      
    }
    

    setShow(true);


   }


  const deleteVideo=async(videoId)=>{
    try{
      const result=await deleteVideoAPI(videoId)
      setdeleteVideoResponse(result.data)
    }catch(err){
      console.log(err);
      
    }
  }


   // DRAG
   const dragVideoStarted = (e,videoId) => {
    console.log(`onDrag started with video id: ${videoId}`);
    

    //dec6
    e.dataTransfer.setData("videoId",videoId)
};



  return (
    <>

    <Card style={{ width: '12rem',height:'auto' }} draggable={true} onDragStart={(e)=>dragVideoStarted(e,videoDetails?.id)}>
      <Card.Img onClick={handleShow} style={{height:'180px'}} variant="top" src={videoDetails?.imageUrl} />
      <Card.Body className='container d-flex flex justify-content-between'>
        <Card.Title style={{fontSize: '1.2rem',  lineHeight: '1.5rem',overflow: 'hidden', height: '3rem', display: 'block', textOverflow: 'ellipsis', wordWrap: 'break-word'}}>{videoDetails?.caption}</Card.Title>
 { 
       !insideCategory &&
       <button onClick={()=>deleteVideo(videoDetails?.id)} className='btn' variant="primary"><i className="fa-solid fa-trash" style={{color:'red',fontSize:'20px'}}></i></button>
       }
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
        <Modal.Title>{videoDetails?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className="ratio ratio-16x9">
             
          <iframe width="770" height="377" src={`${videoDetails?.youtubeUrl}?autoplay=1&mute=1`} title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
        </Modal.Body>
    </Modal>
          
    </>
  )
}

export default Videocard
