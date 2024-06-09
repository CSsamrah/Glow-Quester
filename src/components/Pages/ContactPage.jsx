import React, { useState } from "react";
import image4 from '../images/Contact.png';
import Footer from '../FooterEnd/FooterEnd'

export default function ContactPage() {
    const [feedbackReceived, setFeedbackReceived] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission logic, such as sending data to the server
        // After successful submission, set feedbackReceived to true
        setFeedbackReceived(true);
    };

    return (
        <div className="body">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='image-container'>
                <img src={image4} alt='Glow' className='full-width-image' />
            </div>
            <h1>Contact</h1>
            <h2>Send us your feedback</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" required /><br />

                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" required /><br />

                <label htmlFor="comment">Comment/Query:</label><br />
                <textarea id="comment" name="comment" rows="4" required></textarea><br />

                <input type="submit" value="Submit" />
            </form>
            {feedbackReceived && <p>Thank you for your feedback!</p>}

            <Footer/>
        </div>
    );
}