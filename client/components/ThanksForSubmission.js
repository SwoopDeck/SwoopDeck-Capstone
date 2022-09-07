import React, { Component } from 'react';

export default class ThanksForSubmission extends Component {
  render() {
    return (
      <div id="thanks-container">
        <h1 id="submission-thanks">
          Thank you for your submission! A SwoopDeck representative will reach
          out to you shortly via email.
        </h1>
        <h3 id="sign-off">-The SwoopDeck Team</h3>
      </div>
    );
  }
}
