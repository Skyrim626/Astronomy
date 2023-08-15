import Topbar from "../components/Topbar";
import backgroundImage from "../assets/images/contact-image.jpg";
import Footer from "../components/Footer";
import "../css/contact.css";
import CustomButton from "../components/CustomButton";

function Contact() {
  return (
    <>
      <Topbar />
      <div
        className="main d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="contact-container p-5 mt-5">
          <h1>
            Reach Out To <strong>US</strong>
          </h1>
          <p>
            Have questions about astronomy, want to collaborate, or just want to
            share your fascination with the cosmos? We'd love to hear from you!
            Fill out the form below, and we'll get back to you as soon as we
            can.
          </p>
          <form className="form-container d-flex flex-column align-items-center mt-5">
            <div className="contact-form-field d-flex gap-5 mb-4">
              <div className="input-fields d-flex flex-column gap-5">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email Address" />
                <input type="text" placeholder="Your Phone Number" />
              </div>
              <div className="input-fields">
                <textarea placeholder="Your message..." className="p-2" />
              </div>
            </div>
            <div className="button-container mt-3">
              <CustomButton text={"Button"} />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
