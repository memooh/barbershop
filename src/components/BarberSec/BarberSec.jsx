import './BarberSec.css';
import barberSec from '/images/barberSec.png';

const BarberSec = () => {
  return (
    <section className="BarberSectie">
        <div className="BarberSec d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 display-md-3 display-lg-2">
              Experience the luxury of concierge barber services at your home
              </h1>
              <div className="buttons mt-4 mt-md-5">
                    <button className="appointmentBtn ">
                      Book an Appointment
                    </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarberSec