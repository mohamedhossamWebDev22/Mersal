import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import logo from "../assets/logo.png"


export const FormC = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q', 'template_4to2kza', form.current, 'o-_IssFaqVS_8CuI6')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent Perfectelly.")
          window.location.reload()
      }, (error) => {
          console.log(error.text);
          alert("Error !!!")
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="logo">
        <h1>مرســــال</h1>
        <img width="100px" src={logo} alt="Logo" />
      </div>

      <div className="p">
        <div className="ch">
          <label>To Name</label>
          <input type="text" name="to_name" />
          <br />
          <label>To Email</label>
          <input type="email" name="to_email" />
        </div>

        <div className="ch">
          <label>From Name</label>
          <input type="text" name="user_name" />
          <br />
          <label>From Email</label>
          <input type="email" name="user_email" />
        </div>
      </div>
      <label>Message</label>
      <textarea name="message" />
      <br />
      <input type="submit" value="Send" />
    </form>

    
  );
};

export default FormC;