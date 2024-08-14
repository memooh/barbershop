import "./PersonalService.css";
import thumbnail from "/images/psThumbnail.png";

const PersonalService = () => {
  return (
    <section className="personalService">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 psTitle">
            <h1 className="mb-3">Your Personal barber service at your home</h1>
            <p className="mb-4">
              Nulla egestas sapien integer mi fermentum tellus tristique
              consequat pulvinar sagittis adipiscing egestas purus et mi tempus
              semper id vel prci eu magna in senectus sit eget justo
            </p>
            <div className="row">
              <div className="col-6">
                <h4>
                  <span className="customerRating">
                    99<span className="customerPer">%</span>
                  </span>{" "}
                  <br />
                  customer <br />
                  satisfaction
                </h4>
              </div>
              <div className="col-6">
                <h4>
                  <span className="customerRating">
                    10<span className="customerPer">+</span>
                  </span>{" "}
                  <br />
                  years of <br />
                  experience
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 text-center text-lg-start">
  <img src={thumbnail} alt="thumbnail" className="img-fluid" />
</div>
        </div>
      </div>
    </section>
  );
};

export default PersonalService;
