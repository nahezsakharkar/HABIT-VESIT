import React from "react";
import "./Impact.css"
const Impact = () => {
  return (
    <div className="impact-container">
      <div class="impact">IMPACT</div>
      <div class="box-container">
        <div class="box">
          <div class="icon">
            <img src="src\assets\images\vectors\StartupIcon.png" alt="Icon 1" />
          </div>
          <div class="box-title">220 +</div>
          <div class="line"></div>
          <div class="additional-info">STARTUPS</div>
        </div>
        <div class="box">
          <div class="icon">
            <img src="src\assets\images\vectors\EntrepreneurIcon.png" alt="Icon 2" />
          </div>
          <div class="box-title">1000+</div>
          <div class="line"></div>
          <div class="additional-info">ENTREPRENEURS</div>
        </div>
        <div class="box">
          <div class="icon">
            <img src="src\assets\images\vectors\PatentIcon.png" alt="Icon 3" />
          </div>
          <div class="box-title">6300 +</div>
          <div class="line"></div>
          <div class="additional-info">PATENT FILED</div>
        </div>
        <div class="box">
          <div class="icon">
            <img src="src\assets\images\vectors\FundIcon.png" alt="Icon 4" />
          </div>
          <div class="box-title">INR 123 Cr.</div>
          <div class="line"></div>
          <div class="additional-info">FUNDS RAISED</div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
