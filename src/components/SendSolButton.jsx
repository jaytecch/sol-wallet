

import React from 'react'

const SendSolButton = ({content}) => {
  return (
    <div className='send-sol d-inline-block rounded-pill py-2 my-2 text-center'>
        <img src="./assets/images/sol-currency.png" alt="" className='sol-currency me-3'/>
        {content}
        </div>
  )
}

export default SendSolButton