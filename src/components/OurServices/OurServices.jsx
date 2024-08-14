import "./OurServices.css";
import adulthaircut from "/images/adulthaircut.png";
import beardgrooming from "/images/beardgrooming.png";
import beardtrim from "/images/beardtrim.png";
import kidshaircut from "/images/kidshaircut.png";
import neckshave from "/images/neckshave.png";
import scalpmoisturizing from "/images/scalpmoisturizing.png";

const OurServices = () => {
  const serviceList = [
    {
      id: 1,
      title: "Adult Haircut",
      image: adulthaircut,
      price: 39,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 2,
      title: "Kids Haircut",
      image: kidshaircut,
      price: 19,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 3,
      title: "Beard Trim",
      image: beardtrim,
      price: 29,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 4,
      title: "Neck Shave",
      image: neckshave,
      price: 39,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputte libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 5,
      title: "Scalp Moisturizing",
      image: scalpmoisturizing,
      price: 10,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputte libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 6,
      title: "Beard Grooming",
      image: beardgrooming,
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputte libero et velit interdum, ac aliquet odio mattis.",
    },
  ];
  return (
    <section className="OurServices">
      <div className="container">
        <div className="servicesText text-center">
          <h1>Browse our services</h1>
          <p className="mt-5">
            Nulla egestas sapien integer mi fermentum tellus tristique consequat
            pulvinar sagittis adipiscing egestas purus et mi tempus semper id
            vel prci eu magna in senectus sit eget justo eget.
          </p>
        </div>

        <div className="servicesCards mt-5">
          <div className="container">
            <div className="row">
              {serviceList.map((service) => (
                <div key={service.id} className="col-lg-6 col-md-12 mb-4">
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img
                          src={service.image}
                          className="card-img"
                          alt={service.title}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body text-md-start text-center">
                          <h5 className="card-title">{service.title}</h5>
                          <p className="card-text">{service.description}</p>
                          <h6 className="card-subtitle mb-2 text-muted">
                            ${service.price} USD
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="appointmentBtn mt-5">Book an Appointment</button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
