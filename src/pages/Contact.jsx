import Socials from "../components/Socials";
import "../style/Contact.css";

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="section_wrapper">
          <span className="line"></span>
          <h2 className="secondary_title">Get in Touch</h2>
          <p className="text">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <Socials color={`black`} />
          <span className="line"></span>
        </div>
        <h2 className="secondary_title">Contact Me</h2>
        <form>
          <label>
            Name
            <input
              type="text"
              placeholder="Jane Appleseed"
            />
            <span className="red"></span>
          </label>
          <label htmlFor="">
            Email Address
            <input
              type="email"
              placeholder="email@example.com"
            />
            <span className="red"></span>
          </label>

          <label htmlFor="">
            Message
            <textarea
              className="message"
              type="textarea"
              placeholder="How can I help?"
            />
          </label>
          <input
            className="submit_button"
            type="submit"
            value="send message"
          />
          <span className="red"></span>
        </form>
      </section>
    </>
  );
}

export default Contact;
