import "./style.css";

export default function Partners() {
  return (
    <div className="partner-container">
      <div className="header-spacer"></div>
      {/* <h1>PARTNERS</h1> */}

      <h2>Government</h2>
      <div className="partner-category">
        <div className="partner">
          <img
            src="/assets/images/partner-images\1.png"
            alt="Government Icon 1"
          />
        </div>
        <div className="partner">
          <img
            src="/assets/images/partner-images\2.png"
            alt="Government Icon 2"
          />
        </div>
        <div className="partner">
          <img
            src="src\assets\images\partner-images\3.png"
            alt="Government Icon 3"
          />
        </div>
      </div>

      <h2>Corporate</h2>
      <div className="partner-category">
        <div className="partner">
          <img
            src="/assets/images/partner-images\268.jpg"
            alt="Corporate Icon 1"
          />
        </div>
        <div className="partner">
          <img
            src="/assets/images/partner-images\6.jpg"
            alt="Corporate Icon 2"
          />
        </div>
        <div className="partner">
          <img
            src="/assets/images/partner-images\1114.jpg"
            alt="Corporate Icon 3"
          />
        </div>
      </div>

      <h2>CSR</h2>
      <div className="partner-category">
        <div className="partner">
          <img src="src\assets\images\partner-images\6.jpg" alt="CSR Icon 1" />
        </div>
        <div className="partner">
          <img
            src="/assets/images/partner-images\268.jpg"
            alt="CSR Icon 2"
          />
        </div>
        <div className="partner">
          <img src="/assets/images/partner-images\4.png" alt="CSR Icon 3" />
        </div>
      </div>

      <h2>Investors</h2>
      <div className="partner-category">
        <div className="partner">
          <img src="investor_icon1.png" alt="Investor Icon 1" />
        </div>
        <div className="partner">
          <img src="investor_icon2.png" alt="Investor Icon 2" />
        </div>
        <div className="partner">
          <img src="investor_icon3.png" alt="Investor Icon 3" />
        </div>
      </div>
    </div>
  );
}
