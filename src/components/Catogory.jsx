import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategoryAPI, deleteCatogoryAPI, deleteVideoAPI, getCatogoryAPI, getSingleVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import Videocard from './Videocard';







function Catogory({setDeleteVideoResponseFromCat,deleteVideoResponseFromDrag}) {

  const [categoryName,setCategoryName]=useState("")
  // console.log(categoryName);

  const [allCategory,setAllCategory]=useState([])
   console.log(allCategory);
   
  

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCatogory()
  },[deleteVideoResponseFromDrag])

      const addCategory=async()=>{
          try{
                const result= await addCategoryAPI({categoryName,allVideos:[]})
                console.log(result.data);
                handleClose()
                getAllCatogory()
                
                
          }catch(err){
                   console.log(err);
       
           }
         }

         const getAllCatogory=async()=>{

          try {

            const result = await getCatogoryAPI();
            setAllCategory(result.data);

          }
           catch (err) {
            console.error(err);
            
          }
        }


     const deleteCategory=async(categoryId)=>{
      try{
        const result = await deleteCatogoryAPI(categoryId)
        // console.log(result.data);
        getAllCatogory()
        // await deleteVideoAPI(videoId)
        
      }
      catch(err){
        console.log(err);
        
      }
     }   
       //drag videos    
     const dropVideo = async(e, categoryId) => {
      const videoId = e.dataTransfer.getData("videoId");
      console.log(`Video dragged with the ID ${videoId} and dropped in the category ${categoryId}`);
      try {
        const {data}=await getSingleVideoAPI(videoId)
        console.log(data);
        // 
        const selectedCategory= allCategory?.find(category=>category.id==categoryId)
        selectedCategory.allVideos.push(data)
        console.log(selectedCategory);
  
        await updateCategoryAPI(categoryId,selectedCategory)
        getAllCatogory()
         const response=await  deleteVideoAPI(videoId)
         setDeleteVideoResponseFromCat(response)
         
  
        
      } catch (err) {
        
      }
    };
     
    // Prevent dragover default behavior
      const dragOverCategory = (e) => {
                 e.preventDefault(); }

   const videoDragStarted=(e,videoDetails,categoryId)=>{
         const shareData={videoDetails,categoryId}
         getAllCatogory()
          // console.log(videoDetails,categoryId);
          
         e.dataTransfer.setData("shareData",JSON.stringify(shareData))

   }     

  return (
    <>
    <div className='container-fluid w-100 '>
      <div className='container d-flex justify-content-between gap-2 flex-lg-row'>
        <h3 style={{color:'violet'}}>All Category</h3>
        <h5><button  onClick={handleShow}  className='btn btn-warning fs-5 ms-2 rounded-circle'>+</button></h5>
      </div>
      <div>


       { //
        allCategory?.length>0 ?(
          allCategory.map(category=>(
            <div draggable={true} onDrop={(e)=>dropVideo(e,category?.id)} onDragOver={(e)=>dragOverCategory(e)} className='d-flex justify-content-between border border-3 border-info p-3 rounded p-2 mt-5 w-100'> 
           <div className='container d-flex justify-content-between row '>

              <div className='d-flex justify-content-between '>
                <h5  className="mb-0 text-warning">{category.categoryName}</h5>
                <button onClick={()=>deleteCategory(category.id)} className='btn' variant="primary"><i className="fa-solid fa-trash" style={{color:'red',fontSize:'20px'}}></i></button>
              </div>

              <div className="container-fluid mt-2">
                    <div className="row gx-5 gy-2"> 
                          {
                             category.allVideos?.length > 0 &&
                             category.allVideos?.map(video => (
                      <div draggable={true} onDragStart={(e) => videoDragStarted(e, video, category.id)} key={video?.id} className="col-lg-4 col-md-6 col-sm-12">
                      <Videocard videoDetails={video} insideCategory={true} />
                   </div>
                    ))
                          }
             </div>
           </div>

           </div>
          
          </div>
          ))
        )
        :
        (
          <div className='text-danger fw-bold fs-5 '>No Catogory Added yet...</div>
        )
       }

       

      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning '>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <div className='border border-3 border-info p-3 rounded'>
            <FloatingLabel controlId="category" label="Category" className="mb-3">
              <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category" />
            </FloatingLabel>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

    </div>
      
    </>
  )
}

export default Catogory

