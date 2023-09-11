import { Card } from "@mui/material";
import "./style.css";
import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { BsFillEnvelopeCheckFill } from "react-icons/bs";
import {BsGeoAltFill} from "react-icons/bs";

const Contact = () =>{
  return(
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className = "row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
            {/* phone number */}
            <div className="contact_info_items d-flex justify-content-start align-items-center">
              <BsFillTelephoneForwardFill/>
              <div className="contact_info_content">
                <div className="contact_info_title">
                  Phone Number
                </div>
                <div className="contact_info_text">
                  +91 9684762543
                </div>
              </div>
            </div>

             {/* email */}
            <div className="contact_info_items d-flex justify-content-start align-items-center">
            <BsFillEnvelopeCheckFill/>
              <div className="contact_info_content">
                <div className="contact_info_title">
                  Email-Id
                </div>
                <div className="contact_info_text">
                  habitincubation@ves.ac.in
                </div>
              </div>
            </div>

             {/* address */}
            <div className="contact_info_items d-flex justify-content-start align-items-center">
             <BsGeoAltFill/>
              <div className="contact_info_content">
                <div className="contact_info_title">
                  Address
                </div>
                <div className="contact_info_text">
                Hashu Adwani Memorial Complex,Mumbai-400074
                </div>
              </div>
            </div>

          </div>
        </div>
        </div>
      </div>

    {/* contact us form */} 
  <div className="contact_form">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-position: left">
        <Card>
          
        </Card>
        </div>
      </div>
    </div>
  </div> 
    </>
  )
}
export default Contact
{/* // export default function Contact() {
//   return <div>Contact</div>;
// } */}
