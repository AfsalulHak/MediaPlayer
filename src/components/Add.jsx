import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addVideoAPI } from '../Services/allAPI';






function Add({setAddVideoResponse}) {
    //state create 
    const [videoDetails,setVideoDetails]=useState({caption:"",imageUrl:"",youtubeUrl:""})
  //  console.log(videoDetails);
   
   
   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [IsinavalidUrl,setIsinvalidUrl]=useState(false)
    // console.log(IsinavalidUrl);
    //
    

    const getEmbedUrl=(url)=>{
      // if(url=""){setIsinvalidUrl(false) setVideoDetails({...videoDetails,youtubeUrl:""})} return
    if(url.includes('v=')){
      const videoId=url.split('v=')[1].slice(0,11)
      console.log(videoId);

      setVideoDetails({...videoDetails,youtubeUrl:`https://www.youtube.com/embed/${videoId}`})
      setIsinvalidUrl(false);
  

    }
    else{
      setIsinvalidUrl(true)
      setVideoDetails({...videoDetails,youtubeUrl:""})
    }

    }
    //
    const uplaodData=async()=>{
      
      const {caption,imageUrl,youtubeUrl}=videoDetails

      if(caption && imageUrl && youtubeUrl){

        // console.log("do api call");

       try{
        const result= await addVideoAPI(videoDetails)
       
        if(result.status>=200 && result.status<=300){

          setAddVideoResponse(result.data)
          handleClose()
          toast.success(`${result.data.caption} added to your collection`)
          


        }
        
       }
       catch(err){
           console.log(err);
           
       }
        

      }else{
        toast.warning("Please enter the field Completely")
      }

    }

  return (
    <>
        <div className='d-flex align-items-center w-100'>
        <h5 className='text-warning '>Upload New video <button onClick={handleShow} className='btn btn-warning fs-5 ms-2 rounded-circle'>+</button></h5>
         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning fw-bold'>Video Details !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Please fill the Movie Details</p>
        <div className='border border-3 border-info p-3 rounded'>

        <FloatingLabel controlId="caption" label="Caption" className="mb-3">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Caption" />
        </FloatingLabel>

        <FloatingLabel controlId="image" label="Image Url" className="mb-3">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="Image Url" />
        </FloatingLabel>

        <FloatingLabel controlId="url" label="Youtube Url" className="mb-3">
        <Form.Control onChange={e=>getEmbedUrl(e.target.value)} type="text" placeholder="Youtube Url" />
          
       
          {IsinavalidUrl && (
            <div className='d-flex  justify-content-center mt-2'>
            <p className='text text-danger fw-bold'>Invalid Url</p>
            </div>
                )}
          
        </FloatingLabel>

        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={uplaodData}>Upload</Button>
        </Modal.Footer>
      </Modal>
        </div>
   
      
    </>
  )
}

export default Add
