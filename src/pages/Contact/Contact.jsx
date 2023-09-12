/* eslint-disable react/no-unescaped-entities */
import { TextField } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { toast } from "react-toastify";
import "./style.css";

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Mail Sent! You Will be Contacted Shortly.");
  };
  return (
    <div
      id="contact-us"
      name="contact-form"
      className="container inner-container"
    >
      <div className="header-spacer"></div>
      <div className="page-heading">
        <h1>Hello.</h1>
        <div className="intro fs-intro-small">
          We love hearing from people and chatting about new things. Get in
          touch today regarding:
        </div>
      </div>
      <div className="contact_form">
        {/* <h1>Contact Us</h1>
        <h4>
          Fill up the form and our team will get back to you within 24 hours.
        </h4> */}
        <form onSubmit={onSubmit}>
          <div className="actual_form">
            <TextField
              label="Name"
              placeholder="Enter FullName"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              type="email"
              label="Email"
              placeholder="Enter Email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Subject"
              placeholder="Enter Subject"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              placeholder="Type your message here"
              variant="outlined"
              fullWidth
              required
            />
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
      <div className="wrapper">
        <h3 className="or">Or...</h3>
        <div className="contact-details">
          <div className="detail">
            <div className="icon">
              <PhoneAndroidIcon />
            </div>
            <h3>Drop us a line.</h3>
            <a href="tel:+919684762543">+91 9684762543</a>
          </div>
          <div className="detail">
            <div className="icon">
              <LocationOnIcon />
            </div>
            <h3>Drop by the office.</h3>
            Vivekanand Education Society's Institute Of Technology (VESIT)
            <br />
            Hashu Adwani Memorial Complex, Collector's Colony
            <br />
            Chembur, Mumbai, Maharashtra. 400074
            <br />
            <a
              href="https://goo.gl/maps/VV7yGez2HkFDaMv38"
              target="_blank"
              rel="noreferrer"
            >
              View map
            </a>
          </div>
          <div className="detail">
            <div className="icon">
              <ForwardToInboxIcon />
            </div>

            <h3>Drop us an email.</h3>
            <a href="mailto:habitincubation@ves.ac.in">
              habitincubation@ves.ac.in
            </a>
          </div>
        </div>
      </div>
      {/* embedding google form */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.423328806028!2d72.88640557433307!3d19.045116352943076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8add9569a29%3A0xb7ad04bf9a389df7!2sVivekanand%20Education%20Society&#39;s%20Institute%20Of%20Technology%20(VESIT)!5e0!3m2!1sen!2sin!4v1694448809141!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    //   {/* contact us form */}
    //   <div className="contact_form">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-10 offset-position: left">
    //           <Card style={{ maxWidth: 450, padding: "20px 5px" }}>
    //             <CardContent>
    //               <Typography gutterBottom>Contact Us</Typography>
    //               <Typography
    //                 variant="body2"
    //                 color="textSecondary"
    //                 component="p"
    //               >
    //                 Fill up the form and our team will get back to you within 24
    //                 hours.
    //               </Typography>
    //               <form>
    //                 <Grid container spacing={1}>
    //                   <Grid xs={12} s={6} item>
    //                     <TextField
    //                       label="FirstName"
    //                       placeholder="Enter FirstName"
    //                       variant="outlined"
    //                       fullWidth
    //                       required
    //                     />
    //                   </Grid>
    //                   <Grid xs={12} s={6} item>
    //                     <TextField
    //                       label="LastName "
    //                       placeholder="Enter LastName"
    //                       variant="outlined"
    //                       fullWidth
    //                       required
    //                     />
    //                   </Grid>
    //                   <Grid xs={12} item>
    //                     <TextField
    //                       type="email"
    //                       label="Email"
    //                       placeholder="Enter Email"
    //                       variant="outlined"
    //                       fullWidth
    //                       required
    //                     />
    //                   </Grid>
    //                   <Grid xs={12} item>
    //                     <TextField
    //                       type="number"
    //                       label="Phone Number"
    //                       placeholder="Enter Phone Number"
    //                       variant="outlined"
    //                       fullWidth
    //                       required
    //                     />
    //                   </Grid>
    //                   <Grid xs={12} item>
    //                     <TextField
    //                       label="Message"
    //                       multiline
    //                       rows={4}
    //                       placeholder="Type your message here"
    //                       variant="outlined"
    //                       fullWidth
    //                       required
    //                     />
    //                   </Grid>
    //                   <Grid xs={12} item>
    //                     <Button type="submit" variant="container" fullWidth>
    //                       Submit
    //                     </Button>
    //                   </Grid>
    //                 </Grid>
    //               </form>
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
}
