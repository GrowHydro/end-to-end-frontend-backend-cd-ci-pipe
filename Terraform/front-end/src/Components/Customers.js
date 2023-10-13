import { Outlet } from "react-router-dom"
import happy from '../pictures/happy.jpg'
import '../scss/customers.scss'

const Customers = () =>{

    return(<>
            <div className="d-flex flex-column mx-auto bg-black text-white w-50 customers">
                <h1 className="mx-auto">We Exist</h1>
                <h1 className="mx-auto">for our Customers</h1>
                <p className="mx-auto">We exist to make the world's happiest Cannabis Growers.</p>
                <p className="mx-auto">You are at the heart of everything we do, and we're here to assist you every step of the way.</p>
                <p className="mx-auto">Feel free to reach out to us through text or email if you need any help or have any questions.</p>
            </div>
            <div className="d-flex flex-column mx-auto bg-black contact-info text-white w-50 customers">
             <h2 className="mx-auto">Contact Us</h2>
             <p className="mx-auto">Text us at: <span className="contact-detail">602-758-7832</span></p>
             <p className="mx-auto">Email us at: <span className="contact-detail">grow.hydros@gmail.com</span></p>
            </div>
            <div className="d-flex flex-column mx-auto text-white bg-black w-50 loyalty-strategies customers">
        <h2 className="mx-auto">Our Commitment to Your Loyalty</h2>
        <ul className="mx-auto">
          <li>Quality Assurance: We consistently deliver top-notch cannabis products.</li>
          <li>Education: We provide resources to help you become a better cannabis grower.</li>
          <li>Personalized Support: Our knowledgeable support team is here to assist you.</li>
          <li>Community Building: Join our community of fellow cannabis enthusiasts.</li>
          <li>Exclusive Offers: Enjoy special discounts and early access to new products.</li>
          <li>Feedback and Improvement: We value your feedback to continuously improve.</li>
          <li>Sustainability: We're committed to sustainable and ethical practices.</li>
          <li>Storytelling: Get to know our brand's mission and the people behind it.</li>
          <li>User-Generated Content: Share your success stories with us.</li>
          <li>Responsive Communication: We're here to respond to your inquiries.</li>
          <li>Long-Term Relationships: We're interested in building lasting connections.</li>
          <li>Track Record: See what our satisfied customers are saying.</li>
        </ul>
      </div>
      <img className="mx-auto" src={happy} alt="Happest Cannabis Grower" height="200px" width={"200px"}/>
            <Outlet />
          </>)
}

export default Customers