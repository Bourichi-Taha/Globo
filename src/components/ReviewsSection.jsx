import React from 'react'
import "../assets/css/reviews-section.css"
import img from '../assets/images/icon/Dennis-Stenfert-1.png'
const ReviewsSection = () => {
  return (
    <div className="reviews-section-container">
      <h1 className="reviews-section-title">
        Reviews about n0name from Our Clients
      </h1>
      <div className="reviews-section-card-container">
        <div className="reviews-section-card">
          <h3 className="reviews-section-card-owner">Dennis Stenfert</h3>
          <h5 className="reviews-section-card-job">Director at Transportial</h5>
          <p className="reviews-section-card-review">No Name has created a team for Transportial to excel within the transportation sector and advance it forwards into a digital future.</p>
          <span className="reviews-section-card-img-container">
            <img src={img} alt="" className="reviews-section-card-img" />
          </span>
        </div>
      </div>
      <button className="reviews-section-btn"><span>read the full case study</span></button>
    </div>
  )
}

export default ReviewsSection