import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/assets/menu-icon.png'
import mail_icon from '../../assets/assets/mail-icon.png';
import phone_icon from '../../assets/assets/phone-icon.png';
import location_icon from '../../assets/assets/location-icon.png';
import white_arrow from '../../assets/assets/white-arrow.png';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2a2ae6db-3ec6-4cfd-a916-570b7fafea89");
    
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
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt='' /></h3>
                <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} alt='' />Contact@Jiit.mail.ac.in</li>
                    <li><img src={phone_icon} alt='' />+123-456-7890</li>
                    <li><img src={location_icon} alt='' />Noida Sector 62</li>
                </ul>
            </div>

            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type='text' name="phone" placeholder='Enter your mobile number' required />
                    <label>Write your message here</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn2'>Submit now <img src={white_arrow} alt='' /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}

export default Contact;
