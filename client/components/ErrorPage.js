import React from 'react';
import {Link} from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
        <h1>Oops - This page does not exist!</h1>
        <h2>
            <Link to='/'>
            <button>Click here to pull your reserve and return home</button>
            </Link>
        </h2>
    </div>
  )
}

export default ErrorPage