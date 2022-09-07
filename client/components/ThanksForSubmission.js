import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ThanksForSubmission extends Component {
  render() {
    return (
      <div id="thanks-container">
        <div className='submission-thanks-container'>
          <h1 id="submission-thanks">
            Thank you for your submission! A SwoopDeck representative will reach
            out to you shortly via email.
          </h1>

          <Link to="/">
            <button id="thank-you-button" type="button">
              Back to Login
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
