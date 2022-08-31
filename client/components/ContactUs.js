// import React, { Component } from 'react';
// import emailjs from '@emailjs/browser';
// import Email from './Email';

// export default class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Contact</h1>
//         <Email />
//       </div>
//     );
//   }
// }

// export class ContactUs extends React.Component = () => {
// const form = useRef();

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs
//     .sendForm('gmail', 'template_opvm5kl', e.target, 'X6fG3TSSOvX4rvxNz')
//     .then(
//       (result) => {
//         console.log(result.text);
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
// };

//   return (
//     <div>
//       {/* <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="user_name" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form> */}
//       test
//     </div>
//   );
// };

import React, { useRef, Component } from 'react';
import emailjs from '@emailjs/browser';
import Email from './Email';

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <h1>Register Your Dropzone With SwoopDeck</h1>
        <p>
          <b>
            Please send us an email using the form below containing the
            following information about your Dropzone:
          </b>
        </p>
        <ul>
          <li>Your Facilitie's Name</li>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Facilitie's Licensing and Permit Information</li>
        </ul>
        <p>
          <b>
            Please also include the first and last name of your Primary Account
            Holder
          </b>
        </p>

        <Email />
      </div>
    );
  }
}
