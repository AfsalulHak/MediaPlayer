import React from 'react'
import landingImg from '../assets/landingGif.gif'
import Card from 'react-bootstrap/Card';
import manageImg from '../assets/ManageVideos.png'
import CatogoryImg from '../assets/CatImgVideo.png'
import HistoryImg from '../assets/HistoryVideos.png'
import { Link } from 'react-router-dom';

function Landing() {
  return (
  <>
    <div className='container  mt-5 w-100'>
        <div className='row align-items-center my-5'>
       <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
            <h3 style={{fontFamily:'Sevillana,cursive'}}>Welcome to <span style={{color:'gold'}}>Media Player</span></h3>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nihil minima voluptatibus quibusdam dicta? Nisi sequi numquam voluptate, deleniti eligendi molestias blanditiis impedit quos cupiditate! Autem eaque in rerum obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam alias doloremque? Deserunt, aspernatur ad? Quam alias eum vel. Inventore id praesentium quasi non. Sint possimus eum vitae sit neque.</p>
            <Link to={'/home'}><button className='btn btn-warning'>Get Start</button></Link>
       </div>
        
        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
          <div className='p-4 my-4'>
            <img  src={landingImg} alt="" className="img-fluid"  style={{maxHeight:'500px',maxWidth: '100%'}}/>
          </div>
          </div>
        </div> 
    </div>

        
  <div className='container mt-5'>
        <h2 className='text text-center mb-5' style={{fontFamily:'Sevillana,cursive',color:'gold'}} >Features</h2>
     <div className="row justify-content-center">
      <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-5 p-2 d-flex justify-content-center">
      <Card style={{ width: '22rem', height:'400px'}} className='p-3'>
      <Card.Img className="img-fluid" variant="top" src={manageImg} style={{maxHeight:'250px',maxWidth:'300px'}}/>
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
          Users can upload,view and remove the videos
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-5 p-2 d-flex justify-content-center">
      <Card style={{ width: '22rem', height:'400px'}} className='p-3'>
      <Card.Img className="img-fluid" variant="top" src={CatogoryImg} style={{height:'250px',width:'300px'}} />
        <Card.Body>
          <Card.Title>Categorize Videos</Card.Title>
          <Card.Text>
          Users can catogorize the video by drag and drop feature
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-5 p-2 d-flex justify-content-center">
      <Card style={{ width: '22rem', height:'400px'}} className='p-3'>
      <Card.Img className="img-fluid" variant="top" src={HistoryImg} style={{height:'250px',width:'300px'}} />
        <Card.Body>
          <Card.Title>Managing History</Card.Title>
          <Card.Text>
          Users can manage the watch history of all video
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
     </div>

  </div>

  <div className='container border border-primary mt-5'>
    <div className='row w-100'>
    <div class="col-12 col-md-6">
      <h3 className='mt-5 mb-4 text text-center' style={{fontFamily:'Sevillana,cursive',color:'gold'}}>Simple Fast and powerful</h3>
      <p className='p-2'><span className='fw-bold'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, error. Tenetur similique blanditiis nisi. Veniam vero velit labore, mollitia dolor fuga placeat rem saepe non consequatur, atque, vel repudiandae beatae?</p>
      <p className='p-2' ><span className='fw-bold'>Catogorize video</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, error. Tenetur similique blanditiis nisi. Veniam vero velit labore, mollitia dolor fuga placeat rem saepe non consequatur, atque, vel repudiandae beatae?</p>
      <p className='p-2' ><span className='fw-bold'>Manage History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, error. Tenetur similique blanditiis nisi. Veniam vero velit labore, mollitia dolor fuga placeat rem saepe non consequatur, atque, vel repudiandae beatae?</p>
    </div>
    <div class="p-3 col-lg-6 col-md-12 col-sm-12 ">
      
      <iframe className=' p-2 w-100 h-100' maxWidth="560" maxHeight="415" src="https://www.youtube.com/embed/d9MyW72ELq0?si=jeN_tBsSDx_RLez8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
    </div>

    </div>
   
  </div>
      
  </>
  )
}

export default Landing
