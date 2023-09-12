import "./Impact.css";

const Impact = () => {
  return (
    <div className="impact-container">
      <div className="impact">IMPACT</div>
      <div className="box-container">
        <div className="box">
          <div className="icon">
            <img src="src\assets\images\vectors\StartupIcon.png" alt="Icon 1" />
          </div>
          <div className="box-title">220 +</div>
          <div className="line"></div>
          <div className="additional-info">STARTUPS</div>
        </div>
        <div className="box">
          <div className="icon">
            <img
              src="src\assets\images\vectors\EntrepreneurIcon.png"
              alt="Icon 2"
            />
          </div>
          <div className="box-title">1000+</div>
          <div className="line"></div>
          <div className="additional-info">ENTREPRENEURS</div>
        </div>
        <div className="box">
          <div className="icon">
            <img src="src\assets\images\vectors\PatentIcon.png" alt="Icon 3" />
          </div>
          <div className="box-title">6300 +</div>
          <div className="line"></div>
          <div className="additional-info">PATENT FILED</div>
        </div>
        <div className="box">
          <div className="icon">
            <img src="src\assets\images\vectors\FundIcon.png" alt="Icon 4" />
          </div>
          <div className="box-title">INR 123 Cr.</div>
          <div className="line"></div>
          <div className="additional-info">FUNDS RAISED</div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
