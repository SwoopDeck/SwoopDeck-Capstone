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
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name={'reply_to'} />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
