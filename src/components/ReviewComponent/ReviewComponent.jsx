import React from "react";
import "./ReviewComponent.css";
import googleLogo from "/images/google.png";
import tripadvisorLogo from "/images/tripadvisor.png";
import userImage from "/images/userImage.png";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i
        key={i}
        className={i <= rating ? "fas fa-star" : "far fa-star"}
        style={{ color: "gold" }}
      ></i>
    );
  }
  return <div className="star-rating">{stars}</div>;
};

const ReviewComponent = () => {
  return (
    <section className="ReviewSection">
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-flex flex-column align-items-center">
            <img src={googleLogo} alt="Google" className="mb-2" />
            <h4>GOOGLE</h4>
            <p className="mb-0">4.9 rating</p>
            <StarRating rating={5} />
            <p>196 reviews</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="main-review position-relative border p-4 text-center">
              <img
                src={userImage}
                alt="User"
                className="rounded-circle position-absolute user-image"
              />
              <StarRating rating={5} />
              <h3>THE BEST BARBER SERVICES</h3>
              <p>
                Et proin ut in dignissim sem non a nullam magna lectus urna et
                dui quam tellus imperdiet sit purus at fringilla scelerisque
                diam amet fermentum orci fringilla aliquet nulla lectus erat eu
                auctor
              </p>
              <p className="font-weight-bold">SAM HOUSTON</p>
            </div>
          </div>

          <div className="col-md-3 d-flex flex-column align-items-center">
            <img src={tripadvisorLogo} alt="TripAdvisor" className="mb-2" />
            <h4>TRIPADVISOR</h4>
            <p className="mb-0">5.0</p>
            <StarRating rating={5} />
            <p>196 reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewComponent;
