import React, { useRef, Component } from 'react';
import emailjs from '@emailjs/browser';
import Email from './Email';

export default class ContactUs extends Component {
  render() {
    return (
      <div className="dropzone-contact-form">
        <div className="dropzone-contact-header">
          <div className="dropzone-contact-header-interior">
            <div className="dropzone-contact-header-content">
              <div className="dropzone-contact-title">
                <div id="contact-logo" />
                <div className="subheading">Contact us</div>
                <h1 className="heading">
                  Register Your Dropzone With SwoopDeck
                </h1>
              </div>
              <div className="supporting-text">
                Please send us an email using the form below containing the
                following information <br /> about your Dropzone: Your
                Dropzone's Name, Phone Number, and Your Dropzone's <br />
                Address. Please also include the first and last name of your
                Primary Account Holder.
              </div>
            </div>
          </div>
        </div>
        <Email />
      </div>

      // </div>
    );
  }
}
