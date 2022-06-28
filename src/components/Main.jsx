

import React from 'react'
import SendSolButton from './SendSolButton'

const Main = () => {
  return (
    <main>
        <div className='send-sol-wrapper w-25 my-5 mx-auto p-2 d-flex flex-column align-items-center justify-content-center'>
            <SendSolButton content="1 sol" />
            <SendSolButton content="2 sol" />
            <SendSolButton content="3 sol" />
        </div>
    </main>

  )
}

export default Main