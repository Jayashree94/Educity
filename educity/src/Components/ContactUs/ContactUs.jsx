import React from 'react'
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';



const ContactUs = () => {

  const YOUR_ACCESS_KEY_HERE = "93a99a10-bea8-4da1-a358-91ff282ad610";

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", YOUR_ACCESS_KEY_HERE);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
      <h3>Send us a message <img src={msg_icon} alt=""></img></h3>
      <p>
        Feel free to reach us. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Repellat reiciendis minima, repudiandae dolores eius debitis fugit ut 
        harum dolorum consequatur numquam, quas cum quia iure adipisci sit fugiat! At, praesentium.
      </p>
      <ul>
        <li><img src={mail_icon} alt="mail_icon"></img>Contact@Educity.com</li>
        <li><img src={phone_icon} alt="mail_icon"></img>+99 123456789</li>
        <li><img src={location_icon} alt="mail_icon"></img>78, ABSC street, Main Road, US</li>

      </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type= "text" name="name" placeholder='Enter your name ' required></input>
          <label>Phone Number</label>
          <input type= "tel" name="phone" placeholder='Enter your mobile number ' required></input>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="arrow" /></button>
        </form>
        <span>{result}</span>
      </div>
  
      
    </div>
  )
}

export default ContactUs
