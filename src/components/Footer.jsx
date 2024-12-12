import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
  <>
  <div className="container mt-5 w-100 ">
  <div className="row">
    <div className="col-lg-3 col-md-3 col-sm-6 col-12  mt-4 ">
    <div className='d-flex flex-column p-4 p-md-0 '>
  <h4 className='mb-3'><i className="fa-solid fa-music me-2"></i> Media Player</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellat natus, vitae soluta, architecto suscipit obcaecati inventore velit officiis dolores recusandae doloribus voluptatem ab dolorum itaque, sunt ut quos illum</p>
  <p>code lisenced by luminar</p>
  <p>currently v5.3.2</p>
</div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-6 col-12 mt-4 ">
      <div className='d-flex flex-column p-4 p-md-0 '>
        <h5 className='mb-3'> Quick Links</h5>
        <Link to={'/'}  style={{textDecoration:'none',color:'white' }}>Landing</Link>
        <Link to={'/home'}  style={{textDecoration:'none', color:'white'}}>Home</Link>
        <Link to={'history'} style={{textDecoration:'none', color:'white'}}>History</Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-6 col-12 mt-4">
    <div className='d-flex flex-column p-4 p-md-0'>
        <h5 className='mb-3'>Guide</h5>
        <p>React</p>
        <p>React Bootstrap</p>
        <p>React Router</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-6 col-12 mt-4">
    <div className='d-flex flex-column p-4 p-md-0'>
      <h5 className='mb-3'>Contact Us</h5>
      <div className='d-flex'>
      <input className='form-control' type="text" placeholder='Enter The Email:' />
      <button className='btn btn-info ms-2'><i className="fa-solid fa-arrow-right"></i></button>
      </div>
      <div className='d-flex justify-content-between mt-4'>

        <a href="" className='text-white fs-5'><i className="fa-brands fa-facebook"></i></a>
        <a href="" className='text-white fs-5'><i className="fa-brands fa-twitter"></i></a>
        <a href="" className='text-white fs-5'><i className="fa-brands fa-instagram"></i></a>
        <a href="" className='text-white fs-5'><i className="fa-brands fa-linkedin"></i></a>
        <a href="" className='text-white fs-5'><i className="fa-brands fa-github"></i></a>
        <a href="" className='text-white fs-5'><i className="fa-solid fa-phone"></i></a>

      </div>
    </div>
    </div>
  </div>
</div>
<div className='text text-center text-white mt-4 p-2 p-md-0'>
  Copyright © Aug batch 2024, Media Player, Built with react
</div>
  </>
  )
}

export default Footer

