import "./Footer.css";
import footerPhone from "/images/footer_phone.png";
import footerMail from "/images/footer_mail.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Footer = () => {
  return (
    <section className="footer d-flex flex-column align-items-center">
      <div className="fSection w-100 h-85 d-flex align-items-center">
        <div className="container">
          <div className="row flex-column flex-lg-row">
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0">
              <h1>Make an appointment</h1>
              <p className="mt-2 mb-5">
                Nulla egestas sapien integer mi fermentum tellus tristique
                consequat pulvinar sagittis adipiscing egestas purus et mi
                tempus semper id vel prci eu magna in senectus sit eget justo
              </p>
              <div className="d-flex align-items-center">
                <div className="me-5">
                  <img
                    src={footerPhone}
                    alt="Phone"
                    className="img-fluid"
                    style={{ width: "75px" }}
                  />
                </div>
                <div>
                  <h4>Give us a call</h4>
                  <p>(475) 453 - 3465</p>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <div className="me-5">
                  <img
                    src={footerMail}
                    alt="Email"
                    className="img-fluid"
                    style={{ width: "75px" }}
                  />
                </div>
                <div>
                  <h4>Send us an email</h4>
                  <p>hello@example.com</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="contactFormSection">
                <form className="accForm">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="buttons mt-4 mt-md-5">
                    <button className="appointmentBtn">
                      Book an Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-container">
        <MapContainer
          center={[44.5259, -79.5384]}
          zoom={13}
          minZoom={13}
          style={{ height: "400px", width: "100%" }}
          dragging={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[44.5259, -79.5384]}>
            <Popup>3696 Lynden Road, Lefroy, Ontario</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="creditFooter">
        <div className="container">
          <h4>Made by Mehmet Ozturk</h4>
        </div>
      </div>
    </section>
  );
};

export default Footer;
