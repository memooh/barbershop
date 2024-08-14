import './QuickConnect.css';

import hours from '/images/hours.png';
import address from '/images/address.png';
import phone from '/images/phone.png';


const infoList = [
  {
    id: 1,
    title: 'Address',
    content: '3696 Lynden Road, Lefroy Ontario canada',
    icon: address
  },
  {
    id: 2,
    title: 'Phone',
    content: '+62(123)-456-7890',
    icon: phone
  },
  {
    id: 3,
    title: 'Hours',
    content: 'Mon-Fri: 9am-7pm, Sat: 10am-5pm, Sun: Closed',
    icon: hours
  }
];

const InfoCards = () => {
  return (
    <div className="info-container">
      <div className="infoCards">
        <div className="container quickInfo">
          <div className="row">
            {infoList.map((info) => (
              <div key={info.id} className="col-lg-4 col-md-4 mb-4">
                <div className="card">
                  <div className="card-body text-center">
                    <img
                      src={info.icon}
                      className="card-img-top mb-3"
                      alt={info.title}
                    />
                    <h5 className="card-title">{info.title}</h5>
                    <div className="gold-lines-container">
                    <div className="gold-lines"></div>
                    </div>
                    <p className="card-text">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
