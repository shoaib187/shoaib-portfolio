import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import Chat from "../../components/screens/Chat";
import emailjs from "emailjs-com";
import {
  LiaLocationArrowSolid,
  LiaMailBulkSolid,
  LiaPhoneVolumeSolid,
} from "react-icons/lia";
// import { ChatComponent } from "../../custom/ChatComponent";

const ContactUs = React.memo(() => {
  const value = 0;
  const [status, setStatus] = useState("");
  const notify = () =>
    toast.success(status, {
      icon: <MdSend />,
      type: "success",
    });

  const [formData, setFormData] = useState({
    to_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { to_name, from_email, phone, message } = formData;
    if (!to_name || !from_email || !phone || !message) {
      alert("Please fill all required fields to send messages");
      return;
    }
    const templateParams = {
      to_name,
      from_email,
      phone,
      message,
    };

    emailjs
      .send(
        "service_7gx3ul6", // Replace with your Service ID from EmailJS
        "template_sz9s69p", // Replace with your Template ID from EmailJS
        templateParams, // Target the form to send form data
        "qCtVYXrdJoqEWJ-xt" // Replace with your User ID from EmailJS
      )
      .then(
        (result) => {
          setStatus(200);
          console.log("result", result);
        },
        (error) => {
          // console.log(error.text);
          setStatus("Failed to send email. Please try again later.");
        }
      );

    notify();
  };
  return (
    <>
      <ToastContainer
        icon={true}
        progressStyle={{ background: "#fe3377" }}
        pauseOnHover={true}
        toastStyle={{ background: "#fff", color: "red" }}
      />
      <div
        className={`chat_section flex flex-col items-center h-5/6 fixed bg-white overflow-hidden rounded-md  shadow-xl z-10 transition-all duration-500 bottom-20 ${
          value === 1
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-0 translate-y-48 opacity-0"
        }`}
        style={{ right: 20, bottom: "5%" }}
      >
        {value === 0 ? <Chat /> : null}
      </div>

      <section
        id="contact"
        class="flex flex-wrap flex-col items-center justify-center"
      >
        {/* top_bar */}
        <div class="top_bar flex-col min-h-60 flex items-center justify-center">
          <h2 className="font-semibold text-2xl" style={{ color: "#fd246c" }}>
            GET IN TOUCH WITH US
          </h2>
          <h1 className="text-5xl font-bold mt-2 text-blue-950">CONTACT US</h1>
        </div>
        <div class="contact flex flex-wrap justify-between items-center w-11/12">
          <div className="contact_page w-40">
            <div class="info_card">
              <LiaLocationArrowSolid size={50} color="#fd246c" />
              <p className="text-xl font-semibold mt-2 mb-2 text-blue-950">
                Our Location
              </p>
              <h1 className="font-semibold  text-blue-950 text-center">
                {" "}
                Near Pakistan Army, Khanewal Punjab, Pakistan.
              </h1>
            </div>
            <div class="info_card">
              <LiaPhoneVolumeSolid size={50} color="#fd246c" />
              <p className="text-xl font-semibold mt-2 mb-2 text-blue-950">
                Phone Number
              </p>
              <h1 className="font-semibold  text-blue-950"> +92-324-8052718</h1>
            </div>
            <div class="info_card">
              <LiaMailBulkSolid size={50} color="#fd246c" />
              <p className="text-xl font-semibold mt-2 mb-2 text-blue-950">
                Email Address
              </p>
              <h1 className="font-semibold  text-blue-950">
                shoaibriaze@gmail.com
              </h1>
            </div>
          </div>
          <div className="w-40 bg-white" class="contact_card">
            <form className="w-full" onSubmit={handleSubmit}>
              <label className="font-semibold">Name*</label>
              <input
                type="text"
                name="to_name"
                placeholder="Your name"
                value={formData.to_name}
                onChange={handleChange}
                className="w-full h-12 pl-4 mb-4 rounded-lg mt-1 bg-slate-50"
              />
              <label className="font-semibold">Email address*</label>
              <input
                type="email"
                name="from_email"
                placeholder="example@gmail.com"
                value={formData.from_email}
                onChange={handleChange}
                className="w-full h-12 pl-4 mb-4 rounded-lg mt-1 bg-slate-50"
              />
              <label className="font-semibold">Phone number*</label>
              <input
                type="text"
                name="phone"
                placeholder="+92 3248052719"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 pl-4 mb-4 rounded-lg mt-1 bg-slate-50"
              />
              <label className="font-semibold">Type your message*</label>
              <textarea
                name="message"
                placeholder="Leave a message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full h-40 p-3 rounded-lg mt-1 bg-slate-50"
              />
              <button
                type="submit"
                id="button"
                className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4"
              >
                Send Message
              </button>
              {status && <p className="mt-4">{status}</p>}{" "}
              {/* Show status message */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
});

export default ContactUs;
