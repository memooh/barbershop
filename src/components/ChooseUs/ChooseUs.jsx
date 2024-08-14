import "./ChooseUs.css";

import licensed from "/images/licensed.png";
import masters from "/images/masters.png";
import trusted from "/images/trusted.png";

const ChooseUs = () => {
  return (
    <section className="ChooseUsSectie">
      <div className="container ">
        <div className="cuText text-center">
          <h1>WHY CHOOSE US</h1>
          <p className="mt-5">
            Nulla egestas sapien integer mi fermentum tellus tristique consequat
            pulvinar sagittis adipiscing egestas purus et mi tempus semper id
            vel prci eu magna in senectus sit eget justo eget.
          </p>
        </div>
        <div className="row cuRow mt-5">
          <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <img src={licensed} alt="Licensed" className="img-fluid mb-3" />
            <h1>Licensed</h1>
            <div className="gold-line"></div>
            <p className="cuText">
              Our team of licensed and insured barbers follow strict cleanliness
              and sanitation guidelines for a safe and comfortable experience.{" "}
            </p>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <img src={masters} alt="Licensed" className="img-fluid" />
            <h1>masters</h1>
            <div className="gold-line"></div>
            <p className="cuText">
            Our barbers are passionate about their craft and aim to provide high-quality haircuts for every client. 
            </p>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <img src={trusted} alt="Licensed" className="img-fluid" />
            <h1>trusted</h1>
            <div className="gold-line"></div>
            <p className="cuText">
            We have a strong online reputation with a 5-star rating from over 100 thousand satisfied clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
