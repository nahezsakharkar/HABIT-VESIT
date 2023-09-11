import { Card, CardContent, TextField, Grid, Typography } from "@mui/material";
import "./style.css";
import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { BsFillEnvelopeCheckFill } from "react-icons/bs";
import {BsGeoAltFill} from "react-icons/bs";
import Button from '@mui/material/Button';

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
        <Card style = {{maxWidth:450,padding:"20px 5px"}}>
          <CardContent>
            <Typography gutterBottom>Contact Us</Typography>
            <Typography variant="body2" color= "textSecondary" component="p">Fill up the form and our team will get back to you within 24 hours.</Typography>
            <form>
            <Grid container spacing={1}>
              <Grid xs={12} s={6} item>
                <TextField label = "FirstName" placeholder="Enter FirstName" variant ="outlined" fullWidth required/>
              </Grid>
              <Grid xs={12} s={6} item>
                <TextField label = "LastName " placeholder="Enter LastName" variant ="outlined" fullWidth required/>
              </Grid>
              <Grid xs={12} item>
                <TextField type="email" label = "Email" placeholder="Enter Email" variant ="outlined" fullWidth required/>
              </Grid>
              <Grid xs={12} item>
                <TextField type ="number" label = "Phone Number" placeholder="Enter Phone Number" variant ="outlined" fullWidth required/>
              </Grid>
              <Grid xs={12} item>
                <TextField label = "Message"  multiline rows={4} placeholder="Type your message here" variant ="outlined" fullWidth required/>
              </Grid>
              <Grid xs={12} item>
                <TextField label = "First Name" placeholder="Enter First Name" variant ="outlined" fullWidth/>
              </Grid>
              <Grid xs={12} item>
                <Button type="submit" variant="container" fullWidth>Submit</Button>
              </Grid>
            </Grid>
            </form>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  </div> 

{/* embedding google form */}
  <div className="google_maps">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.423328806028!2d72.88640557433307!3d19.045116352943076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8add9569a29%3A0xb7ad04bf9a389df7!2sVivekanand%20Education%20Society&#39;s%20Institute%20Of%20Technology%20(VESIT)!5e0!3m2!1sen!2sin!4v1694448809141!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
    </>
  )
}
export default Contact;
{/* // export default function Contact() {
//   return <div>Contact</div>;
// } */}
