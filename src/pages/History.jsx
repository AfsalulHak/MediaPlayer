import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getWatchHistoryAPI } from '../Services/allAPI'





function History() {

  const[history,setHistory]=useState([])
  // console.log(history);
   useEffect(()=>{
    getWatchHistory()
   },[])

  const getWatchHistory=async()=>{
    try{
     const result =  await getWatchHistoryAPI()
     setHistory(result.data)
       
    }
   
   catch(err){
     console.log(err);
     
   }
  } 

  const deleteHistory=async(videoId)=>{
    try{

      await deleteHistoryAPI(videoId)
      getWatchHistory()

    }catch(err){
      console.log(err);
      
    }
  }



  return (
    <>
  <div className='container'>
      <div className='d-flex justify-content-between'>
        <h3 style={{color:'gold'}}>Watch History</h3>
        <Link className='text-info text-decoration-none' to={'/home'} style={{fontSize:'2rem'}}>Back to <i class="fa-solid fa-house"></i></Link>
      </div>

      <div className='table-container'>
  <div className='table-responsive'>
    {history?.length > 0 ? (
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Date & Time</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {history.map((video) => (
            <tr key={video?.id}>
              <td>{video?.id}</td>
              <td>{video?.caption}</td>
              <td><a href={video?.youtubeUrl} target="_blank" rel="noopener noreferrer">{video?.youtubeUrl}</a></td>
              <td>{video?.formattedDate}</td>
              <td>
                <button onClick={()=>deleteHistory(video?.id)} className='btn' variant="primary">
                  <i className="fa-solid fa-trash" style={{ color: 'red', fontSize: '14px' }}></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <h4 className='text text-danger'>Nothing to display</h4>
    )}
  </div>
</div>


  </div>
      
    </>
  )
}

export default History
