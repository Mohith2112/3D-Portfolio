import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:mohit.v2112@gmail.com" data-cursor="disable">
              mohit.v2112@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech in CSE – Artificial Intelligence</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Mohith2112"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mohit-vattikuti/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/Mohit_vattikuti/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
            <a
              href="https://www.hackerrank.com/profile/23A31A43J0"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              HackerRank <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Message</h4>
            <form action="https://formsubmit.co/mohit.v2112@gmail.com" method="POST" className="contact-form">
              <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
              <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
              <textarea name="message" placeholder="Your Message" required className="contact-input message-input"></textarea>
              <input type="hidden" name="_captcha" value="false" />
              <button type="submit" className="contact-submit" data-cursor="disable">
                Send <MdArrowOutward />
              </button>
            </form>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>VATTIKUTI MOHIT</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
