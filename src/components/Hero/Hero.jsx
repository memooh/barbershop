import "./Hero.css";

const Hero = () => {
  return (
    <section className="heroSectie">
      <div className="heroSection d-flex align-items-center justify-content-center vh-100">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 display-md-3 display-lg-2">
                The ultimate convenience <br className="d-none d-md-block" />{" "}
                for busy people
              </h1>
              <h4 className="mt-3 mt-md-4">
                Experience the Convenience of In-Home Barber Services
              </h4>
              <div className="buttons mt-4 mt-md-5">
                <div className="row">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <button className="appointmentBtn w-100">
                      Book an Appointment
                    </button>
                  </div>
                  <div className="col-12 col-md-6">
                    <button className="servicesBtn w-100">
                      Browse Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
