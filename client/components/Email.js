// import emailjs from '@emailjs/browser';
// import React, { Component } from 'react';

// export default function Email() {

// function sendEmail(e) {
// e.preventDefault();

// emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
// .then((result) => {
// console.log(result.text);
// }, (error) => {
// console.log(error.text);
// });
// }
//   return <div>Email</div>;
//}

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'gmail',
//         'YOUR_TEMPLATE_ID',
//         form.current,
//         'YOUR_PUBLIC_KEY'
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

export default function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_u7ueb2g',
        'template_opvm5kl',
        e.target,
        'X6fG3TSSOvX4rvxNz'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="dropzone-contact-input-container">
        <div className="dropzone-contact-input">
          <div className="dropzone-contact-form-content">
            <div className="contact-form-field">
              <div className="contact-form-name-row">
                <div className="input-field">
                  <div className="input">
                    <div className="input">
                      <div className="label inter-medium-oxford-blue-14px">
                        First and Last Name
                      </div>
                      <div className="input-1">
                        <div className="content">
                          <input
                            type="text"
                            name="user_name"
                            className="text inter-normal-pale-sky-16px contact-input-field"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <div className="input">
                  <div className="input">
                    <div className="label inter-medium-oxford-blue-14px">
                      Email
                    </div>
                    <div className="input-1">
                      <div className="content">
                        <input
                          className="text inter-normal-pale-sky-16px contact-input-field"
                          type="email"
                          name={'reply_to'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-message-box">
                <div className="input-2">
                  <div className="input-2">
                    <div className="label inter-medium-oxford-blue-14px">
                      Message
                    </div>
                    <textarea
                      className="input-4"
                      name="message"
                      style={{ width: '30rem' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Link to="/thankYou">
              <div className="contact-form-button-container">
                <div className="contact-form-button-interior">
                  <input
                    type="submit"
                    value="Send"
                    className="contact-form-button"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

{
  /* // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name={'reply_to'} />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form> */
}
