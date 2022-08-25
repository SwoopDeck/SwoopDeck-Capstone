import React from 'react'

export default function Copyright() {
  const d = new Date();
  const currentYear = d.getFullYear();

  return (
    <div className='footer'>{`© ${currentYear} Swoopdeck`}</div>
  )
}