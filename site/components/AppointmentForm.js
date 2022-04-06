import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState(false);
  const [failedMessage, setFailedMessage] = useState(false);

  const [sendButton, setSendButton] = useState("Send");

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }

    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }

    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setSendButton("Sending");
      const res = await fetch("/api/appointment", {
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();

      if (error) {
        console.log(error);
        setSuccessMessage(false);
        setFailedMessage(true);
        setSendButton("Send");
        return;
      }
      setSuccessMessage(true);
      setFailedMessage(false);
      setSendButton("Send");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-7">
      {successMessage && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        >
          Message Sent
        </ToastContainer>
      )}
      {failedMessage && (
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        >
          Message Unable to Send
        </ToastContainer>
      )}
      <h2>Set An Appointment!</h2>

      <label htmlFor="name">
        Full Name<span className="text-gray-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
        className="text-black"
      />

      <label htmlFor="email">
        Email<span className="text-gray-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="email"
        className="text-black"
      />

      <label htmlFor="message">
        Tell Us What You're Interested In
        <span className="text-gray-500 dark:text-gray-50">*</span>
      </label>
      <textarea
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        name="message"
        className="text-black"
      />
      <div>
        <button className="text-black" type="submit" >{sendButton}</button>
      </div>
    </form>
  );
}
